// 코드1
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form-submit");
const loginErrorMsg = document.querySelector("#login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});



//코드2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virtual Try On Login Page</title>
  <link rel="stylesheet" href="login_style.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
  <div class="wrapper">
    <form id="loginForm" onsubmit="return loginUser();">

      <h1>Login</h1>

      <div class="input-box">
        <input type="text" placeholder="Username" id="usernameInput" required>
        <i class='bx bxs-user'></i>
      </div>

      <div class="input-box">
        <input type="password" placeholder="Password" id="passwordInput" required>
        <i class='bx bxs-lock-alt' ></i>
      </div>

      <div class="remember-forgot">
        <label><input type="checkbox">Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>

      <button type="submit" class="btn">Login</button>
      
      <button type="button" class="btn" onclick="loginWithGoogle()">Google Login</button>

      <div class="register-link">
        <p>Don't have an account? <a href="signup.html">Register</a></p>
      </div>

    </form>
  </div>

  <script>
    function loginUser() {
      var username = document.getElementById('usernameInput').value;
      var password = document.getElementById('passwordInput').value;

      // 예: 서버로 로그인 정보 전송 및 처리
      // 여기서는 간단히 콘솔에 출력
      console.log("Username:", username);
      console.log("Password:", password);

      // 폼 제출 방지
      return false;
    }

    function loginWithGoogle() {
      // Google 로그인 처리 (예: Google OAuth API 사용)
      // 여기서는 간단히 콘솔에 출력
      console.log("Initiating Google Login...");

      // Google 로그인 API 호출 등의 작업
      // 이 곳에 Google 로그인 프로세스를 처리하는 코드를 추가합니다.
    }
  </script>
</body>
</html>
