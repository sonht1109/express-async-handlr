import { RequestHandler } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

declare function asyncHandler<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
  LocalsObj extends Record<string, any> = Record<string, any>
>(
  fn: (
    ...args: Array<RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>>
  ) => void | Promise<void>
): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>;

declare module asyncHandler {}

export = asyncHandler;
