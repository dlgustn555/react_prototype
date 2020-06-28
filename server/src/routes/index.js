const Router = require("koa-router");

const api = new Router();

api.get("/test", (ctx) => {
  ctx.body = "/TEST RESPONSE....";
});

module.exports = api.routes();
