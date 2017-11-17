<<template>
  <div>
    <div>
      <span>Number of Entries:&nbsp;</span>
      <span>{{ currentCount }}</span>
    </div>
    <div>
      <span>Total wasted time in hours:&nbsp;</span>
      <span>{{ totalTimeWasted }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["snakecards"],
  template: '<entry-count />',
  computed: {
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

</style>
