function Runner() {
  this.pos = createVector(100, height);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  this.display = function() {

    for (i = 0; i < 8; i++) {
      if (runner.pos.y < 630-i*200) {
        imageMode(CENTER);
        fill(0);
        stroke(255);
        ellipse(this.pos.x,this.pos.y,100,100);
        image(mol[i], this.pos.x, this.pos.y, mol[i].width/6, mol[i].height/6);
      }
    }
  }

  this.edges = function() {
    // So it doesn't go below the ground level
    if (this.pos.y > height-50) {
      this.vel.y *= 0 ;
      this.pos.y = height-50;
      jumping = false;
    }
    // loops around, so it doesn't fly off the map
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }
    // this makes sure that it doesn't fall below the current level.
    for (i = 0; i < levels.length-2; i++) {
      if (levels[i+2] == true && this.pos.y > 350-200*i) {
        this.vel.y *= 0.5;
        this.pos.y = 350-200*i;
        jumping = false;
      } else if (levels[i+2] == false && this.pos.y < 420-200*i){
        this.vel.y *= -2;
        this.pos.y = 420-200*i;
        jumping = false;
      }
    }

    if (this.pos.y < -800) {
      start = false;
    }

{    // if (level2 == true && this.pos.y > 380) {
    //   this.vel.y *= 0;
    //   this.pos.y = 380;
    //   jumping = false;
    // }
    // if (level3 == true && this.pos.y > 180) {
    //   this.vel.y *= 0;
    //   this.pos.y = 180;
    //   jumping = false;
    // }
    // if (level4 == true && this.pos.y > -20) {
    // this.vel.y *= 0;
    // this.pos.y = -20;
    // jumping = false;
    // }
    // if (level5 == true && this.pos.y > -220) {
    //   this.vel.y *= 0;
    //   this.pos.y = -220;
    //   jumping = false;
    // }
    // if (level6 == true && this.pos.y > -420) {
    //   this.vel.y *= 0;
    //   this.pos.y = -420;
    //   jumping = false;
    // }
    // if (level7 == true && this.pos.y > -620) {
    // this.vel.y *= 0;
    // this.pos.y = -220;
    // jumping = false;
    // }
  }
  }
}
