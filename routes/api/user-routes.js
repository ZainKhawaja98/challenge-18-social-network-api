const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController')

// /api/users GET all and POST
router
.route('/')
.get(getAllUsers) //get all users
.post(createUser) //post new user

// /api/users/:userId GET one user, PUT and DELETE by user's ID

router
.route('/:userId')
.get(getUserById) //get single user
.put(updateUser) //update user
.delete(deleteUser) //remove user

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router
  .route('/:userId/friends/:friendId')
  .put(addFriend) // add a friend
  .delete(removeFriend) //remove a friend

module.exports = router;