const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const mongoUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'Task-1'

mongoClient.connect(mongoUrl , (error, res) => {
    if (error) {
      return  console.log(error)
    }
    console.log("All Ok")
    const db = res.db(dbName)

/////////////////////////////////////// ///////////////////////////////////////////////////
   
    db.collection('users').insertOne({
        name : 'ahmed' ,
        age : 27
    },(error, data) => {
        if (error) {
           return console.log("Error inserting")
        }
    })

    db.collection('users').insertOne({
        name : 'adham' ,
        age : 27
    },(error, data) => {
        if (error) {
           return console.log("Error inserting")
        }
    })
    //===================================================
    db.collection('users').insertMany([
        {
            name : 'samy' ,
            age : 27
        } ,
        {
            name : 'saber' ,
            age : 27
        } ,
        {
            name : 'ali' ,
            age : 27
        } ,
        {
            name : 'sasa' ,
            age : 32
        } ,
        {
            name : 'adham' ,
            age : 25
        } ,
        {
            name : 'salah' ,
            age : 20
        } ,
        {
            name : 'omar' ,
            age : 22
        } ,
        {
            name : 'ahmed' ,
            age : 19
        } ,
        {
            name : 'mena' ,
            age : 16
        } ,
        {
            name : 'adham' ,
            age : 33
        } ,
    ],(error, data) => {
        if (error) {
           return console.log("Error inserting")
        }
    })

    db.collection('users').find({age : 27}).limit(3).toArray((error,data) => {
        if (error) {
            console.log(error)
        }
        console.log(data)
    })


//================================================================
    db.collection('users').updateOne({name : 'saber'},{
        $set : {name : "islam"} ,
        $inc : {age : 4 }
    }).then((data1) => {console.log("Done")})
    .catch((error) => {console.log(error)})
//================================================================
    db.collection('users').updateOne({name : 'ali'},{
        $set : {name : "islam"} ,
        $inc : {age : 4 }
    }).then((data1) => {console.log("Done")})
    .catch((error) => {console.log(error)}) 
//================================================================
    db.collection('users').updateOne({name : "ahmed"},{
        $set : {name : "islam"} ,
        $inc : {age : 4 }
    }).then((data1) => {console.log("Done")})
    .catch((error) => {console.log(error)})
//================================================================
    db.collection('users').updateOne({name : "samy"},{
        $set : {name : "islam"} ,
        $inc : {age : 4 }
    }).then((data1) => {console.log("Done")})
    .catch((error) => {console.log(error)})
//================================================================

db.collection('users').updateMany({}, {
    $inc : {age : 10}
}).then((data1) => {console.log("Done")})
.catch((error) => {console.log(error)})

//////////////////////////////////////////////
db.collection('users').deleteMany({ age:41 })
.then((data1) => {console.log(data1.deletedCount)})
.catch((error) => {console.log(error)})











})














