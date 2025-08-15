import axios from "axios";

const instace = axios.create({
    baseURL : 'https://dummyjson.com',
    headers : {
        "content-type" : "application/json"
    }
});

export const ProductsAPI = {
    async getAll(){
        return instace.get('/carts')
    }
}