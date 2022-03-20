const { default: axios } = require("axios");

const httpInstance=axios.create({
    baseURL:'http://localhost:3006/'
})
const httpInstance1=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export default httpInstance;
export {httpInstance1}