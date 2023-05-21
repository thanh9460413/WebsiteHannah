
//---------------------------------------------------------------------------Lấy thông tin 100 Hannah-----------------------------------------------------------------------------------------
const hannahList = document.getElementById("lecturers-list");

function displayHannah(data) {
  hannahList.innerHTML = ""; // clear the previous list
  data.forEach((hannah) => {
    const listItem = document.createElement("div");
    listItem.classList.add("card");
    listItem.innerHTML = `
    <div class="card1" value="${hannah.id}">
        <div class="imgBx">
          <img src="${hannah.image}" />
        </div>
        <div class="content">
          <div class="details">
            <h4>
              ${hannah.title}
              <br />
              <span>Phòng: ${hannah.room}</span>
              <br />
              <span>${hannah.SDT}</span>
            </h4>
            <ul class="social_icons">
              <li>
                <a  href="${hannah.facebook}">
                <img src="./assets/img/icon_fb_48.png"/>
                </a>
              </li>
              <li>
                <a  href="#">
                  <img src="./assets/img/icon_discord_48.png"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./assets/img/icon_zalo_48.png"/>
                </a>
              </li>

            </ul>
          </div>
        </div>
        </div>
    `;
    hannahList.appendChild(listItem);
  });
}
//--------------------------------------------------------------------Đánh số trang----------------------------------------------------
function paginate(data, page_size, page_number) {
  // returns the data for the requested page
  return data.slice((page_number - 1) * page_size, page_number * page_size);
}

function createPaginationButtons(data, page_size) {
  // creates buttons to switch between pages
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";

  const numPages = Math.ceil(data.length / page_size);
  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.classList.add("page-item")
    button.innerText = i;
    button.addEventListener("click", () => {
      displayHannah(paginate(data, page_size, i));
    });
    paginationContainer.appendChild(button);
  }
}

// 

// ----------------------------------------------------------------- End Đánh số trang-------------------------------------------------------------------------------------

const hannahData = [
  { id:"1",title: "Hannah 1", image: "./assets/img/card.jpg", room: "1" , facebook: "https://www.facebook.com", SDT:"09123581540", Thongtin: "Hiện đang công tác tại Thành phố Hồ Chí Minh",Monhoc:"Web101x - Lập trình HTML",diadiem:"Tp.HCM"},
  { id:"2",title: "Hannah 2", image: "./assets/img/card.jpg", room: "2" , facebook: "https://www.facebook.com", SDT:"09123581542", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"FUN121x - Kiến thức máy tính căn bản",diadiem:"Hà Nội"},
  { id:"3",title: "Hannah 3", image: "./assets/img/card.jpg", room: "3" , facebook: "https://www.facebook.com", SDT:"09123581543", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"PRF192x - Lập trình Javascript",diadiem:"Tp.HCM"},
  { id:"4",title: "Hannah 4", image: "./assets/img/card.jpg", room: "4" , facebook: "https://www.facebook.com", SDT:"09123581541", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"FUN131x - Sử dụng công cụ Internet (email, mạng xã hội, ...)",diadiem:"Đà Nẵng" },
  { id:"5",title: "Hannah 5", image: "./assets/img/card.jpg", room: "5" , facebook: "https://www.facebook.com", SDT:"09123581544", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"CSI101x - Nguyên lý hoạt động của máy tính và ngôn ngữ lập trình",diadiem:"Tp.HCM" },
  { id:"6",title: "Hannah 6", image: "./assets/img/card.jpg", room: "5" , facebook: "https://www.facebook.com", SDT:"09123581544", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"PRO192x - Lập trình hướng đối tượng (Java)",diadiem:"Tp.HCM" },
  { id:"7",title: "Hannah 7", image: "./assets/img/card.jpg", room: "5" , facebook: "https://www.facebook.com", SDT:"09123581544", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"PRM391x - Lập trình di động (Android)",diadiem:"Tp.HCM" },
  { id:"8",title: "Hannah 8", image: "./assets/img/card.jpg", room: "5" , facebook: "https://www.facebook.com", SDT:"09123581544", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"GAD101x - Lập trình game (Unity)",diadiem:"Tp.HCM" },
];


