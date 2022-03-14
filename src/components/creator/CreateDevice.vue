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
        :items="formData.location.available"
        label="Location"
        v-model="formData.location.selected"
        filled
    ></v-select>
    <v-select
        :items="formData.type.available"
        label="Type"
        v-model="formData.type.selected"
        filled
    ></v-select>
    <v-select
        :items="formData.dataType.available"
        label="Data type"
        v-model="formData.dataType.selected"
        filled
    ></v-select>
    <v-checkbox
        v-model="formData.isButtonControlled"
        label="Is controllable by button"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "name",
        isButtonControlled: false,
        location: {
          selected: "location",
          available: ["location"],
        },
        type: {
          selected: "Text",
          available: ["Text", "Text2"],
        },
        dataType: {
          selected: "Text",
          available: ["Text", "Number", "Decimal", "Long number", "Character", "Date"]
        },
      }
    };
  },
};
</script>
