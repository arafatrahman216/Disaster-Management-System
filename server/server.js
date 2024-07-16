
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
require('./db/connect')

//socket.io 
const http = require('http');
const { Server} = require('socket.io');
const server= http.createServer(app);
const io = new Server( server, { cors : { origin : '*'} });

const User = require('./models/User');
const Test = require('./models/testing');

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
 
//Routes imported from routes/index.js file
const { HomeRoute, AuthRouter, CommunityRouter } = require('./routes');

app.post('/auth/test', async (req, res) => {
    const { testID , testName } = req.body;
    const test1 = new Test({ testID , testName });
    try {
        const result = await Test.save();
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/auth/login', async (req, res) => {
    const { Email, Password } = req.body;

    console.log(req.body.email);
    
    try {
        const user = await User.find({ Email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        const isPasswordValid = await user.comparePassword(Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        // Email and password are valid, proceed with authentication logic
        // ...
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/auth/login' , async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await User.find({ Email
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await user.comparePassword(Password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        // Email and password are valid, proceed with authentication logic
        // ...
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.use('/', HomeRoute);
app.use('/auth', AuthRouter);
app.use('/community', CommunityRouter);

const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port-${PORT}`);
});
