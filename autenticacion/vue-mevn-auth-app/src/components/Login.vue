<template>
  <div class="page-header clear-filter" >
    <div
      class="page-header-image"
         style="background-color:white"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container" id="logoup">
              <img v-lazy="'./Logo_Mesa de trabajo 1.png'" id="logoup1" alt="" />
            </div>

            <fg-input id="Loginicon"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Usuario"
            >
            </fg-input>

            <fg-input id="Loginicon"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Contraseña"
            >
            </fg-input>
              <div class="card-footer text-center" >
                <a
                  href="#"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  id="bt">Ingresar</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#" id="textbottom" class="link footer-link">Registrarse</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#" id="textbottom1" class="link footer-link">Ayuda</a>
                </h6>
              </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Card, Button, FormGroupInput } from '@/components';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
 return {
 login: {},
 errors: []
 };
 },
 methods: {
 onSubmit(evt) {
 evt.preventDefault();
 axios
 .post(`http://localhost:3000/api/auth/login/`, this.login)
 .then(response => {
 localStorage.setItem("jwtToken", response.data.token);
 this.$router.push({
 name: "BookList"
 });
 })
 .catch(e => {
 console.log(e);
 this.errors.push(e);
 });
 },
 register() {
 this.$router.push({
 name: "Register"
 });
 }
 }
};
</script>
<style>
.page-header-image{
  background: linear-gradient(rgba(39,102,120,1) 0%,rgba(211,224,234,1) 80%, rgba(246,245,245,1) 100%);
}
.btn-lg btn-block{
  color:rgba(39,102,120,1);
}
#textbottom{
  margin-left: 10px;
  font-size: 100%;
}
#textbottom1{
  margin-right: 12px;
  font-size: 100%;
}
#bt{
  margin-top: -10px;
  margin-bottom: 20px;
}
#Loginicon{
  width: auto;
  height: 80%;
  margin-top: 10px;
}
</style>
