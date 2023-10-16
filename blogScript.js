const posts = document.querySelector('#posts');
fetch('ab-blog-api-backend-production.up.railway.app')
  .then(function(response) {
    console.log(response.json);
    // return response.json();
  })
  .then(function(response) {
    // img.src = response.data.images.original.url;
    // console.log(response)
  });