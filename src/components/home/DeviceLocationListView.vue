<template>
  <div class="background py-10 device-list">
    <h3>Devices</h3>
    <div class="d-flex flex-wrap justify-center">
      <DeviceDialogButton
        v-for="device of buttonList"
        :key="device.device.id"
        v-bind:displayData="device"
        :color="'secondary'"
      />
    </div>
    <div v-if="buttonList == null" class="py-10">
      <p>Add new <strong>Device</strong></p>
      <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import DeviceDialogButton from "./card/DeviceDialogButton.vue";

export default {
  props: ["buttonList"],
  components: { DeviceDialogButton },
};
</script>
<style scoped>
.device-list {
  flex: 1 1 auto;
}
</style>