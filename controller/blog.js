import Blog from '../model/blog_model'

export const getList = async (fields) => {
    return new Promise((resolve, reject) => {
        const filter = { title: 1, author: 1, keywords: 1, abstract: 1, date: 1 }
        Blog.find().where({ removed: false }).select(filter).exec(async (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const getFullList = async () => {
    return new Promise((resolve, reject) => {
        Blog.find().where({ removed: false }).exec(async (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const getListByKeywords = async (keywords) => {
    return new Promise((resolve, reject) => {
        Blog.find().all('keywords', keywords).exec((err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const addBlog = async (newBlog) => {
    return new Promise((resolve, reject) => {
        Blog.create({
            ...newBlog
        }, async (err, blog) => {
            if (err) {
                reject(err)
                return
            }
            resolve(blog)
        })
    })
}

export const getDetail = async (blogId) => {
    return new Promise((resolve, reject) => {
        Blog.findOne({ _id: blogId, removed: false },
            async (err, blog) => {
                if (err) {
                    reject(err)
                }
                if (!blog) {
                    reject('博客不存在')
                }
                resolve(blog)
            })
    })
}

export const deleteBlog = async (blogId) => {
    return new Promise((resolve, reject) => {
        Blog.findByIdAndUpdate({ _id: blogId }, { removed: true }, (blog, err) => {
            if (err) {
                reject(err)
                return
            }
            if (blog.removed) {
                resolve(true)
                return
            }
            resolve(false)
        })
    })
}

export const updateBlog = async (blogId, blogData) => {
    return new Promise((resolve, reject) => {
        // Blog.findByIdAndUpdate(blogId,blogData,(err,newBlog)=>{
        //     if(err){
        //         reject(err)
        //         return
        //     }
        //     resolve(newBlog)
        // })
        Blog.findByIdAndUpdate(blogId, blogData).exec((err, blogId) => {
            if (err) {
                reject(err)
                return
            }
            resolve(blogId)
        })
    })
}

