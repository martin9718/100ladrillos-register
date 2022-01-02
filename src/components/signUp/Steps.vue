<template>
  <div class="steps">
    <div class="steps__content  d-flex justify-center align-center">
    <span
        v-for="(item, i) in 4"
        :class="i + 1 <= getSteps ? 'completed': ''"
    >
    </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Steps",
  computed:{
    ...mapGetters('auth', ['getSteps'])
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