import { Contact } from "../Models/Contact.js";

// Get all contact
export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();

  // If contact is not find in db
  if (!userContact) return res.json({ message: "No Contact Exist" });

  // Contact find in db
  res.json({ message: "All Contact Fatched!!", userContact });
};

//Create new contact
export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;
  if (name == "" || email == "" || phone == "" || type == "")
    return res.json({ message: "All Fields are required!!", success: false });

  // If every things is file then save the data in Database
  const saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user
  });
  res.json({
    message: "Contact saved successfully!!",
    saveContact,
    success: true,
  });
};

// Update contact by id
export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);
  const { name, email, phone, type } = req.body;
  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: "true" }
  );

  if (!updatedContact)
    return res.json({ message: "No contact Exist..", success: false });

  res.json({
    message: "Contact Updated Successfully...,",
    updatedContact,
    success: true,
  });
};

// Delete Contact By Id
export const deleteContactById = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);
  let deletedContact = await Contact.findByIdAndDelete(id);

  if (!deletedContact)
    return res.json({ message: "No contact Exist..", success: false });

  res.json({ message: "Contact Deleted Successfully...,", success: true });
};

// get contact by ID
export const getContactById = async (req, res) => {
  const id = req.params.id;
  const userContact = await Contact.findById(id);
  // If contact is not find in db
  if (!userContact)
    return res.json({ message: "No Contact find", success: "false" });

  // Contact find in db
  res.json({ message: "Contact Fatched!!", userContact, success: "false" });
};


// get contact by user id
export const getContactByUserId = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.find({user:id});
  if (!userContact)
    return res.json({ message: "No Contact find", success: "false" });

  res.json({ message: "User Specific Contact Fetched", userContact, success: true });
};