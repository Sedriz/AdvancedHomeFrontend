<template>
  <div class="background py-10">
    <h3>Devices:</h3>
    <div class="d-flex flex-wrap justify-center">
      <DeviceDialogButton
        v-for="device of buttonList"
        :key="device.device.id"
        v-bind:displayData="device"
      />
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
