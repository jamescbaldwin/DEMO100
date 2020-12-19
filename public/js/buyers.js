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

app.get("/api/item", function(data) {
  console.log("data: ", data);
  const container = $(".card-columns")
  if (data.length !==0) {
      for (let i = 0; i < data.length; i++) {
          blogContainer.append(
          `
          <div class="card">
              <div class="card-body">
                  <h5 class="item-name">${data[i].item_name}</h5>
                  <h6 class="item-price">$${data[i].item_price}</h6>
                  <p class="contact-info"><small class="text-muted">${data[i].seller_contact}</small></p>
                <button type="button" class="btn btn-outline-success">Purchase</button>
              </div>
            </div>
            `
          )
      }
    };
 });
// function getPosts(data) {
    
//     $.get("/api/item", function(data) {
//       console.log("Posts", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty(author);
//       }
//       else {
//         initializeRows();
//       }
//     });
//   }

//   function initializeRows() {
//     blogContainer.empty();
//     var postsToAdd = [];
//     for (var i = 0; i < posts.length; i++) {
//       postsToAdd.push(createNewRow(posts[i]));
//     }
//     blogContainer.append(postsToAdd);
//   }
//   function createNewRow(post) {
    
//   }