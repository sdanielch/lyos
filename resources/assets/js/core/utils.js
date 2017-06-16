import { Exception, DimensionException } from './exceptions/exceptions';

export class Dimension {
	constructor(width, height) {
		if(typeof width !== 'number' || typeof height !== 'number') {
			throw new DimensionException('width and height must be integer');
		}
		if(width < 0 || height < 0) {
			throw new DimensionException('width and height must be positive');
		}

		this.width = width;
		this.height = height;
	}
};