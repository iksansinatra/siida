<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <div class>
          <div class="card">
            <div class="header" style="padding:20px 0px 0px 20px">
              <div class="row">
                <div class="col-md-4">
                  <span class="h_page">Registrasi</span>
                </div>

                <div class="col-md-4"></div>

                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn bg-light-blue btn-sm waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_tambah_data">
                        <i class="material-icons">add</i>
                      </button>
                    </span>
                    <input type="text" class="form-control" placeholder="Cari data" id="caridata" @keyup="cari_data" v-model="cari_value">
                  </div>
                </div>
              </div>
            </div>

            <div class="body">
              <div class="row clearfix">
                <br>
                <div class="table-responsive">
                  <table class="table table-bordered" style="width: 100%">
                    <thead>
                      <tr class="bg-info">
                        <th style="width: 5%" class="text-center">No.</th>
                        <th style="width: 35%">Nama</th>
                        <th style="width: 25%">Email</th>
                        <th style="width: 25%">Lembaga</th>
                        <th style="width: 25%">Username</th>
                        <th style="width: 25%">Status</th>
                        <th style="width: 10%" class="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="h_isitable" v-for="(data, index) in list_data" :key="data.id">
                        <td class="text-center">{{index+1}}.</td>
                        <td>{{data.nama}}</td>
                        <td>{{data.email}}</td>
                        <td>{{data.lembaga}}</td>
                        <td>{{data.username}}</td>
                        <td>{{data.status}}</td>
                        <td class="text-center">
                          <!-- <button class="btn bg-light-green btn-xs waves-effect" title="Edit Data" id="edit_data" data-toggle="modal" data-target="#m_edit_data">
                            <i class="material-icons">create</i>
                          </button>
                          &nbsp; -->
                          <button @click="removeData(data.id)" class="btn bg-red btn-xs waves-effect" title="Hapus Data" id="hapus_data">
                            <i class="material-icons">clear</i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <hr>
                    <div class="text-center">
                        <button @click="btn_prev" type="button" class="btn btn-xs bg-blue waves-effect" id="pref">
                            <i class="material-icons">skip_previous</i>
                        </button>
                         &nbsp;
                        <span style="font-size: 85%; color: #a5a5a5">
                            <b>{{page_first}} - {{page_last}}</b>
                        </span>
                         &nbsp;
                        <button @click="btn_next" type="button" class="btn btn-xs bg-blue waves-effect" id="next">
                            <i class="material-icons">skip_next</i>
                        </button>
                    </div>
                <hr>
              </div>
            </div>
          </div>

          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL TAMBAH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <div class="modal fade" id="m_tambah_data" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-light-blue">
                    <button @click="emptyData()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="largeModalLabel">TAMBAH DATA</h4>
                    <br>
                    </div>

                    <form @submit.prevent="addData()">
                        <div class="modal-body">
                            <div v-if="alert" class="alert alert-danger">
                                <strong>Periksa kembali!</strong> {{alert_msg}}.
                            </div>
                            
                            <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">Nama</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input v-model="nama" type="text" class="form-control" placeholder="Contoh : Iksan Sinatra" >
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">email</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input v-model="email" type="text" class="form-control" placeholder="contoh : example@gmail.com">
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">Lembaga</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input v-model="lembaga" type="text" class="form-control" placeholder="Contoh : BKAD Konawe Selatan">
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">username</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input v-model="username" type="text" class="form-control" placeholder="Username" >
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">Password</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input v-model="password" type="password" class="form-control" placeholder="Password">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Status</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick" v-model="status">
                                                        <option value="">-- Status --</option>
                                                        <option value="Admin ">Admin</option>
                                                        <option value="Client">Client</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-info waves-effect">SIMPAN</button>
                            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL TAMBAH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <!-- <div class="modal fade" id="m_edit_data" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-light-green">
                        <button @click="emptyData()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="largeModalLabel">EDIT DATA</h4>
                        <br>
                    </div>
                    <form @submit.prevent="editData()">
                        <div class="modal-body">
                            <div v-if="alert" class="alert alert-danger">
                                <strong>Oh snap!</strong> Change a few things up and try submitting again.
                            </div>
                                
                                <div class="row clearfix">
                                    <div class="col-md-2 form-control-label">
                                        <label for="kode">Nama</label>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input v-model="nama" type="text" class="form-control" placeholder="Contoh : Iksan Sinatra" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">email</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input v-model="email" type="text" class="form-control" placeholder="contoh : example@gmail.com">
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">Lembaga</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input v-model="lembaga" type="text" class="form-control" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">username</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input v-model="username" type="text" class="form-control" placeholder="Tanpa spasi" >
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-2 form-control-label">
                                        <label for="kode">Password</label>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input v-model="password" type="password" class="form-control" placeholder="Judul Slide">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Status</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick" v-model="status">
                                                        <option value="">-- Status --</option>
                                                        <option value="Admin ">Admin</option>
                                                        <option value="Client">Client</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success waves-effect">RUBAH</button>
                            <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                        </div>
                    </form>
                </div>
                </div>
            </div> -->
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!-- ============================================================ MODAL ======================================================================== -->
        </div>
      </div>
    </section>
  </div>
