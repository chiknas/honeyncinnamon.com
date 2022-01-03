/**
 * Interface to be used as a return type on service functions that send request to the back end.
 */
export interface DataLoad<T> {
  loading: boolean;
  result: T;
}
