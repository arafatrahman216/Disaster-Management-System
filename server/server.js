
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

const User = require('./models/User');

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

app.post('/auth/login', async (req, res) => {
    const { Email, Password } = req.body;
    console.log("Buet")
    try {
        const options = { maxTimeMS: 30000 };
        const user = await User.findOneAndUpdate({ Email }, { Password }, { new: true }); if (user && user.Password === Password) {
            res.status(200).json({ user });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.log("Hi")
        res.status(500).json({ error: error.message });
    }
    console.log("Hello6")
});

app.use('/', HomeRoute);
app.use('/auth', AuthRouter);
app.use('/community', CommunityRouter);

const PORT =  process.env.PORT || 5000;
server.listen(PORT, () => {
    const result = run();
    if (result) console.log("Connected to MongoDB");
    else {
        console.log("Error occurred while connecting to MongoDB");
        closeConnection();
    }
    console.log('Server is running on port '+PORT);
});