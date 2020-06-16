const router=require('koa-router')()
import {
    getAllGlobal,
    allKeywordsUpdate,
} from '../controller/global'

import {SuccessModel,ErrorModel} from '../model/res_Model'

router.prefix('/global')

router.get('/',async (ctx,next)=>{
    try {
        const result = await getAllGlobal()
        ctx.body = result
    } catch (error) {
        ctx.body = err
    }
})

router.post('/allKeywordsUpdate',async (ctx,next)=>{
    try {
        const result = await allKeywordsUpdate(ctx.request.body)
        ctx.body=new SuccessModel(result)
    }
    catch(error) {
        ctx.body = new ErrorModel(error)
    }
})

module.exports = router
