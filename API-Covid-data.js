const covidURL = "https://api.covid19api.com/summary"

function display(name , date , TotalConfirmed , TotalDeaths , NewConfirmed , NewDeaths )
{
    var cDate = new Date(date)

    var newDiv = document.createElement('div')
    newDiv.id="main"

    var newh1 = document.createElement('h1')
    var newh2 = document.createElement('h1')
    var newh3 = document.createElement('h1')
    var newh4 = document.createElement('h1')
    var newh5 = document.createElement('h1')
    var newh6 = document.createElement('h1')
    newh1.innerHTML = "Country Name: "+ name
    newh2.innerHTML = "Date: " + cDate.toLocaleDateString("en-US", {day: 'numeric' , month: 'short' , year: 'numeric'})
    newh3.innerHTML = "Total Confirmed: " + TotalConfirmed
    newh4.innerHTML = "Total Deaths: " + TotalDeaths
    newh5.innerHTML = "New Confirmed: " + NewConfirmed
    newh6.innerHTML = "New Deaths: " + NewDeaths

    document.querySelector('.dataArea').appendChild(newDiv)
    newDiv.appendChild(newh1)
    newDiv.appendChild(newh2)
    newDiv.appendChild(newh3)
    newDiv.appendChild(newh4)
    newDiv.appendChild(newh5)
    newDiv.appendChild(newh6)
}

async function getDataFromAPI(url)
{
    let data = await fetch(url)
    let result = await data.json()
    
    console.log(result)
    display(result.Countries[77].Country, result.Date, result.Countries[77].TotalConfirmed, result.Countries[77].TotalDeaths, result.Countries[77].NewConfirmed, result.Countries[77].NewDeaths)

}

getDataFromAPI(covidURL)

