<<template>
  <div>
    <navheader></navheader>
    <workspace />
    <fade-toggle/>
  </div>
</template>

<script>
import navheader from "../header/navheader.vue";
import fadeToggle from "../fadeToggle/fadeToggle.vue";
import workspace from "../workspace/workspace.vue";

export default {
  components: { navheader,fadeToggle, workspace },
  methods: {
    test: function() {
      console.log('got addentry event in app.vue');
    }
  }
};

</script>

<style>

</style>
