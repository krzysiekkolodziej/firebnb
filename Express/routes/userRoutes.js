const express = require("express");
const {validationResult} = require("express-validator");
const router = express.Router();
const {userCreateValidation} = require("../middleware/validator/userCreateValidator");
const UserRoutes = require("../models/user");
const hashing = require("../utils/hashing");
const authenticateToken = require("../middleware/jwtMiddleware");
const {userUpdateValidation} = require("../middleware/validator/userUpdateValidator");
const {UserApiEntity} = require("../api-entity/UserApiEntity");


router.post(
    '/create',
    [userCreateValidation],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const {full_name, email, password} = req.body;

        let user = await UserRoutes.create({
            fullName: full_name,
            password: await hashing.hash(password),
            email: email,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });

        user = new UserApiEntity(user);
        res.status(200).json({message: "UserRoutes created successfully", user});
    }
);
router.put("/update", [authenticateToken, userUpdateValidation], async (req, res) => {
    let user = await UserRoutes.findOne({email: req.user.email});

    const {email, full_name, password} = req.body;
    if (email !== undefined) {
        user.email = email;
    }

    if (full_name !== undefined) {
        user.fullName = full_name;
    }

    if (password !== undefined) {
        user.password = await hashing.hash(password);
    }
    await user.save();
    user = new UserApiEntity(user);
    res.status(200).json({message: 'User updated successfully', user});
})

router.delete("/delete", [authenticateToken], async (req, res) => {
    let user = await UserRoutes.findOne({email: req.user.email});
    await user.destroy();
    user = new UserApiEntity(user);
    res.status(200).json({message: 'UserRoutes deleted successfully', user});
});

module.exports = router;