/* For the localfile - Works*/
let btnLocalfile = document.querySelector("#nameID");
let txtOutput = document.querySelector("#txtOutput");

btnLocalfile.addEventListener("click", function () {
  fetch("force.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      txtOutput.innerHTML = data;
    });
});
/*
Vill ju append:a det som jag skriver i inputboxen men har inte fått till det.
O nu är jag trött. Förmodligen använda mig av ett form-element för att sedan ta
värdet från inputboxen. Så mycket att hålla reda på men det borde jag ha fixat.
Testat annorstädes.

*/
const btnStarwars = document.querySelector("#btnSW");
/* const txtOutput=document.querySelector("#txtOutput") */
//btnStarwars.addEventListener("click",getData)
const api_url = new URL("https://www.swapi.tech/api/people/?name=");
const txtInput = document.querySelector("#InputId");
<form></form>let x = document.getElementById("txtOutput").nodeValue;
console.log(x);
btnStarwars.addEventListener("click", function () {
  fetch(api_url)
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      //txtOutput.innerHTML = data;
      console.log(data);
      document.getElementById("txtOutput").innerHTML = data;
    });
});

//https://www.swapi.tech/api/people/?name=luke
//document.getElementById("my_anchor").href = "http://localhost/" + id;