//-----------------------------------------------------------------------------Filter theo room-----------------------------------------------------------------------------
function filterHannah() {
  const selectedValue = document.getElementById("filter-dropdown").value;
  
  let filteredData = hannahData;
  if (selectedValue) {
    filteredData = hannahData.filter(hannah => hannah.room === selectedValue);
  }
  displayHannah(paginate(filteredData, pageSize, 1));
  createPaginationButtons(filteredData, pageSize);
  //----------------------------------------------------------------------------Click Card 100 Hannah------------------------------------------------------------------------
  const hannahButtons = document.querySelectorAll('.card1');
  // Select the modal elements
  const modal = document.querySelector('.js-modal');
  const modalContainer = document.querySelector('.js-modal-container');
  
  // Define the function to display the modal
  function showModal() {
    modal.classList.add('open');
  }
  
  // Define the function to hide the modal and clear data
  function hideModal() {
    modal.classList.remove('open');
    // Clear the data added to the modal
    const modalBodies = document.querySelectorAll('#lecturers-listClick');
    modalBodies.forEach(body => {
      body.innerHTML = ''; // Clear the HTML content of each modal body
    });
  }
  
  
  // Loop through each button and listen for clicks
  hannahButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('value');
      const filteredData = hannahData.filter(item => item.id === id);
      displayHannahNewClick(filteredData);
      showModal(); // Display the modal when the button is clicked
      
    });
  });
  
  // Listen for clicks on the modal close button
  modal.addEventListener('click', event => {
    if (event.target.classList.contains('js-modal-close') || event.target === modal) {
      hideModal(); // Hide the modal and clear data when the close button or background is clicked
    }
  });
  
  // Listen for clicks on the modal background
  modal.addEventListener('click', () => {
    hideModal(); // Hide the modal and clear data when the background is clicked
  });
//--------------------------------------------------------------------------------End Click Card 100 Hannah---------------------------------------------------------------------
}
//-----------------------------------------Filter Mon hoc----------------------------
function filterHannahMonHoc() {
  const selectedValue = document.getElementById("filter-dropdown2").value;
  
  let filteredData = hannahData;
  if (selectedValue) {
    filteredData = hannahData.filter(hannah => hannah.Monhoc === selectedValue);
  }
  displayHannah(paginate(filteredData, pageSize, 1));
  createPaginationButtons(filteredData, pageSize);
  //----------------------------------------------------------------------------Click Card 100 Hannah------------------------------------------------------------------------
  const hannahButtons = document.querySelectorAll('.card1');
  // Select the modal elements
  const modal = document.querySelector('.js-modal');
  const modalContainer = document.querySelector('.js-modal-container');
  
  // Define the function to display the modal
  function showModal() {
    modal.classList.add('open');
  }
  
  // Define the function to hide the modal and clear data
  function hideModal() {
    modal.classList.remove('open');
    // Clear the data added to the modal
    const modalBodies = document.querySelectorAll('#lecturers-listClick');
    modalBodies.forEach(body => {
      body.innerHTML = ''; // Clear the HTML content of each modal body
    });
  
  }
  
  
  // Loop through each button and listen for clicks
  hannahButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('value');
      const filteredData = hannahData.filter(item => item.id === id);
      displayHannahNewClick(filteredData);
      showModal(); // Display the modal when the button is clicked
      
    });
  });
  
  // Listen for clicks on the modal close button
  modal.addEventListener('click', event => {
    if (event.target.classList.contains('js-modal-close') || event.target === modal) {
      hideModal(); // Hide the modal and clear data when the close button or background is clicked
    }
  });
  
  // Listen for clicks on the modal background
  modal.addEventListener('click', () => {
    hideModal(); // Hide the modal and clear data when the background is clicked
  });
//--------------------------------------------------------------------------------End Click Card 100 Hannah---------------------------------------------------------------------
}

//-----------------------filterDiaDiem------------------
function filterHannahDiadiem() {
  const selectedValue = document.getElementById("filter-dropdown1").value;
  
  let filteredData = hannahData;
  if (selectedValue) {
    filteredData = hannahData.filter(hannah => hannah.diadiem === selectedValue);
  }
  displayHannah(paginate(filteredData, pageSize, 1));
  createPaginationButtons(filteredData, pageSize);
  //----------------------------------------------------------------------------Click Card 100 Hannah------------------------------------------------------------------------
  const hannahButtons = document.querySelectorAll('.card1');
  // Select the modal elements
  const modal = document.querySelector('.js-modal');
  const modalContainer = document.querySelector('.js-modal-container');
  
  // Define the function to display the modal
  function showModal() {
    modal.classList.add('open');
  }
  
  // Define the function to hide the modal and clear data
  function hideModal() {
    modal.classList.remove('open');
    // Clear the data added to the modal
    const modalBodies = document.querySelectorAll('#lecturers-listClick');
    modalBodies.forEach(body => {
      body.innerHTML = ''; // Clear the HTML content of each modal body
    });
  
  }
  
  
  // Loop through each button and listen for clicks
  hannahButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('value');
      const filteredData = hannahData.filter(item => item.id === id);
      displayHannahNewClick(filteredData);
      showModal(); // Display the modal when the button is clicked
      
    });
  });
  
  // Listen for clicks on the modal close button
  modal.addEventListener('click', event => {
    if (event.target.classList.contains('js-modal-close') || event.target === modal) {
      hideModal(); // Hide the modal and clear data when the close button or background is clicked
    }
  });
  
  // Listen for clicks on the modal background
  modal.addEventListener('click', () => {
    hideModal(); // Hide the modal and clear data when the background is clicked
  });
