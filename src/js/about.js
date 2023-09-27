import '../css/main.css'
import './mode'
import request from './request'
import { createContryInfo } from './updateUI'

let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let countryName = urlParams.get('country')
let cAPI = `https://restcountries.com/v3.1${countryName}`

request(cAPI)
    .then((data)=>{
        createContryInfo(data)
    })
    .catch((err)=>{
        alert(err)
})