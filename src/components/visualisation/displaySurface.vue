<<template>
    <div>
        <p>Display surface</p>
        <div>
            <transition-group name="fade" >
                <div v-for="card in snakecards" v-bind:key="card.index">
                    <p>{{ card.activityDescription }}</p>
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
</style>
