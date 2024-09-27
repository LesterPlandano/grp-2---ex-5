// code for onclick for info button
function showInfo(containerId) {
    document.getElementById(containerId).style.display = 'block';
}

function hideInfo(containerId) {
    document.getElementById(containerId).style.display = 'none';
}

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 2000);
}

// for backtotop button
let backToTopBtn = document.getElementById('backToTop');

// Show the button when the user scrolls down 15px from the top of the document
window.onscroll = function () {
    if (
        document.body.scrollTop > 15 ||
        document.documentElement.scrollTop > 15
    ) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// Function to scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
// Function to update the time and greeting
function updateTime() {
    const options = {
        timeZone: 'Asia/Manila',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const currentTime = new Date().toLocaleTimeString('en-US', options);

    const hour = new Date().getHours(); // Get the current hour
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    document.getElementById('realTime').textContent =
        greeting + '! Current Time: ' + currentTime;
}

setInterval(updateTime, 1000); // Update the time every second
setInterval(updateTime, 1000); // Update the time every second
const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
const closeBtn = document.getElementById('closeBtn');

// Show contact form when click
contactBtn.onclick = () => {
    contactForm.style.display = 'flex';
};

// Close the form when close button
closeBtn.onclick = () => {
    contactForm.style.display = 'none';
};

// Close the form when outside of the form content
window.onclick = (event) => {
    if (event.target === contactForm) {
        contactForm.style.display = 'none';
    } 
    // Show suggestion
    document.getElementById('searchInput').addEventListener('keyup', function() {
        var query = this.value;
        if (query.length > 0) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'search_suggestions.php?query=' + encodeURIComponent(query), true);
          xhr.onload = function() {
            if (this.status == 200) {
              document.getElementById('suggestions').innerHTML = this.responseText;
            }
          };
          xhr.send();
        } else {
          document.getElementById('suggestions').innerHTML = '';
        }
      });
      
      };
      function selectSuggestion(name) {
          document.getElementById('searchInput').value = name;
          document.getElementById('suggestions').innerHTML = ''; // Clear suggestions
        }
  