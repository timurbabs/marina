document.addEventListener('DOMContentLoaded', function () {
    var catContainer = document.getElementById('cat-container');
    
    // Function to generate cats
    function createCat() {
      var cat = document.createElement('img');
      cat.src = 'images/photo2.png'; // Replace with your cat image path
      cat.classList.add('cat');
  
      // Random position
      cat.style.left = Math.random() * 100 + 'vw';
      cat.style.top = Math.random() * 100 + 'vh';
  
      // Random animation duration
      cat.style.animationDuration = (Math.random() * 3 + 2) + 's';
  
      // Click event: apply falling animation
      cat.addEventListener('click', function() {
        cat.style.animationName = 'fall';
        cat.style.animationDuration = '2s';
        cat.style.animationTimingFunction = 'linear';
        cat.style.animationFillMode = 'forwards'; // Keep the end state
  
        // Remove the cat after falling
        setTimeout(function() {
          catContainer.removeChild(cat);
        }, 2000); // Should match the duration of the falling animation
      });
  
      catContainer.appendChild(cat);
    }
  
    // Calculate the number of cats based on screen size (example)
    var numberOfCats = Math.ceil(window.innerWidth / 150) * Math.ceil(window.innerHeight / 150);
    
    // Create as many cats as calculated
    for (var i = 0; i < numberOfCats; i++) {
      createCat();
    }
  });
  
