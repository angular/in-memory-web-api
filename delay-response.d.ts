import { Observable } from 'rxjs';
/** adds specified delay (in ms) to both next and error channels of the response observable */
export declare function delayResponse<T>(response$: Observable<T>, delayMs: number): Observable<T>;
