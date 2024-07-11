const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

/*************************SILDE SHOW SCRIPT***********************/

var swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  /*********************review section**********/
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

  /****************************************** */
  const container = document.querySelector(".seat-container");
  const seats = document.querySelectorAll(".seat-row .seat:not(.sold)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const movieSelect = document.getElementById("movie");
  
  populateUI();
  
  let ticketPrice = +movieSelect.value;
  
  // Save selected movie index and price
  function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
  }
  
  // Update total and count
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".seat-row .seat.selected");
  
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
  }
  
  
  // Get data from localstorage and populate UI
  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          console.log(seat.classList.add("selected"));
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
      console.log(selectedMovieIndex)
    }
  }
  console.log(populateUI())
  // Movie select event
  movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });
  
  // Seat click event
  container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");
  
      updateSelectedCount();
    }
  });
  
  // Initial count and total set
  updateSelectedCount();
  

function changeImage() {
  const movieSelector = document.getElementById('movie');
  const movieImage = document.getElementById('movie-image');
  const selectedMovieId = movieSelector.options[movieSelector.selectedIndex].id;
  switch(selectedMovieId) {
    case 'movie1':
      movieImage.src = 'image/movie-img1.jpg';
      break;
    case 'movie2':
      movieImage.src = 'image/movie-img3.jpg';
      break;
    case 'movie3':
      movieImage.src = 'image/movie-img2.jpg';
      break;
      case 'movie4':
      movieImage.src = 'image/movie-img4.jpg';
      break;
    default:
      movieImage.src = 'image/movie-img1.jpg';
      break;
  }
}
