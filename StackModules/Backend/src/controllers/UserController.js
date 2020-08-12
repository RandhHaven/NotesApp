
const usersController = {};

usersController.getUsers = (req,res) => res.json({message: [], transaccionId: '0'});
usersController.updateUser = (req,res) => res.json({message:'Update User'});
usersController.deleteUser = (req,res) => res.json({message: 'Delete User'});
usersController.createUser = (req,res) => res.json({message: 'Update User'});

module.exports = usersController;