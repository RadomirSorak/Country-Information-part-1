import axios from "axios";

async function getCountries() {

    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        console.log(result.data);

        result.data.sort((a, b) => {
            return a.population - b.population;
        })
        getAllCountries(result.data);
    }
    catch(e) {
        console.error(e);
    }
}

getCountries();

function getAllCountries(countries){
    const unorderedCountryList = document.getElementById("country-list");

    countries.map((allCOuntries) => {

        const countryList = document.createElement("li");

        countryList.innerHTML = `
        <img src="${allCOuntries.flag}" class="flag"/>
        <h3>${allCOuntries.name}</h3>
        <p>Has population of ${allCOuntries.population} poeple</p> `

        unorderedCountryList.appendChild(countryList);

    })
}



