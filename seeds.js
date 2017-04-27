var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data=[
    {name: "Clouds Point",
    image: "http://bustedwallet.com/wp-content/uploads/2014/05/Camping-Near-The-Lake-Background-Wallpaper.jpg",
    description: "The best place for viewing the clouds"
    }
    ];
function seedDB(){
    Campground.remove({}, function(err){
        if(err){
        console.log(err);
        } else {
            console.log("removed campogrounds!");
             data.forEach(function(seed){
             Campground.create(seed, function(err, campground){
               if(err){
                console.log(err);
                 } else {
                console.log("created a campgroud");
                Comment.create(
                    {
                        text: "this place is great",
                        author: "homer"
                        
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created a new comment");
                        }
                    });
                  }
                  });
              });
        }
    });
  
}
module.exports = seedDB;