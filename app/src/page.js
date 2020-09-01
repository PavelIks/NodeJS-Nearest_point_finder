import {sortByDistance} from "./distance";
let stores = [
	{name:		"POINT 1",		x: -71.1189,		y: 42.3895},
	{name:		"POINT 2",		x: -71.1131,		y: 42.3823},
	{name:		"POINT 3",		x: -71.1489,		y: 42.3984},
];
let here = {name:	"IM HERE",	x: -71.1470,	y: 42.3834};
let nearest = sortByDistance(here, stores)[0];
document.getElementById("nearest-store").innerHTML = nearest.name;