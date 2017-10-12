$(document).ready(() => {
  //get query
  var url = window.location.href;
  var query = url.substring( url.indexOf('?') + 2 );
console.log(query);
  //make ajax call for that blog
  $.ajax({
    url: `http://localhost:3210/blog/${query}/`,
    type: 'GET'
  })
  .done((res) => {
    console.log(res);
    let title = res[0].title;
    let author = res[0].author;
    let body = res[0].body;

    $('#title').val(title)
    $('#name').val(author)
    $('#body').val(body)
  })
  //form js for blue labels
  $('.form-floating-label input, .form-floating-label textarea').focusin(function(){
    $(this).parent().addClass('has-value');
  });

  $('.form-floating-label input, .form-floating-label textarea').blur(function(){
    if(!$(this).val().length > 0) {
      $(this).parent().removeClass('has-value');
    }
  });
  //Start Patch blog
  $('#submit-edit-button').click((e) => {
    e.preventDefault()
    var data = {
      title: $('#title').val(),
      author: $('#name').val(),
      body: $('#body').val(),
      id
    }
    $.ajax({
      url: 'http://localhost:3210/editblog',
      type: 'PATCH',
      data: data
    })
    .done((res) => {
       window.location.href = `http://localhost:3000/blog/index.html?=${query}`
    })

  })
})
