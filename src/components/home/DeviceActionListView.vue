<template>
  <v-container class="d-flex flex-wrap justify-center">
    <ActionButton
        v-for="button of buttonList"
        :key="button.device.id"
        :displayData="button"/>
    <div v-if="buttonList == null" class="py-10">
      <p>Add new <strong>Device</strong> to show Action</p>
      <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  props: ["buttonList"],
  components: { ActionButton },
};
</script>
