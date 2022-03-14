<template>
  <div class="text-center">
    <v-subheader> State </v-subheader>
    <v-btn width="10em" height="8em" icon v-on:click="onSwitchClick">
      <v-icon size="10em" :color="getColor">
        {{ getIcon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "StateComponent",
  props: ["state"],

  methods: {
    onSwitchClick() {
      if (this.state != -1) {
        this.state =
          !this.state;
      }
    },
  },

  computed: {
      getColor() {
      let color = "error";
      if (this.state == 1) {
        color = "active";
      } else if (this.state == 0) {
        color = "";
      }
      return color;
    },

    getIcon() {
      let activeState = this.state;
      if (activeState == 1) {
        return "mdi-toggle-switch";
      }
      return "mdi-toggle-switch-off-outline";
    },
  },
};
</script>