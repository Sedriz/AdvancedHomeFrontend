<template>
  <div>
    <v-subheader> Color </v-subheader>
    <v-color-picker
      dot-size="25"
      class="mx-auto"
      mode="hexa"
      v-model="color"
      v-on:update:color="onColorPick"
      swatches-max-height="200"
    ></v-color-picker>
  </div>
</template>

<script>
export default {
  name: "ColorPickerComponent",
  props: ["state"],

  methods: {
    onColorPick() {
      console.log(this.color)
    },
  },

  data() {
    return {
      color: '',
    };
  },
};
</script>