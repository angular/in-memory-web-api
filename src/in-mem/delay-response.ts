import { Observable } from 'rxjs';

// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
export function delayResponse<T>(response$: Observable<T>, delayMs: number): Observable<T> {
  return new Observable<T>(observer => {
    let completePending = false;
    let nextPending = false;
    const subscription = response$.subscribe(
      value => {
          nextPending = true;
          setTimeout(() => {
          observer.next(value);
          if (completePending) {
            observer.complete();
          }
        }, delayMs);
      },
      error => setTimeout(() => observer.error(error), delayMs),
      () => {
        completePending = true;
        if (!nextPending) {
          observer.complete();
        }
      }
    );
    return () => {
      return subscription.unsubscribe();
    };
  });
}
