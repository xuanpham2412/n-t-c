const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formTitle = document.getElementById("form-title");

document.getElementById("switch-to-register").onclick = function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  formTitle.textContent = "Đăng ký";
};

document.getElementById("switch-to-login").onclick = function () {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Đăng nhập";
};

// Đăng ký - lưu vào localStorage
registerForm.onsubmit = function (e) {
  e.preventDefault();
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  localStorage.setItem(username, password);
  alert("Đăng ký thành công!");
  registerForm.reset();

  // 👉 Chuyển sang trang chủ
  window.location.href = "trangchu.html"; // đường dẫn tới trang chủ của bạn
};

// Đăng nhập - kiểm tra từ localStorage
loginForm.onsubmit = function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const savedPassword = localStorage.getItem(username);

  if (savedPassword && savedPassword === password) {
    alert("Đăng nhập thành công!");

    // 👉 Chuyển sang trang chủ
    window.location.href = "../trangchu.html"; // hoặc "../trangchu.html" nếu cần
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu.");
  }
};
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
