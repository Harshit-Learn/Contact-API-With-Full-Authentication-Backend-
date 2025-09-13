import express from  'express'
import {newContact , getAllContact , getContactById , updateContactById , deleteContactById, getContactByUserId} from '../Controllers/contact.js'
import {isAthenticated} from '../Middlewares/Auth.js'





const router = express.Router();

//1.new contact
// @api dsc(description) :- contact
// @api method :- post
// @api endpoint :- /api/contact/new
router.post('/new' , isAthenticated,  newContact)

//2. get all contact
router.get('/',getAllContact)

//3. get contact by id
router.get('/:id' , getContactById)

//4. Update Contact by id
router.put('/:id',isAthenticated, updateContactById)

// 5. Delete contact by Id
router.delete('/:id' , isAthenticated, deleteContactById)

// get user specific contact
router.get("/userid/:id",getContactByUserId);

export default router;
