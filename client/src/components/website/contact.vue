<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <div class>
          <div class="card">
            <div class="header" style="padding:20px 0px 0px 20px">
              <div class="row">
                <div class="col-md-4">
                  <span class="h_page">Contact</span>
                </div>

                <div class="col-md-4"></div>

                <div class="col-md-4">
                  <div class="input-group">
                    <!-- <span class="input-group-btn">
                      <button type="button" class="btn bg-light-blue btn-sm waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_tambah_data">
                        <i class="material-icons">add</i>
                      </button>
                    </span> -->
                    <input type="text" class="form-control" placeholder="Cari data" @keyup="cari_data" v-model="cari_value">
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
                                    <th style="width: 5%">No.</th>
                                    <th style="width: 10%">Nama</th>
                                    <th style="width: 10%">Email</th>
                                    <th style="width: 10%">Subject</th>
                                    <th style="width: 35%">Pesan</th>
                                    <!-- <th style="width: 20%">SATKER</th> -->
                                    <th style="width: 15%">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="h_isitable" v-for="(data, index) in list_data" :key="data.id">
                                    <td>{{index+1}}.</td>
                                    <td>{{data.nama}}</td>
                                    <td>{{data.email}}</td>
                                    <td>{{data.subject}}</td>
                                    <td>{{data.pesan}}</td>
                                    <!-- <td>Palangga</td> -->
                                    <td class="text-center">
                                        <button @click="GetData(data.id, data.nama, data.email, data.subject)" class="btn bg-blue btn-xs waves-effect" title="Lihat Foto" id="edit_data" data-toggle="modal" data-target="#m_lihat_foto">
                                            <i class="material-icons">search</i>
                                        </button>
                                        &nbsp;
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
            <!-- <div class="modal fade" id="m_tambah_data" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-light-blue">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="mdl_exit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="largeModalLabel">TAMBAH DATAv </h4>
                        <br>
                    </div>

                    <form @submit.prevent="addData()">
                    <div class="modal-body">
                        <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">Nama Ketua KPU</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" class="form-control" placeholder="Nama Penulis" v-model="nama">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">Foto Ketua KPU</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="file" class="form-control" @change="onFileSelected" accept="image/*">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row clearfix">
                            <div class="col-md-2 form-control-label">
                                <label for="kode">Isi Sambutan</label>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea v-model="isi" class="form-control">Masukan Isi Sambutan</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-info waves-effect">SIMPAN</button>
                        <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                    </div>
                    </form>
                </div>
                </div>
            </div> -->
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL TAMBAH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <!-- <div class="modal fade" id="m_edit_data" tabindex="-1" role="dialog" data-backdrop="static">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-light-green">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="mdl_exit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="largeModalLabel">EDIT DATA</h4>
                        <br>
                    </div>
                    <form >
                        <div class="modal-body">
                            <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">Nama Ketua KPU</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" class="form-control" placeholder="Nama Penulis" v-model="nama">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">Foto Ketua KPU</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="file" class="form-control" @change="onFileSelected">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row clearfix">
                                <div class="col-md-2 form-control-label">
                                    <label for="kode">Isi Sambutan</label>
                                </div>
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <textarea v-model="isi" cols="95%" rows="4">Masukan Isi Sambutan</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button @click="editData" type="button" class="btn btn-success waves-effect">RUBAH</button>
                            <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                        </div>
                    </form>
                </div>
                </div>
            </div> -->
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <div class="modal fade" id="m_lihat_foto" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-blue">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="mdl_exit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="largeModalLabel">Pesan</h4>
                        <br>
                    </div>

                    <!-- <div class="modal-body">
                        <img class="img-responsive" :src="file_path+foto" alt="">
                    </div> -->

                    <div class="modal-footer" @click="mdl_exit">
                        <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                    </div>
                </div>
                </div>
            </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->


          <!-- ============================================================ MODAL ======================================================================== -->
        </div>
      </div>
    </section>
  </div>
</template>



 


<script>

const ADD_URL = URL_APP + "api/v1/web_contact/";
// const FILE_LOAD = URL_APP+'uploads/';

export default {
  name: "web_contact",
  data() {
    return {
      id: "",
      nama: "",
      email: "",
      subject: "",
      pesan: "",
    //   file_path : FILE_LOAD,

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
        var formData = new FormData();
        formData.append('nama', this.nama);
        formData.append('foto', this.foto);
        formData.append('isi', this.isi);

        fetch(ADD_URL + "addData", {
            method: "POST",
            headers: {
            authorization : 'kikensbatara '+localStorage.token
            },
            body: formData
        }).then(res_data => {
            this.alertku("success", "sukses menambah data");
            this.getView();
        });
    },

    GetData: function(id, nama, email, subject, pesan) {
      this.id = id;
      this.nama = nama;
      this.email = email;
      this.subject = subject;
      this.pesan = pesan;
    },

    removeData: function(idnya, file) {
      fetch(ADD_URL + "removeData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "kikensbatara " + localStorage.token
        },
        body: JSON.stringify({
          id: idnya,
          file : file
        })
      }).then(res_data => {
        this.getView();
        this.alertku("success", "sukses menghapus data");
        this.fileku = null;
      });
    },

    mdl_exit: function(){
        this.id = "";
        this.nama = "";
        this.email = "";
        this.subject = "";
        this.pesan = "";
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
        },
        onFileSelected : function(event){
            this.foto = event.target.files[0];
            console.log(this.foto);
        },
        convert_tgl : function(dateString){
          var date = new Date(dateString);
          return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
        },
    // ================== PAGINASI ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {
    this.getView();
  },

};
</script>