//--------------------------------------------------------------------------------End Filter Click------------------------------------------------------------------------------
//--------------------------------------------------------------------------------End Click Card 100 Hannah---------------------------------------------------------------------
}
//-----------------------------------Khai báo trang và chạy đoạn phân trang----------------------------------------------------
const pageSize = 12; // number of items per page
displayHannah(paginate(hannahData, pageSize, 1));
createPaginationButtons(hannahData, pageSize);
//------------------------------------------------End--------------------------------------------------------------------------
//------------------------------------------------Filter--------------------------------------------------------------------
const hannahFilterSort = document.getElementById("lecturers-filter");

function displayFilterSort(data) {
  const filteredData = removeDuplicatesRoom(data);
  const sortedData = sortByroom(filteredData);

  hannahList.innerHTML = ""; // clear the previous list

  const selectElement = document.createElement("select");
  selectElement.id = "filter-dropdown";
  selectElement.classList.add("drop");
  selectElement.addEventListener("change", filterHannah);

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.text = "Tất cả phòng";
  selectElement.appendChild(allOption);

  sortedData.forEach((hannah) => {
    const optionElement = document.createElement("option");
    optionElement.value = hannah.room;
    optionElement.text = `Phòng số ${hannah.room}`;
    selectElement.appendChild(optionElement);
  });

  const listItem = document.createElement("div");
  listItem.classList.add("drop-down");
  listItem.appendChild(selectElement);

  hannahFilterSort.innerHTML = "";
  hannahFilterSort.appendChild(listItem);

  filterHannah(); // call filterHannah with an empty value to show all Hannah

 
}


//------------------------------------------------------------
// call filterHannah with an empty value to show all Hannah
//  
const hannahFilterTp = document.getElementById("lecturers-filter1");

function displayFilterSort1(data) {
  const filteredData = removeDuplicatesDiadiem(data);
  const sortedData = sortBydiadiem(filteredData);

  hannahList.innerHTML = ""; // clear the previous list

  const selectElement = document.createElement("select");
  selectElement.id = "filter-dropdown1";
  selectElement.classList.add("drop");
  selectElement.addEventListener("change", filterHannahDiadiem);

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.text = "Tất cả địa điểm";
  selectElement.appendChild(allOption);

  sortedData.forEach((hannah) => {
    const optionElement = document.createElement("option");
    optionElement.value = hannah.diadiem;
    optionElement.text = `${hannah.diadiem}`;
    selectElement.appendChild(optionElement);
  });

  const listItem = document.createElement("div");
  listItem.classList.add("drop-down");
  listItem.appendChild(selectElement);

  hannahFilterTp.innerHTML = "";
  hannahFilterTp.appendChild(listItem);

  filterHannahDiadiem();
 }
 const hannahFilter = document.getElementById("lecturers-filter2");

