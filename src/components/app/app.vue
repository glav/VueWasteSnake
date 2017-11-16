<<template>
  <div id="app">
    <navheader></navheader>
    <p>Header should show</p>
    <fade-toggle/>
  </div>
</template>

<script>
import navheader from "../header/navheader.vue";
import fadeToggle from "../fadeToggle/fadeToggle.vue";

export default {
  components: { navheader,fadeToggle }
};
</script>

<style>

</style>
