var posts=["posts/ccc6fa83.html","posts/d36bdd17.html","posts/4a17b156.html","posts/undefined.html","posts/bcd86d8.html","posts/79666db.html","posts/bb16f4e7.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };