'use strict';

module.exports = () => {
  return function cuteI18n(ctx, next) {
    function gettext() {
      return ctx.__.apply(ctx, arguments);
    }
    ctx.locals = {
      gettext,
      __: gettext,
    };

    return next();
  };
};
