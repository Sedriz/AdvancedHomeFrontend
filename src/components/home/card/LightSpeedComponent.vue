<template>
  <div>
    <v-subheader> Speed </v-subheader>
    <v-slider
      inverse-label
      thumb-label="always"
      v-model="speed"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: "LightSpeedComponent",
  props: ["speed"],
};
</script>