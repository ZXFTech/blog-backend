import User from '../model/user_model'

const checkEmail = (email) => {
    return true
}

export const getUserList = async () => {
    return new Promise((resolve, reject) => {
        User.find().exec(async (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

export const getUserDetail = async (userId) => {
    return new Promise((resolve, reject) => {
        User.findOne({},
            async (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
    })
}

export const createUser = async (newUser) => {
    return new Promise((resolve, reject) => {
        const username = newUser.username
        const password = newUser.password
        const email = newUser.email

        if (!username) {
            reject('用户名不能为空')
            return
        }
        if (!password) {
            reject('密码不能为空')
            return
        }
        if (!checkEmail(email)) {
            reject('邮箱格式不正确')
            return
        }

        User.findOne({ username: username }, async (err, result) => {
            console.log('username', username)
            if (err) {
                reject(err)
                return
            }
            console.log(result)
            if (result !== null) {
                reject('用户名已存在')
                return
            }
            User.create({ ...newUser }, async (err, user) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(user)
            })
        })
    })
}

export const register = async (newUser) => {

}

export const login = async (user) => {
    return new Promise((resolve, reject) => {
        const username = user.username
        const password = user.password
        User.findOne({ username: username }).exec(async (err, result) => {
            if (err) {
                reject(err)
                return
            }
            if (result === null) {
                reject('用户名不存在')
                return
            }
            if (result.password !== password) {
                reject('密码不正确')
                return
            }
            resolve(userToken)
        })
    })
}