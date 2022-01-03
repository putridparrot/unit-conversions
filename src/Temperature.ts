// <auto-generated>
// This code was generated by the UnitCodeGenerator tool
//
// Changes to this file will be lost if the code is regenerated
// </auto-generated>

export namespace Temperature {
	export class Celsius {
		static toFahrenheit(value: number): number {
			return value * 1.8 + 32.0;
		}
		static toKelvin(value: number): number {
			return value + 273.15;
		}
		static toRankine(value: number): number {
			return value * 9.0/5.0 + 491.67;
		}
	}

	export class Fahrenheit {
		static toCelsius(value: number): number {
			return ((value - 32.0) * 5.0) / 9.0;
		}
		static toKelvin(value: number): number {
			return (((value - 32.0) * 5.0) / 9.0) + 273.15;
		}
		static toRankine(value: number): number {
			return value + 459.67;
		}
	}

	export class Kelvin {
		static toCelsius(value: number): number {
			return value - 273.15;
		}
		static toFahrenheit(value: number): number {
			return ((value - 273.15) * 1.8) + 32.0;
		}
		static toRankine(value: number): number {
			return value * 1.8;
		}
	}

	export class Rankine {
		static toCelsius(value: number): number {
			return (value - 491.67) * 5.0/9.0;
		}
		static toFahrenheit(value: number): number {
			return value - 459.67;
		}
		static toKelvin(value: number): number {
			return value / 1.8;
		}
	}
}