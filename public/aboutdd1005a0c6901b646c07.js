(()=>{var n={423:()=>{let n=document.querySelector(".header__dark-mode"),e=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(s){var t=e[s];if(void 0!==t)return t.exports;var o=e[s]={exports:{}};return n[s](o,o.exports,a),o.exports}(()=>{"use strict";a(423);const n=document.querySelector(".loader"),e=e=>{e?n.classList.remove("hidden"):n.classList.add("hidden")},s=(document.querySelector(".cards"),document.querySelector(".country-info"));let t=window.location.search;(async n=>{e(!0);const a=await fetch(n),s=await a.json();return e(!1),s})(`https://restcountries.com/v3.1${new URLSearchParams(t).get("country")}`).then((n=>{(n=>{let{population:e,borders:a,capital:t,flags:o,name:r,region:c,tld:l,currencies:i,languages:p,subregion:u}=n[0],d=Object.values(r.nativeName)[0].official,m=Object.values(i)[0].name,g=Object.values(p);s.innerHTML=`        \n                    <img\n                        class="country-info__img"\n                        src=${o.svg}\n                        alt="germany-flag"\n                        width="560"\n                        height="400"\n                    />\n                <div class="country-info__content">\n                    <h2>${r.common}</h2>\n                    <ul class="country-info__list">\n                    <li class="country-info__item">\n                        <p class="name">\n                        Native Name: \n                        <span>${d}</span>\n                        </p>\n                        <p class="population">\n                        Population:\n                        <span>${e}</span>\n                        </p>\n                        <p class="region">\n                        Region:\n                        <span>${c}</span>\n                        </p>\n                        <p class="sub-region">\n                        Sub Region:\n                        <span>${u}</span>\n                        </p>\n                        <p class="capital">\n                        Capital:\n                        <span>${t}</span>\n                        </p>\n                    </li>\n                    <li class="country-info__item">\n                        <p class="name">\n                        Top Level Domain:\n                        <span>${l}</span>\n                        </p>\n                        <p class="population">\n                        Currencies:\n                        <span>${m}</span>\n                        </p>\n                        <p class="region">\n                        Languages:\n                        <span>${g}</span>\n                        </p>\n                    </li>\n                    </ul>\n\n                    <div class="country-info__borders">\n                    <h3>Border Countries:</h3>\n                        ${a?a.map((n=>`\n                            <a href="./about.html?country=/alpha/${n}">${n}</a>\n                            `)):"No Borders"}\n                    </div>\n                </div>\n            `})(n)})).catch((n=>{alert(n)}))})()})();