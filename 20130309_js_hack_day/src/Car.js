function Car() {
	this.color = "yellow"
	this.model = "Uno"
	this.ano = 1972
	this.isOn = false
	this.tanque = 40
	this.isSomOn = false
	this.radio = "desligado"
	this.marcha = "ponto morto"
}

Car.prototype.color = function(color){
	this.color = color;
}

Car.prototype.encherTanque = function(){
	this.tanque = 40;
}

Car.prototype.trocaMarcha = function(marcha){
	if(marcha >= 6)
		return false;
	this.marcha = marcha;	
}

Car.prototype.model = function(model){
	this.model = model;
}

Car.prototype.ano = function(ano){
	this.ano = ano;
}

Car.prototype.ligarSom = function(){
	this.isSomOn = true;
}

Car.prototype.tocarRadio = function(radio){
	this.radio = radio;
	return this.radio;
}

Car.prototype.turnOn = function(){
	if(this.tanque==0)
		return false;
	this.isOn = true;	
	setInterval("gasta_combustivel()", 5000, function(){
		if(tanque==0)
			this.isOn  = false
		else{
			this.isOn = true;
			clearInterval();
		}
	})
}

Car.prototype.turnOff = function(){
	this.isOn = false;
}

Car.prototype.gasta_combustivel = function(){
	this.tanque = this.tanque - 1
}