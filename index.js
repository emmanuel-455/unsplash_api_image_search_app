const accessKey = "NYfSCKaFzBsACHT9ENZ70OBT_NnBbsAG6l4Ep1YaTyU";
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-result")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

function searchImages() {
    inputData = inputEl.value;
    
}