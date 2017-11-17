<<template>
    <div>
        <p>Display surface</p>
        <div>
            <transition-group name="fade" >
                <div v-for="card in snakecards" v-bind:key="card.index" class="display-card">
                    <h4>{{ getWasteTitle() }}</h4>
                    <p>{{ card.activityDescription }}</p>
                    <p>Time wasted: {{ card.timeWasted }}</p>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>

let cardTitles = ['Time waster','Annoyance','Not work'];

export default {
    props: ['snakecards'],
    template: '<display-surface/>',
    data: function() {
        return {};
    },
    methods: {
        getWasteTitle: function() {
            function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
                }
            var max = cardTitles.length-1;
            var randomIndex = getRandomInt(0,max);
            return cardTitles[randomIndex];
        }
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
}
</style>
