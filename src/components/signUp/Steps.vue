<template>
<div class="steps">
  <div class="steps__content  d-flex justify-center align-center">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
</template>

<script>
export default {
  name: "Steps"
}
</script>

<style scoped>
.steps{
  margin-top: 24px;
  width: 320px;
}
.steps__content span{
  background-color: #3e3e3e;
  border-radius: 999px;
  display: block;
  height: 8px;
  margin-right: 24px;
  width: 8px;
}
.steps__content span:nth-child(4){
  background-color: #eaeaea;
}


</style>