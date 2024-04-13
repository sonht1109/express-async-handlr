const handler =
  (fn) =>
  (...args) => {
    const res = args[args.length - 2];
    const next = args[args.length - 1];
    return Promise.resolve(fn(...args))
      .then((data) => {
        res.locals.data = data;
      })
      .catch(next);
  };

module.exports = handler;
