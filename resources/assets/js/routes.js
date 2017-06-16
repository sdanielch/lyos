/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */
import $ from 'jquery';
import Backbone from 'backbone';
import EventEmitter from 'events';
import Window from './core/Window';
import Application from './core/Application';

export default class Route extends Backbone.Router {
    get routes() {
        return {
            '': 'index',
            'signup': 'signUp',
            'signin': 'signIn'
        }
    }

    index() {
        console.log('hello world!');
    }

    signUp() {
        console.log('signup');
    }

    signIn() {
        console.log('signin');
    }
};