var data = [];

function pop_arr(n, min, max, rad) {
	for(var i = 0; n > i; i++){
		var minVar = Math.floor(Math.random() * min);
		var maxVar = Math.floor(Math.random() * max);
		var radVar = Math.floor(Math.random() * rad);
		data[i] = Array(minVar, maxVar, radVar);
	}
}

var w = window.innerWidth;
var h = window.innerHeight;
var p = 5;
pop_arr(100, h, w, 20);
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);
var circles = svg.selectAll("circles").data(data).enter().append("circle");
circles.attr({
	"r": function(d) {return d[2]; },
	"cy": function(d) {return d[0];},
	"cx": function(d) {return d[1];},
	"fill": function(d) {return "rgb(" + Math.round(d[0] / 2) + "," + Math.round(d[1] / 2) + ",0)" ;}
});
var text = svg.selectAll("text").data(data).enter().append("text");
text.text(function(d) {return "[" + d[0] + ", " + d[1] + "]";});
text.attr({
	"y": function(d) {return d[0];},
	"x": function(d) {return d[1] + d[2] + p;},
	"font-family": "Helvetica",
	"font-size": "10px",
	"text-anchor": "right"
});
