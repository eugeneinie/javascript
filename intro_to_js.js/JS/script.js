document.write('welcome to JavaScript')
//variables
let x 

//variable declaration without an initializer
x

//variable declaration with an initializer
x = 80

let y = 30

const z = 100

const d = z + 100

//variable nomenclature
//let firstName = 'Ini-ubong'
let firstName = prompt('what is your first name?')
//let midName = "Enyinna"
let midName = prompt('what is your middle name?')
//let surName = `Isemin`
let surName = prompt('what is your surname?')
//let city = `Lagos`
let city = prompt('what city do you live?')
//let dob = `October 3rd`
let dob = prompt('when were you born?')
//let age = "25"
let age = prompt('how old are you?')
if (age>18){
    alert ("Adult")
}else{
    alert ("Minor")
}
//let phoneNumber = `08101859094`
let phoneNumber = prompt('what is your phone number?')

//let fullName = firstName + midName + surName
//let fullName = firstName +' '+ midName +' '+ surName
let fullName1 = `My full name is ${firstName} ${midName} ${surName}, and my phone number is ${phoneNumber} and I live in ${city}, I was born on ${new Date().getFullYear() - age}`

let fullName2 = 'My full name is ${firstName} ${midName} ${surName}, \n\n and my phone number is ${phoneNumber} and \n\t I live in ${town}, I was born on ${new Date().getFullYear() - age}'

//alert(fullName1, fullName2) //or console.log

//querySelector
let fName = document.querySelector('p')

fName.textContent = `My first name is ${firstName}`

//querySelectorAll
let mName = document.querySelectorAll('p')

mName[1].innerText = `My middle name is ${midName}`
mName[2].innerText = `My surname is ${surName}`

//getElementById
const myAge = document.getElementById('age')
myAge.innerHTML = `Age: ${age}`

const paraId = document.querySelector('#age')
paraId.innerHTML = `Age: ${age}`

const paraLast = document.querySelector('main: last-child')
paraLast.innerHTML = city

const para1 = document.getElementsByClassName('para')
para1[3].innerHTML = 'My sisters name is Esther'
para1[4].innerHTML = 'My brothers name is Ubong'

const para2 = document.querySelector('.para')
para2.innerHTML = `My mothers name is <strong>Enobong</strong>`

const title = document.querySelector('h2')
title.innerText = fullName1

// const paraLast = document.getElementsByClassName('.agecheck')

alert(fullName1, fullName2, fName)