const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

const Person = {
  name: "Ivan",
  surname: "Ivanov",
  age: 30,
  city: "Moscow",
};

const personJson = JSON.stringify(Person, null, 2);
const pathToFile = path.join(__dirname, "person.json");

fs.writeFileSync(pathToFile, personJson);
