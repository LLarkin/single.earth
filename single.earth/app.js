console.log("lets get hired")
const thetree = document.querySelector("#tree")
const animetext1 = document.querySelector("#text1")
const hamburg = document.querySelector("#hamburger")
console.log(thetree)

function ladningtext (){
	animetext1.style.animation = 'oppatext1 ease-in-out forwards 6s'
	setTimeout(() => {  animetext1.textContent = "nature will be valued not as raw materials" }, 5000);
	setTimeout(() => {  animetext1.textContent = "but for just being there," }, 7000);
	setTimeout(() => {  animetext1.textContent = "keeping ecosystems alive \u2665" }, 10000);
	setTimeout(() => {  thetree.style.fontSize = '5vw' }, 11000);

	
}

ladningtext()


/* Hamburger menu */ 


const Bbars = document.querySelector("#bars")
const Ttimes = document.querySelector("#times")





