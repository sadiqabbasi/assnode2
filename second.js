const express = require("express");
//Initializing the express package and including it.
const second=express();
 
 //Using get method 
second.get("/" , function (req, res) {
    //This Route path matches with the root route "/"
    res.send("This file is about normal routing. Providing different data for different URL's. ");
    // res.end();
});

second.get("/exp" , function(req , res){
    //This Route path matches with the root route "/exp"
    res.send("EXPRESS DATA :It is a most popular Node JS framework In this we define second as an object , which includes routing paths in it. This second object specifies a callback function, which is called when a request is received ");
});
second.listen(40010);
//The data in this page is displayed with the above given port number in localhost.