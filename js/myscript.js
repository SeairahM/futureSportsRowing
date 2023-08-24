const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

// Show the initial slide
showSlide(currentIndex);



function validateForm() {
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var cnumber = document.getElementById("cnumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (fname === "" || lname === "" || cnumber === "" || email === "" || message === "") {
        alert("All fields are required");
        return false;
    }

    if (!/^\d{10}$/.test(cnumber)) {
        alert("Invalid contact number. Please enter a 10-digit number.");
         return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email format");
        return false;
    }
    document.getElementById('contactsection').style.display = 'none';
        let query = document.getElementById('querySubmitted');
        query.removeAttribute("hidden");
        query.style.textAlign = 'center';
        query.style.paddingTop = '20px';

    return true;
}

let contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
        
    });
    


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const closeButton = document.getElementById('closeButton');

searchButton.addEventListener('click', () => {
    performSearch();
  });
    

function performSearch() {
    let searchT = searchInput.value.trim();
    const searchTerm = searchT.toLowerCase();
    searchResults.innerHTML = '';
    const searchResultsData = performActualSearch(searchTerm);
    displaySearchResults(searchResultsData);
}

function performActualSearch(searchTerm) {
    
    if(searchTerm === "welcome"){
        return[
            { title: '<a id="welcomeLink" class="welcomeLink" href="#welcome">Welcome</a>', content:'Click link to jump to welcome section'},
        ]
    }
    else if(searchTerm === "events"){
        return[
            { title: '<a id="eventsLink" href="#events">About</a>', content:'Click link to jump to the Events section'},
        ]
    }
    else if(searchTerm === "about"){
        return[
            { title: '<a id="aboutLink" href="#about">About</a>', content:'Click link to jump to the About section'},
        ]
    }
    else if(searchTerm === "contact"){
        return[
            { title: '<a id="contactLink" href="#contactsection">Contact</a>', content:'Click link to jump to the Contact Section'},
        ]
    }
    else{
        return[
            { title: 'No results available.', content:'Please try again'},
        ]
    }
}

// Display search results in the results container
function displaySearchResults(results) {
    searchResults.removeAttribute("hidden");
    closeButton.removeAttribute("hidden");
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
        return;
    }

    const resultsHTML = results.map(result => `
        <div class="result">
            <h3>${result.title}</h3>
            <p>${result.content}</p>
        </div>
    `).join('');

    searchResults.innerHTML = resultsHTML;
}

closeButton.addEventListener('click', () => {
    searchResults.setAttribute("hidden", true);
    closeButton.setAttribute("hidden", true);

  });


const privacy1 = document.getElementById('privacy');

privacy1.addEventListener('click', () => {
    alert("Your privacy is important.");
});

const contact = document.getElementById('contact');

contact.addEventListener('click', () => {
    alert("Please contact ph1234567890 or lala@gmail.com to get in touch.");
});

const tac = document.getElementById("tac");

tac.addEventListener('click', () => {
alert("By participating in any activities, events, or programs organized by Future Sports, you agree to adhere to the following terms and conditions: Membership: Membership is open to individuals of all ages and skill levels who are passionate about rowing. To become a member, complete the registration process and pay the necessary fees.")
})