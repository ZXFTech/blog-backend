const env = process.env.NODE_ENV // 环境参数

let MONGODB_CONFIG
let REDIS_CONFIG

// mongodb 配置
if (env === "development") {
    MONGODB_CONFIG = {
        url:'mongodb://localhost:27071',
        dbname:'test'
    }
}

if (env === "build") {
    MONGODB_CONFIG = {
        url:'mongodb://localhost:27071',
        dbname:'test'
    }
}


module.exports = {
    MONGODB_CONFIG
}