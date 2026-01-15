// country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"
// we have to return the longest country name
let countries = ["Australia", "Germany", "United States of America"];

function longestCountryName(countries) {
    let country = "";
    let maxlen = -1;
    for(let i = 0; i < countries.length; i++) {
        if(countries[i].length > maxlen) {
            country = countries[i];
        }
    }
    return country;
}

console.log(longestCountryName(countries));