var orm = require("../config/orm.js");

var burger = {
    // selects all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },


    // Add a burger
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },


    //burger has been devoured changes devoured  boolean to true
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // Delete borgar
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};


module.exports = burger;