const Router = require('koa-router')
const axios = require('axios')

const router = Router()

const ACCESS_URL =
    'http://devapi-ssio.nchat.naver.com:10080/api/v1/auth/lee/dlgustn555/access?auth_key=7d3eceaa42ef422495c797703b39f758'

const SEND_URL =
    'http://devapi-ssio.nchat.naver.com:10080/api/v1/event/lee/dlgustn555/channel?auth_key=7d3eceaa42ef422495c797703b39f758'

router.post('/', async (ctx) => {
    const params = {
        user: 'hyunsu',
        channels: ['dlgustn555-sessionio'],
    }
    const { data } = await axios.post(ACCESS_URL, params)

    if (data.code === 200) {
        ctx.body = {
            message: 'SUCCESS',
            code: '00',
            result: data.result,
        }
    }
})

router.post('/send', async (ctx) => {
    const { message } = ctx.request.body

    const params = {
        event: 'send',
        channels: ['dlgustn555-sessionio'],
        data: message,
    }

    await axios.post(SEND_URL, params)

    ctx.body = message
})

router.get('/', (ctx) => {
    ctx.body = 'GET ...'
})
module.exports = router
