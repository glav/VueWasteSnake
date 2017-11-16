<<template>
  <div>
      <button v-on:click="toggle">Toggle</button>
      <transition name="fade">
        <p v-if="showText">This is some text</p>
      </transition>
  </div>
</template>

<script>
export default {
  template: "<fade-toggle/>",
  data: function() {
    return {
      showText: true
    };
  },
  methods: {
    toggle: function() {
      this.showText = !this.showText;
    }
  }
};
</script>

<style>
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }

        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0
        }

</style>
