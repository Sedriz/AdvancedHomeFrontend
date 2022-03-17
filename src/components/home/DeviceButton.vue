<template>
  <div>
    <v-btn
        depressed
        class="mx-3 my-3 mb-1 btn-size"
        x-large
        :color="color"
        @click="$refs.dialogComponent.dialog = true"
    >
      <div class="btn-content">
        <v-row class="mx-auto">
          <v-icon class="mx-auto" x-large :color="getButtonColor">
            {{ getButtonIcon }}
          </v-icon>
        </v-row>
        <v-row>
      <span class="mx-auto text-wrap overflow-hidden btn-title">
        {{ displayData.button.title }}
      </span>
        </v-row>
      </div>
    </v-btn>
    <DeviceDialog ref="dialogComponent"  :display-data="displayData"/>
  </div>
</template>

<script>
import DeviceDialog from "@/components/home/card/DeviceDialog";
export default {
  components: {DeviceDialog},
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
  methods: {
    onDeviceDialogEvent(event) {
      this.dialog = event
    }
  }
};
</script>
<style scoped>
.btn-size {
  width: 8em !important;
  height: 6em !important;
}
.btn-content {
  width: 8em !important;
  max-height: 6em !important;
}
.btn-title {
  width: 7em !important;
  max-height: 3.4em;
}
</style>