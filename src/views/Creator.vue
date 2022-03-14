<template>
  <div :style="getContainerSize">
    <v-toolbar rounded>
      <h1>{{title}}</h1>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              @click="deleteInput()"
              class="ms-auto"
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Reset Input</span>
      </v-tooltip>
    </v-toolbar>

    <form>
      <router-view class="mt-10"/>

      <v-btn block color="primary" class="submit-button" x-large>Save</v-btn>
    </form>
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
      formData: {},
      title: ''
    };
  },

  created() {
    this.title = (this.isUpdate === 'update' ? 'Update ' : 'Create ') + this.$route.name;
    console.log(this.id + 'from creator')
    console.log(this.isUpdate + 'from creator')
    console.log(this.$route.name)
  },

  computed: {
    getContainerSize() {
      let brName = this.$vuetify.breakpoint.name;
      let widthPercent = "95%";
      if (brName === "lg" || brName === "xl") {
        widthPercent = "50%";
      } else if (brName === "md") {
        widthPercent = "75%";
      } else if (brName === "sm") {
        widthPercent = "85%";
      }
      return {
        width: widthPercent + " !important",
        margin: "0 auto 0 auto",
      };
    },
  },

  methods: {
    deleteInput() {
      if (confirm("Are you sure you want to delete the input!") === true) {
        this.formData = {}
      }
    },
  },
};
</script>
<style scoped>
.submit-button {

}
</style>
