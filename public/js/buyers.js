$('.btn').on('click', function () {
  let currentId = $(this).parent().attr("id");
  currentId = parseInt(currentId);
  $(this).addClass("hide");
  $(this).siblings('.alert').removeClass('hide');
  
});

let container = $(".card-columns");

$.get("/api/newseller", function(data) {
  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {
      let newItem = 
`
      <div class="card">
      <div class="card-body">
          <h5 class="item-name">${data[i].item_name}</h5>
          <h6 class="item-price">${data[i].item_price}</h6>
          <p class="card-text">${data[i].sellers_bio}</p>
          <p class="contact-info"><small class="text-muted">${data[i].sellers_email}</p>
        <button type="button" class="btn btn-outline-success">Purchase</button>
      </div>
    </div>
    `
    container.prepend(newItem);
    }
  };
});