<template>
  <v-container class="d-flex">
    <router-link to="/">
      <v-img
          lazy-src="@/assets/logo.png"
          max-height="40"
          max-width="100"
          src="@/assets/logo.png"
      ></v-img>
    </router-link>
    <NewButton class="ml-auto mr-3"/>
    <SettingsButton/>
  </v-container>
</template>

<script>
import NewButton from "./NewButton.vue";
import SettingsButton from "./SettingsButton.vue";
export default {
    components: { NewButton, SettingsButton }
};
</script>
