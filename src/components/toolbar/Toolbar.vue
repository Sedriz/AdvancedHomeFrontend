<template>
  <v-container class="d-flex">
    <NewButton/>
    <SettingsButton class="ml-auto"/>
  </v-container>
</template>

<script>
import NewButton from "./NewButton.vue";
import SettingsButton from "./SettingsButton.vue";
export default {
    components: { NewButton, SettingsButton }
};
</script>
