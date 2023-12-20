//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({"msg": "get all contacts"});
};

module.exports = {getContacts}


//@desc Create a contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(200).json({"msg": "Create a contact"});
};

module.exports = {createContact}


//@desc Get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({"msg": "Get contact for " +
            `${req.params.id}`});
}

module.exports = {getContact}

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({"msg": "Update contact for " +
            `${req.params.id}`})
};

module.exports = {updateContact}

//@desc Delete a contact
//@route DEL /api/contacts/:id
//@access public

const deleteContact = (req, res) => (req, res) => {
    res.status(200).json({"msg": "Delete contact for " +
            `${req.params.id}`});
}

module.exports = {deleteContact}
