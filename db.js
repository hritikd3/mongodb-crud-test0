const { MongoClient } = require("mongodb");
require("dotenv").config();

let dbConnection;
const password = process.env.PASSWORD;
// const password = "q96qbuv61zwYiIyZ";v
let uri = `mongodb+srv://hritikd3:${password}@cluster1.nrli8e7.mongodb.net/?retryWrites=true&w=majority/test`;
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
