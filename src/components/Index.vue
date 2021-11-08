<template>
  <div class="row col-12 col-md-8 col-sm-8 mx-auto mt-10">
    <div class="row col-12 col-md-8 col-sm-12 mx-auto">
      <div class="row">
        <input
          :ref="`input-${i}`"
          v-for="(key, i) in pinLength"
          :key="i"
          :data-length="key.length"
          :data-index="i"
          style="
            width: 50px;
            height: 50px;
            text-align: center;
            background: rgba(255, 255, 255, 0.65);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(13px);
            -webkit-backdrop-filter: blur(13px);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            left: auto;
          "
          class="rounded inputOtp col col-md-1 mx-2"
          type="tel"
          maxLength="1"
          autocomplete="off"
          v-model="key.value"
          @input="handleFocus($event)"
          @paste="handlePaste($event)"
          @keydown="handleKeydown($event)"
          pattern="\d{1}"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pinLength: [
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
        { length: 1, value: "" },
      ],
    };
  },
  methods: {
    handleFocus(e) {
      const value = e.target.value;

      const index = parseInt(e.target.dataset.index);

      const maxlength = e.target.dataset.length;
      if (value.length >= maxlength) {
        if (typeof this.pinLength[index + 1] == "undefined") {
          e.preventDefault();
          return;
        }
        this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        e.preventDefault();
      }
    },
    handlePaste(evt) {
      const clipdata = evt.clipboardData || window.clipboardData;
      const pastedData = clipdata.getData("text/plain");
      var pastedChars = pastedData.split("");

      for (var i = 0; i < pastedChars.length; i++) {
        this.pinLength[i].value = pastedChars[i];
      }
      this.$refs[`input-${5}`][0].focus();
      evt.preventDefault();
    },
    handleKeydown(e) {
      const index = parseInt(e.target.dataset.index);
      const value = e.target.value;
      if (e.which === 8 && !value && index) {
        this.$refs[`input-${parseInt(index - 1)}`][0].focus();
      }
    },
  },
};
</script>
<style scoped>
.inputOtp {
}
</style>
