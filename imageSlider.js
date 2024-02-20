const imageSlider = document.querySelector("#imageSlider")
const nextBtn = document.querySelector("#nextButton")
const prevBtn = document.querySelector("#prevButton")

const images = [
    "https://img.freepik.com/premium-photo/philadelphia-skylines-building_63253-6194.jpg?size=626&ext=jpg&ga=GA1.1.1468401335.1698511001&semt=sph",
    "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
    "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
    "https://img.freepik.com/free-vector/night-cityscape-with-skyscrapers-helicopter-roof-vector-cartoon-illustration-modern-city-illumination-highrise-office-apartment-buildings-with-many-windows-stars-shining-dark-sky_107791-22794.jpg?size=626&ext=jpg&ga=GA1.1.1468401335.1698511001&semt=sph"
]

let indexImage = 0
function currentImage(){
    imageSlider.src = images[indexImage]
}


// Handle next button
nextBtn.addEventListener("click", function(){

    if(indexImage < images.length - 1){
        indexImage++;
    }

   
    currentImage()
} )



prevBtn.addEventListener("click", function(){
    indexImage--
    if(indexImage < 0){
        indexImage = 0
    }
    currentImage()
})

currentImage()