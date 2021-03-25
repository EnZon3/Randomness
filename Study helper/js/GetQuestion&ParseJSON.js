let requestURL = 'https://api.jsonbin.io/b/605a75c5bdc46b7369741bc3';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const questions = request.response;
  populateHeader(questions);
  showQuestion(questions);
  function populateHeader(obj) {
    
  }
}
