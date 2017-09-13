$(document).ready(() => {
  console.log('working')

  $.ajax({
    url: 'http://localhost:3210/blog',
    type: 'GET'
  })
    .done((res) => {
      console.log('res', res)
      res.forEach((el) => {
        $('#blog-main').append(`
          <div id="tile">
            <a href="/blog/${el.id}">
              <article class="article-row">
                <div class="article-row-content">
                  <h1 id="title" class="article-row-content-header"> ${el.title} </h1>
                  <p id="date" class="article-row-content-author"> ${el.author} </p>
                  <time id="time" class="article-row-content-time">${el.creation_time}</time>
                  <p id="body" class="article-row-content-description"> ${el.body} </p>
                </div>
              </article>
            </a>
          </div>
        `)
      })
    })
    .fail((err) => {
      console.log('err', err)
    })

})
