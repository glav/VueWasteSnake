<<template>
    <div>
        <h4 class='title'>Todays waste ssssssssnake</h4>
        <div>
            <transition-group name="fade" tag="div" >
                <div v-for="card in snakecards" v-bind:key="card.index" class="display-card">
                    <h4>{{ card.title }}</h4>
                    <p>{{ card.activityDescription }}</p>
                    <p>Time wasted: {{ card.timeWasted }}</p>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>

export default {
    props: ['snakecards'],
    template: '<display-surface/>',
    data: function() {
        return {};
    },
    methods: {
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.display-card {
    width: 22rem;
    box-shadow: #a2ada4 3px 2px 18px 0px;   
    padding: 4px;
    position: relative;
    margin: 1rem;
    text-align: center;
    float:left;
}

.title {
    text-align: center;
    padding:10px;
    font-weight: bold;
}
</style>
