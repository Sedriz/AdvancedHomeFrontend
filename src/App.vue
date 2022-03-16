<template>
  <v-app class="d-flex">
    <Toolbar/>
    <v-main class="text-center">
      <router-view/>
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
