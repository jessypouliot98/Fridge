export type JSONResponse<T> = {
  isOk: true,
  data: T,
};

export type ErrorResponse = {
  isOk: false,
  message: string,
}
