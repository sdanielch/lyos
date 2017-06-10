import jquery from 'jquery';
import Backbone from 'backbone';
import Route from './routes';

window.jQuery = jquery;
window.$ = jquery;
$ = window.$;


var router = new Route();
Backbone.history.start();