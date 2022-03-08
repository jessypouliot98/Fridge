import type { AxiosRequestHeaders } from 'axios';

export const getHeadersWithAuthorization = (headers?: AxiosRequestHeaders): AxiosRequestHeaders => {
  return {
    authorization: 'Bearer dsad89as7d9as8d6789as',
    ...(headers || {}),
  }
}
