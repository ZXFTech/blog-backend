const router = require('koa-router')()
import {
    getList,
    getFullList,
    getDetail,
    addBlog,
    deleteBlog,
    updateBlog
} from '../controller/blog'
import { SuccessModel, ErrorModel } from '../model/res_Model'

router.prefix('/blogs')

router.get('/', async (ctx, next) => {
    ctx.response.redirect('/blogs/list')
})

router.get('/list', async (ctx, next) => {
    try {
        const fields = ctx.request.body
        const result = await getList(fields)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.get('/fullList', async (ctx, next) => {
    try {
        const result = await getFullList()
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.get('/detail', async (ctx, next) => {
    try {
        const blogId = ctx.query.id
        const result = await getDetail(blogId)
        ctx.body = result
    } catch (err) {
        ctx.body = err
    }
})

router.post('/add', async (ctx, next) => {
    try {
        const result = await addBlog(ctx.request.body.newBlog)
        ctx.body = new SuccessModel(result)

    } catch (err) {
        ctx.body = new ErrorModel('添加失败!' + err.message)

    }
})

router.post('/delete', async (ctx, next) => {
    try {
        const result = deleteBlog(ctx.query.id)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.post('/update', async (ctx, next) => {
    try {
        const blogId = ctx.query.id
        const blogData = ctx.request.body
        const result = await updateBlog(blogId, blogData.newBlog)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

module.exports = router