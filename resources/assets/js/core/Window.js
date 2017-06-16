/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */

import EventEmitter from 'events';
import { Dimension } from './utils';
import { Exception, DimensionException } from './exceptions/exceptions';

export default class Window extends EventEmitter {
	constructor(application=null, title='', width=100, height=100, x=0, y=0, z='auto') {
		super();
		if(!(application instanceof Application)) {
			throw new Exception('application can be null');
		}

		this.title = title;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		switch(z) {
			case 'auto':
			case 'front':
				// set in front
				break;
			case 'back':
				break;
			default:
				// front
		}
		if(z === 'auto') {
			// set in front
		}
		this.z = z;
		this.on('close', this.onClose);
	}

	setTitle(title) {
		if(typeof title !== 'string') {
			throw new Exception('title must be string');
		}

		this.title = title;
	}

	setWidth(x) {
		if(x < 0) {

		}
		this.x = x;
	}

	setHeight(y) {
		this.y = y;
	}

	setSize(size) {
		if(!(size instanceof Dimension)) {
			throw new Exception('must be instance of Dimension');
		}

		this.width = size.width;
		this.height = size.height;
	}

	maximize() {

	}

	minimize() {

	}

	onClose() {

	}

	onMaximize() {

	}

	onMinimize() {

	}
};