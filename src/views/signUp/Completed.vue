<template>
  <div class="completed d-flex justify-center">
    <div class="completed__content">
      <div class="completed__content__head">
        <Steps class="d-block d-md-none mb-6" />
        <v-icon>fas fa-check</v-icon>
        <h3 class="head__title">Haz creado una cuenta</h3>
        <span>Tu número de cliente es: 000001</span>
      </div>
      <div class="completed__content__info">
        <h3>Lucile Salazar Quintero</h3>
        <span>tu@correo.com</span>
        <span>33 1111 1111</span>
      </div>
      <v-btn text color="primary">Iniciar sesión</v-btn>
      <Steps class="d-none d-md-block" />
    </div>
  </div>
</template>

<script>
import Steps from "../../components/signUp/Steps";

export default {
  name: "Completed",
  components:{
    Steps
  },
  data(){
    return{
      user:{},
      show: false
    }
  }
}
</script>

<style scoped>
.completed{
  height: 100%;
}
.completed__content{
  color: #3e3e3e;
  margin: 80px;
  max-width: 446px;
  text-align: center;
}

.completed__content__head .v-icon{
  border: 2px solid #3e3e3e;
  border-radius: 999px;
  color: #47cbc3;
  height: 44px;
  margin-bottom: 8px;
  width: 44px;
}

.completed__content__head span {
  display: block;
  color: #8c8c8c;
  margin-top: 16px;
}

.completed__content__info{
  margin-top: 32px;
}

.completed__content__info h3{
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0.09px;
}

.completed__content__info span {
  display: block;
  font-size: 14px;
}

.completed__content .v-btn {
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  letter-spacing: normal;
  margin-top: 48px;
  padding: 10px 32px;
  text-transform: none;
  width: 163px;
}

</style>