function displayFilterSort2(data) {
  const filteredData = removeDuplicatesMonHoc(data);
  const sortedData = sortBymonhoc(filteredData);

  hannahList.innerHTML = ""; // clear the previous list

  const selectElement = document.createElement("select");
  selectElement.id = "filter-dropdown2";
  selectElement.classList.add("drop");
  selectElement.addEventListener("change", filterHannahMonHoc);

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.text = "Tất cả môn học";
  selectElement.appendChild(allOption);

  sortedData.forEach((hannah) => {
    const optionElement = document.createElement("option");
    optionElement.value = hannah.Monhoc;
    optionElement.text = `${hannah.Monhoc}`;
    selectElement.appendChild(optionElement);
  });

  const listItem = document.createElement("div");
  listItem.classList.add("drop-down");
  listItem.appendChild(selectElement);

  hannahFilter.innerHTML = "";
  hannahFilter.appendChild(listItem);

  filterHannahMonHoc();
 }  // call filterHannah with an empty value to show all Hannah
  //---------------------------------------------------Xóa các phần tử bị trùng---------------------------------------------------------
  function removeDuplicatesRoom(data) {
    const filteredData = [];
    data.forEach((hannah) => {
      const index = filteredData.findIndex((item) => item.room === hannah.room);
      if (index === -1) {
        filteredData.push(hannah);
      }
    });
    return filteredData;
  }
  function removeDuplicatesMonHoc(data) {
    const filteredData = [];
    data.forEach((hannah) => {
      const index = filteredData.findIndex((item) => item.Monhoc === hannah.Monhoc);
      if (index === -1) {
        filteredData.push(hannah);
      }
    });
    return filteredData;
  }
  function removeDuplicatesDiadiem(data) {
    const filteredData = [];
    data.forEach((hannah) => {
      const index = filteredData.findIndex((item) => item.diadiem === hannah.diadiem);
      if (index === -1) {
        filteredData.push(hannah);
      }
    });
    return filteredData;
  }
  //--------------------------------------------------------End-------------------------------------------------------------------------
  //----------------------------------------------------------Sắp xếp tăng dần----------------------------------------------------------
  function sortByroom(data) {
    return data.sort((a, b) => a.room - b.room);
  }
  function sortBymonhoc(data) {
    return data.sort((a, b) => a.Monhoc - b.Monhoc);
  }
  function sortBydiadiem(data) {
    return data.sort((a, b) => a.diadiem - b.diadiem);
  }
  displayFilterSort(hannahData);
  //------------------------------------------------------------End Sắp xếp tăng dần----------------------------------------------------
  displayFilterSort1(hannahData);
  displayFilterSort2(hannahData);
//-----------------------------------------------------------------------------------------End Lấy thông tin 100 Hannah--------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------Lấy thông tin Hannah mới gia nhập---------------------------------------------------------------------------------
const hannahListNew = document.getElementById("lecturers-listNew");

function displayHannahNew(data) {
  data.forEach((hannah) => {
    const listItem = document.createElement("div");
    listItem.classList.add("card");
    listItem.innerHTML = `
    <div class="main__card" value="${hannah.id}">
        <div class="imgBx">
          <img src="${hannah.image}" />
        </div>
        <div class="content">
          <div class="details">
            <h4>
              ${hannah.title}
              <br />
              <span>Phòng: ${hannah.room}</span>
              <br />
              <span>${hannah.SDT}</span>
            </h4>
            <ul class="social_icons">
              <li>
                <a  href="${hannah.facebook}">
                <img src="./assets/img/icon_fb_48.png"/>
                </a>
              </li>
              <li>
                <a  href="#">
                  <img src="./assets/img/icon_discord_48.png"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./assets/img/icon_zalo_48.png"/>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
`;
    hannahListNew.appendChild(listItem);
  });
}



// Example usage
const hannahDataNew = [
  { id:"1",title: "Hannah 1", image: "./assets/img/card.jpg", room: "3", facebook: "https://www.facebook.com", SDT:"09123581545", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"Web101x - Lập trình HTML" },
  { id:"2",title: "Hannah 2", image: "./assets/img/card.jpg", room: "2", facebook: "https://www.facebook.com", SDT:"09123581546", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"Web101x - Lập trình HTML" },
  { id:"3",title: "Hannah 3", image: "./assets/img/card.jpg", room: "4", facebook: "https://www.facebook.com", SDT:"09123581547", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"Web101x - Lập trình HTML" },
  { id:"4",title: "Hannah 4", image: "./assets/img/card.jpg", room: "4", facebook: "https://www.facebook.com", SDT:"09123581547", Thongtin: "Hiện đang công tác tại trụ sở Hà Nội", Monhoc:"Web101x - Lập trình HTML" },
];

const hannahListClick = document.getElementById("lecturers-listClick");
//------------------------------------------------------------------------------------ Click Card------------------------------------------------------------------------------------------
function displayHannahNewClick(data) {
  data.forEach((hannah) => {
    const listItem = document.createElement("div");
    listItem.classList.add("modal-container","js-modal-container");
    listItem.innerHTML = `
    <div class="modal-close js-modal-close">
    <i class="ri-close-line"></i>
      </div>

      <div class="modal__body">
        <div class="modal__body-name">
          <h2>${hannah.title}</h2>
        </div>
        <div class="modal__body-position">
          <p>Số phòng ${hannah.room}</p>
        </div>
        <div class="modal__body-detailsposition">
          <p>${hannah.Thongtin}</p>
        </div>
        <div class="modal-body-desc">
        </div>
      </div>

      <footer class="modal-footer">
        <a href="">
          <i class="ri-linkedin-fill"></i>
          <p>Follow on Linkein</p>
        </a>
      </footer>
`;
  hannahListClick.appendChild(listItem); // add this line to append listItem to hannahListClick
  });
  
}

