var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

// var mysql = require('mysql');
//     var con = mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'',
//         database:'qlsv'
//     });

    // var send404Response = function(res){
    //     res.writeHead(404,{"Content-Type":"text/html"});
    //     res.write("Error 404:Page not found!");
    //     res.end();
    // }
    // var server = http.createServer(function(req,res){
    //     if(req.url == '/home' || req.url==='/'){
    //         res.writeHead(200,{"Content-Type":"text/html"});
    //         fs.createReadStream('home.html').pipe(res);
    //     }else{
    //         send404Response(res);
    //     }
    // })
    // con.connect(function(err){
    //     if(err){
    //         console.log('Error!');
    //     }else{
    //         console.log('Connected!');
    //     }
    // });
    //  app.get('/',function(req,res){
    //             con.query('select * from sv',function(err,rows,fields){
    //                 // move to string
    //                 var str=JSON.stringify(rows);
    //                 console.log(typeof str);
                    
    //                 //move to object
    //                 var obj = JSON.parse(str);
    //                 console.log(obj);
                        
    //                 for(var i=0;i<obj.length;i++){
    //                     console.log(obj[i]['tuoi']);
    //                 }
    //                res.end();
    //             })
    //         })

    // app.listen(3000);
    // console.log('Server is running!');

    var server = http.createServer(function(req,res){
            res.writeHead(200,{"Content-Type":"text/html"});
             var myReadStream = fs.createReadStream(__dirname  + '/web/html/home.html');
            myReadStream.pipe(res);
            

    });

   
    
    server.listen(8888);