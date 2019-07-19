<template>
  <div class="backgg scroll">
    <img src="../../public/images/dashboard.png" class="img-responsive" />
      <!-- <div class="transparant text-center">
          <br>
          <span class="huruf_dashboar">e-Government</span> <br>
          <span class="huruf_dashboar1">Kabupaten Konawe Selatan</span>
          <br><br>
      </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
          <br><br>
        <div class="card">
          <div class="body">
              <div class="row">
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="office">
                              <img src="images/icon/office.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="planing">
                              <img src="images/icon/planning.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="aset">
                              <img src="images/icon/aset.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="monev">
                              <img src="images/icon/monev.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="berita">
                              <img src="images/icon/berita.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="pengaduan">
                              <img src="images/icon/pengaduan.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="sakip">
                              <img src="images/icon/sakip.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  <div class="col-md-3 col-xs-6">
                      <div >
                          <a href="javascript:void(0);" @click="bhumie">
                              <img src="images/icon/bhumie.png" class="img-responsive" />
                          </a>
                      </div>
                  </div>
                  

              </div>





          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
    <br> -->
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
    name: "monev_login",
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
    methods : {
        office : function(){
            this.$router.push('/office');
            location.reload();
        },
        planing : function(){
            this.$router.push('/planing');
            location.reload();
        },
        aset : function(){
            location.reload();
        },
        monev : function(){
            location.reload();
        },
        berita : function(){
            this.$session.set('MENU','berita')
            location.reload();
        },
        pengaduan : function(){
            this.$session.set('MENU','pengaduan')
            location.reload();
        },
        sakip : function(){
            this.$session.set('MENU','sakip')
            location.reload();
        },
        bhumie : function(){
            this.$router.push('/bhumie');
            location.reload();
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
.backgg {
  background: url('../../public/images/dashboard.PNG') no-repeat center center
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
