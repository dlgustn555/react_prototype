const Router = require('koa-router')
const apiRouter = require('./api')

const router = new Router()

router.get('/test', (ctx) => {
    ctx.body = '/TEST RESPONSE....'
})

router.use('/api', apiRouter.routes())

module.exports = router
