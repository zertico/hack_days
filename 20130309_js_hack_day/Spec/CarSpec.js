describe("Car", function(){
	var car;
	
	beforeEach(function(){
		car = new Car()
	});
	
	it("should initiaze a new object", function(){
		expect(car).toEqual(new Car())
	})
	
	it("should be yellow", function(){
		expect(car.color).toEqual("yellow")
	})
	
	it("should accept a new color", function(){
		car.color = "red"
		expect(car.color).toEqual("red")
	})
	
	it("should be Uno", function(){
		expect(car.model).toEqual("Uno")
	} )
	
	it("should acceot a new model", function(){
		car.model = "camaro"
		expect(car.model).toEqual("camaro")
	})
	
	it("should be 1972", function(){
		expect(car.ano).toEqual(1972)
	})
	
	it("should accept a new ano", function(){
		car.ano = 2013
		expect(car.ano).toEqual(2013)
	})
	
	it("should be off", function(){
		expect(car.isOn).toEqual(false)	
	})
	
	it("#turnOn()", function(){
		car.turnOn();
		expect(car.isOn).toEqual(true)
	})
	
	it("#turnOff()",function(){
		car.turnOff()
		expect(car.isOn).toEqual(false)
	})
	it("tanqueCheio", function(){
		expect(car.tanque).toEqual(40)
	})
	
	it("deve gastar 1l a cada 5seg", function(){
		car.tanque = 40;
		car.turnOn();
		setTimeout("car.turnOn()", 5100, function(){
			expect(car.tanque).toEqual(39);
		});
	})
	
	it("desligar quando acaba a gasosa", function(){
		car.tanque = 2
		car.turnOn();
		setTimeout("car.turnOn()", 10100, function(){
			expect(car.isOn).toEqual(false);
		})
	})
	
	it("ligar som", function(){
		car.ligarSom();
		expect(car.isSomOn).toEqual(true)
	})
	
	it("tocar rádio", function(){
		car.ligarSom();
		expect(car.tocarRadio("radio")).toEqual("radio")
	})
	
	it("deve completar o tanque", function(){
		car.encherTanque();
		expect(car.tanque).toEqual(40)
	})
	it("Trocar marcha",function (){
		car.trocaMarcha(3)
		expect(car.marcha).toEqual(3)
	})
	
	it("Se a marcha é maior que seis",function (){
		expect(car.trocaMarcha(6)).toEqual(false)
	})
})