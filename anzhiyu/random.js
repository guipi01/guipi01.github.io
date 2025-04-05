var posts=["posts/bcd86d8.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };