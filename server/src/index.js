const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const api = require('./routes')

const app = new Koa()
const router = new Router()

// 웹훅 추가
router.post('/payload', (ctx) => {
    console.log('===========')
    console.log('===========')
    console.log(ctx.request.body)
    console.log('===========')
    console.log('===========')

    ctx.body = ctx.request.body
})

// 라우터 모듈 추가
router.use('/api', api)

// bodyParser는 라우터 코드보다 상단에 있어야 함.
app.use(bodyParser())

// 라우터 미들웨어 추가
app.use(router.routes())
app.use(router.allowedMethods())

// 서버 포트 설정
app.listen(4200, () => {
    console.log('Server is Running PORT: 4200')
})
