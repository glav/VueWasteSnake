<<template>
    <div class="snake-entry">
        <p>Enter the event or item that wasted your time recently or forced a context switch</p>
        <label v-bind:for="getActivityControlId">Activity</label>
        <input v-bind:id="getActivityControlId" v-model="activityDescription" placeholder="Enter Activity" />
        <label v-bind:for="getTimeControlId">Time wasted</label>
        <input v-bind:id="getTimeControlId" v-model="timeWasted" placeholder="Enter hours" />
    </div>
</template>

<script>
export default {
    props: [ 'index'],
    template:'<snake-entry/>',
    methods: {
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
            activityDescription: '',
            timeWasted: 0
            
        }
    },
    mounted: function() {
        console.log('mounted');
        console.log(this.index);
    }
};
</script>

<style>
</style>
