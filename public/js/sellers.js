$(document).ready(() => {
  const sellername = $("#seller-name-input");
  const sellerBio = $("#seller-bio");
  const selleremail = $("#seller-email");
  const itemInput = $("#item-input");
  const askingPrice= $("#price-input");

  $('#sellerformBtn').on("click", event => {
    event.preventDefault();
    let newseller= {
      seller_name:  sellername.val(),
      sellers_email:  selleremail.val(),
      sellers_bio:  sellerBio.val(),
      item_name: itemInput.val(),
      item_price: askingPrice.val(),
    }

    $.ajax({
      type: "POST",
      url: '/newseller',
      data: newseller
  }).then(function () {
      location.reload();
  })

  $("#seller-name-input").val("");
  $("#seller-email").val("");
  $("#item-input").val("");
  $("#price-input").val("");
  $("#seller-bio").val("");
});
});