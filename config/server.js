const env = process.env.NODE_ENV;

let SERVICE_CONFIG

if (env === 'development') {
    SERVICE_CONFIG = {
        host:'localhost',
        port: 8000
    }
}

module.exports = {
    SERVICE_CONFIG
}