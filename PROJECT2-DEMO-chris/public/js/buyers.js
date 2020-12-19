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

function getPosts(data) {
    
    $.get("/api/item", function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(author);
      }
      else {
        initializeRows();
      }
    });
  }

  function initializeRows() {
    blogContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.append(postsToAdd);
  }
  function createNewRow(post) {
    
  }