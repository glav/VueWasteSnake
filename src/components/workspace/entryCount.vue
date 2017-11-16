<<template>
  <div>
    <span>Number of Entries:&nbsp;</span>
    <span>{{ currentCount }}</span>
  </div>
</template>

<script>
export default {
  props: ["currentCount"],
  template: '<entry-count />'
};
</script>

<style>

</style>
