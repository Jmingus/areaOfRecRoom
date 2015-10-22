'use strict';
let $ = require('jquery');
const conversionFactor = 0.09290304;
let areaInFeet = 0;
let areaInMeters = 0;

function calc(length, width){
	areaInFeet = parseFloat(length) * parseFloat(width);
}

function conversion(){
	areaInMeters = areaInFeet * conversionFactor;
}
$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		calc($('#length').val(),$('#width').val());
		conversion();
		$('div').html(`<div>Area in Feet ${areaInFeet} square feet</div><div>Area in Meters ${areaInMeters} square meters</div>`);
	})

})
