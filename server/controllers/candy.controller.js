import Candy from "../models/candy.model.js";


const CandyController = {

    "createNewCandy": async (req, res) => {
        try {
            const newCandy = await Candy.create(req.body)
            res.json(newCandy)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    "getAllCandy": async (req, res) => {
        try {
            const allCandy = await Candy.find()
            res.json(allCandy)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    "getOneCandy": async (req, res) => {
        try {
            const oneCandy = await Candy.findById(req.params.id)
            res.json(oneCandy)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },


    "editCandy": async (req, res) => {
        const candyId = req.params.id;
        //  -- TO DO: define Candy model object attribures (ie: name, shape, etc) --
        const {  } = req.body;

        try {
            const updatedCandy = await Candy.findOneAndUpdate(
                { _id: candyId },
                //  -- TO DO: define Candy model object attribures (ie: name, shape, etc) --
                {  },

                { runValidators: true },
                { new: true }
            );

            if (updatedCandy) {
                res.json(updatedCandy);
            } else {
                res.status(404).json({ message: "Candy not found!" });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },


    "deleteCandyById": async (req, res) => {
        const candyId = req.params.id;

        try {
            const deletedCandy = await Candy.findOneAndDelete({ _id: candyId });

            if (deletedCandy) {
                res.json(deletedCandy);
            } else {
                res.status(400).json({ message: "Candy not found." });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}

export default CandyController;