import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

export function isAxiosError(value: any): value is AxiosError {
  return typeof value?.response === 'object';
}

export abstract class AbstractApiService {
  protected readonly http: AxiosInstance;

  protected constructor(
    protected readonly path?: string,
    protected readonly baseURL: string = '/',
  ) {
    if (path) {
      this.baseURL += path;
    }
    this.http = axios.create({
      baseURL,
      // ... further stuff, e.g. `withCredentials: true`
    });
    this.http.defaults.headers.common.Accept = 'application/json;charset=UTF-8';
    this.http.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
  }

  // eslint-disable-next-line class-methods-use-this
  protected createParams(record: Record<string, any>): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        const value: any = record[key];
        if (value !== null && value !== undefined) {
          params.append(key, value);
        } else {
          // eslint-disable-next-line no-console
          console.debug(`Param key '${key}' was null or undefined and will be ignored`);
        }
      }
    }
    return params;
  }

  // eslint-disable-next-line class-methods-use-this
  protected handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  // eslint-disable-next-line class-methods-use-this
  protected handleError(error: unknown): never {
    if (error instanceof Error) {
      if (isAxiosError(error)) {
        if (error.response) {
          // eslint-disable-next-line no-console
          console.log(error.response.data);
          // eslint-disable-next-line no-console
          console.log(error.response.status);
          // eslint-disable-next-line no-console
          console.log(error.response.headers);
          throw error;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser
          // eslint-disable-next-line no-console
          console.log(error.request);
          throw new Error(error as any);
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        // eslint-disable-next-line no-console
        console.log('Error', error.message);
        throw new Error(error.message);
      }
    }
    throw new Error(error as any);
  }
}
