import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [
  {
    companyId: "comp-id1",
    name: "name-comp1",
    taxId: "tex-0",
    employees: [],
  },
];

webServer.get("/", (req, res, next) => {
  res.send("Yo Hay Ho Ha Huh!!");
});

webServer.get("/company", (req, res, next) => {
  res.json(company);
});

webServer.post("/company", (req, res, next) => {
  const companyId = company.length + 1;
  const name = req.body.name;
  const taxId = req.body.taxId;
  const employees = [];
  company.push({ companyId, name, taxId, employees });
  res.json("Create Yay Hay Ho Ha Huh!!");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
