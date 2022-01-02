<template>
  <div class="sign-up d-flex justify-center">
    <div class="sign-up__content">
      <div class="sign-up__content__head">
        <Steps class="d-block d-md-none mb-6"/>
        <h3 class="head__title">Crear tu cuenta</h3>
        <p>Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
          <router-link :to="{name: 'SignUp'}">Aviso de Privacidad,</router-link>
          <router-link :to="{name: 'SignUp'}">Derechos Arco</router-link>
          y nuestros
          <router-link :to="{name: 'SignUp'}">Términos y condiciones</router-link>
        </p>
      </div>
      <div class="sign-up__content__form">
        <div class="form__field">
          <label>¿Cuál es tu correo electrónico?</label>
          <input type="email" v-model="user.email" @input="checkForm">
          <span>{{ errors.email[0] }}</span>
        </div>
        <div class="form__field">
          <label>Ingresa una contraseña</label>
          <div class="form__field__pass d-flex align-center">
            <input :type="show ? 'text' : 'password'" v-model="user.password" @input="checkForm">
            <v-icon @click="showPass" size="small">{{ show ? 'fas fa-eye-slash' : 'fas fa-eye' }}</v-icon>
          </div>
          <span>{{ errors.password[0] }}</span>
        </div>

        <div v-if="!user.email">
          <Social/>

          <div class="sign-up__content__form__login d-block d-md-none">
            <span>¿Ya tienes tu cuenta?</span>
            <v-btn text color="primary">Iniciar sesión</v-btn>
          </div>
        </div>

        <div v-else>
          <SignUpPasswordRules :password="user.password" @errors="getPasswordErrors($event)"/>

          <div class="form__field">
            <label>Confirma tu contraseña</label>
            <div class="form__field__pass d-flex align-center">
              <input :type="show2 ? 'text' : 'password'" v-model="user.password_confirm" @input="checkForm">
              <v-icon @click="showConfirmPass" size="small">{{ show2 ? 'fas fa-eye-slash' : 'fas fa-eye' }}</v-icon>
            </div>
            <span>{{ errors.password_confirm[0] }}</span>
          </div>

          <v-btn
              :class="errorsExists ? 'btn-no-active' : 'btn-active' "
              :disabled="errorsExists"
              class="mt-6" @click="signUp"
          >
            Siguiente
          </v-btn>
        </div>

        <Steps class="d-none d-md-block" :completedSteps="completedSteps"/>


      </div>

    </div>
  </div>
</template>

<script>

import SignUpPasswordRules from "../../components/signUp/PasswordRules";
import Social from "../../components/signUp/Social";
import Steps from "../../components/signUp/Steps";

export default {
  name: 'SignUp',
  data() {
    return {
      user: {},
      errors: {
        email: [],
        password: [],
        password_confirm: []
      },
      show: false,
      show2: false,
      completedSteps: 1
    }
  },
  components: {
    SignUpPasswordRules,
    Social,
    Steps
  },
  methods: {
    signUp() {
      this.checkForm(this.user);
    },
    checkForm() {
      this.errors.email = [];
      this.errors.password = [];
      this.errors.password_confirm = [];
      if (!this.user.email) this.errors.email.push('El correo electrónico es requerido');
      if (!this.user.email.includes('@')) this.errors.email.push('El correo electrónico debe ser válido');
      if (!this.user.password) this.errors.password.push('La contraseña es requerida');
      if (!this.user.password_confirm || this.user.password_confirm !== this.user.password) this.errors.password_confirm.push('Las contraseñas no coinciden');


      for (let i in this.errors) {
        if (this.errors[i].length > 0) return false;
      }



    },
    showPass() {
      this.show = !this.show;
    },
    showConfirmPass() {
      this.show2 = !this.show2;
    },
    getPasswordErrors(errors) {
      this.errors.password = this.errors.password.concat(errors);
    },


  },
  computed:{
    errorsExists() {
      for (let i in this.errors) {
        if (this.errors[i].length > 0) return true;
      }
      return false;
    }
  }
}
</script>
<style scoped>
.sign-up__content {
  color: #3e3e3e;
  margin: 77px 0;
  max-width: 449px;
}

.sign-up__content__head {
  max-width: 320px;
}

.sign-up__content__head p {
  font-size: 14px;
  margin-top: 24px;
}

.sign-up__content__head a {
  color: #3ca4fc;
  text-decoration: none;
}

.sign-up__content__form {
  margin: 0 auto;
}

.sign-up__content__form__login {
  margin-top: 48px;
  text-align: center;
}

.sign-up__content__form__login span {
  display: block;
  font-size: 14px;
}

.sign-up__content__form__login .v-btn {
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  letter-spacing: normal;
  padding: 10px 32px;
  text-transform: none;
  width: 163px;
}

@media (max-width: 499px) {
  .sign-up__content {
    margin: 24px 0;
    max-width: 288px;
  }
}


</style>