displayHannahNew(hannahDataNew);
const hannahButtons = document.querySelectorAll('.main__card');
// Select the modal elements
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');

// Define the function to display the modal
function showModal() {
  modal.classList.add('open');
}

// Define the function to hide the modal and clear data
function hideModal() {
  modal.classList.remove('open');
  // Clear the data added to the modal
  const modalBodies = document.querySelectorAll('#lecturers-listClick');
  modalBodies.forEach(body => {
    body.innerHTML = ''; // Clear the HTML content of each modal body
  });

}


// Loop through each button and listen for clicks
hannahButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('value');
    const filteredData = hannahDataNew.filter(item => item.id === id);
    displayHannahNewClick(filteredData);
    showModal(); // Display the modal when the button is clicked
    
  });
});

// Listen for clicks on the modal close button
modal.addEventListener('click', event => {
  if (event.target.classList.contains('js-modal-close') || event.target === modal) {
    hideModal(); // Hide the modal and clear data when the close button or background is clicked
  }
});

// Listen for clicks on the modal background
modal.addEventListener('click', () => {
  hideModal(); // Hide the modal and clear data when the background is clicked
});

// const qrcode = require('qrcode');

// const qrcode = require('qrcode');

// function generateQRCode(data) {
//   const filteredData = data.map(({ title, room, Monhoc, diadiem }) => ({ title, room, Monhoc, diadiem }));
//   const text = JSON.stringify(filteredData);
//   qrcode.toFile('./qrcode.png', text, { errorCorrectionLevel: 'H', width: 500 }, (err) => {
//     if (err) throw err;
//     console.log('QR code generated successfully!');
    
//     const qrCodeElement = document.getElementsByClassName('imgBx');
//     qrCodeElement.style.backgroundImage = `url('./qrcode.png')`;

//   });
// }

// generateQRCode(hannahData);
// --------------------------------------------------------------------------------- End Click Card----------------------------------------------------------------------------------
// --------------------------------------------------------------------------------- End Lấy thông tin Hannah mới gia nhập--------------------------------------------------------------------------


//--------------------------------------------------------------------------------------Animation---------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------Advanced staggering with anime.js-----------------------------------------------------------------------------
function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

var advancedStaggeringAnimation = (function() {

  var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
  var dotsFragment = document.createDocumentFragment();
  var grid = [20, 10];
  var cell = 55;
  var numberOfElements = grid[0] * grid[1];
  var animation;
  var paused = true;
  
  fitElementToParent(staggerVisualizerEl, 0);

  for (var i = 0; i < numberOfElements; i++) {
    var dotEl = document.createElement('div');
    dotEl.classList.add('dot');
    dotsFragment.appendChild(dotEl);
  }

  dotsWrapperEl.appendChild(dotsFragment);

  var index = anime.random(0, numberOfElements-1);
  var nextIndex = 0;

  anime.set('.stagger-visualizer .cursor', {
    translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
    translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
    translateZ: 0,
    scale: 1.5,
  });

  function play() {

    paused = false;
    if (animation) animation.pause();

    nextIndex = anime.random(0, numberOfElements-1);

    animation = anime.timeline({
      easing: 'easeInOutQuad',
      complete: play
    })
    .add({
      targets: '.stagger-visualizer .cursor',
      keyframes: [
        { scale: .75, duration: 120}, 
        { scale: 2.5, duration: 220},
        { scale: 1.5, duration: 450},
      ],
      duration: 300
    })
    .add({
      targets: '.stagger-visualizer .dot',
      keyframes: [
        {
          translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
          duration: 100
        }, {
          translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
          scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
          duration: 225
        }, {
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 1200,
        }
      ],
      delay: anime.stagger(80, {grid: grid, from: index})
    }, 30)
    .add({
      targets: '.stagger-visualizer .cursor',
      translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
      translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
      scale: 1.5,
      easing: 'cubicBezier(.075, .2, .165, 1)'
    }, '-=800')

    index = nextIndex;

  }

  play();

})();
//--------------------------------------------------------------------------------End Advanced staggering with anime.js---------------------------------------------------------------
//---------------------------------------------------------------------------------------End Animation--------------------------------------------------------------------------------

var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
})();


function toggleFixedPosition(element) {
  element.classList.toggle('active');
}