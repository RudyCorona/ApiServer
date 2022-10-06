# USE of VALORANT API

![Image](valo.jpg)

## INDEX

> 1.  [Description of the Project](#Description-of-the-Project)
> 2.  [Instalation](#Instalation)
> 3.  [Notes](#Notes)
> 4.  [Creator and release date](#Developed-By:)

## Description of the Project

This project is a first test of how to use APIs, for this time i am using the Valorant API.
To implement this Valorant API to your own projects you should follow the next steps.

> 1. Visit the **_(<https://dash.valorant-api.com/>)_** web page.
> 2. Click in the Endpoints tab at the left of the page.
> 3. Choose what API you want to use

## Instalation

> Materials:
>
> 1. Node.js
> 2. Postman
>    To install this repository correctly follow the next steps.

## GET Methods

The **GET method** refers to a HyperText Transfer Protocol (HTTP) method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

> Example of a GET request using axios

```Javascript
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
```

## POST Methods

In the **POST method**, the data is sent to the server as a package in a separate communication with the processing script. Data sent through the POST method will not be visible in the URL.

> Example of the parameters passed in JSON

```JSON
{
  "id": "744457bf-4b96-62ea-934b-ee888267a23f"
}
```

> Example of POST request

```Javascript
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

```

## Notes:

1.  Running on port 8080.
2.  Dont forget to use a `catch( )` function after a request for a better perfomance.

---

## Developed By:

Rodolfo Corona del Toro (September - October 2022)
