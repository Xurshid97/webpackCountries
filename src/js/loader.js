const loadEl = document.querySelector('.loader')

let loaderToggle = (info)=>{
    if(info){
        loadEl.classList.remove('hidden')
    }else {
        loadEl.classList.add('hidden')
    }
}

export default loaderToggle