// importing libraries
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");

//  Creating our app
const app = express();

// defining the web port
let port = process.env.PORT || 8080;

//Midleware
app.use(express.json());
app.use(morgan("dev"));
//APIS:
app.get("/", (req, res) => {
  res.send("<h1>Hello World<h1>");
});
app.get("/gatorade", (req, res) => {
  res.send("<h1>Hello from Gatorade<h1>");
});
app.post("/send-data", (req, res) => {
  console.log(req.body.Hola);
  res.send("Succes");
});

//gets

//Phantom
app.get("/Weapons/:name", (req, res) => {
  const name = req.params.name;
  //ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a
  const END_POINT = `https://valorant-api.com/v1/weapons/${name}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//Singularity
app.get("/Skins/:weaponSkin", (req, res) => {
  const weaponSkin = req.params.weaponSkin;
  //5eec4ce6-443d-e9b5-4c5b-2b967d426bd3
  const END_POINT = `https://valorant-api.com/v1/weapons/skins/${weaponSkin}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//Yoru Chibbi
app.get("/GunBuddies/:Buddies", (req, res) => {
  const Buddies = req.params.Buddies;
  //744457bf-4b96-62ea-934b-ee888267a23f
  const END_POINT = `https://valorant-api.com/v1/buddies/${Buddies}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//Ascent map
app.get("/Maps/:maps", (req, res) => {
  const maps = req.params.maps;
  //7eaecc1b-4337-bbf6-6ab9-04b8f06b3319
  const END_POINT = `https://valorant-api.com/v1/maps/${maps}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//PlayerCard Yoru
app.get("/PlayerCard/:card", (req, res) => {
  const card = req.params.card;
  //cb7157ed-4fc7-a5c9-714b-1786ca3949f1
  const END_POINT = `https://valorant-api.com/v1/playercards/${card}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//Agent Yoru
app.get("/Agent/:agent", (req, res) => {
  const agent = req.params.agent;
  //7f94d92c-4234-0a36-9646-3a87eb8b5c89
  const END_POINT = `https://valorant-api.com/v1/agents/${agent}`;
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES: " + response.data);
      res.status(200);
      res.json({
        name: response.data.data.displayName,
      });
    })
    .catch(function (error) {
      console.log("ERROR: " + error);
      res.send(error);
    });
});

//posts
app.post("/agent/:id", (req, res) => {
  //validation
  console.log("Nombre: " + req.body.nombre);
  console.log("Apellido: " + req.body.apellido);
  if (!req.body.nombre) {
    res.status(400);
    res.send("Error. Falta nombre");
    return;
  }
  if (!req.body.apellido) {
    res.status(400);
    res.send("Error. Falta apellido");
    return;
  }
  //if all good, then:
  res.status(200);
  res.send("Ok");
});

//Post weapons
app.post("/weapons", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/weapons/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        Weaponname: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Post Skin
app.post("/skins", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/weapons/skins/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        Skinname: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Post buddies
app.post("/buddies", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/buddies/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        Buddiename: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Post maps
app.post("/maps", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/maps/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        Mapname: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Post playercard
app.post("/weapons", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/playercards/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        PlayerCardname: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Post Agents
app.post("/weapons", (req, res) => {
  //Validation
  const id = req.body.id;
  const END_POINT = `https://valorant-api.com/v1/agents/${id}`;
  console.log("END_POINT: " + END_POINT);
  axios
    .get(END_POINT)
    .then(function (response) {
      console.log("RES:" + response.data);
      res.status(200);
      res.json({
        Agentname: response.data.data.displayName,
      });
    })
    //ERROR HANDLER
    .catch(function (error) {
      console.log("ERROR:" + error);
      res.send(error);
      res.status(404);
    });
});

//Server running
app.listen(port, () => {
  console.log("Server running on port " + port);
});
