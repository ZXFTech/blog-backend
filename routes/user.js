const router = require('koa-router')()

import {
    createUser,
    login,
    getUserList,
    getUserDetail
} from '../controller/user'
import { SuccessModel, ErrorModel } from '../model/res_Model'


router.prefix('/user')

router.get('/', async (ctx, next) => {
    try {
        const result = await getUserDetail()
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.get('/list', async (ctx, next) => {
    try {
        const result = await getUserList()
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.post('/register', async (ctx, next) => {
    try {
        const newUser = ctx.request.body
        const result = await createUser(newUser)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        console.log(err)
        ctx.body = new ErrorModel(err)
    }
})

router.post('/login', async (ctx, next) => {
    try {
        const result = await login(ctx.request.body)
        ctx.body = new SuccessModel(result)
    } catch (error) {
        ctx.body = new ErrorModel('登陆失败' + error)
    }
})

router.get('/session-test', async function (ctx, next) {
    console.log(ctx.request)
    if (ctx.session.view == null) {
        ctx.session.view = 0
    }
    ctx.session.view++
    ctx.session.username = 'akari'
    ctx.session.id = '5e833150c7b1db64a01bb986'
    ctx.session.num = '1'

    ctx.body = {
        view: ctx.session.view
    }
})

module.exports = router