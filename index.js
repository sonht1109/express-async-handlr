const handler =
  (fn) =>
  (...args) => {
    const res = args[args.length - 2];
    const next = args[args.length - 1];
    return Promise.resolve(fn(...args))
      .then((data) => {
        if (res) {
          res.locals = Object.assign(res.locals || {}, { data });
        }
        next();
      })
      .catch(next);
  };

module.exports = handler;
