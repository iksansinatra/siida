// scaffold
<template>
  <div id="app">
    <div id="main_menu">
      <!-- JIKA YA -->

      <!-- <div :style="{display:display}"> -->

      <!-- Page Loader -->
      <div class="page-loader-wrapper">
        <div class="loader">
          <div class="preloader">
            <div class="spinner-layer pl-blue">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <p>Please wait...</p>
        </div>
      </div>
      <!-- #END# Page Loader -->

      <!-- Overlay For Sidebars -->
      <div class="overlay"></div>
      <!-- #END# Overlay For Sidebars -->

      <!-- Search Bar -->
      <div class="search-bar">
        <div class="search-icon">
          <i class="material-icons">search</i>
        </div>
        <input type="text" placeholder="START TYPING...">
        <div class="close-search">
          <i class="material-icons">close</i>
        </div>
      </div>
      <!-- #END# Search Bar -->

      <!-- TOPBAR -->
      <app-monev_topbar></app-monev_topbar>
      <!-- TOPBAR -->

      <app-monev_left_sidebar></app-monev_left_sidebar>

    </div>
    <!-- <img src="./assets/logo.png"> -->


    <!-- <section class="content">
    <div class="container-fluid">-->
    <router-view/>
    <!-- </div>
    </section>-->
  </div>
</template>

<script>
 
 

export default {




};
</script>

