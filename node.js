const handler =
  (fn) =>
  (...args) => {
    return Promise.resolve(fn(...args));
  };

(async () => {
  Promise.resolve(
    (() => {
      throw new Error("error");
    })()
  )
    .then((data) => {
      console.log({ data });
    })
    .catch((e) => {
      console.log({ '===>': e });
    });
})();
