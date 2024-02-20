let openBtn = document.querySelector("#menuBtn")
let closeBtn = document.querySelector("#closeBtn")
let links = document.querySelector("#links")

openBtn.addEventListener("click", function(){
    links.style.display = "flex"
    openBtn.style.display = "none"
    closeBtn.style.display = "block"

})

closeBtn.addEventListener("click", function(){
    links.style.display = "none"
    closeBtn.style.display = "none"
    openBtn.style.display = "block"
})


const image = document.querySelector("#image");

let lists = [
  "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
  "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
  "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph"
];

console.log(image)

image.src = lists[2]
