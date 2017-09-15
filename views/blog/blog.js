$(document).ready(() => {
  //Save the url query
  var url = window.location.href;
  var query = url.substring( url.indexOf('?') + 2 );
  //start make get request to blog/:id
  $.ajax({
    url: `http://localhost:3210/blog/${query}/`,
    type: 'GET'
  })
    .done((res) => {
      $('#blog-post').append(`
        <div id=${res[0].id}>
          <h1>${res[0].title}</h1>
          <h3>${res[0].author}</h3>
          <p id="blog-body">${res[0].body}</p>
        </div>
      `);
      //set edit icon id to blog id for later use

      $('#blog > a').attr('href', `../edit-blog/index.html?=${query}`)
    })
    .fail((err) => {
      console.log('err', err);
    })
    //end of blog get request

    //start get request to blog/:id/comments
    $.ajax({
      url: `http://localhost:3210/blog/${query}/comments`,
      type: 'GET'
    })
    .done((res) => {

      let blog = $("#comments-template").html();
      let template = Handlebars.compile(blog);
      let context = {comments: res};
      let html = template(context);

      $('#comment-feed').append(html);
      //word clamp
      var creationTime = $('.time');
      creationTime.text(creationTime.text().substring(0,11))

    })
    .fail((err) => {
      console.log('err', err);
    });
    //end of comments get request

    //start add comment
    //comment form
    $('.form-floating-label input, .form-floating-label textarea').focusin(function(){
      $(this).parent().addClass('has-value');
    });

    $('.form-floating-label input, .form-floating-label textarea').blur(function(){
      if(!$(this).val().length > 0) {
        $(this).parent().removeClass('has-value');
      }
    });

    //comment post request
    $('#submit-comment-button').click((e) => {
      e.preventDefault();
      let author = $('#name').val();
      let body = $('#body').val();
      let date = new Date();
      let blogId = query;
      let data = {
        name: author,
        body: body,
        creation_time: date,
        blog_id: blogId
      };
      $.post({
        url: `http://localhost:3210/commentpost`,
        data: data
      })
      .done((res) => {
        location.reload()
      })
    })
    //delete comment
  window.setTimeout(() => {

    $('.delete-comment-icon').click((e) => {
      var commentId = e.target.id;

      $.ajax({
        url: `http://localhost:3210/deletecomment/${commentId}/`,
        type: 'DELETE'
      })
      .done((res) => {
        location.reload()
      })
      .fail((err) => {
        console.log('err', err);
      })
    })
    //delete blog
    $("#delete-icon").click((e) => {
      let url = window.location.href;
      let query = url.substring( url.indexOf('?') + 2 );

      $.ajax({
        url: 'http://localhost:3210/deleteblog/' + query,
        type: 'DELETE'
      })
      .done((res) => {
        let id = res.id;
        window.location.href = '../index.html?=' + id;
      })
    })

  }, 500);


})
