document.getElementById("toggleMenu").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("visible");
  });
  