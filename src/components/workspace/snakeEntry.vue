<template>
    <div class="snake-entry" v-on:addevent="test">
        <p>Enter the event or item that wasted your time recently or forced a context switch</p>
        <label v-bind:for="getActivityControlId">Activity</label>
        <input v-bind:id="getActivityControlId" v-model="item.activityDescription" placeholder="Enter Activity" />
        <label v-bind:for="getTimeControlId">Time wasted</label>
        <input v-bind:id="getTimeControlId" v-model="item.timeWasted" placeholder="Enter hours" />
        <input type="button" value="Add" v-on:click="addEntry" />
    </div>
</template>

<script>
export default {
    props: [ 'index'],
    template:'<snake-entry/>',
    methods: {
        addEntry: function() {
            console.log('emitting addentry event');
            this.$emit('addevent');
        },
        test: function() {
            console.log('test');
        }
    },
    computed: {
        getActivityControlId: function() {
            return 'act-entry-' + this.index;
        },
        getTimeControlId: function() {
            return 'tim-entry-' + this.index;
        }
    },
    data () {
        return {
            item: {
                activityDescription: '',
                timeWasted: 0
            }
            
        }
    }
};
</script>

<style>
</style>
