$(".card-columns").on("click",".btn", function () {
  let currentId = $(this).attr("data-id");
  $(this).addClass("hide");
  $(this).siblings(".alert").removeClass("hide");
  $.ajax({
    method: "DELETE",
    url: "/api/newseller/" + currentId
  }).then(function(response){
    renderItems();
  });
});

function renderItems(){

  var container = $(".card-columns");
  $.get("/api/newseller", function(data) {
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
      let newItem = 
          `
          <div class="card">
          <div class="card-body">
            <h5 class="item-name">${data[i].item_name}</h5>
            <h6 class="item-price">$${data[i].item_price}</h6>
            <p class="card-text">${data[i].sellers_bio}</p>
            <p class="contact-info"><small class="text-muted">${data[i].sellers_email}></p>
            <button type="button"  data-id ="${data[i].id}" class="btn btn-outline-success">Purchase</button>
            <div class="alert alert-success hide" role="alert">
              Seller Notified
            </div>
          </div>
          </div>
          `
      container.append(newItem );
     }
   }
 });
};

renderItems()