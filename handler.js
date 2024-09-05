const pool  = require('./pg_connection');
try {
    const res = await pool.query('SELECT * FROM users')
    console.log(res)
    await pool.end()
} catch (error) {
    console.log(error)
}