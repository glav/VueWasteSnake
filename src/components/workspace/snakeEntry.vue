<template>
    <div class="snake-entry">
        <form name="snake-entry-form">
            <p>Enter the event or item that wasted your time recently or forced a context switch</p>
            <label for="activity">Activity</label>
            <input id="activity" ref="activity" v-model.trim="item.activityDescription" placeholder="Enter Activity" autofocus />
            <label for="timewasted">Time wasted</label>
            <input id="timewasted" v-model.number="item.timeWasted" placeholder="Enter hours" type="number" />
            <input type="submit" value="Add" v-on:click.prevent="addEntry" />
        </form>
    </div>
</template>

<script>
let cardTitles = ['Time waster','Annoyance','Not work','Context switch','Chit chat','Meeting?'];

export default {
  props: ["index"],
  template: "<snake-entry/>",
  methods: {
    addEntry: function() {
      if (this.item.activityDescription === "") {
        alert("You must enter an activity");
        return;
      }

      if (Number(this.item.timeWasted) <= 0) {
        alert("You must enter some time that was wasted");
        return;
      }
      this.item.title = this.getWasteTitle();
      this.$emit("addevent", this.item);
      this.clearEntryFields();
      this.$refs.activity.focus();
    },
    clearEntryFields: function() {
      this.item.activityDescription = "";
      this.item.timeWasted = "";
    },
    getWasteTitle: function() {
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
      var max = cardTitles.length - 1;
      var randomIndex = getRandomInt(0, max);
      return cardTitles[randomIndex];
    }
  },
  data() {
    return {
      item: {
        activityDescription: "",
        timeWasted: ""
      }
    };
  }
};
</script>

<style>

</style>
