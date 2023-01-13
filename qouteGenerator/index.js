const qoute = document.getElementById('qoute');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
const counter = document.getElementById('counter');
const URL = 'https://api.quotable.io/random/';

let getQuote = ()=>{
    fetch(URL).then((data) => data.json()).then((item) => {
        console.log(item);
        qoute.textContent = ` "  ${item.content }  "`;
        author.innerHTML = item.author;
    })
}
 
let value = 1;
counter.textContent = value 
let increase = ()=>{
   value +=1
   counter.textContent = value

}


window.addEventListener('load',getQuote );
btn.addEventListener('click',getQuote )
btn.addEventListener('click',increase )