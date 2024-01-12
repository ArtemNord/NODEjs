// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let count3000 = null;
let countAbout = null;

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    count3000++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1> Добро пожаловать на наш сайт! </h1> <a href='http://192.168.1.69:3000/about'>About</a> <p>Число просмотров ${count3000}</p>`
    );
  } else if (req.url === "/about") {
    countAbout++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1> About </h1> <a href='http://192.168.1.69:3000'>3000</a> <p>Число просмотров ${countAbout}</p>`
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      "<h1>Страница не найдена!</h1><a href='http://192.168.1.69:3000'>3000</a> <a href='http://192.168.1.69:3000/about'>About</a>"
    );
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
