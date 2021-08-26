var fetch = require("node-fetch");

function* gen() {
  var url = "https://api.github.com/users/github";
  var result = yield fetch(url);
  console.log('完成gen')
}

var g = gen();
var result = g.next();
console.log(result);

result.value
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    g.next(data);
  });
