let number = 0

const sum = document.querySelector("#sum")
const sub = document.querySelector("#sub")

sum.onclick = () => {

 number++

 console.log(number)

 document.querySelector("#number").textContent = number
}

sub.onclick = () => {

  number--
 
  console.log(number)
 
  document.querySelector("#number").textContent = number
 }