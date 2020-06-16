class BaseModel {
    constructor(message,data) {
        this.message = message
        this.data = data
    }
}

class SuccessModel extends BaseModel {
    constructor(message,data) {
        super(message,data)
        this.errorNum = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(message,data){
        super(message,data)
        this.errorNum = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}