const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const {
    create
} = require("../controllers/product");


router.post("/product/create/:userId", requireSignin, isAuth, isAdmin,  create);

router.param("userId", userById);

module.exports = router;
