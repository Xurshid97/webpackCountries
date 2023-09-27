let searchFormEl = document.querySelector('.search')

searchFormEl.search.addEventListener('input', ()=>{
    let srchValue = searchFormEl.search.value.toLowerCase()
    console.log(srchValue);

    let cardsItem = document.querySelectorAll('.cards__item')

    cardsItem.forEach((parentCard)=>{ 
        if(parentCard.querySelector('.cards__title').textContent.toLowerCase().includes(srchValue)) {
            parentCard.style.display = 'block'
        }
        else {
            parentCard.style.display = 'none'
        }
    })

})

import request from "./request";
import { createCountries } from "./updateUI";

let searchSelect = document.querySelectorAll('.search__select-list li')
let searchSelectSpan = document.querySelector('.search__select span')

searchSelect.forEach((li)=>{
    li.addEventListener('click', ()=>{
        searchSelectSpan.textContent = li.textContent
        let API
        if (li.textContent === 'All') {
            API = 'https://restcountries.com/v3.1/all'
        }
        else {
            API = `https://restcountries.com/v3.1/region/${li.textContent}`
        }
        request(API)
            .then((data)=>{
                createCountries(data)
            })
            .catch((err)=>{
                console.log(err);
            })
    })
})