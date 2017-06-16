/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */

import EventEmitter from 'events';
import Window from './Window';
import { Exception } from './exceptions';

var _appId = 0;

export default class Application {
	constructor() {
		this.elem = this.createElem();
		this.window = null;
	}

	createElem() {
		// create a new div container with an unique id
		return null;
	}

	getElem() {
		return this.elem;
	}

	setWindow(window) {
		if(!(window instanceof Window)) {
			throw new Exception('window must be instance of Window class');
		}

		this.window = window;
	}

	destroy() {
		
	}
}