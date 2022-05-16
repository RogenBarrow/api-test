exports.createPost = (req, res, next) => {
    const name = req.body.name;
   
    // create a new Post instance
    const post = new Post({
      name: name
    });
   
    // save the instance to the database
    post
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: postSaved
      });
    })
    .catch(err => console.log('err', err));
  }