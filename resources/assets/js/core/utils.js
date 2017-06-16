/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */

import { Exception, DimensionException } from './exceptions';

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