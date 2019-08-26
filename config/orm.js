var connection = require('./connection.js');

// object relational mapping
var orm = {
    selectAll: (table, cb) => {
        var query = `SELECT * FROM ??`;
        connection.query(query, table, (err, res) => {
            if (err) throw err;
            cb(res);
            console.log(`\nmysql query: SELECT * FROM ${table}`);
        });
    },
    // INSERT INTO `table_name`(column_1,column_2,...) VALUES (value_1,value_2,...);
    insertOne: (table, column, value, cb) => {
        var query = `INSERT INTO ?? (??) VALUES (?)`;
        connection.query(query, [table, column, value], (err, res) => {
            if (err) throw err;
            cb(res);
            console.log(`\nmysql query: INSERT INTO ${table} (${column}) VALUES (${value})`);
        });
    },
    // UPDATE table SET column = value WHERE id = primaryKey;
    updateOne: (table, column, value, primaryKey, cb) => {
        var query = `UPDATE ?? SET ?? = ? WHERE id = ?`;
        connection.query(query, [table, column, value, primaryKey], (err, res) => {
            if (err) throw err;
            cb(res);
            console.log(`\nmysql query: UPDATE ${table} SET ${column} = ${value} WHERE id = ${primaryKey}`);
        });
    }
}

// export orm to model/burger.js
module.exports = orm;