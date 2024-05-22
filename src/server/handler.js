const classifyImage = require("../services/inferenceService");
const crypto = require("crypto");
const saveData = require("../services/storeData");
const loadData = require("../services/loadData");

async function handlerPredictionRequest(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { label, suggestion } = await classifyImage(model, image);
  const recordId = crypto.randomUUID();
  const timestamp = new Date().toISOString();

  const record = {
    id: recordId,
    result: label,
    suggestion: suggestion,
    createdAt: timestamp,
  };

  await saveData(recordId, record);

  const response = h.response({
    status: "success",
    message: "Model is predicted successfully",
    data: record,
  });
  response.code(201);
  return response;
}

async function handleAllGetDataRequest(request, h) {
  const allData = await loadData();
  const response = h.response({
    status: "success",
    data: allData,
  });
  response.code(200);
  return response;
}

module.exports = { handlerPredictionRequest, handleAllGetDataRequest };
