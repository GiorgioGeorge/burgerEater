var mysql = require('mysql');

if (process.env.JAWSSB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}
else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};
//make sql connection 
connection.connect(function (err) {
    if (err) {
        console.error("could not connect: " + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});
//export for ORM
module.exports = connection;