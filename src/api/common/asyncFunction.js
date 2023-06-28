import axios from 'axios'


export const asyncFunction = async config => {
    try{
        const { data } = await axios(config)
        if(data.errors || !data) return Promise.reject(data.errors || 'nothing found')
        return Promise.resolve(data)
    }catch(error){
        return Promise.reject(error)
    }
}