import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host:"localhost",
    user:"",
    password:"",
    database:"registroevento",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
})

export default pool;

