// from data.js
var tableData = data;

// YOUR CODE HERE!
// Make sure the Data loads
console.log(tableData)
// Select the body of the table
var tbody = d3.select('tbody')
// Append the table with the data
tableData.forEach(function(ufoSigting){
    console.log(ufoSigting)
    var row = tbody.append("tr")

    Object.entries(ufoSigting).forEach(function([key, value]){
        console.log(key,value)

        var cell = row.append("td")
        cell.text(value)
    })
})
// Used to filter
var button = d3.select("#filter-btn")
button.on("click", function(){
    tbody.html("")
    //Select the datatime element for filtering
    var inputElement = d3.select("#datetime")

    var inputValue = inputElement.property("value")

    console.log(inputValue)
    // Filter the data based on Datetime
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue)

    console.log(filteredData)

    filteredData.forEach(function(selections){
        console.log(selections)

        var row = tbody.append("tr")

        Object.entries(selections).forEach(function([key,value]){
            console.log(key,value)

            var cell = row.append("td")
            cell.text(value)
        })
    })
})
