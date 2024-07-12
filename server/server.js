
//package Declaration 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();



//use
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(express.json());
app.use(cors()); 


//socket.io 
const http = require('http');
const { Server} = require('socket.io');
const server= http.createServer(app);
const io = new Server(server,{
    cors : {
        origin : '*',
    }
});

//MongoDB Connection
const {run} = require('./db/connect');

app.get('/' , async (req, res) => {
    await run();
    console.log('yes');
    res.json({ message: 'Hello World' });
    return;
});


const PORT =  5000;

io.on("connection", (socket) => {
    console.log('A user connected');
    socket.on('join_room', (data) => { //for private chat
        console.log('Joined Room');
        socket.join(data);
    });
    socket.on('send_message', (data) => {
        console.log('Message sent');
        io.to(data.room).emit('receive_message', data);
    }); 
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
}
);



server.listen(PORT, () => {
    console.log('Server is running on port '+PORT);  
});