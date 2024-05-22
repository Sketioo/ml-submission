const { Firestore } = require("@google-cloud/firestore");

async function getData() {
  const database = new Firestore();
  const dataSnap = await database.collection("predictions").get();
  const data = [];
  dataSnap.forEach((doc) => {
    data.push({
      id: doc.id,
      history: doc.data(),
    });
  });
  return data;
}

module.exports = getData;
