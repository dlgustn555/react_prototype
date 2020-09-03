const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./routes')

const app = new Koa()

app.use(bodyParser())

// 라우터 미들웨어 추가
app.use(router.routes())
app.use(router.allowedMethods())

// 서버 포트 설정
app.listen(4200, () => {
    console.log('Server is Running PORT: 4200')
})
