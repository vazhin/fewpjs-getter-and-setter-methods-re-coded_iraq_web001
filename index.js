// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.radius * Math.PI
  }
  get area(){
    return (this.radius ** 2) * Math.PI
  }
  set diameter(){
    return this.radius * 2
  }
  set circumference(){
    return this.radius * Math.PI
  }
  set area(){
    return (this.radius ** 2) * Math.PI
  }
}
