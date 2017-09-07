let db = require('../models');

function index(req, res) {
  // send back all cliffs as JSON
  db.Reviews.find({}, function(err, reviews){
    console.log(reviews);
    res.json(reviews)
  });
}

// POST /api/pubHubs/reviews
function create1(req, res) {
  //create pubHub using form data from req parameter
  var newReview = new db.PubHub({
    pubHub: req.body.pubHub,
    reviewerName: req.body.reviewerName,
    reviewerRating: req.body.reviewerRating,
    reviewerNotes: req.body.reviewerNotes,
  });
  newReviewer.save(function(err, review){
    if (err) {
      console.log(err);
      return;
    }
    console.log("created", review.name);
    res.json(review);
  });
};


module.exports = {
  index: index,
  // create: create,
  // retrieve: retrieve,
  // destroy: destroy,
  // update: update
};
