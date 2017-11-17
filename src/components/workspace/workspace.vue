<<template>
    <div>
        <div class="workspace container-fluid">
            <div class="col-sm-2 workspace-section">
                actions
            </div>
            <div class="col-sm-4 workspace-section workspace-section-box">
                <!-- This v-on event capture here MUST be on this element as it is the one emitting it
                Having it anywhere else does not work -->
                <snake-entry v-bind:index="currentIndex" v-on:addevent="addEntry" />
            </div>
            <div class="col-sm-4 workspace-section-box workspace-section">
                <entry-count v-bind:snakecards="entries" />
            </div>
        </div>
        <display-surface v-bind:snakecards="entries" />
    </div>
</template>

<script>
 
import snakeEntry from "./snakeEntry.vue";
import entryCount from "./entryCount.vue";
import displaySurface from "../visualisation/displaySurface.vue";

export default {
  template: "<workspace/>",
  components: { snakeEntry, entryCount,displaySurface },
  data: function() {
    return {
      entries: [],
      currentIndex: 0
    };
  },
  methods: {
    addEntry: function(snakeEntry) {
        this.entries.push({index: this.currentIndex, activityDescription: snakeEntry.activityDescription, timeWasted: snakeEntry.timeWasted });
        this.currentIndex++;
        console.log('add entry');
        console.log(snakeEntry);
        
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
.workspace .workspace-section {
  height: 100%;
  padding:8px;
}
.workspace-section-box {
  border-left: 1px dotted gray;
}


</style>
