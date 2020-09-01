function distance(p2, p1)
{
	let xDist = p2.x - p1.y;
	let yDist = p2.y - p1.x;
	return Math.sqrt(Math.pow(yDist, 2) + Math.pow(xDist, 2));
}

function sortByDistance(myPtr, points)
{
	return points.sort((pt1, pt2) => distance(pt1, myPtr) - distance(pt2, myPtr));
}

module.exports = {distance, sortByDistance};