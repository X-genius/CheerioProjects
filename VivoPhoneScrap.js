//step 1 : In this method to provide require file which help to use some inbuilt js files
var fs = require("fs");
var req = require("request");
var cheerio = require("cheerio");

//Step 2 : Basic detail vivo V17 phone so using website url
var url = "https://www.vivo.com/in/products/v17#";

//step 3 : To create page Basic layout for request to getting website data in locals and Using Async Function layout
req(url , function(err , response ,data){     // function signature is more matter because when i change response to data it show null and undefined
    if(err === null && response.statusCode === 200)
    {
        fs.writeFileSync("vivo.html" , data)
        parseHTML(data);
    }

    else if(response.statusCode === 404)
    {
        console.log("Page Not Found");
    }

    else{
        console.log(err);
        console.log(response.statusCode);
    }
})

//step 4 : In this step to get all points about vivo v17 mobile means disclaimer about vivo v17
var parseHTML = function(data)
    {
        let $ = cheerio.load(data);
        let txt = $(".stage.stage-tips ul.case").text();
        console.log(txt);
    }

    // this is my code to create a web scrap 
    //In this code we create vivo disclaimer 
    //See.

    //Yeah it is same as vivo original website yessssssssssssssssssssssssssssss.