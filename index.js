import{S as y,i as g}from"./assets/vendor-TVMjIRjt.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();window.global||(window.global=window);const l=document.querySelector("#search-form"),n=document.querySelector("#loader"),c=document.querySelector(".gallery-list"),L="https://pixabay.com/api/?",w="48271120-e478f6712aa82518e8481b3a8",u=new URLSearchParams({key:w,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0});l.addEventListener("submit",a=>{a.preventDefault(),n.classList.add("loader"),u.set("q",a.currentTarget.elements.query.value.trim());const o=`${L}${u.toString()}`;console.log(o),fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length<=0)throw new Error("searchErr");const s=t.hits.map(({webformatURL:r,largeImageURL:i,tags:m,likes:d,views:f,comments:h,downloads:p})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${i}">
                 <img src="${r}"  alt="${m}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${d}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${f}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${h}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${p}</p>
               </li>
             </ul>
        </li>`).join("");c.innerHTML=s,new y(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=""}).finally(n.classList.remove("loader")),l.reset()});document.querySelector(".gallery");
//# sourceMappingURL=index.js.map
