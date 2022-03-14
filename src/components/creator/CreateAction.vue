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
        :items="formData.dataType.available"
        label="Data type"
        v-model="formData.dataType.selected"
        filled
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    isUpdate: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      formData: {
        name: "name",
        dataType: {
          selected: "Text",
          available: ["Text", "Number", "Decimal", "Long number", "Character", "Date"]
        },
      }
    };
  },

  created() {
    console.log(this.id + 'from action')
  },

  methods: {
    submitForm() {
      console.log("submitted")
    }
  }
};
</script>
