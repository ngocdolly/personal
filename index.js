var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  /* Lấy tất cả phần tử có class là "dropbtn" */
var dropdownBtns = document.querySelectorAll('.dropbtn');

/* Lặp qua từng phần tử và thêm sự kiện click */
dropdownBtns.forEach(function(dropdownBtn) {
  /* Lấy phần tử dropdown-content tương ứng */
  var dropdownContent = dropdownBtn.nextElementSibling;

  /* Thêm sự kiện click cho nút dropdown */
  dropdownBtn.addEventListener('click', function() {
    /* Toggle class "active" cho phần tử dropdown-btn */
    this.classList.toggle('active');

    /* Toggle class "show" cho phần tử dropdown-content */
    dropdownContent.classList.toggle('show');

    /* Thêm class "active" cho phần tử dropdown-content khi nó hiển thị */
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.add('active');
    } else {
      /* Xóa class "active" khi dropdown-content bị ẩn */
      dropdownContent.classList.remove('active');
    }
  });
});

/* Đóng danh sách khi click bên ngoài */
window.onclick = function(event) {
  /* Lấy tất cả phần tử có class là "dropdown-content" */
  var dropdownContents = document.querySelectorAll('.dropdown-content');
  
  /* Lặp qua từng phần tử */
  dropdownContents.forEach(function(dropdownContent) {
    if (!event.target.matches('.dropbtn')) {
      /* Kiểm tra xem phần tử đó có class "show" hay không */
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
        /* Xóa class "active" khi dropdown-content bị ẩn */
        dropdownContent.classList.remove('active');
      }
    }
  });
}
;
// Get the hidden-menu button and hidden-menu-bar
const hiddenMenuBtn = document.querySelector('.hidden-menu i');
const hiddenMenuBar = document.querySelector('.hidden-menu-bar');

// Add a click event listener to the hidden-menu button
hiddenMenuBtn.addEventListener('click', () => {
  // Toggle the "active" class on the hidden-menu-bar
  hiddenMenuBar.classList.toggle('active');
});

// Add a click event listener to the document
document.addEventListener('click', (event) => {
  // If the click target is not the hidden-menu button or hidden-menu-bar
  if (!event.target.matches('.hidden-menu i') && !event.target.matches('.hidden-menu-bar a')) {
    // Remove the "active" class from the hidden-menu-bar
    hiddenMenuBar.classList.remove('active');
  }
});
