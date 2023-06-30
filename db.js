const { MongoClient } = require("mongodb");

let dbConnection;
const password = "q96qbuv61zwYiIyZ";
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
