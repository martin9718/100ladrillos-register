<template>
  <div class="steps">
    <div class="steps__content  d-flex justify-center align-center">
    <span
        v-for="(item, i) in 4"
        :class="i + 1 <= completedSteps ? 'completed': ''"
    >
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: {
    completedSteps: Number
  },
  created() {
    console.log(this.completedSteps)
  }
}
</script>

<style scoped>
.steps {
  margin-top: 24px;
  width: 320px;
}

.steps__content span {
  background-color: #eaeaea;
  border-radius: 999px;
  display: block;
  height: 8px;
  margin-right: 24px;
  width: 8px;
}

.completed {
  background-color: #3e3e3e !important;
}


</style>