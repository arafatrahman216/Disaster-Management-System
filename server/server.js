
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
app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));


require('./db/connect')

//socket.io 
const http = require('http');
const { Server} = require('socket.io');
const server= http.createServer(app);
const io = new Server( server, { cors : { origin : '*'} });

//const User = require('./models/User');
//const Test = require('./models/testing');

// io.on("connection", (socket) => {
//     console.log('A user connected');
//     socket.on('join_room', (data) => { //for private chat
//         socket.join(data); console.log('Joined Room');
//     });
//     socket.on('send_message', (data) => {
//         io.to(data.room).emit('receive_message', data); console.log('Message sent');
//     }); 
//     socket.on('disconnect', () => console.log('User disconnected'));
// }
// );
 
//Routes imported from routes/index.js file
const { HomeRoute, AuthRouter, CommunityRouter,IncidentRoute } = require('./routes');

//require('./middleware/auth')

// app.get('/home', async(req, res) => {
//     //console.log("Hello world");
//     res.send('Hello world');
// })

app.use('/home', HomeRoute);
app.use('/incident', IncidentRoute);
//console.log('HI');
app.use('/auth', AuthRouter);
//app.use('/community', CommunityRouter);


const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port-${PORT}`);
});
