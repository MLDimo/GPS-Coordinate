


var earth = 6378.137;
var pi = Math.PI;
var cos = Math.cos;
var m = (1 / ((2 * pi / 360) * earth)) / 1000;



var latitude = Number(window.prompt('enter you\'r actual latitude'));
var longitude = Number(window.prompt('enter you\'r actual longitude'));




var choice = window.prompt('write "add" or "radius"');


switch (choice) {

    case 'add':
        /* Add meter  nb_m 
    
        var nb_m = your extra meter*/


        var nb_m = Number(window.prompt('enter the number of meter to add'));

        //latitude

        var newLatitude = latitude + (nb_m * m);     /* latitude = original latitude / nb_m = number of meter */


        // longitude

        var newLongitude = longitude + (nb_m * m) / cos(latitude * (pi / 180)); /* longitude = original longitude/latitude = original latitude / nb_m = number of meter */



        alert('you\'r new latitude is :' + newLatitude + 'and you\'r new longitude is :' + newLongitude);
        break;

    case 'radius':
        /* Add a radius r 
    
        var r = your radius*/

        var r = Number(window.prompt('enter the radius'));

        var minLat = latitude - (r * m);
        var maxLat = latitude + (r * m);

        var minLong = longitude - (r * m) / cos(latitude * (pi / 180));
        var maxLong = longitude + (r * m) / cos(latitude * (pi / 180));


        alert(' min latitude = ' + minLat + ' min longitude = ' + minLong + ' max latitude = ' + maxLat + ' max longitude = ' + maxLong)
        break;


    default:
        alert('incorrect code is entered')

}
