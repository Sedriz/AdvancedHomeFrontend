<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" large> mdi-plus-thick</v-icon>
      </template>

      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
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
            { text: "Location", icon: "mdi-clock" },
            { text: "Device", icon: "mdi-account" },
            { text: "Action", icon: "mdi-flag" },
            { text: "Type", icon: "mdi-flag" },
            { text: "Data type", icon: "mdi-flag" },
        ],
    }),
};
</script>
