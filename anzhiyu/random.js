var posts=["posts/4a17b156.html","posts/bcd86d8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };