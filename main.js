var score = document.getElementById('score');
var el = document.getElementById('el');


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
submit.addEventListener('click', function(){
    var choice = document.getElementById('browser1').value;
    var choice2 = document.getElementById('browser2').value;
    var text = document.getElementById('text').value
    getJSON('https://api.fixer.io/latest?base='+choice,function(err, data){
        if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
            console.log(data);
            console.log(data.rates[choice2]);
            console.log(text);
            var result = text*data.rates[choice2];
            score.textContent = Math.round(result * 100) / 100;

            if(choice == choice2){
              score.textContent = Math.round(text * 100) / 100;
            }
      }
    });
}, true)
