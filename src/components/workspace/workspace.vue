<<template>
    <div class="workspace container-fluid">
        <div class="col-sm-2">
            actions
        </div>
        <div class="col-sm-4 workspace-section-box">
            <snake-entry/>
        </div>
        <div class="col-sm-4 workspace-section-box">
            Statistics
        </div>
        <button v-on:click="test">test</button>
        
    </div>
</template>

<script>
import snakeEntry from './snakeEntry.vue';

export default {
    template: '<workspace/>',
    components: { snakeEntry },
    methods: {
        test: function() {
            console.log('test');
            console.log(datastore);
        }
    }
};
</script>

<style>
.workspace {
    height: 10rem;
    border-bottom: 1px solid black;
    background: url('/images/wastesnakeHeadLogo.png') no-repeat right/10%;
}
.workspace div {
    height: 100%;
}
.workspace-section-box {
    border-left: 1px dotted gray;
}

</style>
