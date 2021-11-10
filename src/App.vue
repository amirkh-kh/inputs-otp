<template>
  <v-app>
    <v-main>
      <div class="mx-auto">
        <vueinput-otp :pinLength="pinLength" :values="values"></vueinput-otp>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import VueinputOtp from "./components/VueinputOtp.vue";

export default {
  name: "App",
  components: {
    VueinputOtp,
  },
  data() {
    return {
      pinLength: 6,
      values: [],
    };
  },
};
</script>
