<template>
  <v-container>
    <v-select
      v-model="data.selected"
      :items="data.locations"
      chips
      label="Location"
      multiple
      solo
      :loading="data.isLoading"
    ></v-select>
  </v-container>
</template>

<script>
export default {
  props: ["data"],
};
</script>
