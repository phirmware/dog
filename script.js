var btn = document.querySelector("#xml");
var btn1 = document.querySelector("#fetch");
var img = document.querySelector("img");
var btn3 = document.querySelector('#Axios');

btn.addEventListener("click", function() {
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.status == 200 && xml.readyState == 4) {
      var data = JSON.parse(xml.responseText).message;
      img.src = data;
    }
  };
  xml.open("GET", "https://dog.ceo/api/breeds/image/random");
  xml.send();
});

btn1.addEventListener("click", function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      img.src = data.message;
    });
});

$("#jquery").click(function() {
  $.get("https://dog.ceo/api/breeds/image/random").done(function(data) {
    $('img').attr('src', data.message);
  });
});

btn3.addEventListener('click',function(){
    axios.get('https://dog.ceo/api/breeds/image/random').then(function(data){
        img.src = data.data.message;
    })
})
