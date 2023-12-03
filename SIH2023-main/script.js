
// Code for type-writer animation

var typed = new Typed("#movingText", {
  strings: ["नमस्ते", "নমস্কার", "ନମସ୍କାର", "வணக்கம்", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"],
  typeSpeed: 120,
  backSpeed: 75,
  loop: true,
});

// Code for type-writer animation

// Code for scroll animations

const animation = document.querySelectorAll('.scrollAnimation');
window.addEventListener('scroll',move);
move();
function move(){
    const triggerBottom = window.innerHeight;
    animation.forEach(textShadow => {
        const textTop = textShadow.getBoundingClientRect().top;
        if(textTop < triggerBottom){
            textShadow.classList.add('show');
        }
        else{
            textShadow.classList.remove('show');
        }
    });
}

// Code for scroll animations

//Code for video playback control on banner

const ppbutton = document.getElementById("vidbutton");
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("bannerVid");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        }
    else  {
        myVideo.pause(); 
        }
}

// Code for video playback control on banner

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 1800);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
//indias map
google.load("visualization", "1", { packages: ["geochart"] });
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ["State Code", "State", "Population"],
    ["IN-UP", "Uttar Pradesh", 235687000],
    ["IN-MH", "Maharashtra", 126385000],
    ["IN-BR", "Bihar", 126756000],
    ["IN-WB", "West Bengal", 99084000],
    ["IN-MP", "Madhya Pradesh", 86579000],
    ["IN-TN", "Tamil Nadu", 76860000],
    ["IN-RJ", "Rajasthan", 81025000],
    ["IN-KA", "Karnataka", 67692000],
    ["IN-GJ", "Gujarat", 71507000],
    ["IN-AP", "Andhra Pradesh", 53156000],
    ["IN-OR", "Orissa", 46276000],
    ["IN-TG", "Telangana", 38090000],
    ["IN-KL", "Kerala", 35776000],
    ["IN-JH", "Jharkhand", 39466000],
    ["IN-AS", "Assam", 35713000],
    ["IN-PB", "Punjab", 30730000],
    ["IN-CT", "Chhattisgarh", 30180000],
    ["IN-HR", "Haryana", 30209000],
    ["IN-JK", "Jammu and Kashmir", 13603000],
    ["IN-UT", "Uttarakhand", 11637000],
    ["IN-HP", "Himachal Pradesh", 7468000],
    ["IN-TR", "Tripura", 4147000],
    ["IN-ML", "Meghalaya", 3349000],
    ["IN-MN", "Manipur", 3223000],
    ["IN-NL", "Nagaland", 2233000],
    ["IN-GA", "Goa", 1575000],
    ["IN-AR", "Arunachal Pradesh", 1562000],
    ["IN-MZ", "Mizoram", 1238000],
    ["IN-SK", "Sikkim", 689000],
    ["IN-DL", "Delhi", 21359000],
    ["IN-PY", "Puducherry", 1646000],
    ["IN-CH", "Chandigarh", 689000],
    ["IN-AN", "Andaman and Nicobar Islands", 403000],
    ["IN-DN", "Dadra and Nagar Haveli", 1263000],
    ["IN-DD", "Daman and Diu", 63150],
    ["IN-LD", "Lakshadweep", 300000],
  ]);

  var opts = {
    region: "IN",
    domain: "IN",
    displayMode: "regions",
    colorAxis: {
      colors: ["#88efd0", "#27baa7", "#0c6a7a", "#083f69", "#041940"],
    },
    resolution: "provinces",
    /*backgroundColor: '#81d4fa',*/
    /*datalessRegionColor: '#81d4fa',*/
    defaultColor: "#f5f5f5",
    width: 1120,
    height: 680,
  };
  var geochart = new google.visualization.GeoChart(
    document.getElementById("visualization")
  );
  geochart.draw(data, opts);
}


const dropArea = document.getElementById('drop-area');

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.style.border = '2px dashed #aaa';
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.style.border = '2px dashed #ccc';
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.style.border = '2px dashed #ccc';

        const fileList = e.dataTransfer.files;
        const fileInput = document.getElementById('fileInput');
        fileInput.files = fileList;

        updateFileList();
    });

    document.getElementById('fileInput').addEventListener('change', updateFileList);

    function updateFileList() {
        const fileList = document.getElementById('fileInput').files;
        const output = document.getElementById('fileList');
        output.innerHTML = '';

        for (const file of fileList) {
            output.innerHTML += `<p>${file.name}</p>`;
        }
    }