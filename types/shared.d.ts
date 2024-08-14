export interface CustomMatchers<R> extends Record<string, any> {
  /**
   * Use .toBeSuccessful when checking if Axios response status code is between 200 and 299 included
   */
  toBeSuccessful(): R;

  /**
   * Use .toHave2xxStatus when checking if Axios response status code is between 200 and 299 included
   */
  toHave2xxStatus(): R;
}

// noinspection JSUnusedGlobalSymbols
export interface SharedMatchers<R> {
  /**
   * Use .toBeSuccessful when checking if Axios response status code is between 200 and 299 included
   */
  toBeSuccessful(): R;

  /**
   Use .toHave2xxStatus when checking if Axios response status code is between 200 and 299 included
   */
  toHave2xxStatus(): R;
}
