'use strict';

import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var test = new Vue({
    el: '#test1',
    data: {
        items: [
            'item1',
            'this',
            'that'
        ],
        label: 'click me'
    },
    methods: {
        testmeth: function () {
            alert('clicked');
        }
    }
});

var test2 = new Vue({
    el: '#test2',
    methods: {
        toggle: function () {
            this.showText = !this.showText;
        }
    },
    data: {
        showText: true
    }

});


Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var test3 = new Vue({
    el: '#test3',
    data: {
        somelist: [
            { id: 0, text: 'zero' },
            { id: 1, text: 'one' },
            { id: 2, text: 'two' }

        ]
    }
});
