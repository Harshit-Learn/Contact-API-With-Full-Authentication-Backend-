import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


//A.Export User-register (logic)
export const register = async (req, res) => {
  //1.Logic: User can't enter wrong name ,email & password
  const { name, email, password } = req.body;
  if (name == "" || email == "" || password == "")
    return res.json({ Message: " All fields are required!!" });

  // Check Dublicates in db
  let user = await User.findOne({ email });
  if (user) return res.json({ message: "User Allready exist", success: false });

  //Encrypt the password using bcryptjs ( 10 means 10 digit encrypted)
  const haspassword = await bcrypt.hash(password, 10);

  // registering User & encrypt the password
  user = await User.create({ name, email, password: haspassword });
  res.json({ message: "User Created Successfully..!", success: true, user });
};

//B.Export User-login (logic)
export const login = async (req, res) => {
  //1.Logic: User can't enter wrong email & password
  const { email, password } = req.body;
  if (email == "" || password == "")
    return res.json({ Message: " All fields are required!!" });

  //2.Logic: to check email is correct or not
  let user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not exist", success: false });

  // 3.Logic: To compare password from Database & current enter password
  const validPass = await bcrypt.compare(password,user.password);
  if(!validPass) return res.json({message:"Invalid Password" , success:false})

    // For JWT Token
    const token = jwt.sign({userID:user._id},process.env.JWT,{
      expiresIn:'1d'
    })

    // Logic: Jb sb kuchh sahi ho to ...
    res.json({message:`Welcome ${user.name}`, token, success: true})
};
