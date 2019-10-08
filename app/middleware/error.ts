module.exports = () => {
  return async function error(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.error('error>>', err.message);
      ctx.status = err.status || 500;
      ctx.body = {
        success: false,
        errMsg: err.message,
      };
    }
  };
};
