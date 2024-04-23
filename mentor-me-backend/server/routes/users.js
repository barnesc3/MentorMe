const router = require("express").Router();
const User = require("../models/User");

router.get("/users", async (req,res) => {
    try{
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";

        const users = await User.find(
            {$or:[
                {location:{ $regex: search, $options: "i" }},
                {biography:{ $regex: search, $options: "i" }},
                {email:{ $regex: search, $options: "i" }}
            ]}
        )
            const total = await User.countDocuments({
            email: { $regex: search, $options: "i" }
        })

        const response = {
            error:false,
            total,
            page: page + 1,
            limit,
            users
        }

        res.status(200).json(response);

    } catch(err){
        console.log(err);
    }
})

module.exports = router;