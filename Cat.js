function Cat(){
	this.stomach = [];
}

Cat.prototype.eat(mouse) = function{
	this.stomach.push(mouse);
}

module.exports  = Cat;