<template>
    <div>

      <!-- Top Bar -->
      <nav class="navbar bg-teal">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a href="javascript:void(0);" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                  <a href="javascript:void(0);" class="bars"></a>
                  <a class="navbar-brand" href="#/dashboard">ADMIN WEB</a>
              </div>
              <!-- <div class="collapse navbar-collapse" id="navbar-collapse">
                  <ul class="nav navbar-nav navbar-right"> -->
                      <!-- Call Search -->
                      <!-- <li><a href="javascript:void(0);" class="js-search" data-close="true"><i class="material-icons">search</i></a></li> -->
                      <!-- #END# Call Search -->
                      <!-- Notifications -->
                      <!-- <li class="dropdown">
                          <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                              <i class="material-icons">notifications</i>
                              <span class="label-count">2</span>
                          </a>
                          <ul class="dropdown-menu">
                              <li class="header">PEMBERITAHUAN</li>
                              <li class="body">
                                  <ul class="menu">
                                      <li>
                                          <a href="javascript:void(0);">
                                              <div class="icon-circle bg-light-green">
                                                  <i class="material-icons">person_add</i>
                                              </div>
                                              <div class="menu-info">
                                                  <h4>12 new members joined</h4>
                                                  <p>
                                                      <i class="material-icons">access_time</i> 14 mins ago
                                                  </p>
                                              </div>
                                          </a>
                                      </li>

                                      <li>
                                          <a href="javascript:void(0);">
                                              <div class="icon-circle bg-purple">
                                                  <i class="material-icons">settings</i>
                                              </div>
                                              <div class="menu-info">
                                                  <h4>Settings updated</h4>
                                                  <p>
                                                      <i class="material-icons">access_time</i> Yesterday
                                                  </p>
                                              </div>
                                          </a>
                                      </li>
                                  </ul>
                              </li>
                              <li class="footer">
                                  <a href="javascript:void(0);">View All Notifications</a>
                              </li>
                          </ul>
                      </li> -->
                      <!-- #END# Notifications -->
                      <!-- Tasks -->
                      <!-- <li class="dropdown">
                          <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                              <i class="material-icons">flag</i>
                              <span class="label-count">2</span>
                          </a>
                          <ul class="dropdown-menu">
                              <li class="header">TASKS</li>
                              <li class="body">
                                  <ul class="menu tasks">
                                      <li>
                                          <a href="javascript:void(0);">
                                              <h4>
                                                  Footer display issue
                                                  <small>32%</small>
                                              </h4>
                                              <div class="progress">
                                                  <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 32%">
                                                  </div>
                                              </div>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="javascript:void(0);">
                                              <h4>
                                                  Make new buttons
                                                  <small>45%</small>
                                              </h4>
                                              <div class="progress">
                                                  <div class="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                                                  </div>
                                              </div>
                                          </a>
                                      </li>

                                  </ul>
                              </li>
                              <li class="footer">
                                  <a href="javascript:void(0);">View All Tasks</a>
                              </li>
                          </ul>
                      </li> -->
                      <!-- #END# Tasks -->
                      <!-- <li class="pull-right"><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="material-icons">more_vert</i></a></li>
                  </ul>
              </div> -->
          </div>
      </nav>
      <!-- #Top Bar -->


    </div>
</template>


<script>
    export default {
        name: 'monev_topbar',
            data () {
            return {
                msg: 'monev_topbar'
            }
        }
    }
</script>
