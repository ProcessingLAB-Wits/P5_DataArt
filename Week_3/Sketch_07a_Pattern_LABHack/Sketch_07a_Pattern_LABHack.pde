
int x = 0;
int y = 25;
int mySize = 50;

void setup() {
  size(500, 500);
  smooth();
  background(255);
}

void draw() {
  background(255);
  stroke(0);
  strokeWeight(3);
  ellipseMode(CENTER);

  for (int i = 0; i < 11; i++) {
    
    for (int j = 0; j < 11; j++) {
     ellipse(mySize/2+x, 0+y, mySize, mySize);
     ellipse(0+x, mySize/2+y, mySize, mySize);
      x = x + mySize;
    }
    //fill(check your x's and y's);
    y = y + mySize;
    x = 0;
   
  }
  y = 0;
}


/*ellipse(25,25,50,50);
 ellipse(75,25,50,50);
 ellipse(125,25,50,50);
 
 ellipse(0,50,50,50);
 ellipse(50,50,50,50);
 ellipse(100,50,50,50);*/
