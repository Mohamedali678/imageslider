var images = [
    "https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
    "https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph",
    "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?size=626&ext=jpg&ga=GA1.2.1468401335.1698511001&semt=sph"
  
  ];
  
  var currentImageIndex = 0;
  var sliderImage = document.getElementById('sliderImage');
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');
  
  // Function to display the current image
  function showCurrentImage() {
    sliderImage.src = images[currentImageIndex];
  }
  
  // Function to move to the next image
  function nextImage() {
    currentImageIndex++;
    // if (currentImageIndex >= images.length) {
    //   currentImageIndex = 0;
    // }
    showCurrentImage();
  }
  
  // Function to move to the previous image
  function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    showCurrentImage();
  }
  
  // Show the initial image
  showCurrentImage();
  
  // Add event listeners for clicking next and previous buttons
  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', prevImage);