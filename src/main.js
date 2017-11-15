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