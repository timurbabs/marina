document.addEventListener('DOMContentLoaded', function () {
    var catContainer = document.getElementById('cat-container');
    var catsArray = []; // Store the cat elements for overlap checks
  
    function createCat() {
      var cat = document.createElement('img');
      cat.src = 'images/photo2.png'; // Replace with your cat image path
      cat.classList.add('cat');
  
      // Suggesting fixed dimensions for calculation, can be made dynamic
      var catWidth = 100;
      var catHeight = 150;
  
      var left, top, isOverlapping;
  
      // Prevent overlapping cats with a simple check (can be more sophisticated)
      do {
        left = Math.random() * (window.innerWidth - catWidth);
        top = Math.random() * (window.innerHeight - catHeight);
        isOverlapping = catsArray.some(function(existingCat) {
          var rect = existingCat.getBoundingClientRect();
          return !(rect.right < left || rect.left > left + catWidth || rect.bottom < top || rect.top > top + catHeight);
        });
      } while (isOverlapping);
  
      cat.style.left = left + 'px';
      cat.style.top = top + 'px';
      cat.style.animationDuration = (Math.random() * 3 + 2) + 's';
  
      cat.addEventListener('click', function() {
        cat.style.animation = 'fall 2s forwards linear'; // Updated to new smoother animation
  
        setTimeout(function() {
          catContainer.removeChild(cat);
          catsArray = catsArray.filter(function(existingCat) {
            return existingCat !== cat; // Remove reference from the array
          });
        }, 2000); // Ensure this matches the animation duration
      });
  
      catContainer.appendChild(cat);
      catsArray.push(cat); // Add the new cat to our tracking array
    }
  
    // Number of cats based on viewport or fixed number, adjust as needed
    var numberOfCats = Math.ceil(window.innerWidth / 150) * Math.ceil(window.innerHeight / 150);
  
    for (var i = 0; i < numberOfCats; i++) {
      createCat();
    }
  });
  
