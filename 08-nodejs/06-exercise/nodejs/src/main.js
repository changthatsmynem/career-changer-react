import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const company = [
  {
    companyId: "comp-id1",
    name: "name-comp1",
    taxId: "tex-0",
  },
];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/company", (req, res, next) => {
  res.json(company);
});

webServer.post("/company", (req, res, next) => {
  const companyId = company.length + 1;
  const name = req.body.name;
  const taxId = req.body.taxId;
  company.push({ companyId, name, taxId });
  res.json("Yay ho ha hu!!");
});

// code down below.
webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
