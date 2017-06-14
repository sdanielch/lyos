/**
 * LayanOS
 *
 * @link      https://github.com/sdanielch/lyos
 * @copyright Copyright (c) 2017 LayanOS
 * @license   https://github.com/sdanielch/lyos/blob/master/README.md (GPL-3.0 License)
 */
import $ from 'jquery';
import Backbone from 'backbone';
import Route from './routes';


var router = new Route();
Backbone.history.start();