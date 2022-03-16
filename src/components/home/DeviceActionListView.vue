<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center">
      <ActionButton
          v-for="button of buttonList"
          :key="button.device.id"
          :displayData="button"/>
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
