$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userName = $("input#name").val();
    var userAddress = $("input#address").val();
    var userItem = $("#item").val();
    // debugger;
    $(".user-name").text(userName);
    $(".user-address").text(userAddress);
    $(".user-item").text(userItem);
    $(".receipt").show();
    $("#formOne").hide();
    event.preventDefault();
  });
});
