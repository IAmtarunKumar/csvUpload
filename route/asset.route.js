const express = require("express");
const { AssetModel } = require("../model/asset.model");
const assetRoute = express.Router()


assetRoute.get("/" , (req,res)=>{
    res.status(200).send("asset route is working")
})


assetRoute.post("/csv", upload.single("csvFile"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }
  
      const jsonArray = await csv().fromString(req.file.buffer.toString());
  
      await AssetModel.insertMany(jsonArray);
  
      console.log("Data saved to MongoDB successfully.");
      res.status(200).send("Data saved to MongoDB successfully.");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error processing the CSV file.");
    }
  });
 


module.exports={assetRoute}

