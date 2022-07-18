<template>
  <v-dialog
      :value="showModal"
      max-width="549"
      persistent
      class="ma-1 ma-md-0"
  >
    <v-card class="modal">
      <v-card-title class="modal__head d-flex flex-column">
        <h3>Verifica tu teléfono de celular</h3>
        <img src="../../assets/images/phone.png" alt="" class="hidden-sm-and-down">
      </v-card-title>
      <v-card-text class="model__main d-flex flex-column ">
        <p>Hemos enviado un código único de 4 digítos a tú teléfono celular</p>
        <span class="model__main__phone">{{formatTel}}</span>

        <span class="model__main__expiration">Tu código expirará en 2 minutos</span>

        <div class="model__main__input d-flex justify-space-between">
          <input type="text" v-model="digits.one" ref="d1" @input="jumpDigit('d2')">
          <input type="text" v-model="digits.two" ref="d2" @input="jumpDigit('d3')">
          <input type="text" v-model="digits.tree" ref="d3" @input="jumpDigit('d4')">
          <input type="text" v-model="digits.four" ref="d4">
        </div>
        <span class="errors">{{ errors[0] }}</span>
        <p class="model__main__re-send">¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente</p>
      </v-card-text>
      <v-card-actions class="model__actions d-flex flex-column">
        <v-btn class="model__actions__re-send" text>Renvíar SMS</v-btn>
        <div class="model__actions__btn d-flex justify-space-between">
          <v-btn
              @click="closeModal"
              class="mr-1"
              color="primary"
              outlined>
            Cancelar
          </v-btn>
          <v-btn
              @click="verifyNumber"
              class="ml-1"
              :disabled="disabledBtn"
              :class="disabledBtn ? 'btn-no-active' : 'btn-active' ">
            Validar código
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ModalPhone",
  props: {
    modal: Boolean,
    number: String
  },
  data() {
    return {
      digits: {
        one: null,
        two: null,
        tree: null,
        four: null
      },
      digit: null,
      showModal: false,
      errors: []
    }
  },
  watch: {
    modal(val) {
      this.showModal = val;
    }
  },
  methods: {
    ...mapActions('auth', ['verifyPhoneNumber']),
    closeModal() {
      this.showModal = false;
      this.passModal();
    },
    passModal() {
      this.$emit('modal', this.showModal)
    },
    checkDigits() {
      this.errors = [];

      this.digit = this.digits.one + this.digits.two + this.digits.tree + this.digits.four;

      if (!this.digit || isNaN(this.digit) || this.digit.length !== 4) {
        this.errors.push('Los digitos no son válidos');
        return false;
      } else {
        return true;

      }
    },
    async verifyNumber() {
      const check = this.checkDigits();
      if (!check) {
        return;
      }

      const verify = await this.verifyPhoneNumber(this.digit);
      if (verify) {
        return await this.$router.push({name: 'Profile'})
      }

      this.resetDigits();
    },
    jumpDigit(digit) {
      this.$refs[digit].focus();
    },
    resetDigits() {
      this.digits = {
        one: null,
        two: null,
        tree: null,
        four: null
      };
      this.$refs['d1'].focus();
    }
  },
  computed:{
    formatTel(){
      return `${this.number.substring(0,2)} ${this.number.substring(2,6)} ${this.number.substring(6,10)}`;
    },
    disabledBtn(){
      return !this.digits.one || !this.digits.two || !this.digits.tree || !this.digits.four;
    }
  }
}
</script>

<style scoped>
.modal {
  color: #3e3e3e;
  padding: 32px;
}

.modal__head h3 {
  font-size: 18px;
  font-weight: normal;
  letter-spacing: normal;
}

.modal__head img {
  margin-top: 32px;
}

.model__main {
  font-size: 14px;
  margin-top: 32px;
  text-align: center;
}

.model__main__phone {
  font-size: 16px;
  font-weight: bold;
}

.model_main p {
  margin-bottom: 0;
}

.model__main__expiration {
  color: #8c8c8c;
  font-size: 12px;
  margin: 44px 0;
}

.model__main__input {
  margin: 0 auto;
  width: 184px;
}

.model__main__input input {
  border: 1px solid #bdbcbc;
  border-radius: 4px;
  height: 46px;
  width: 34px;
  text-align: center;
}

.model__main__input input:focus-visible {
  outline: none;
  border: 4px solid #77c1ff;
}

.model__main__re-send {
  font-size: 12px;
  margin-top: 32px;
}

.model__actions__re-send {
  color: #8c8c8c;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  text-transform: none;
}

.model__actions__btn .v-btn {
  font-size: 16px;
  font-weight: normal;
  height: 40px;
  text-transform: none;
  letter-spacing: normal;
  margin-top: 24px;
}

.errors {
  font-size: 12px;
  color: red;
}

@media (max-width: 499px) {
  .modal {
    color: #3e3e3e;
    padding: 0;
  }

  >>> .v-dialog {
    margin: 6px !important;
  }
}

</style>