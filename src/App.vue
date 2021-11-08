<template>
  <v-app>
    <v-main>
      <div class="mx-auto">
        <index></index>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Index from "./components/Index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
};
</script>
