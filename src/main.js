'use strict';

import Vue from 'vue';
import app from './components/app/app.vue';

var bootstrap = new Vue({
    el: '#app',
    template: '<app/>',
    components: { app }
});

