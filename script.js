
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

      
  
      });
      
    });
    function getSignup(all = true) {

      
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://autobuttsrollout-174c.restdb.io/rest/signup",
        "method": "GET", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }};
      
})