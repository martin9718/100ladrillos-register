<template>
  <div class="social">
    <div class="social__content d-flex flex-column">
      <div class="social__content__head d-flex justify-space-between align-center">
        <span class="line"></span>
        <span class="label">o regístrate con:</span>
        <span class="line"></span>
      </div>
      
      <div class="social__content__icon d-flex justify-center align-center">
        <v-btn>
          <v-img src="../../assets/images/logo-google.png"></v-img>
        </v-btn>
        <v-btn>
          <v-img src="../../assets/images/logo-microsoft.png"></v-img>
        </v-btn>
        <v-btn>
          <v-img src="../../assets/images/logo-facebook.png"></v-img>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social"
}
</script>

<style scoped>

.social{
  margin-top: 24px;
  max-width: 320px;
}

.social__content__head .line{
  background: #eaeaea;
  display: block;
  height: 1px;
  width: 84.4px;
}

.social__content__head .label{
  color: #3e3e3e;
  font-size: 14px;
}

.social__content__icon{
  margin-top: 24px;
}

.social__content__icon .v-btn{
  background: white;
  box-shadow: 0 0 6px 0 #f3f3f3;
  height: 48px;
  min-width: 48px;
  width: 48px;
}
.social__content__icon .v-btn:nth-child(2){
  margin: 0 48px;
}


</style>