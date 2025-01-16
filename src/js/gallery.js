import "./init.js";
// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("#search-form");
const baseUrl = "https://pixabay.com/api/?";
const API_KEY = "48271120-e478f6712aa82518e8481b3a8";
const searchParams = new URLSearchParams({
  key: API_KEY,
  q: "",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: true,
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
    searchParams.set("q", evt.currentTarget.elements.query.value.trim());
    const url = `${baseUrl}${searchParams.toString()}`;
    console.log(url)
    fetch(url)
        .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
        .then((images) => {
             if (images.hits.length<=0) {
               throw new Error("searchErr");
             }
            console.log(images.hits.length);
           
        })
        .catch((error) => {
            if (error == "searchErr") {

                
                

                console.log(iziToast)
            }
           
            iziToast.error({
              message: `Sorry, there are no images matching your search query. Please try again!`,
              position: "topRight",
            });
  });

    form.reset();
});





const gallery = document.querySelector(".gallery");


  



