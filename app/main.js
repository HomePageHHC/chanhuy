const music = document.querySelector('.music__feature')
const modal = document.querySelector('.modal')
const content__modal = document.querySelector('.content__modal')
const music__audio = document.querySelector('.music__play')
const dics = document.querySelector('.dics ')
function app(){
  music.addEventListener('click',() => {
      modal.classList.toggle('add__music')
  })
}
console.log(music__audio);
app()