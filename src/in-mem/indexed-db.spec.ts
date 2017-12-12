import {IndexedDB} from './indexed-db';
import {switchMap} from 'rxjs/operators';

describe('IndexedDB', () => {
  let indexedDB: IndexedDB;
  beforeEach(() => {
    indexedDB = new IndexedDB('testDatabase');
  });

  afterEach((done) => {
    indexedDB
      .closeDatabase()
      .pipe(
        switchMap((databaseName: string) => IndexedDB.deleteDatabase(databaseName))
      )
      .subscribe(() => done(), () => done());
  });

  it('should create new database', (done) => {
    indexedDB.getDatabase()
      .subscribe(
        (data) => done()
      );
    expect(indexedDB).toBeDefined();
  });

  it('should store and retrieve simple collections', (done) => {
    indexedDB
      .storeCollections({items: [1, 2, 3, 4, 5]})
      .pipe(
        switchMap(() => indexedDB.getCollections())
      )
      .subscribe((data) => {
        expect(data).toEqual({items: [1, 2, 3, 4, 5]});
        done();
      });
  });

  it('should store and retrieve complex collections', (done) => {
    const users = [
      {id: 1, name: 'Test User'}
    ];

    const projects = [
      {id: 1, title: 'My first project',
        description: 'This is your first project.', comments: <any>[]},
      {id: 2, title: 'My second project',
        description: 'This is your second project.', comments: [
        {id: 1, content: 'This is a comment'}
      ]}
    ];

    const tasks = [
      {id: 1, projectId: 1, title: 'Task 1', done: false},
      {id: 2, projectId: 1, title: 'Task 2', done: false},
      {id: 3, projectId: 1, title: 'Task 3', done: true},
      {id: 4, projectId: 2, title: 'Task 4', done: false}
    ];

    const collections = {users, projects, tasks};

    indexedDB
      .storeCollections(collections)
      .pipe(
        switchMap(() => indexedDB.getCollections())
      )
      .subscribe((data) => {
        expect(data).toEqual(collections);
        done();
      });
  });

  it('should clear collection', (done) => {
    indexedDB
      .storeCollections({data: 'Test'})
      .pipe(
        switchMap(() => indexedDB.clearCollections())
      )
      .subscribe((data) => {
        expect(data).toBeUndefined();
        done();
      });
  });
});
