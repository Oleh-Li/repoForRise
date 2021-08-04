import './sass/main.scss';
import './sass/photocard.scss'
import {
  debounce
} from "lodash"
import template from "./template.hbs"
const input = document.querySelector("input")
const list = document.querySelector(".gallery")

const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=dog&page=1&per_page=12&key=15354044-5c6c2e030b5f90cfcf13d54e3'


  fetch(baseUrl)
    .then(response => {
      return response.json()
    })
    .then(data=> list.insertAdjacentHTML("beforeend",template(data.hits)))
    




function handleInput(e) {
  const inputValue = e.target.value
  if (!inputValue) {
    return
  }
  console.log(inputValue)
  return inputValue
}



input.addEventListener("input", debounce(handleInput, 500))