//JSON map data as 3 level coloumn array
var mapData = [["AL",439,270],["AK",94,325],["AZ",148,241],["AR",368,247],["CA",56,176],["CO",220,183],["CT",576,120],["DE",556,166],["FL",510,331],["GA",478,267],["HI",232,380],["ID",143,101],["IL",405,168],["IN",437,165],["IA",357,147],["KS",302,194],["KY",453,203],["LA",371,302],["ME",595,59],["MD",538,162],["MA",581,108],["MI",446,120],["MN",339,86],["MS",406,274],["MO",365,197],["MT",194,61],["NE",286,151],["NV",102,157],["NH",580,89],["NJ",561,143],["NM",208,245],["NY",541,107],["NC",519,221],["ND",283,65],["OH",472,160],["OK",309,239],["OR",74,86],["PA",523,144],["RI",589,117],["SC",506,251],["SD",286,109],["TN",441,229],["TX",291,299],["UT",154,171],["VT",567,86],["VA",529,189],["WA",92,38],["WV",496,178],["WI",392,103],["WY",207,125]];
var locSize = 40;
var img;
var loc = [];
var locX = [];
var locY = [];

// Preload for data and image laoding
function preload(){
	getMapData(mapData);
	img = loadImage("map.png");
}

// standard setup
function setup() {
  createCanvas(640, 400); 
  image(img, 0,0);
  textFont("Georgia");
  textAlign(CENTER, CENTER);
  noStroke();
  smooth();
  // call the draw function to display
  drawLocs();
}


// draw function not used as there is no dynamic updating 
function draw() {
 
}

// draws the states onto the map
function drawLocs(){
	for (var i = 0; i <= loc.length; i++){
      fill(0, 200);
      ellipse(locX[i], locY[i], locSize, locSize);
      fill(255);
      text(loc[i],locX[i], locY[i]);
    }
}

//creates small arrays to pass to draw
function getMapData(data) {

	for (var i = 0; i < data.length; i++) {
            loc[i] = data[i][0];
            locX[i] = data[i][1];
            locY[i] = data[i][2];
    }

//console.log(locY);
}

