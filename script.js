$(document).ready(function () {
  const APIKEY = "63e48c27478852088da67f04";

  const loadingAnimation = document.getElementById("loading-animation");
  $("#signup-submit").on("click", function (e) {
    e.preventDefault();

    let signupEmail = $("#signup-email").val();
    let signupStudentid = $("#signup-studentid").val();
    let signupPassword = $("#signup-password").val();

    let jsondata = {
      "email": signupEmail,
      "studentid": signupStudentid,
      "password": signupPassword
    };

    console.log(jsondata);

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://autobuttsrollout-174c.restdb.io/rest/signup",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function () {
        $("#signup-submit").prop("disabled", true);
        $("#add-signup-form").trigger("reset");
      }
    };

    $("#login-animation").show();
    setTimeout(function () {
      
      window.location.href = "loginpage.html";
    }, 3000);

    $.ajax(settings).done(function (response) {
      console.log(response);
      $("#signup-submit").prop("disabled", false);
      alert('Registered Successfully!');
    });
  });

  $("#login-form").on("submit", function (e) {
    e.preventDefault();
    const email = $("#login-email").val();
    const password = $("#login-password").val();
    console.log("Email:", email, "Password:", password);

    const url = "https://autobuttsrollout-174c.restdb.io/rest/signup";

    console.log("API URL:", url);
    const headers = {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    };

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
      "headers": headers,
      "processData": false
    };

    $("#login-animation").show();
    setTimeout(function () {
    }, 3000);
    

    $.ajax(settings).done(function (response) {
      console.log(response);
      var match = false;
      for (account of response) {
        console.log(account);
        if (email == account.email && password == account.password) {
          console.log('match');
          match = true;
          break;
        }
      }

      if (match) {
        window.location.href = "logged-in.html";
      } else {
        alert("Invalid email or password");
      }
    });
  });
});



