
$('.btn').on('click', function () {
  console.log('button')

  let currentId = $(this).parent().attr("id");
  currentId = parseInt(currentId);
  console.log($(this).parent())
  $(this).addClass("hide");
  $(this).siblings('.alert').removeClass('hide');
  
});
var posts;
var blogContainer = $(".card-columns");

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
          <p class="contact-info"><small class="text-muted">${data[i].sellers_email}></p>
        <button type="button" class="btn btn-outline-success">Purchase</button>
      </div>
    </div>
    `
    blogContainer.prepend(newItem);
      // var row = $("<div>");
      // row.addClass("card");

      // row.append("<b>"+"<h5>" + data[i].item_name + "</h5>"+"</b>");
      // row.append("<h6>" + data[i].item_price + "</h6>");
      // row.append("<h5>" + data[i].sellers_bio + "</h5>");
      // row.append("<h6>"+ "Contact " + data[i].seller_name + "<br>" +" at "+  "<br>" + data[i].sellers_email+"</h6>");
     

     // blogContainer.prepend(row);

    }

  };

});