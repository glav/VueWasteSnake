<<template>
    <div>
        <div class="workspace container-fluid">
            <div class="col-sm-2">
                actions
            </div>
            <div class="col-sm-4 workspace-section-box">
                <snake-entry v-bind:index="currentIndex" />
            </div>
            <div class="col-sm-4 workspace-section-box">
                <entry-count v-bind:currentCount="currentIndex" />
            </div>
        </div>
    <display-surface />
    </div>
</template>

<script>
 let indexCount = 0;

import snakeEntry from "./snakeEntry.vue";
import entryCount from "./entryCount.vue";
import displaySurface from "../visualisation/displaySurface.vue";

export default {
  template: "<workspace/>",
  components: { snakeEntry, entryCount,displaySurface },
  data: function() {
    return {
      entries: [],
      currentIndex: indexCount
    };
  },
  methods: {
    addEntry: function() {
        indexCount++;
        console.log('add entry');
    },
    removeEntry: function(index) {
        console.log('remove entry #' + index);
    }
  }
};
</script>

<style>
.workspace {
  height: 10rem;
  border-bottom: 1px solid black;
  background: url("/images/wastesnakeHeadLogo.png") no-repeat right/10%;
  box-shadow: #bbbbbb 0 3px 5px 1px;
}
.workspace div {
  height: 100%;
}
.workspace-section-box {
  border-left: 1px dotted gray;
}


</style>
