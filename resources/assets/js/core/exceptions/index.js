/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */
 
export class Exception {
	constructor(message='') {
		this.message = message;
	}
};

export class DimensionException extends Exception {};