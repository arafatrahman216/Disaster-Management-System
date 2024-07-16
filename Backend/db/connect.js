const mongoose = require('mongoose');

const connectionString = `mongodb+srv://TahmidulOmi:HackCSB01@dmscluster.m2afbo1.mongodb.net/DMSDatabase?retryWrites=true&w=majority&appName=DMSCluster`

mongoose
    .connect(connectionString, {
    })
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });