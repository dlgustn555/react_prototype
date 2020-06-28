const Koa = require("koa");
const Router = require("koa-router");

const api = require("./routes");

const app = new Koa();
const router = new Router();

// 라우터 모듈 추가
router.use("/api", api);

// 라우터 미들웨어 추가
app.use(router.routes());
app.use(router.allowedMethods());

// 서버 포트 설정
app.listen(4200, () => {
  console.log("Server is Running PORT: 4200");
});
