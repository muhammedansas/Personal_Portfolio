function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email"). value ,
        message : document.getElementById("msg").value
    }
    emailjs.send("service_pelkqak", "template_l22wb0q", params)
    .then(
        message => {
          if(message != "OK"){
              swal("Successful", "You clicked the button!", "success");
          }
          else{
              swal("Error", "You clicked the button!", "Error");
          }
        }
      );
}