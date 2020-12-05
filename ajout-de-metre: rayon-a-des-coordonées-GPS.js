


var earth = 6378.137; /*radius of the earth*/
var pi = Math.PI;
var cos = Math.cos;
var m = (1 / ((2 * pi / 360) * earth)) / 1000;  /* value of 1m u-in degree */



/* Add meter  nb_m 

 var nb_m = your extra meter*/


//latitude

var newLatitude = latitude + (nb_m * m)     /* latitude = original latitude / nb_m = number of meter */


// longitude

var newLongitude = longitude + (nb_m * m) / cos(latitude * (pi / 180)); /* longitude = original longitude/latitude = original latitude / nb_m = number of meter */




/* Add a radius r 

 var r = your radius*/

var minLat = latitude - (r * m)
var maxLat = latitude + (r * m)

var minLong = longitude - (r * m) / cos(latitude * (pi / 180))
var maxLong = longitude + (r * m) / cos(latitude * (pi / 180))
