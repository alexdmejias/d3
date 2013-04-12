var data = [];

function pop_arr(n, max) {
	for(var i = 0; n > i; i++){
		data.push(Math.floor(Math.random() * max));
	}
}

pop_arr(20, 40);
var w = 600;
var h = 100;
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

var circles = svg.selectAll('circles').data(data).enter().append('circle').attr('fill', 'red').attr('stroke', 'yellow');

circles.attr('cx', function(d, i){
	return ((i * 50) + 25);
})
.attr('cy', h/2)
.attr('r', function(d) {
	return d;
})
.attr('stroke-width', function(d) { return d/2;});


