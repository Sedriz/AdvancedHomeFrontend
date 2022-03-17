<template>
  <div class="main-content">
    <v-container>
      <v-select
          v-model="locationSwitcher.selected"
          :items="locationSwitcher.locations"
          chips
          label="Location"
          multiple
          solo
          :loading="locationSwitcher.isLoading"
      ></v-select>
    </v-container>

    <DeviceActionListView :buttonList="actionList"/>

    <DeviceLocationListView :buttonList="deviceList"/>
  </div>
</template>

<script>
import DeviceActionListView from "@/components/home/DeviceActionListView.vue";
import DeviceLocationListView from "@/components/home/DeviceLocationListView.vue";

export default {
  components: {
    DeviceActionListView,
    DeviceLocationListView,
  },

  data: () => ({
    locationSwitcher: {
      isLoading: false,
      locations: ["MyRoom", "SecondRoom"],
      selected: ["MyRoom"],
    },

    actionList: [
      {
        device: {
          activeState: -1, //0 off, 1 on -1 unreachable
          id: 1,
        },
        button: {
          iconActive: "mdi-thermometer",
          iconInactive: "mdi-thermometer-off",
          title: "36°C",
        },
        dialog: {
          title: "Thermometer",
          actions: ["graph-data"],
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 3,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "Lights",
        },
        dialog: {
          title: "Lights",
          actions: [
            "device-state",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 2,
        },
        button: {
          iconActive: "mdi-toggle-switch",
          iconInactive: "mdi-toggle-switch-off-outline",
          title: "Turn off / on all",
        },
        dialog: {
          title: "All devices",
          actions: ["device-state"],
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 20,
        },
        button: {
          iconActive: "mdi-toggle-switch",
          iconInactive: "mdi-toggle-switch-off-outline",
          title: "Turn off / on all",
        },
        dialog: {
          title: "All devices",
          actions: ["device-state"],
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 7,
        },
        button: {
          iconActive: "mdi-toggle-switch",
          iconInactive: "mdi-toggle-switch-off-outline",
          title: "Turn off / on all",
        },
        dialog: {
          title: "All devices",
          actions: ["device-state"],
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 21,
        },
        button: {
          iconActive: "mdi-toggle-switch",
          iconInactive: "mdi-toggle-switch-off-outline",
          title: "Turn off / on all",
        },
        dialog: {
          title: "All devices",
          actions: ["device-state"],
        },
      },
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 12,
        },
        button: {
          iconActive: "mdi-toggle-switch",
          iconInactive: "mdi-toggle-switch-off-outline",
          title: "Turn off / on all",
        },
        dialog: {
          title: "All devices",
          actions: ["device-state"],
        },
      },
    ],

    deviceList: [
      //mdi-led-strip-variant mdi-ceiling-light
      {
        device: {
          activeState: 1, //0 off, 1 on -1 unreachable
          id: 1,
        },
        button: {
          iconActive: "mdi-floor-lamp",
          iconInactive: "mdi-floor-lamp-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 2,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 3,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 4,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 5,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 7,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
      {
        device: {
          activeState: 0, //0 off, 1 on -1 unreachable
          id: 8,
        },
        button: {
          iconActive: "mdi-lightbulb-on",
          iconInactive: "mdi-lightbulb-outline",
          title: "TEST",
        },
        dialog: {
          title: "Device",
          actions: [
            "device-state",
            "graph-data",
            "color-picker",
            "light-speed",
            "light-mode",
          ],
          mode: {
            items: ["Static", "Rainbow", "Stars"],
            selected: "Static",
          },
          slider: {
            speed: 50,
          },
          chart: {
            data: [
              ["Time", "Sensor"],
              ["1:00", 20],
              ["1:15", 12],
              ["1:30", 27],
              ["1:45", 23],
              ["2:00", 10],
              ["2:15", 12],
              ["2:30", 18],
              ["2:45", 13],
              ["3:00", 31],
            ],
          },
        },
      },
    ],
  }),
};
</script>
<style scoped>
.main-content {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>