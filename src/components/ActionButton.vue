<template>
  <div class="mx-5">
    <v-row>
      <v-btn
          depressed
          elevation="13"
          fab
          class="mx-auto mb-2"
          x-large
          :color="color"
      >
        <v-icon x-large :color="getButtonColor">
          {{ getButtonIcon }}
        </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <span class="mx-auto text-wrap overflow-hidden btn-title">
        {{ displayData.button.title }}
      </span>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    displayData: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    getButtonIcon() {
      let activeState = this.displayData.device.activeState;
      if (activeState === true) {
        return this.displayData.button.iconActive;
      }
      return this.displayData.button.iconInactive;
    },
    getButtonColor() {
      let activeState = this.displayData.device.activeState;
      let color = "error";
      if (activeState === 1) {
        color = 'active';
      } else if (activeState === 0) {
        color = "textPrimary";
      }
      return color;
    },
  },
};
</script>
<style scoped>
.btn-size {
  width: 8em !important;
  height: 6em !important;
}
.btn-title {
  width: 7em !important;
  height: 3em !important;
}
</style>