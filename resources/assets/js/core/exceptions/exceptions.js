export class Exception {
	constructor(message='') {
		this.message = message;
	}
};

export class DimensionException extends Exception {};