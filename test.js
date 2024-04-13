const handler = require("./index");

describe("asyncHandler", () => {
  it("should call next when wrapped function throws", async () => {
    const error = new Error("error");
    const next = jest.fn();
    const fn = handler(async (req, res, next) => {
      throw error;
    });
    await fn(null, null, next);
    expect(next).toBeCalledWith(error);
  });

  it("should pass data into res.locals when wrapped function returns", async () => {
    const next = jest.fn();
    const res = jest.fn(() => {
      return {
        locals: {},
      };
    });
    const fn = handler(async (req, res, next) => {
      return 1;
    });
    await fn(null, res, next);
    expect(next).toBeCalled();
    expect(res.locals).toEqual({ data: 1 });
  });

  it("should accept a non-async function", async () => {
    const next = jest.fn();
    const fn = handler((req, res, next) => {
      next("test");
    });
    await fn(null, null, next)
    expect(next).toBeCalledWith('test')
  });
});
