const router = require('koa-router')()

router.prefix('/blogs')

router.get('/',async (ctx,next)=>{
  ctx.response.redirect('/blogs/list')
})

router.get('/list',async (ctx,next)=>{

})

router.get('/fullList',async (ctx,next)=>{
  
})

router.get('/detail',async (ctx,next)=>{
  
})

router.post('/add',async (ctx,next)=>{
  
})

router.post('/delete',async (ctx,next)=>{
  
})

router.post('/update',async (ctx,next)=>{
  
})

module.exports = router
