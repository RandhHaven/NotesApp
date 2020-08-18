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
    res.json({message:'Update User'});
}

usersController.deleteUser = async (req,res) => { 
    const delUser = await NoteModel.findByIdAndDelete(req.params.id);
    res.json(delUser);
}

module.exports = usersController;