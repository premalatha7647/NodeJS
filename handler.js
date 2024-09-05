const Pool  = require('./pg_connection');
try {
    const pool = new Pool();
    const res = await pool.query('SELECT * FROM users')
    console.log(res)
    await pool.end()
} catch (error) {
    console.log(error)
}