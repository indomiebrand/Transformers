
$(document).ready(function () {
    const APIKEY = "63e48c27478852088da67f04";
    

    $("#signup-submit").on("click", function (e) {
      e.preventDefault();

      let signupEmail = $("#signup-email").val();
      let signupStudentid = $("#signup-studentid").val();
      let signupPassword = $("#signup-password").val();


      let jsondata = {
        "email": signupEmail,
        "studentid" : signupStudentid,
        "password" : signupPassword
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
        "beforeSend": function(){

          $("#signup-submit").prop( "disabled", true);
          $("#add-signup-form").trigger("reset");

        }
      }


      $.ajax(settings).done(function (response) {
        console.log(response);

       $("#signup-submit").prop( "disabled", false);

       getSignup();

      });

    });


    $("#login-form").on("submit", function (e) {
      e.preventDefault();
      const email = $("#login-email").val();
      const password = $("#login-password").val();
      console.log("Email:", email, "Password:", password);
  
      const url = `https://autobuttsrollout-174c.restdb.io/rest/user-accounts?q={"email":"${email}","password":"${password}"}`;
      
      console.log("API URL:", url);
      const headers = {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      };
  
      $.ajax({
        url: url,
        type: "GET",
        headers: headers,
        success: function (response) {
          console.log("API response:", response);
          if (response.length > 0) {
            // User account found, redirect to logged-in page
            window.location.href = "logged-in.html";
          } else {
            // User account not found, display error message
            alert("Invalid email or password");
          }
        },
        error: function (xhr, status, error) {
          console.log("Error:", error);
        }
      });
    });
})

