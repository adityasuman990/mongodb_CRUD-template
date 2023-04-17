const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/docs1",{ useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connected succesfully"))
.catch((err) => console.log(err)) ;  /// connection to mongodb database



const adisSchema= new mongoose.Schema({ // creates a schema
    name: String,
    city: String,
    videos: Number,
    date:{
        type:Date,
        default:Date.now
        ///validations will be applied inside a particular field module 20
    } 
})


const Playlist = new mongoose.model("aditya",adisSchema); ///here adi is collection while adischema is schema
  

// const createDocument = async () => {
//     try{
        const reactPlaylist = new Playlist({
            name: "Aditya",
            city: "Patna",
            videos: 5,

        });
        // const reactPlaylist1 = new Playlist({
        //     name: "Aditya1",
        //     city: "Patna",
        //     videos: 5,

        // });
        // const reactPlaylist2 = new Playlist({
        //     name: "Aditya2",
        //     city: "Patna",
        //     videos: 5,

        // });
        // const result = await
         reactPlaylist.save();   /// reactPlaylist.insertMany([ReactpLaylist,mongoplaylist]}    reactplaylsit will be replaced byb playlist due to constructor
    //     console.log(result);
    // } catch(err){
    //     console.log(err);
//     }
// }

// createDocument();

// reactPlaylist.save();   /// after it reconnect the database and see the check for changes



// for read operations in mongodb


const getDocument = async () => {
  const result=  Playlist.find();
//   .find({videos : {$gt :50}})  gt stands for greater than   ///query comparistion operator   
//   .select({name:1}); to displayb one elmement  /// PLaylist is the main function and can also fill arguments inside the find...
//  .countDocuments   /// used to count number of selected docs
console.log(result);
}
// getDocument();

// // document updation
const upadateDocument = async (_id) => {
    try{
    const result=  Playlist.updateOne({_id},{
        $set: {
            name:"Javascript"
        }
    });
    console.log(result);}
    catch(err){
    console.log(err);}
}
  
// upadateDocument();


const deleteDocument = async (_id) =>{
    try{
        const result=  Playlist.deleteOne({_id});  ///Playlist.findIdandDelete({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// deleteDocument("id dal do");


// validation   in validation we basically do that we check and apply all the types we want to proceed
 <enum 
videos: {
    type: Number,
    ValidityState(value){
        if(value<0){
            throw new Error('Video count should not be negative');
        }
    }
}


// validation buy npm package

email:{
    type:String,
    required: true,
    unique:true,
    validate(value) {
        if(!validator.isEmail(value)){
            throw new Error('Email is not valid');
        }
}
},





