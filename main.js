const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));




function findMatches (wordToMatch, cities){
    return cities.filter((item)=> {
        const regex = new RegExp (wordToMatch, 'gi');
        return item.city.match(regex) || item.state.match(regex)   
    })
}

function displayMatches (){
    const x = findMatches (this.value, cities);
    const html = x.map((item)=> {
        
        return `<div class='card'>
        <div class='container'>
        <span onclick="selectvalue(event)" data-bind=${item.rank}>${item.city}, ${item.state}, ${item.population}</span>
    
        </div>
        </div>`    
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);  // works when clicked out side or hit enter
searchInput.addEventListener('keyup', displayMatches); // works when you type

function selectvalue(e){
    console.log(e.target.innerHTML);
    document.getElementById('textSearch').value=(e.target.innerHTML);
}