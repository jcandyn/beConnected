
getContacts()

$("#addName").on("click", function() {
    event.preventDefault()
    let addName = $("#inputName")
    alert(addName.val())

    var newContact = {
        name: addName.val().trim()
      };

      submitContact(newContact)
});


function getContacts() {
    $.get("/api/contacts/", function(data){
        console.log("data",data)
    })
}


function submitContact(Contact) {
    $.post("/api/contacts/", Contact, function() {
        alert('success, check DB')
      window.location.href = "/";
    });
  }
