<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center">
      <DeviceDialogButton
        v-for="button of buttonList"
        :key="button.device.id"
        :displayData="button"
      />
    </div>
  </v-container>
</template>

<script>
import DeviceDialogButton from "./card/DeviceDialogButton.vue";

export default {
  props: ["buttonList"],
  components: { DeviceDialogButton },
};
</script>
