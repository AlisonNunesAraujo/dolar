import axios from "axios";

// https://economia.awesomeapi.com.br
///json/last/:moedas

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/last/:moedas'
})

export default api;

