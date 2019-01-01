fetch('https://benefits.itechart-group.com/api-development/check-ins')
    .then(res => res.json())
    .then(data => render(data));

const count = {};
const cities = new Set();
let countOfCheckIns = 0;
function render(data) {
    countOfCheckIns = data.length;
    data.forEach((item) => {
        const city = item.place.city;

        if (count[city]) {
            count[city] += 1;
        } else {
            count[city] = 1;
        }
        
        cities.add(city);
    });

    d3.select("#graphic")
        .selectAll("div")
        .data(Array.from(cities))
          .enter()
          .append("div")
          .text((d) => `${(count[d] * 100 / countOfCheckIns).toFixed(2)}%`)
          .style("width", (d) => `${count[d] * 700 / countOfCheckIns}px`)
            .append("span")
            .text((d) => d);

}
