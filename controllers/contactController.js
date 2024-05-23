//@desc Get all contacts
//@route GET /api/contacts
//@access public
const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModels")

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    if (!contacts) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(200).json(contacts);
})

// @desc Get all contacts
// @route CREATE /api/contacts
// @access public

const createContact = asyncHandler(async(req,res) => {
    console.log("The request body is :", req.body)
    const { name,email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name, email, phone
    })
    res.status(200).json(contact);
});

//@desc Create New all contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error("Contact Not found!");
}
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact);
});


const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new  Error("Contact not found")};
    res.status(200).json(contact);
});

//@desc Get New all contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        
        if (!contact) {
            res.status(404).json({ message: "Contact not found!" });
            return;
        }

        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Contact deleted successfully", contact });
    } catch (error) {
        console.error(`Error deleting contact: ${error.message}`);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});


module.exports = {
    getContacts,
    getContact,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}