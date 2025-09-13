import express from "express";
import { register , login } from "../Controllers/user.js";


const router = express.Router();

//1.User Register
// @api dsc(description) :- user register
// @api method :- post
// @api endpoint :- /api/user/register
router.post('/register', register)


//1.User Login
// @api dsc(description) :- user login
// @api method :- post
// @api endpoint :- /api/user/login
router.post('/login', login)





export default router;