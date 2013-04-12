var data = [];

function pop_arr(n, max) {
	for(var i = 0; n > i; i++){
		data.push(Math.floor(Math.random() * max));
	}
}

pop_arr(20, 40);

d3.select('body')
.selectAll('div')
.data(data)
.enter()
.append("div")
.classed("bar", true)
.style("height", function(d) {
	return (d*10) + "px";
});