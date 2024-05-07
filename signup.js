<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virtual Try On</title>
  <link rel="stylesheet" href="signup.css">
</head>

<body>
  <form id="signupForm">
    <div class="wrapper">
      <h1 style="text-align: center;">Sign Up Form</h1>
      <hr>
      <div class="email">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required>
      </div>

      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" id="password" required>

      <label for="repeatPassword"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="repeatPassword" id="repeatPassword" required>

      <label>
        <input type="checkbox" checked="checked" name="remember" style="marginbottom: 15px"> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <button type="submit" class="signup">Sign Up</button>
      <button type="button" class="signup" onclick="signUpWithGoogle()">Sign Up with Google Account</button>
      <button type="button" class="home-button" onClick="location.href='main_page.html'">Go Home</button>
    </div>
  </form>

  <script>
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      var password = document.getElementById('password').value;
      var repeatPassword = document.getElementById('repeatPassword').value;

      if (password !== repeatPassword) {
        alert("Passwords do not match.");
        event.preventDefault(); // 폼 제출 방지
      }
    });

    function signUpWithGoogle() {
      // Google 계정으로 회원가입 처리
      alert("Sign up with Google clicked.");
    }
  </script>

</body>

</html>
