import { countries } from "../data/countries.js";

console.log(countries[2]?.name?.common);

const setOptions = () => {
  const selectEl = document.querySelector("#country");

  let options = "";

  for (let country of countries) {
    console.log(country);
    options += `<option> <span>${country?.flag} </span> ${country?.name?.common} </option>`;
  }

  selectEl.innerHTML = options;
};

setOptions();

/*
 altSpellings
: 
['AW']
area
: 
180
borders
: 
[]
capital
: 
['Oranjestad']
cca2
: 
"AW"
cca3
: 
"ABW"
ccn3
: 
"533"
cioc
: 
"ARU"
currencies
: 
{AWG: {…}}
demonyms
: 
{eng: {…}, fra: {…}}
flag
: 
"🇦🇼"
idd
: 
{root: '+2', suffixes: Array(1)}
independent
: 
false
landlocked
: 
false
languages
: 
{nld: 'Dutch', pap: 'Papiamento'}
latlng
: 
(2) [12.5, -69.96666666]
name
: 
{common: 'Aruba', official: 'Aruba', native: {…}}
region
: 
"Americas"
status
: 
"officially-assigned"
subregion
: 
"Caribbean"
tld
: 
['.aw']
translations
: 
{ces: {…}, deu: {…}, est: {…}, fin: {…}, fra: {…}, …}
unMember
: 
false
*/
