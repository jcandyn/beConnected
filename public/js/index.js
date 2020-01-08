
$( document ).ready(function() {
    console.log( "ready!" );
    getContacts() 
})




$("#addName").on("click", function() {
    event.preventDefault()
    let addName = $("#inputName")
    alert(addName.val())

    var newContact = {
        name: addName.val().trim(),
        contacted: false
      };

      submitContact(newContact)
});


function getContacts() {
    $("#contactsNeedToReach").empty()
    $.get("/api/contacts/", function(data){
        console.log("data",data)
        sortContacts(data)
    })
}

function sortContacts(data) {

   for (var i=0; i < data.length; i++) {
    if (data[i].contacted === false) {
       console.log(data[i].name)
      
       $("#contactsNeedToReach").append('<div class="row" style="padding-top: 20px"><div class="col"><h5><a href="">' + data[i].name + '</a></h5></div><div class="col"><button class="contactedBtn btn btn-outline-secondary" name=' + data[i].name + '><i class="fa fa-exchange" aria-hidden="true"></i></button></div></div>');
   }

   else if (data[i].contacted === true) {
    console.log(data[i].name)
      
    $("#contactsAlreadyReached").append('<p><a href="">' + data[i].name + '</a></p>');
   }
 }
 $(".contactedBtn").on("click", function() {
    alert($(this).attr('name'))
    // grab info about name from database using get request
    // update contacted in database to !opposite of what it is using post request to update

    getContacts()
})
}




function submitContact(Contact) {
    $.post("/api/contacts/", Contact, function() {
        alert('success, check DB')
      window.location.href = "/";
    });
  }
