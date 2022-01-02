<template>
  <div class="sign-up d-flex justify-center">
    <div class="sign-up__content">
      <div class="sign-up__content__head">
        <Steps class="d-block d-md-none mb-6" />
        <h3 class="head__title">Crear tu cuenta</h3>
        <p>Al aceptar crear una cuenta en 100 ladrillos aceptas nuestro
          <router-link :to="{name: 'SignUp'}">Aviso de Privacidad,</router-link>
          <router-link :to="{name: 'SignUp'}">Derechos Arco</router-link>
          y nuestros
          <router-link :to="{name: 'SignUp'}">Términos y condiciones</router-link>
        </p>
      </div>
      <div class="sign-up__content__form">
        <div class="form__field">
          <label>¿Cuál es tu correo electrónico?</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="form__field">
          <label>Ingresa una contraseña</label>
          <div class="form__field__pass d-flex align-center">
            <input :type="show ? 'text' : 'password'" v-model="user.password">
            <v-icon @click="showPass" size="small">{{show ? 'fas fa-eye-slash' : 'fas fa-eye'}}</v-icon>
          </div>
        </div>

        <Social v-if="!user.email" />

        <div v-else>
          <SignUpPasswordRules :password="user.password" />

          <div class="form__field">
            <label>Confirma tu contraseña</label>
            <div class="form__field__pass d-flex align-center">
              <input :type="show2 ? 'text' : 'password'" v-model="user.password_confirm">
              <v-icon @click="showConfirmPass" size="small">{{show2 ? 'fas fa-eye-slash' : 'fas fa-eye'}}</v-icon>
            </div>
          </div>

          <v-btn class="btn-no-active mt-6">Siguiente</v-btn>
        </div>

        <Steps class="d-none d-md-block" :completedSteps="completedSteps"/>


      </div>

    </div>
  </div>
</template>

<script>

import SignUpPasswordRules from "../components/signUp/PasswordRules";
import Social from "../components/signUp/Social";
import Steps from "../components/signUp/Steps";

export default {
  name: 'SignUp',
  data(){
    return{
      user: {},
      errors: {},
      show: false,
      show2: false,
      completedSteps: 1
    }
  },
  components:{
    SignUpPasswordRules,
    Social,
    Steps
  },
  methods:{
    checkPassword(password){
      let errors = [];
      // if(password.length < 6 ) return errors.push('')
    },
    showPass(){
      this.show = !this.show;
    },
    showConfirmPass(){
      this.show2 = !this.show2;
    },

  }
}
</script>
<style scoped>
.sign-up__content {
  color: #3e3e3e;
  margin: 77px;
  max-width: 446px;
}

.sign-up__content__head{
  width: 320px;
}

.sign-up__content__head p {
  font-size: 14px;
  margin-top: 24px;
}

.sign-up__content__head a {
  color: #3ca4fc;
  text-decoration: none;
}






</style>
