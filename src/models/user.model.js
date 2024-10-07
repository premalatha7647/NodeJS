const pool = require('../config/pg_connection')
const externalApi = require('../util/external.api')
const createUser = async (request, response) => {
    const { name,role,email } = request.body.user
   await pool.query('INSERT INTO users (name, role, email) VALUES ($1, $2, $3)', [name, role, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email, role } = request.body
    pool.query(
      'UPDATE users SET name = $1, email = $2, role =$3 WHERE id = $4',
      [name, email, role, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  const getAllUsers = (request, response) =>{
    // externalApi.postRequestAPI()
    pool.query('select * from users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  
 
  }



  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers
  }