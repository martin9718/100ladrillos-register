<template>
  <v-app class="register-layout">
    <v-app-bar
        app
        class="register-layout__bar px-4 px-md-6"
        color="white"
        dark
        elevation="0"
        :height="height_bar"
    >
      <div class="register-layout__bar__desk d-none d-md-flex justify-space-between align-center">
        <div>
          <v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down mx-auto"
              contain
              min-width="100"
              src="../assets/images/logo-100ladrillos.png"
          />
        </div>
        <div class="register-layout__bar__desk__actions">
          <v-btn text color="primary">Cómo funciona</v-btn>
          <v-btn text color="primary">Entrar</v-btn>
        </div>
      </div>

      <div class="register-layout__bar__mobile d-flex d-md-none justify-center align-center">
        <v-btn icon width="12" height="12">
          <v-icon color="white">
            fas fa-bars
          </v-icon>
        </v-btn>

         <v-img
             alt="Vuetify Logo"
             class="shrink mr-2"
             contain
             src="../assets/images/logo-100ladrillos-movil.png"
             transition="scale-transition"
         />
      </div>
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col md="4" class="hidden-sm-and-down">
          <v-img
              src="../assets/images/register-layout/main-img.png"
              max-width="524"
          >

          </v-img>
        </v-col>
        <v-col cols="12" md="8">
          <slot/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "RegisterLayout",
  data() {
    return {
      drawer: false,
      height_bar: 72
    }
  },
  created() {
    this.heightBar();
    window.addEventListener('resize', this.heightBar);

  },
  methods:{
    heightBar(){
      this.height_bar = window.screen.width > 959 ? 72 : 48;
    }
  }
}
</script>

<style scoped>

.register-layout__bar {
  box-shadow: inset 0 -1px 0 0 #eaeaea !important;
}

.register-layout__bar__desk,
.register-layout__bar__mobile{
  width: 100%;
}

/*.register-layout__bar__desk__img {*/
/*  position: fixed;*/
/*}*/

.register-layout__bar__desk__actions .v-btn {
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  letter-spacing: normal;
  padding: 10px 32px;
  text-transform: none;
  width: 163px;
}

.register-layout__bar__mobile .v-btn{
  position: absolute;
  left: 17px;
}

@media (max-width: 959px) {
  .register-layout__bar {
    height: 48px !important;
    width: 100% !important;
    background-image: url("../assets/images/register-layout/main-img.png");
    background-size: cover;
    background-position-y: -30px;
  }
}


</style>