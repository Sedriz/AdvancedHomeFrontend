<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" large> mdi-plus-thick</v-icon>
      </template>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" link :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: "NewButton",
    data: () => ({
        items: [
            { text: "Location", icon: "mdi-map-marker", link: '/creator/create/location' },
            { text: "Device", icon: "mdi-server", link: '/creator/create/device' },
            { text: "Action", icon: "mdi-fast-forward", link: '/creator/create/action' },
            { text: "Type", icon: "mdi-format-list-bulleted-type", link: '/creator/create/type' },
            { text: "Data type", icon: "mdi-chart-box", link: '/creator/create/datatype' },
        ],
    }),
};
</script>
