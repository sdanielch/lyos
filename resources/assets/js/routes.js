import $ from 'jquery';
import Backbone from 'backbone';


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