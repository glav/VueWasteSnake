<<template>
  <div>
    <navheader></navheader>
    <workspace v:bind:store="store"/>
    <fade-toggle/>
  </div>
</template>

<script>
import navheader from "../header/navheader.vue";
import fadeToggle from "../fadeToggle/fadeToggle.vue";
import workspace from "../workspace/workspace.vue";

export default {
  components: { navheader,fadeToggle, workspace }
};

</script>

<style>

</style>
