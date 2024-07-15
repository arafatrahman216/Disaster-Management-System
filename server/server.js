
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
const io = new Server( server, { cors : { origin : '*'} });

io.on("connection", (socket) => {
    console.log('A user connected');
    socket.on('join_room', (data) => { //for private chat
        socket.join(data); console.log('Joined Room');
    });
    socket.on('send_message', (data) => {
        io.to(data.room).emit('receive_message', data); console.log('Message sent');
    }); 
    socket.on('disconnect', () => console.log('User disconnected'));
}
);
 
//MongoDB Connection
const { run, getCollection, closeConnection } = require('./db/connect');

//Routes imported from routes/index.js file
const { HomeRoute, AuthRouter, CommunityRouter } = require('./routes');

app.use('/', HomeRoute);
app.use('/auth', AuthRouter);
app.use('/community', CommunityRouter);

const PORT =  process.env.PORT || 5000;
server.listen(PORT, async () => {
    const result = await run();
    if (result) console.log("Connected to MongoDB");
    else {
        console.log("Error occurred while connecting to MongoDB");
        closeConnection();
    }
    console.log('Server is running on port '+PORT);
});