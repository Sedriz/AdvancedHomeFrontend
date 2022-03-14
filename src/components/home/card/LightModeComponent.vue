<template>
  <div>
    <v-select
      :items="mode.items"
      v-model="mode.selected"
      label="Select mode"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "LightModeComponent",
  props: ["mode"],
};
</script>