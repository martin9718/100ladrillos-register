<template>
  <div class="profile d-flex justify-center align-center">
    <div class="profile__content">
      <div class="profile__content__head">
        <Steps class="d-block d-md-none mb-6" />
        <h3 class="head__title">¿Cómo te llamas?</h3>
      </div>
      <div class="profile__content__form">
        <div class="form__field d-flex flex-column">
          <label>Primer nombre</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="form__field d-flex flex-column">
          <label>Segundo nombre (Opcional)</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="form__field d-flex flex-column">
          <label>Primer apellido</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="form__field d-flex flex-column">
          <label>Segundo apellido (Opcional)</label>
          <input type="text" v-model="user.email">
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
  name: "Profile",
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
.profile{
  height: 100%;
}
.profile__content{
  color: #3e3e3e;
  margin: 77px;
  max-width: 446px;
}


</style>