const user = require('../models/user.model')
const createUser = async (request, response) => {
    user.createUser(request, response)
  }

  const updateUser = (request, response) => {
    user.updateUser(request,response)
  }
  
  const deleteUser = (request, response) => {
    user.deleteUser(request,response)
  }

  const getAllUsers = (request, response) =>{
    user.getAllUsers(request,response)
  
  }
  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers
  }