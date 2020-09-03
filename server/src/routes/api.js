const Router = require('koa-router')
const sessionIoRouter = require('./apis/session-io')

const router = Router()

router.use('/session-io', sessionIoRouter.routes())

module.exports = router
