$(document).ready(() => {
  // Getting references to our form and inputs
  
  const sellername = $("#seller-name-input");
  console.log(sellername)
  // const selleraddress = $("#seller-address");
  const selleremail = $("#seller-email");
 
  const itemInput = $("#item-input");
  const askingPrice= $("#price-input");

  // When the form is submitted, we validate there's an sellername and password entered
  $('#sellerformBtn').on("click", event => {
    event.preventDefault();
    var newseller= {
      seller_name:  sellername.val(),
      // sellers_address:  selleraddress.val(),
      sellers_email:  selleremail.val(),
      item_name: itemInput.val(),
      item_price: askingPrice.val(),

    }
    console.log(newseller)

    $.ajax({
      type: "POST",
      url: '/newseller',
      data: newseller
  }).then(function () {
      console.log("Added a New Item: ");
      location.reload();
  })

  $("#seller-name-input").val("");
  $("#seller-email").val("");
  $("#item-input").val("");
  $("#price-input").val("");

});

 
  
});

