const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve(__dirname, 'design folder')));

io.on("connection",(socket)=>{
socket;on("find",(e)=>{
  if(e.name!=null){
    arr.push(e.name)
    if(arr.length>=2){
      let p1obj={
        p1name:arr[0],
        p1value:"X",
        p1move:""
      }
      let p2obj={
        p2name:arr[1],
        p2value:"O",
        p2move:""
      }
      letobj={
        p1:p1obj,
        p2:p2obj,
        sum:1
      }
      playingArray.push(obj)
      arr.splice(0,2)
      io.emit("find",{allPlayers:playingArray})
    }
  }




})

socket.on("playing",(e)=>{
  if(e.value=="X"){
    let objTochange=playingArray.find(obj=>obj.p1.p1name===e.name)

    objTochange.p1.p1move=e.id 
    objTochange.sum++
  }
  else if(e.value=="O"){
    let objTochange=playingArray.find(obj=>obj.p2.p2name===e.name)

    objTochange.p2.p2move=e.id 
    objTochange.sum++
  }

  io.emit("playing",{allPlayers:playingArray})

})
socket.on("gameOver",(e)=>{
   playingArray=playingArray.filter(obj=>obj.p1.p1name!==e.name)
   console.log(playingArray)
})

})
app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,'design','index.html'))

})

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('500 Internal Server Error')
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'design folder', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server connected to port 3000');
});

