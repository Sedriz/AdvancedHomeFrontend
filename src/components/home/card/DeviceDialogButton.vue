<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <!-- Btn -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        elevation="1"
        class="my-3 mx-3 pt-12 pb-8 btn-size"
        x-large
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-container>
          <v-row class="mx-auto">
            <v-icon class="mx-auto" x-large :color="getButtonColor">
              {{ getButtonIcon }}
            </v-icon>
          </v-row>

          <v-row class="text-center text-wrap btn-title overflow-hidden">
            <p class="mx-auto" :color="getButtonColor">
              {{ displayData.button.title }}
            </p>
          </v-row>
        </v-container>
      </v-btn>
    </template>
    <!-- /Btn -->

    <v-card>
      <v-app-bar dark color="primary" fixed>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-toolbar-title>
                {{ displayData.dialog.title }}
                <v-badge inline :color="getButtonColor" dot />
                <!-- getstyles -->
              </v-toolbar-title>
            </div>
          </template>
          <span>Show online history</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              class="ms-auto"
              v-on:click="onEditClick"
              v-bind="attrs"
              v-on="on"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </template>
          <span>Edit device</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-on:click="onDeleteClick" v-bind="attrs" v-on="on">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <span>Delete device</span>
        </v-tooltip>
      </v-app-bar>

      <v-divider></v-divider>

      <div :style="getContainerSize" class="mt-15">
        <!-- State -->
        <StateComponent
          v-if="isInActionsArray('device-state')"
          v-bind:state="displayData.device.activeState"
        />

        <GraphComponent
          v-if="isInActionsArray('graph-data')"
          :chartData="displayData.dialog.chart.data"
        />

        <ColorPickerComponent v-if="isInActionsArray('color-picker')" />

        <LightSpeedComponent
          v-if="isInActionsArray('light-speed')"
          :speed="this.displayData.dialog.slider.speed"
        />

        <LightModeComponent
          v-if="isInActionsArray('light-mode')"
          :mode="displayData.dialog.mode"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import GraphComponent from "./GraphComponent.vue";
import StateComponent from "./StateComponent.vue";
import ColorPickerComponent from "./ColorPickerComponent.vue";
import LightSpeedComponent from "./LightSpeedComponent.vue";
import LightModeComponent from "./LightModeComponent.vue";
export default {
  name: "DeviceDialogButton",
  props: ["displayData"],
  methods: {
    onEditClick() {
      console.log("Editing");
    },
    onDeleteClick() {
      console.log("Deleting!");
    },
    isInActionsArray(action) {
      return this.displayData.dialog.actions.indexOf(action) > -1;
    },
  },
  data() {
    return {
      dialog: false,
    };
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
    getContainerSize() {
      let brName = this.$vuetify.breakpoint.name;
      let widthPercent = "95%";
      if (brName === "lg" || brName === "xl") {
        widthPercent = "50%";
      } else if (brName === "md") {
        widthPercent = "75%";
      } else if (brName === "sm") {
        widthPercent = "85%";
      }
      return {
        width: widthPercent + " !important",
        margin: "0 auto 0 auto",
      };
    },
  },
  components: {
    GraphComponent,
    StateComponent,
    ColorPickerComponent,
    LightSpeedComponent,
    LightModeComponent,
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
  height: 2.5em !important;
}
</style>