'use strict';

import Vue from 'vue';
import app from './components/app/app.vue';
// import navheader from './components/header/navheader.vue'

// var hdr = new Vue({
//    el: '#navheader' ,
//    template: '<navheader />',
//    components: { navheader }

// });

var bootstrap = new Vue({
    el: '#app',
    template: '<app/>',
    components: { app }
});

