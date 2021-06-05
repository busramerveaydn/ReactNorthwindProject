import axios from "axios"

export default class ProductServices{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
}