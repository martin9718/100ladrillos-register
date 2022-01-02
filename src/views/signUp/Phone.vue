<template>
<div class="phone d-flex justify-center align-center">
  <div class="phone__content">
    <div class="phone__content__head">
      <Steps class="d-block d-md-none mb-6" />
      <h3 class="head__title">¿Cuál es tu teléfono celular?</h3>
    </div>
    <div class="phone__content__form">
      <div class="form__field">
        <div class="form__field__pass d-flex align-center">
          <input :type="show ? 'text' : 'password'" v-model="user.password">
          <v-icon @click="showPass" size="small">{{show ? 'fas fa-eye-slash' : 'fas fa-eye'}}</v-icon>
        </div>
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
      user:{},
      show: false
    }
  },
  methods:{
    showPass(){
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
.phone{
  height: 100%;
}
.phone__content{
  color: #3e3e3e;
  margin: 77px;
  max-width: 446px;
}

</style>