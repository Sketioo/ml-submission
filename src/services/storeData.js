const { Firestore } = require("@google-cloud/firestore");

async function saveData(recordId, record) {
  const database = new Firestore();

  const predictCollection = database.collection("predictions");
  return predictCollection.doc(recordId).set(record);
}

module.exports = saveData;
