const usersController = {};

var UserModel = require('../modules/UserModule');

usersController.getUsers = async (req,res) => {
    var user = await UserModel.find();
    res.json(user);
}

usersController.createUser = async (req,res) => {
    const { userName, name, lastName, phoneNumber, mail } = req.body;
    const newUser = new UserModel({
        userName: userName,
        name: name,
        lastName: lastName,
        phoneNumber: phoneNumber,
        mail: mail
    });
    await newUser.save();
    res.json(newUser);
}

usersController.updateUser = (req,res) => {
    const { userName, name, lastName, phoneNumber, mail } = req.body;
    const updateNote = await UserModel.findByIdAndUpdate(req.params.id, {
        userName: userName,
        name: name,
        lastName: lastName,
        phoneNumber: phoneNumber,
        mail: mail
    });
    res.json(updateNote);
}

usersController.deleteUser = async (req,res) => {     
    const delUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(delUser);
}

module.exports = usersController;