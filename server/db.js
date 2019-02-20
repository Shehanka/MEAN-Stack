const mongoose = require('mongoose');

mongoose.connect('', (err) => {
    if(!err){
        console.log("MongoDB Connection succeeded");
    }else {
        console.log("Error in DB Connection : " + JSON.stringify(err, undefined, 2));
    }
});

module.exports.mongoose;