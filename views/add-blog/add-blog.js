$(document).ready(() => {

  $('#submit-blog-button').click((e) => {
    e.preventDefault()
    let title = $('#title').val();
    let author = $('#name').val();
    let body = $('#body').val();
    let date = new Date();
    let data = {
      title: title,
      author: author,
      body: body,
      creation_time: date
    };

    $.post({
      url: 'http://localhost:3210/blogpost',
      data: data,
    })
    .done((res) => {
      var blogId = res[0]['id'];
      window.location.href = `http://localhost:3000/blog/index.html?=${blogId}`;
    })
    .fail((err) => {

    })
  });

  $('.form-floating-label input, .form-floating-label textarea').focusin(function(){
  $(this).parent().addClass('has-value');
  });

  $('.form-floating-label input, .form-floating-label textarea').blur(function(){
    if(!$(this).val().length > 0) {
      $(this).parent().removeClass('has-value');
  }
});
})
