<template>
  <div class="row col-12 col-md-8 col-sm-8 mx-auto mt-10">
    <div class="row col-12 col-md-8 col-sm-12 mx-auto">
      <div class="row">
        <input
          :ref="`input-${i}`"
          v-for="(key, i) in pinLength"
          :key="i"
          :data-length="'Length_' + i"
          :data-index="i"
          class="rounded inputOtp col col-md-1 mx-2"
          type="tel"
          maxLength="1"
          autocomplete="off"
          v-model="values[i]"
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
  props: {
    pinLength: {
      requierd: true,
    },
    values: {
      requierd: true,
    },
  },
  computed: {
    getValues() {
      return this.values.join("");
    },
  },
  methods: {
    handleFocus(e) {
      const index = parseInt(e.target.dataset.index);
      e.preventDefault();
      if (index + 1 < this.pinLength) {
        this.$refs[`input-${index + 1}`][0].focus();
      }
    },
    handlePaste(evt) {
      const clipdata = evt.clipboardData || window.clipboardData;
      const pastedData = clipdata.getData("text/plain");
      var pastedChars = pastedData.split("");

      for (var i = 0; i < pastedChars.length; i++) {
        const getValue = (this.values[i] = pastedChars[i]);
        this.$refs[`input-${i}`][0].value = getValue;
      }
      this.$refs[`input-${5}`][0].focus();
      evt.preventDefault();
    },
    handleKeydown(e) {
      const index = parseInt(e.target.dataset.index);
      const value = e.target.value;

      if (e.which === 8 && !value && index) {
        if (index + 1 > 0) {
          this.$refs[`input-${index - 1}`][0].focus();
        }
      }
    },
  },
};
</script>
<style scoped>
input {
  width: 50px;
  height: 50px;
  text-align: center;
  background: #dee2e6;
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  left: auto;
}
.inputOtp:focus {
  outline-offset: 0px !important;
  outline: none !important;
}
</style>
