$(document).ready(() => {
  const herokuURL = 'https://gblog-db.herokuapp.com';

  $.ajax({
      url: `${herokuURL}/blog`,
      type: 'GET'
    })
    .done((res) => {
      let blog = $("#blog-template").html();
      let template = Handlebars.compile(blog);
      let context = {
        blogs: res
      }
      let html = template(context);

      $('#blog-main').append(html);

      var creationTime = $('.time');
      creationTime.text(creationTime.text().substring(0, 11))
    })
    .fail((err) => {
      console.log('err', err)
    });

  window.setTimeout(() => {
    $('.edit-icon').hide();
    $('.delete-icon').hide();

    $('#edit-icon').click(() => {
      if ($('.edit-icon').is(':visible')) {
        $('.edit-icon').hide(500);
        $('.delete-icon').hide(500);
      } else {
        $('.edit-icon').show(500);
        $('.delete-icon').show(500);
      }
    });

    $('#edit-icon').click((e) => {
      var url = window.location.href;
      var query = url.substring(url.indexOf('?') + 2);
      console.log(query);
      $.ajax({
          url: '${herokuURL}/deleteblog/' + query,
          type: 'DELETE'
        })
        .done((res) => {
          location.reload()
        })
    })
  }, 500);

})
