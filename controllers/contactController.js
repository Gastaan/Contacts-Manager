//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({"msg": "get all contacts"});
};

//@desc Create a contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({"msg": "Create a contact"});
};

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({"msg": "Get contact for " +
            `${req.params.id}`});
}

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({"msg": "Update contact for " +
            `${req.params.id}`})
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => (req, res) => {
    res.status(200).json({"msg": "Delete contact for " +
            `${req.params.id}`});
}

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}
