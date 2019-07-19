<template>
    <!--==========================
  Header
  ============================-->
  <header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <router-link to="/" class="scrollto"><h4>SI-IDA</h4></router-link>
        <!-- Uncomment below if you prefer to use a text logo -->
        <!--<h1><a href="#hero">Regna</a></h1>-->
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li><router-link to="/">Beranda</router-link></li>
          <li><router-link to="/Harga">Tabel Harga</router-link></li>
          <li><router-link to="/Informasi">Informasi</router-link></li>
          <li><router-link to="/Tentang">Tentang</router-link></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->
</template>

