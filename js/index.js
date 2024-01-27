function numbersAnimation() {
 const numbers = document.querySelectorAll('[data-number]')

 numbers.forEach(number => {
  const total =+ number.innerText
  const increment = Math.floor(total/total)
  let start = 0
   const counter = setInterval(() => {
    start = start + increment
    number.innerText = start
    if(start >= total){
     number.innerText = start
     clearInterval(counter)
    }
   }, 1);
 });
}



numbersAnimation()
