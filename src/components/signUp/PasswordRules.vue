<template>
  <div class="password-rules">
    <div class="password-rules__content">
      <span>Por razones de seguridad tu contraseña debe de tener las siguientes características:</span>
      <ul>
        <li class="d-flex align-center">
          <span ref="rule1"></span>
          Mínimo 6 caracteres (letras, números y caracteres especiales).
        </li>
        <li class="d-flex align-center">
          <span ref="rule2"></span>
          Mínimo 1 número.
        </li>
        <li class="d-flex align-center">
          <span ref="rule3"></span>
          Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@‚[]{};:_><,.-|`+.
        </li>
        <li class="d-flex align-center">
          <span ref="rule4"></span>
          No tener la frase “100Ladrillos”.
        </li>
        <li class="d-flex align-center">
          <span ref="rule5"></span>
          No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).
        </li>
        <li class="d-flex align-center">
          <span ref="rule6"></span>
          No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123).
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPasswordRules",
  props: {
    password: String
  },
  created() {

  },
  watch: {
    password(val) {
      this.checkPassword(val.trim());
    }
  },
  methods: {
    checkPassword(password) {

      this.resetClass();
      if(!password) return;
      if (password.length >= 6) this.addClass('rule1');

      const items = password.split('');

      items.forEach(item => {
        if (!isNaN(item)) return this.addClass('rule2');
      });


      const signs = '!”#$%&/()=?¿^*@‚[]{};:_><,.-|`+'.split('');

      signs.forEach(item => {
        if (password.includes(item)) return this.addClass('rule3');
      });

      if (!password.includes('100Ladrillos')) this.addClass('rule4');

      items.forEach((item, i) => {
        if (password.includes(item + item + item)) return false;
        else if (i === items.length - 1) this.addClass('rule5');
      });

      this.validNumbers(password, items);

    },
    validNumbers(password, items) {
      if (password && password.length > 2) {

        let isValid = true;

        items.forEach((item, i) => {

          if (items.length - i >= 3) {
            let valid = parseInt(item) + parseInt(items[i + 1]) + parseInt(items[i + 2]);

            if (
                !isNaN(valid)
                && parseInt(items[i + 1]) - parseInt(item)  === 1
                && parseInt(items[i + 2]) - parseInt(item)  === 2
            ) {
              return isValid = false;
            }
          }
        });

        if (isValid) this.addClass('rule6');

      }else{
        this.addClass('rule6');
      }
    },
    addClass(ref) {
      this.$refs[ref].classList.add('check');
    },
    resetClass() {
      for (let i in this.$refs) {
        this.$refs[i].classList.remove('check')
      }
    }
  }
}
</script>

<style scoped>
.password-rules {
  color: #8c8c8c;
  font-size: 12px;
  line-height: 1.67;
  margin-top: 6px;
}

.password-rules__content ul {
  padding: 0;
}

.password-rules__content ul li {
  list-style: none;
}

.password-rules__content ul li span {
  background: white;
  border: 1px solid #8c8c8c;
  border-radius: 999px;
  display: block;
  height: 7px;
  margin-right: 8.5px;
  width: 7px;
}

.check {
  background: #74cc15 !important;
  border: none !important;
}

</style>