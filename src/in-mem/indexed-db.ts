import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Observer} from 'rxjs/Observer';

const COLLECTIONS_KEY = 1;
const COLLECTIONS_OBJECT_STORE = 'collections';

const emitError = (observable: Observer<any>, event: any) =>
  observable.error(`IndexedDB Error: ${event.target.error}`);
const emitResult = (observable: Observer<any>, event: any) =>
  observable.next(event.target.result);

export class IndexedDB {
  static indexedDB: IDBFactory = window.indexedDB || window['mozIndexedDB'] || window['webkitIndexedDB'] || window['msIndexedDB'];

  private database$ = new ReplaySubject<IDBDatabase>(1);

  static deleteDatabase(databaseName: string) {
    return new Observable<any>((observer: Observer<any>) => {
      const request = IndexedDB.indexedDB
        .deleteDatabase(databaseName);
      request.addEventListener('success', (event) => emitResult(observer, event));
      request.addEventListener('error', (event) => emitError(observer, event));
    });
  }

  constructor(private databaseName: string) {
    this.createOrOpenDatabase();
  }

  createOrOpenDatabase() {
    const request = IndexedDB.indexedDB.open(this.databaseName, 1);
    request.addEventListener('success',
      (event) => this.database$.next((<any>event.target).result)
    );
    request.addEventListener('error', (event) => emitError(this.database$, event));
    request.addEventListener('upgradeneeded',
      (event) => {
        const database: IDBDatabase = (<any>event.target).result;
        database.createObjectStore(COLLECTIONS_OBJECT_STORE);
        database.addEventListener('error', (e) => emitError(this.database$, e));
      }
    );
  }

  closeDatabase(): Observable<string> {
    return this.database$
      .asObservable()
      .pipe(
        take(1),
        map((database: IDBDatabase) => {
          database.close();
          return this.databaseName;
        })
      );
  }

  getDatabase(): Observable<IDBDatabase> {
    return this.database$.asObservable();
  }

  getCollections(): Observable<any> {
    return this.database$
      .asObservable()
      .pipe(
        take(1),
        switchMap((database: IDBDatabase) => {
          return new Observable((observer: Observer<any>) => {
            const transaction = database.transaction(COLLECTIONS_OBJECT_STORE, 'readwrite');
            transaction.addEventListener('error', (event) => emitError(observer, event));

            const request = transaction.objectStore(COLLECTIONS_OBJECT_STORE).get(COLLECTIONS_KEY);
            request.addEventListener('error', (event) => emitError(observer, event));
            request.addEventListener('success', (event) => emitResult(observer, event));
          });
        })
      );
  }

  storeCollections(collections: any): Observable<any> {
    return this.database$
      .asObservable()
      .pipe(
        take(1),
        switchMap((database: IDBDatabase) => {
          return new Observable((observer: Observer<any>) => {
            const transaction = database.transaction(COLLECTIONS_OBJECT_STORE, 'readwrite');
            transaction.addEventListener('error', (event) => emitError(observer, event));

            const clearRequest = transaction
              .objectStore(COLLECTIONS_OBJECT_STORE)
              .clear();

            clearRequest.addEventListener('error', (event) => emitError(observer, event));
            clearRequest.addEventListener('success', () => {
              const addRequest = transaction
                .objectStore(COLLECTIONS_OBJECT_STORE)
                .add(collections, COLLECTIONS_KEY);

              addRequest.addEventListener('error', (event) => emitError(observer, event));
              addRequest.addEventListener('success', (event) => emitResult(observer, event));
            });
          });
        })
      );
  }

  clearCollections(): Observable<any> {
    return this.database$
      .asObservable()
      .pipe(
        take(1),
        switchMap((database: IDBDatabase) => {
          return new Observable((observer: Observer<any>) => {
            const transaction = database.transaction(COLLECTIONS_OBJECT_STORE, 'readwrite');
            transaction.addEventListener('error', (event) => emitError(observer, event));

            const clearRequest = transaction
              .objectStore(COLLECTIONS_OBJECT_STORE)
              .clear();

            clearRequest.addEventListener('error', (event) => emitError(observer, event));
            clearRequest.addEventListener('success', (event) => emitResult(observer, event));
          });
        })
      );
  }
}
