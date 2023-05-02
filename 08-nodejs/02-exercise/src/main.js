import express from "express";
const webServer = express();

const ip = "127.0.0.1";
const port = 3001;

// code down below
webServer.get("/", (req, res, next) => {
  res.send("Yo Hey Ho!!");
});

webServer.get("/news", (req, res, next) => {
  const application = [{ name: "yo", detail: "hey" }];
  res.json(application);
});

webServer.get("/users", (req, res, next) => {
  const obj = [
    { userId: "mock-id-1" },
    { name: "mock-id-2" },
    { name: "mock-id-3" },
  ];
  res.json(obj);
});

webServer.listen(port, ip, () => {
  console.log(`Web Application Server is running on ${ip} port ${port}`);
  console.log(`Address: http://${ip}:${port}`);
});
