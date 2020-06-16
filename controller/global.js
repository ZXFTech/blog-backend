import Global from '../model/global_model'

export const getAllGlobal = async () => {
    return new Promise((resolve,reject)=>{
        Global.findOne({name:"Global"},async (err,result) => {
            if(err){
                reject(err)
                return
            }
            if(result){
                resolve(result)
            }
            else{
                Global.create({},async (err,result)=>{
                    if(err){
                        reject(err)
                        return
                    }
                    resolve(result)
                })
            }
        })
    })
}

export const allKeywordsUpdate = async (data) => {
    return new Promise((resolve,reject)=>{
        console.log(data)
        Global.findOneAndUpdate({name:'Global'},{$set:{allKeywords:data.allKeywords}}).exec(async(err,result)=>{
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
}