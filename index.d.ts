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
    ...args: Parameters<RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>>
  ) => any | Promise<any>
): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>;

export = asyncHandler;
