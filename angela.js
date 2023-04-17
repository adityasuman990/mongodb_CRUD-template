const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/docs1",{ useNewUrlParser: true, useUnifiedTopology: true, family: 4,});


const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Banana",
    rating: 5,
    review: "This is a good one",
});

fruit.save();


// for many docs insertion

// 
