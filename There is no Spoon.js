/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis
var grid = [];
for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    var array = line.split("");
    grid.push(array);
}

var x = [];
var y = [];
var index = 0;
var answer =[];
// Write an action using print()
// To debug: printErr('Debug messages...');
for (var j = 0; j < height; j++) {
    for (var k = 0; k < width; k++) {
        if (grid[j][k] == "0") {
            x[index] = k;
            y[index] = j;
            index++;
        }
    }
}
// now have an array of x the x coordinates of nodes and the y coordinates of nodes
//check x array and y array at the coordinate plus 1 for neighbors

for (var l = 0; l < x.length; l++) {
    //check the row of node l for other nodes
    var x_check = x[l];
    var y_check = y[l];
    var x2 = "-1";
    var y2 = "-1";
    var x3 = "-1";
    var y3 = "-1";
    for (m = x_check +1; m < width; m++) {
        if (grid[y_check][m] == "0") {
            x2 = m;
            y2 = y_check;
            break;
        }
    }
    for (n = y_check+1; n < height; n++) {
        if (grid[n][x_check] == "0") {
            x3 = x_check;
            y3 = n;
            break;
        }
    }

answer = [x[l], y[l], x2, y2, x3, y3].join(" ");

// Three coordinates: a node, its right neighbor, its bottom neighbor

print(answer);
}
