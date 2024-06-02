var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => (data.json())).then((data1) => country(data1))

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

function country(data1) {

  for (var i = 0; i <= data1.length; i++) {

    var col = document.createElement("div");
    col.className = "col-lg-4";
    var countryName = data1[i].name.common;
    var flagUrl = data1[i].flags.png;

    col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem; border: 4px solid rgb(48, 59, 101);">
        <div class="card-header header-style">${countryName}</div>
        <div class="card-body text-primary">
          <h5 class="card-title flag-style"><img src="${flagUrl}" alt="${countryName} Flag" style="max-width: 100px;"></h5>
          <p class="card-text captial-style">Capital: ${data1[i].capital} <br>
          Region : ${data1[i].region} <br>
          Country Code :  ${data1[i].cca3} <br>
          </p> <!-- Display capital city -->
          <button onclick="checkWeather('${countryName}')">click for Weather</button>
        </div>
      </div> `;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
