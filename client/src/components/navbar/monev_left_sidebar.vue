<template>
    <!-- Left Sidebar -->
    <section>
  <aside id="leftsidebar" class="sidebar">
      <!-- User Info -->
      <div class="user-info">
          <div class="image">
                <!-- <h1>{{inilah}}</h1> -->
              <img src="images/user.png" width="48" height="48" alt="User" />
              <!-- <img src="./assets/logo.png"> -->
          </div>
          <!-- <div class="info-container">
              <div class="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">NAMA</div>
              <div class="email">NIP</div>
              <div class="btn-group user-helper-dropdown">
                  <i class="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                  <ul class="dropdown-menu pull-right">
                      <li><a href="javascript:void(0);"><i class="material-icons">person</i>Profile</a></li>
                      <li role="seperator" class="divider"></li>
                      <li><a href="javascript:void(0);"><i class="material-icons">group</i>Followers</a></li>
                      <li><a href="javascript:void(0);"><i class="material-icons">shopping_cart</i>Sales</a></li>
                      <li><a href="javascript:void(0);"><i class="material-icons">favorite</i>Likes</a></li>
                      <li role="seperator" class="divider"></li>
                      <li><a href="javascript:void(0);"><i class="material-icons">input</i>Sign Out</a></li>
                  </ul>
              </div>
          </div> -->
      </div>
      <!-- #User Info -->
      <!-- Menu -->


      <div class="menu">
          <ul class="list">
              <li class="header">NAVIGASI UTAMA</li>

              <li class="active">
                  <router-link to="/">
                      <i class="material-icons">home</i>
                      <span>Beranda</span>
                  </router-link>
              </li>
              <!-- <li>
                  <a href="javascript:void(0);" class="menu-toggle">
                      <i class="material-icons">assignment_ind</i>
                      <span>Profil</span>
                  </a>
                  <ul class="ml-menu">
                      <li>
                          <router-link to="/profil">Profil</router-link>
                      </li>
                      <li>
                          <router-link to="/visi">Visi</router-link>
                      </li>
                      <li>
                          <router-link to="/misi">Misi</router-link>
                      </li>
               
                  </ul>
              </li> -->
              
                <li>
                  <a href="javascript:void(0);" class="menu-toggle">
                      <i class="material-icons col-green">business_center</i>
                      <span>Daftar Harga</span>
                  </a>
                  <ul class="ml-menu">
                      <li>
                          <router-link to="/kakaoa">KAKAO</router-link>
                      </li>
                      <li>
                          <router-link to="/kakaoa">KAKAO</router-link>
                      </li>
                      <li>
                          <router-link to="/kakaoa">METE</router-link>
                      </li>
                      <li>
                          <router-link to="/kakaoa">METE</router-link>
                      </li>
                      <li>
                          <router-link to="/kakaoa">METE</router-link>
                      </li>
               
                  </ul>
              </li>

              <li>
                  <router-link to="/informasi">
                      <i class="material-icons col-green">blur_linear</i>
                      <span>Informasi</span>
                  </router-link>
                </li>

                <li >
                  <router-link to="/tentang">
                      <i class="material-icons col-green">assignment</i>
                      <span>Tentang</span>
                  </router-link>
              </li>

              <!-- <li >
                  <router-link to="/kakaoa">
                      <i class="material-icons col-green">camera_roll</i>
                      <span> </span>
                  </router-link>
              </li> -->
                <!-- <li>
                  <router-link to="/peraturan">
                      <i class="material-icons col-green">business_center</i>
                      <span>Peraturan</span>
                  </router-link>
                </li>  -->

                <!-- <li>
                  <router-link to="/contact">
                      <i class="material-icons col-green">phone</i>
                      <span>Contact</span>
                  </router-link>
                </li>   -->
  
              <li class="header">DATA MASTER</li>
 

              <li>
                  <router-link to="/register">
                      <i class="material-icons col-amber">settings</i>
                      <span>Registrasi</span>
                  </router-link>
              </li>
 
            
              <li>
                  <a v-on:click="logout()">
                      <i class="material-icons col-red">lock_outline</i>
                      <span>Keluar</span>
                  </a>
              </li>
          </ul>
      </div>
<!-- ============================================================= PLANING ========================================================== -->
      <!-- #Menu -->
      <!-- Footer -->
      <div class="legal">
          <div class="version">
              &copy; 2019 <b>Version: </b> 1.0.0
          </div>
      </div>
      <!-- #Footer -->
  </aside>
  <!-- #END# Left Sidebar -->

</section>

</template>


<script>
import router from '../../router'
// import firebase from 'firebase';
import EventBus from '../../EventBus.js'

    EventBus.$on('logged-in', test => {
        console.log(test)
    })


    export default {
        name: 'leftsidebar',
        data () {
            return {
                auth : '',
                user : ''
            }
        },
        methods : {
            logout : function(){
                localStorage.removeItem('token');
                this.$router.push('/login');
            },

            
        }, 

        mounted(){
            // EventBus.$on('logged-in', status => {
            //     this.auth = status
            // })
        }


    }
</script>

