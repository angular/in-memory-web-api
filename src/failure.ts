/**
 * Fail a Jasmine test such that it displays the error object,
 * typically passed in the error path of an Observable.subscribe()
 * @param err - the error object
 */
export function failure(err: any) {
  fail(JSON.stringify(err));
}
