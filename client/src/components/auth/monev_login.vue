<template>
  <div class="backg">
    <div class="row paddingku">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card transparant">
          <div class="body">
            <img class="img-responsive" src="images/logo1.png" alt>
            <hr>
<!-- <h3 class="text-center">LOGIN USER</h3> -->

            <div v-if="LoggingIn" class="text-center">
              <img src="images/Pacman.svg" alt="">
            </div>

            <div v-if="errorMessage" class="alert alert-warning">
                <strong>Warning!</strong> {{ errorMessage }}.
            </div>

            <form v-if="!LoggingIn" @submit.prevent="btn_login()">
              <div class="form-group">
                <div class="form-line">
                  <input v-model="user.username" type="text" class=" iinput1" placeholder="Username" required>
                </div>
              </div>

              <div class="form-group">
                <div class="form-line">
                  <input v-model="user.password" type="password" class="iinput1" placeholder="password" required>
                </div>
              </div>
              <button type="submit" class="btn btn-block btn-lg bg-light-green waves-effect">LOGIN</button>
            </form>
            <br>

            <hr>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>

  </div>
</template>

<script>

// const ADD_URL = URL_APP + "api/v1/rincian_obyek/";

  import Joi from "joi";
  const LOGIN_URL =  URL_APP + "auth/login";

  const schema = Joi.object().keys({
    username: Joi.string().regex(/^[a-zA-Z0-9_]*$/).min(3).max(13).required(),
    password: Joi.string().min(6).required(),
  });

  export default {
    name: "login",
    data : function(){
      return {
          LoggingIn: false,
          errorMessage: '',
          user : {
            username : "",
            password : ""
          }
      }
    },
    watch: {
      user: {
          handler() {
              this.errorMessage = "";
          },
          deep: true
      }
    },
    methods: {
      // go_register : function(){
      //   alert(App.data().sesseee);
      //   this.displayed = 'block';
      // },
      btn_login : function(){
        this.errorMessage = '';
        if(this.validUser()){
          this.LoggingIn = true;
          const body = {
            username : this.user.username,
            password : this.user.password
          }
          fetch(LOGIN_URL, {
            method : 'POST',
            headers : {
              'content-type' : 'application/json',
            },
            body : JSON.stringify(body),
          }).then((response) => {
            
            // console.log(response);
            
                if (response.ok) {
                    return response.json();
                }

                return response.json().then(error => {
                    throw new Error(error.message);
                });
            })
            .then((result) => {
              console.log("=============================");
              console.log(result);
              // menyimpan token yang tergenerate dari server
              localStorage.token = result.token;
              setTimeout(() => {
                this.LoggingIn = false;
                this.$router.push('/dashboard');
                location.reload();
              }, 1000);
            })
            .catch(error => {
              setTimeout(() => {
                this.LoggingIn = false;
                this.errorMessage = error.message;
              }, 1000);
            });;
        }
      },
      validUser: function(){
        const result = Joi.validate(this.user, schema);
        if (result.error === null) {
          return true;
        }
        if (result.error.message.includes("username")) {
          this.errorMessage = "Username tidak valid";
        } else {
          this.errorMessage = "Username tidak valid2";
        }
        return false;
      },
    },
    mounted : function(){
      var element = document.getElementById('main_menu');
      element.parentNode.removeChild(element);
      // element.style.visibility = 'hidden';
    },
  };
</script>

<style>
.backg {
  background: url('../../../public/images/2.png') no-repeat center center
    fixed;
  /* background-image: url(https://i.stack.imgur.com/7X3An.png) ; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
}
.paddingku {
  /* padding: 1%; */
  position: relative;
  top: 40%;
  transform: translateY(25%);
}
</style>
