const accessKey = "NYfSCKaFzBsACHT9ENZ70OBT_NnBbsAG6l4Ep1YaTyU";
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-result")
const showMore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(URL);
    const Data = await response.json()
    const result = Data.result

    if (page === 1) {
        searchResults.innerHTML = ""
    }
    result.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageLink.appendChild(imageLink)
        imageWrapper.appendChild(imageWrapper)

        page++
        if (page > 1) {
            showMore.style.display = "block"
        }
    })

}