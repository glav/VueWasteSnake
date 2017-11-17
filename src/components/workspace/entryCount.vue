<<template>
  <div class="entry-container">
    <div>
      <h4>Number of Entries:&nbsp;{{ currentCount }}</h4>
    </div>
    <div>
      <h4 v-bind:class="{important:shouldHighlightHours}">Total wasted time in hours:&nbsp;{{ totalTimeWasted }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["snakecards"],
  template: '<entry-count />',
  computed: {
    shouldHighlightHours: function() {
      return this.totalTimeWasted > 0;
    },
    currentCount: function() {
      return this.snakecards ? this.snakecards.length : 0;
    },
    totalTimeWasted: function() {
      let limit = this.currentCount;
      let total = 0;
      for (var cnt=0; cnt < limit; cnt++) {
          total += this.snakecards[cnt].timeWasted;
      }
      return total;
    }
  }
};
</script>

<style>
.entry-container {
  padding: 8px;
}
.important {
  color: #c52626;
}
</style>
