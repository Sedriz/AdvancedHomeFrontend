<template>
  <v-app>
    <Toolbar/>
    <v-main class="text-center">
      <v-container fluid>
      <router-view/>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar/Toolbar.vue";

export default {
  name: "App",

  components: {
    Toolbar,
  },  
};
</script>
