
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var servi = require('servi');

// console.log(" ");
// console.log("********************  documentation  ***********************");
// console.log(" ");
// console.log("---------------| 昨天梦鲜橙妹子 (*☻-☻*) |-----------------");
// console.log("---------------|  ᶘ ᵒᴥᵒᶅ 我说我们交往吧 |-----------------");
// console.log("---------------|     “你是一个好人”     |-----------------");
// console.log("---------------|  于是我开始了这个项目  |-----------------");
// console.log(" ");

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('public/theani.html');
});


app.get('/qr', function(req, res){
  res.sendfile('public/qrtesting.html');
});

app.get('/music', function(req, res){
  res.sendfile('public/media/introMain.mp3');
});

var Servi = new servi(true);

app.get('/data', function(req, res){
  handleViewData(req, res);
});

var Locationdb = useDatabase("datadb");

http.listen(3000, function(){
  // console.log('-- port open infor 小鲜橙在 *:3000 等你啦 --');
  // console.log(' ');
  // GetLocalIPAddr();
  // console.log(' ');
  // console.log('------- | 通过 iPad / iPhone 链接服务器 IP address; | -------');
  console.log(' Server address on');
  GetLocalIPAddr();
});

//-----------------Socket.io------------//

io.on('connection', function(socket){

    socket.on('BoyData', function(msg){
  	
    console.log(msg[0] + " " + msg[1]);

    var location = {
        remain : msg[0],
        path : msg[1],
        time : Date.now()
        }

        Locationdb.add(location);
  
  });

  socket.on('qrrequest', function(msg){
    console.log(msg);
    io.emit('qrrequest', ("http://"+IPv4+":3000"));
  });

});


//----------------Get IP--------------//
var IPv4,hostName;
function GetLocalIPAddr(){ 
var os = require('os');

hostName=os.hostname();
for(var i=0;i<os.networkInterfaces().en0.length;i++){
    if(os.networkInterfaces().en0[i].family=='IPv4'){
        IPv4=os.networkInterfaces().en0[i].address;
    }
}
console.log('----------local IP: '+IPv4);
console.log('----------local host: '+hostName);
} 

//-------------Response_Data----------------//
function handleViewData(req, res) {
  console.log("got handleViewDataRequest");
  Locationdb.getAll(gotPosts);
  function gotPosts(theData) {
    
    
     var response = "";
     for (var i =0; i < theData.length; i++) {
    //   console.log(i);
       response = response + "Remain Scenes:" + theData[i].remain + "  Path:" + theData[i].path + "  Time_Stamp:" + theData[i].time + "<br />";
    }
    //console.log(response);
    console.log(theData);
    res.send(response);
    
    
  }
}
