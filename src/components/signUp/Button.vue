<template>
<v-btn>{{label}}</v-btn>
</template>

<script>
export default {
  name: "Button",
  props:{
    label: String,
    active: Boolean,
    action: Function,
    route: Object
  }
}
</script>

<style scoped>

.active{

}

.no-active{

}


</style>