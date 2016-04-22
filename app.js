$(document).ready(function(){

var seat = 'Seat99';

  $(".col-md-3").click(function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
    seat = $(this).attr('id');
  });

  $("#submit").on("click",function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var contact = $("#contactno").val();
    
    // console.log(name+email+contact);
    alert("Hello, " + name + ".  Your phone number is " + contact + " and your email is " + email + ".  Thank you for reserving " + seat + ".");
  });
  
          
    // if (name === "" || email === "" || contactno === ""){
    //   alert("Please Fill All Fields");
    //     }else {
    //       if (validateEmail(email)) {
    //         $("#contactdiv").css("display", "none");
    //       }else {
    //           alert('Invalid Email Address');
    //         };
          
    //         function validateEmail(email) {
    //           var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    //           if (filter.test(email)) {
    //             return true;
    //           }else {
    //             return false;
    //           }
    //         }
    //       }
    //     });
  

  });
   