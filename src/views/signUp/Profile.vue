<template>
  <div class="profile d-flex justify-center align-center fadeIn">
    <div class="profile__content">
      <div class="profile__content__head">
        <Steps class="d-block d-md-none mb-6" />
        <h3 class="head__title">¿Cómo te llamas?</h3>
      </div>
      <div class="profile__content__form">
        <div class="form__field d-flex flex-column">
          <label>Primer nombre</label>
          <input type="text" v-model="user.name" @input="checkForm">
          <span>{{ errors.name[0] }}</span>
        </div>
        <div class="form__field d-flex flex-column">
          <label>Segundo nombre (Opcional)</label>
          <input type="text" v-model="user.secondName">
        </div>
        <div class="form__field d-flex flex-column">
          <label>Primer apellido</label>
          <input type="text" v-model="user.firstLastName" @input="checkForm">
          <span>{{ errors.firstLastName[0] }}</span>
        </div>
        <div class="form__field d-flex flex-column">
          <label>Segundo apellido (Opcional)</label>
          <input type="text" v-model="user.secondLastName">
        </div>
        <div>
          <div class="form__login d-block d-md-none">
            <span>¿Ya tienes tu cuenta?</span>
            <v-btn text color="primary">Iniciar sesión</v-btn>
          </div>

          <div class="profile__content__form__actions">
            <v-btn to="/registro/telefono" class="btn-no-active mt-6 mr-4">Anterior</v-btn>
            <v-btn :class="errorsExists ? 'btn-no-active' : 'btn-active' "
                   :disabled="errorsExists > 0" class="mt-6"
                   @click="createProfile">Siguiente</v-btn>
          </div>
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
  name: "Profile",
  components:{
    Steps
  },
  data(){
    return{
      user:{},
      errors: {
        name: [],
        firstLastName: [],
      },
    }
  },
  created() {
    this.setSteps(3)
  },
  methods:{
    ...mapActions('auth', ['setSteps', 'profileName']),
    checkForm() {
      this.errors.name = [];
      this.errors.firstLastName = [];
      if (!this.user.name) this.errors.name.push('El primer nombre es requerido');
      if (!this.user.firstLastName) this.errors.firstLastName.push('El primer apellido es requerido');


      for (let i in this.errors) {
        if (this.errors[i].length > 0) return false;
      }

      return true;

    },
    async createProfile(){
      const check = this.checkForm();
      if(!check){
        return;
      }

      const profile = await this.profileName(this.user);

      if(profile){
        await this.$router.push({name: 'Curp'});
      }

    }
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
.profile{
  height: 100%;
}
.profile__content{
  color: #3e3e3e;
  margin: 77px;
  max-width: 446px;
}

@media (max-width: 499px) {
  .profile__content {
    margin: 24px 0;
    max-width: 288px;
  }

  .profile__content__form__actions{
    display: flex;
    justify-content: space-around;
    width: 288px;
  }
}


</style>