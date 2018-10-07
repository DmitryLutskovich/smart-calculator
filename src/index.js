class SmartCalculator{
	constructor(initialValue) {
		this.result = [initialValue];
	}

	add(number) {
		this.result.push("+");
		this.result.push(number);
		return this;
	}

	subtract(number) {
		this.result.push("-");
		this.result.push(number);
		return this;
	}

	multiply(number) {
		this.result.push("*");
		this.result.push(number);
		return this;
	}

	devide(number) {
		this.result.push("/");
		this.result.push(number);
		return this;
	}

	pow(number) {
		if(this.result[this.result.length-1][2]===")"){
			let number1 = this.result[this.result.length-1][1];
			number=Math.pow(number1,number);
			this.result[this.result.length-1] = this.result[this.result.length-1].replace(number1, number);
		}else{
			this.result.splice(this.result.length-1, 0, "Math.pow(");
			this.result.push(","+ number + ")");
		}
		return this;
	}

	valueOf() {
		return eval(this.result.join(" "));
	}

}

module.exports = SmartCalculator;