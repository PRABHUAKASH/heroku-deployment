// const {MongoClient} = require ("mongodb");

// module.exports = {
//     selectedDb :{},
//         async connect(){
//             try{
//            const client= await MongoClient.connect(process.env.MONGODB_URL);
//            console.log(client);
           
//            this. selectedDb = client.db("guvi");
//         //    console.log(selectedDb);
//         //    return selectedDb;
//         }
//          catch(err){
//             console.error(err);
//         }
// }
// }

// ======================================================================================================
const { MongoClient } = require("mongodb");

module.exports = {
  selectedDb: {},
  async connect() {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URL);
      this.selectedDb = client.db("guvi");
      console.log(this.selectedDb);
    } catch (err) {
      console.log(err);
    }
  },
};