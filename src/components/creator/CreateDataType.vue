<template>
  <div>
    <v-text-field
        counter="25"
        hint="The named that will be displayed"
        label="Name"
        filled
        v-model="formData.name"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "name",
      }
    };
  },
};
</script>
