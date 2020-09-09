//(1)기존js - forEach()
function parse(qs) {
  var queryString = 'banana=10&apple=20&orange=30';
  var queryString = qs.substr(1);
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = parts[1];
    result[key] = value;
  }
  return result;
}

//(2)ES6 - forEach()
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

//(2)ES6 - map()
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });
  return result;
}

//(3)ES6 - reduce()
function sum(number) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
