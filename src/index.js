import './sass/main.scss';
import template from "./template.hbs"
import InfiniteScroll from "infinite-scroll"

const form = document.querySelector("#search-form")
const input = document.querySelector("input")
const list = document.querySelector(".gallery")


let inputValue = ''
const infScrollInstance = new InfiniteScroll(list, {
  path() {
    return `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${this.pageIndex}&per_page=6&key=15354044-5c6c2e030b5f90cfcf13d54e3`
  },
  responseBody: 'json',
  status: '.scroll-status',
  history: false,
})

infScrollInstance.on("load", response => {
  const images = response.hits
  list.insertAdjacentHTML("beforeend", template(images))
});

function handleInput(e) {
  e.preventDefault()
  inputValue = input.value.trim()
  if (inputValue) {
    list.innerHTML = "";
    infScrollInstance.pageIndex = 1
    infScrollInstance.option({
      path() {
        return `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${this.pageIndex}&per_page=6&key=15354044-5c6c2e030b5f90cfcf13d54e3`
      }
    })
    infScrollInstance.loadNextPage()
  }
}

form.addEventListener("submit", handleInput)