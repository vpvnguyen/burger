var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // mysql config
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}
// connect to mysql
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// export connection for ORM
module.exports = connection;