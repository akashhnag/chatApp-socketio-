const express=require('express');
const app=express();
const socket=require('socket.io');
// app.get('/',(req,res)=>{
//     res.send('Hello this is Server..')
// })

const server=app.listen(3000,()=>{
    console.log('Server listening in port 3000');
    
})

const io=socket(server);

io.on('connection',(client)=>{
    console.log('Connection established with id',client.id);   
    client.on('message',(message)=>{
        console.log(message);
        //io.sockets.emit('message',message);
        client.broadcast.emit('message',message);
    })
    client.on('typing',(data)=>{
        client.broadcast.emit('typing',data);
    })
})