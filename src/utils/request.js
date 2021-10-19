import axios from "axios";

const request = axios.create({
    //指定根路径
    baseURL:'http://www.escook.cn'
})

export default request;