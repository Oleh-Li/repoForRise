import './sass/main.scss';
import './sass/photocard.scss'
import {
  debounce
} from "lodash"
import template from "./template.hbs"
import callAlert from "./pnotifyCode.js"
import InfiniteScroll from "infinite-scroll"

const input = document.querySelector("input")
const list = document.querySelector(".gallery")
const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=car&page=1&per_page=3&key=15354044-5c6c2e030b5f90cfcf13d54e3'

const feedContainer = document.querySelector('#feed');
const infScrollInstance = new InfiniteScroll(feedContainer, {
  path() {
    return`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=car&page=${this.pageIndex}&per_page=3&key=15354044-5c6c2e030b5f90cfcf13d54e3`
  },
  responseBody: 'json',
  status: '.scroll-status',
  history: false,
});

infScrollInstance.on("load", response=>{
  const posts = response.hits
  feedContainer.insertAdjacentHTML("beforeend", template(posts))
});

infScrollInstance.loadNextPage()


/////////do before
// fetch(baseUrl)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => list.insertAdjacentHTML("beforeend", template(data.hits)))

// function handleInput(e) {
//   const inputValue = e.target.value
//   if (!inputValue.trim()) {
//     return
//   }
//   console.log(inputValue.trim())
//   return inputValue.trim()
// }

// input.addEventListener("input", debounce(handleInput, 500))