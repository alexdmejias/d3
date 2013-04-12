var data = [];

function pop_arr(n, max) {
	for(var i = 0; n > i; i++){
		data.push(Math.floor(Math.random() * max));
	}
}

pop_arr(20, 40);
var w = 600;
var h = 100;
var p = 1;
var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);
var rects = svg.selectAll("rect").data(data).enter().append("rect");
rects.attr({
	"width": 25,
	"height": function(d, i) {return d;},
	"x": function(d, i) {
		return i * (w / data.length);
	},
	"y": function(d,i) {return h - d;},
	"fill": function(d) {
		if(d > 20) {
			return "green";
		} else {
			return "rgb(255,0,0)";
		}
	}
});

var text = svg.selectAll("text").data(data).enter().append("text");
text.text(function(d) { return d; });
text.attr({
	"x": function(d,i) { return i * (w / data.length) + (w / data.length - p ) / 2;},
	"y": function(d,i) { return h - d + 15;},
	"font-family": "Helvetica",
	"font-size": "8px",
	"fill": "white",
	"text-anchor": "middle"
});