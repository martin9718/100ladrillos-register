<template>
  <v-dialog
    :value="showModal"
    max-width="549"
    persistent


>
  <v-card class="modal">
    <v-card-title class="modal__head d-flex flex-column" >
      <h3>Verifica tu teléfono de celular</h3>
      <img src="../../assets/images/phone.png" alt="">
    </v-card-title>
    <v-card-text class="model__main d-flex flex-column ">
      <p>Hemos enviado un código único de 6 digítos a tú teléfono celular</p>
      <span class="model__main__phone">11 111 1111</span>

      <span class="model__main__expiration">Tu código expirará en 2 minutos</span>

      <div class="model__main__input d-flex justify-space-between">
        <input type="text" v-model="digits.one">
        <input type="text" v-model="digits.twoo">
        <input type="text" v-model="digits.tree">
        <input type="text" v-model="digits.four">
      </div>
      <span class="errors">{{errors[0]}}</span>
      <p class="model__main__re-send">¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente</p>
    </v-card-text>
    <v-card-actions class="model__actions d-flex flex-column">
      <v-btn class="model__actions__re-send" text >Renvíar SMS</v-btn>
      <div class="model__actions__btn d-flex justify-space-between">
        <v-btn @click="closeModal" class="mr-1" color="primary" outlined>Cancelar</v-btn>
        <v-btn @click="verifyNumber" class="ml-1" color="primary">Validar código</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</v-dialog>

</template>

<script>
export default {
  name: "ModalPhone",
  props:{
    modal: Boolean
  },
  data(){
    return{
      digits:{
        uno: null,
        twoo: null,
        tree: null,
        four: null
      },
      showModal: false,
      errors: []
    }
  },
  watch: {
    modal(val) {
      this.showModal = val;
    }
  },
  methods:{
    closeModal(){
      this.showModal = false;
      this.passModal();
    },
    passModal(){
      this.$emit('modal', this.showModal)
    },
    checkDigits(){
      this.errors = [];

      let digit = this.digits.one + this.digits.twoo + this.digits.tree + this.digits.four;

      if(!digit || isNaN(digit) || digit.length !== 4){
        this.errors.push('Los digitos no son válidos');
          return false;
      }else{
        return true;

      }
    },
    verifyNumber(){
      const check = this.checkDigits();
      if(!check) return;
      this.$router.push('/registro/perfil')
    }
  }
}
</script>

<style scoped>
.modal{
  color: #3e3e3e;
  padding: 32px;
}

.modal__head h3{
  font-size: 18px;
  font-weight: normal;
  letter-spacing: normal;
}

.modal__head img{
  margin-top: 32px;
}

.model__main{
  font-size: 14px;
  margin-top: 32px;
  text-align: center;
}

.model__main__phone{
  font-size: 16px;
  font-weight: bold;
}

.model_main p {
  margin-bottom: 0;
}

.model__main__expiration{
  color: #8c8c8c;
  font-size: 12px;
  margin: 44px 0;
}

.model__main__input{
  margin: 0 auto;
  width: 184px;
}

.model__main__input input{
  border: 1px solid #bdbcbc;
  border-radius: 4px;
  height: 46px;
  width: 34px;
  text-align: center;
}

.model__main__input input:focus-visible{
  outline: none;
  border: 4px solid #77c1ff;
}

.model__main__re-send{
  font-size: 12px;
  margin-top: 32px;
}

.model__actions__re-send{
  color: #8c8c8c;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  text-transform: none;
}

.model__actions__btn .v-btn{
  font-size: 16px;
  font-weight: normal;
  height: 40px;
  text-transform: none;
  letter-spacing: normal;
  margin-top: 24px;
}

.errors{
  font-size: 12px;
  color: red;
}

@media (max-width: 499px) {
  .modal{
    color: #3e3e3e;
    padding: 0;
  }
  >>> .v-dialog{
    margin: 0 !important;
  }
}

</style>