</template>



 

<script>

const ADD_URL = URL_APP + "api/v1/web_users/";
const SIGNUP_URL = URL_APP + "auth/signup";

export default {
  name: "borang_acu",
  data() {
    return {
      id: "",
      nama: "",
      email: "",
      lembaga: "",
      username: "",
      password: "",
      status: "",
      alert: false,
      alert_msg: '',

      list_data: [],
      page_first: 1,
      page_last: 0,
      cari_value: ""
    };
  },

  // =============================================================== METHODS =========================================================================
  methods: {
    getView: function() {
      fetch(ADD_URL + "view", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "kikensbatara " + localStorage.token
        },
        body: JSON.stringify({
          data_ke: this.page_first,
          cari_value: this.cari_value
        })
      })
        .then(res => res.json())
        .then(res_data => {
          this.list_data = res_data.data;
          this.page_last = res_data.jml_data;
        //   console.log(res_data);
        });
    },
    addData: function() {
      fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          nama: this.nama,
          email: this.email,
          lembaga: this.lembaga,
          username: this.username,
          password: this.password,
          status: this.status
        })
      }).then(res => res.json())
      .then(res_data => {
        //   console.log(res_data);
          
            if (res_data == null) {
                this.getView();
                this.alertku("success", "sukses menambah data");
            }else{
                this.alert = true;
                this.alert_msg = res_data.message;
            }
      });
    },
    // editData: function() {
    //   // alert(this.id_kab_kota)

    //   fetch(ADD_URL + "editData", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: "kikensbatara " + localStorage.token
    //     },
    //     body: JSON.stringify({
    //       id: this.id,
    //       id_kecamatan: this.id_kecamatan,
    //       des_kel: this.des_kel
    //     })
    //   }).then(res_data => {
    //     this.getView();
    //     this.alertku("success", "Sukses merubah data");
    //     // console.log(res_data);
    //   });
    // },
    // GetData: function(id, nama, email, lembaga, username, password, status) {
    //   this.id = id;
    //   this.nama = nama;
    //   this.email = email;
    //   this.lembaga = lembaga;
    //   this.username = username;
    //   this.password = password;
    //   this.status = status;
    // },
    removeData: function(idnya) {
      fetch(ADD_URL + "removeData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "kikensbatara " + localStorage.token
        },
        body: JSON.stringify({
          id: idnya
        })
      }).then(res_data => {
        this.getView();
        this.alertku("success", "sukses menghapus data");
        this.fileku = null;
      });
    },

    // ================== PAGINASI ====================
        alertku: function(type, title) {
        this.$swal({
            type: type,
            title: title,
            showConfirmButton: false,
            timer: 800
        });
        },

        btn_prev: function() {
        if (this.page_first > 1) {
            this.page_first--;
        } else {
            this.page_first = 1;
        }
        this.getView();
        },

        btn_next: function() {
        if (this.page_first >= this.page_last) {
            this.page_first == this.page_last;
        } else {
            this.page_first++;
        }
        this.getView();
        },

        cari_data: function() {
        this.getView();
        }
    // ================== PAGINASI ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {
    this.getView();
    // this.getKab_Kota();
  },

  watch: {
    username() { this.alert = false;},
    password() { this.alert = false;},
    nama() { this.alert = false;},
    email() { this.alert = false;}
  }
};
</script>
