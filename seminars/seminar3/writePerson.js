const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

const person = {
  name: "Ivan",
  surname: "Ivanov",
  age: 30,
  city: "SPB",
};

const personJson = JSON.stringify(person, null, 2);
const pathToFile = path.join(__dirname, "person.json");

fs.writeFileSync(pathToFile, personJson);
