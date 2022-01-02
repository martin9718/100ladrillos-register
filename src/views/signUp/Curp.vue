<template>
  <div class="curp d-flex justify-center align-center">
    <div class="curp__content">
      <div class="curp__content__head">
        <Steps class="d-block d-md-none mb-6" />
        <h3 class="head__title">¿Cuál es tu CURP?</h3>
      </div>
      <div class="curp__content__form">
        <div class="form__field d-flex flex-column">
          <label>Primer nombre</label>
          <input type="text" v-model="user.email" placeholder="CURP">
        </div>
        <div class="curp__content__form__info">
          <p>Consulta tu <a href="">CURP</a></p>
          <p>Si soy extranjero <a href="">¿Cómo solicito mi CURP?</a></p>
        </div>
        <div>
          <v-btn class="btn-no-active mt-6 mr-4">Anterior</v-btn>
          <v-btn class="btn-no-active mt-6">Siguiente</v-btn>
        </div>
      </div>
      <Steps class="d-none d-md-block" />
    </div>
  </div>
</template>

<script>
import Steps from "../../components/signUp/Steps";

export default {
  name: "Phone",
  components:{
    Steps
  },
  data(){
    return{
      user:{}
    }
  }
}
</script>

<style scoped>
.curp{
  color: #3e3e3e;
  height: 100%;
}
.curp__content{
  color: #3e3e3e;
  margin: 77px;
  max-width: 446px;
}

.curp__content__form__info{
  font-size: 14px;
  margin-top: 24px;
}

.curp__content__form__info p{
  margin-bottom: 0;
}

.curp__content__form__info p:last-child{
  margin-top: 8px;
}

.curp__content__form__info a{
  text-decoration: none;
  color: #0178dd;
}

</style>