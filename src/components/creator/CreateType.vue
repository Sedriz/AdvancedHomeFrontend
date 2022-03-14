<template>
  <div>
    <v-text-field
        counter="25"
        hint="The named that will be displayed"
        label="Name"
        filled
        v-model="formData.name"
    ></v-text-field>
    <v-select
        :items="formData.action.available"
        label="Actions"
        v-model="formData.action.selected"
        filled
    ></v-select>
    <v-checkbox
        v-model="formData.isReachable"
        label="Is type reachable"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "name",
        isReachable: false,
        action: {
          selected: "Text",
          available: ["Text", "Number", "Decimal", "Long number", "Character", "Date"]
        },
      }
    };
  },
};
</script>
