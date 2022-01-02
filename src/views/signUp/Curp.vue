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
          <input type="text" v-model="curp" placeholder="CURP" @input="checkCURP">
          <span>{{ errors[0] }}</span>
        </div>
        <div class="curp__content__form__info">
          <p>Consulta tu <a href="">CURP</a></p>
          <p>Si soy extranjero <a href="">¿Cómo solicito mi CURP?</a></p>
        </div>
        <div class="form__login d-block d-md-none">
        <span>¿Ya tienes tu cuenta?</span>
        <v-btn text color="primary">Iniciar sesión</v-btn>
      </div>
        <div class="phone__content__form__actions">
          <v-btn to="/registro/perfil" class="btn-no-active mt-6 mr-4">Anterior</v-btn>
          <v-btn @click="completeRegister" :class="errors.length > 0 ? 'btn-no-active' : 'btn-active' "
                 :disabled="errors.length > 0" class="mt-6"
                 >Siguiente</v-btn>
        </div>
      </div>
      <Steps class="d-none d-md-block" />
    </div>
  </div>
</template>

<script>
import Steps from "../../components/signUp/Steps";
import {mapActions} from "vuex";

export default {
  name: "Phone",
  components:{
    Steps
  },
  data(){
    return{
      curp: null,
      errors: []
    }
  },
  created() {
    this.setSteps(4)
  },
  methods:{
    ...mapActions('auth', ['setSteps']),
    checkCURP(){
      this.errors = [];
      if (!this.curp){
        this.errors.push('La CURP es requerida');
        return false;
      }

      const re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;

       const valid = this.curp.match(re);


      if (!valid) this.errors.push('La CURP debe ser válida');


      if (this.errors.length > 0) return false;
      else return true;
    },
    completeRegister(){
      const check = this.checkCURP();
      if(!check) return;
      this.$router.push('/registro/completo')
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

@media (max-width: 499px) {
  .curp__content {
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