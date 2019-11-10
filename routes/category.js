const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

const {create, categoryById, read} = require("../controllers/category");


router.get("/category/:categoryId", read);
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin,  create);


router.param('categoryId', categoryById);
router.param("userId", userById);

module.exports = router;
