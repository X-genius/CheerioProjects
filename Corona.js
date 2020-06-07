var fs = require("fs");
var req = require("request");
var cheerio = require("cheerio");

var url = "https://www.worldometers.info/coronavirus/country/india/";

req(url , function(err , response , data){
    if(err === null && response.statusCode === 200)
    {
     fs.writeFileSync("CoronaData.html" , data);
     CoronaData(data);
    }

    else if(response.statusCode === 404)
    {
        console.log("Page not Found");
    }

    else
    {
        console.log(err);
        console.log(response.statusCode);
    }
})

var CoronaData = function(data){
    var $ = cheerio.load(data);
    var TotalCases = $($("#maincounter-wrap .maincounter-number span")[0]).text()
    console.log("Total CoronaVirus Cases Present In India : " + TotalCases);
    console.log(`---------------------------------------------------------------------`);
    var TotalDeath = $($("#maincounter-wrap .maincounter-number span")[1]).text()
    console.log("Total Death In India During CoronaVirus : " + TotalDeath);
    console.log(`---------------------------------------------------------------------`);
    var Recovered = $($("#maincounter-wrap .maincounter-number span")[2]).text()
    console.log("Recovered In India During CoronaVirus : " + Recovered);
    console.log(`---------------------------------------------------------------------`);
    console.log("Stay Home And Stay Happy :)");
}
