<template>
<div class="phone d-flex justify-center align-center">
  <ModalPhone :number="number" :modal="modal" @modal="getModal($event)"/>
  <div class="phone__content">
    <div class="phone__content__head">
      <Steps class="d-block d-md-none mb-6" />
      <h3 class="head__title">¿Cuál es tu teléfono celular?</h3>
    </div>
      <div class="phone__content__form">
        <div class="form__field">
          <div class="form__field__pass d-flex align-center">
            <input :type="show ? 'text' : 'password'" v-model="number" placeholder="1234-5678" @input="checkPhone">
            <v-icon @click="showPass" size="small">{{show ? 'fas fa-eye-slash' : 'fas fa-eye'}}</v-icon>
          </div>
          <span>{{ errors[0] }}</span>
        </div>
        <div>
          <div class="form__login d-block d-md-none">
            <span>¿Ya tienes tu cuenta?</span>
            <v-btn text color="primary">Iniciar sesión</v-btn>
          </div>
          <div class="phone__content__form__actions">
            <v-btn to="/registro/usuario" class="btn-no-active mt-6 mr-4">Anterior</v-btn>
            <v-btn :class="errors.length > 0 ? 'btn-no-active' : 'btn-active' "
                   :disabled="errors.length > 0" class="mt-6"
            @click="validPhone">Siguiente</v-btn>
          </div>
        </div>
      </div>
      <Steps class="d-none d-md-block" />
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex";
import Steps from "../../components/signUp/Steps";
import ModalPhone from "../../components/signUp/ModalPhone";

export default {
  name: "Phone",
  components:{
    Steps,
    ModalPhone
  },
  data(){
    return{
      number: '',
      show: false,
      errors:[],
      modal: false
    }
  },
  created() {
    this.setSteps(2);
  },
  methods:{
    ...mapActions('auth', ['setSteps', 'phoneNumber']),
    showPass(){
      this.show = !this.show;
    },
    checkPhone(){
      this.errors = [];
      if (!this.number) this.errors.push('El teléfono es requerido');
      if (isNaN(this.number) || this.number.length !== 10) this.errors.push('El teléfono debe ser un número válido');


      if (this.errors.length > 0) return false;
      else return true;
    },
    async validPhone(){
      const check = this.checkPhone();
      if(!check) {
        return;
      }
      const phone = await this.phoneNumber(this.number);

      if(phone){
        this.modal = true;
      }
    },
    getModal(modal){
      this.modal = modal
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
  margin: 77px 0;
  max-width: 446px;
}

@media (max-width: 499px) {
  .phone__content {
    margin: 24px 0;
    max-width: 288px;
  }

  .phone__content__form__actions{
    position: absolute;
    bottom: 24px;
    display: flex;
    justify-content: space-around;
    width: 288px;
  }
}

</style>