var orm = require('../config/orm.js');

// create burger functions to interact with burgers db with imported orm
var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    // INSERT INTO `table_name`(column_1,column_2,...) VALUES (value_1,value_2,...);
    insertOne: (column, value, cb) => {
        orm.insertOne('burgers', column, value, (res) => {
            cb(res);
        });
    },
    // UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition];
    updateOne: (column, value, primaryKey, cb) => {
        orm.updateOne('burgers', column, value, primaryKey, (res) => {
            cb(res);
        });
    }
};

// export burger db functions to controller
module.exports = burger;