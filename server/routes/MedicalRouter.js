import express from 'express';
import HelpCenter from '../models/HelpCenter';

const router  = express.Router();


//get shelter or hospital by id


router.get('/medical/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const Hlpcenter =  await HelpCenter.findById(id);

        if (Hlpcenter) {
            return res.status(200).json(Hlpcenter);
        } else {
            return res.status(404).send({ message: 'Help Center not found' });
        }
    }  catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }


});


router.post('/medical/add', async(req,res) =>{
    try{
        if(
            !req.body.CenterID||
            !req.body.Name||
            !req.body.LocationID||
            !req.body.Role||
            !req.body.Phone||
            !req.body.Capacity||
            !req.body.BookedSeats

        ){
            return res.status(400).send({message: 'All fields are required'});
        }

        const Hlpcenter = {
            CenterID: req.body.CenterID,
            Name: req.body.Name,
            LocationID: req.body.LocationID,
            Role: req.body.Role,
            Phone: req.body.Phone,
            Capacity: req.body.Capacity,
            BookedSeats: req.body.BookedSeats
        };

        const newHelpCenter = await HelpCenter.create(Hlpcenter);
        return res.status(201).json(newHelpCenter);
        }

    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


router.put('/medical/:id/update', async(req,res) =>{
    try{
        const {id} = req.params;
        if(
            !req.body.CenterID||
            !req.body.Name||
            !req.body.LocationID||
            !req.body.Role||
            !req.body.Phone||
            !req.body.Capacity||
            !req.body.BookedSeats

        ){
            return res.status(400).send({message: 'All fields are required'});
        }

        const Hlpcenter = {
            CenterID: req.body.CenterID,
            Name: req.body.Name,
            LocationID: req.body.LocationID,
            Role: req.body.Role,
            Phone: req.body.Phone,
            Capacity: req.body.Capacity,
            BookedSeats: req.body.BookedSeats
        };

        const updatedHelpCenter = await HelpCenter.findByIdAndUpdate(id,Hlpcenter,{new:true});
        return res.status(200).json(updatedHelpCenter);
        }

    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;