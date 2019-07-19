

<template>
  <div id="pengumuman">
    <section class="content">
      <div class="container-fluid">
        <div class>
          <div class="card">
            <div class="header" style="padding:20px 0px 0px 20px">
              <div class="row">

                <div class="col-md-4">
                  <span class="h_page">Pengumuman</span>
                </div>

                <div class="col-md-4"></div>

                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button
                        type="button" class="btn bg-light-blue btn-sm waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_tambah_data">
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
                        <th class="text-center" style="width: 5%">No.</th>
                        <th style="width: 20%">Judul Pengumuman</th>
                        <th style="width: 30%">isi Pengumuman</th>
                        <th style="width: 15%">Gambar</th>
                        <th class="text-center" style="width: 10%">Tgl Post</th>
                        <th class="text-center" style="width: 12%">#</th>
                      </tr>
                    </thead>
                    <tbody >
 
                      <tr class="h_isitable" v-for="(data, index) in list_data" :key="data.id">

                        <td class="text-center">  {{index+1}}.  </td>
                        <td>{{data.judul}}</td>
                        <td>{{data.isi}}</td>
                        <td>{{data.file}}</td>
                        <td class="text-center">{{convert_tgl(data.createAt)}}</td>

                        <td class="text-center">
                          <button @click="GetData(data.id, data.judul, data.isi, data.file, convert_tgl(data.createAt))" type="button" class="btn bg-blue btn-xs waves-effect" title="Lihat Data" data-toggle="modal" data-target="#m_lihat_data">
                            <i class="material-icons">search</i>
                          </button>
                          &nbsp;
                          <button @click="GetData(data.id, data.judul, data.isi, data.file, convert_tgl(data.createAt))" type="button" class="btn bg-light-green btn-xs waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_update_data">
                            <i class="material-icons">create</i>
                          </button>
                          &nbsp;
                            <button @click="removeData(data.id, data.file)" class="btn btn-danger btn-xs waves-effect" title="Hapus Data" >
                              <i class="material-icons">delete</i> 
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
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="largeModalLabel">TAMBAH DATA</h4>
                    <br>
                  </div>

                  <form @submit.prevent="addData()" >
                    <div class="modal-body">

                      <div class="row clearfix">
                        <div class="col-md-2 form-control-label">
                          <label for="kode">Judul Pengumuman</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="judul" type="text" class="form-control" placeholder="Judul Pengumuman"/>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="row clearfix">
                        <div class="col-md-2 form-control-label">
                          <label for="kode">Isi Pengumuman</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="isi" type="text" class="form-control" placeholder="Tulis isi pengumuman"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row clearfix">
                          <div class="col-md-2 form-control-label">
                              <label for="kode">File Pengumuman</label>
                          </div>
                          <div class="col-md-10">
                              <div class="form-group">
                                  <div class="form-line">
                                      <input @change="onFileSelected" type="file" class="form-control" accept=".pdf">
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
            <div class="modal fade" id="m_update_data" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light-green">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="largeModalLabel">UPDATE DATA</h4>
                    <br>
                  </div>

                  <form >
                    <div class="modal-body">

                      <div class="row clearfix">
                        <div class="col-md-2 form-control-label">
                          <label for="kode">Judul Pengumuman</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="judul" type="text" class="form-control" placeholder="Judul Pengumuman"/>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="row clearfix">
                        <div class="col-md-2 form-control-label">
                          <label for="kode">Isi Pengumuman</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="isi" type="text" class="form-control" placeholder="Tulis isi pengumuman"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row clearfix">
                          <div class="col-md-2 form-control-label">
                              <label for="kode">File Pengumuman</label>
                          </div>
                          <div class="col-md-10">
                              <div class="form-group">
                                  <div class="form-line">
                                      <input @change="onFileSelected" type="file" class="form-control" accept=".pdf">
                                  </div>
                              </div>
                          </div>
                      </div>

                    </div>


                    <div class="modal-footer">
                      <button @click="editData" type="submit" class="btn bg-light-green waves-effect">RUBAH</button>
                      <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <div class="modal fade" id="m_lihat_data" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header bg-light-blue">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="largeModalLabel">PENGUMUMAN</h4>
                    <br>
                  </div>

                  <div class="modal-body">
                    <span><b>{{judul}}</b></span> <hr>
                    <span>{{isi}}</span> <hr>
                    <div class="text-center" v-if="file_tampil">
                        <embed :src="file_path+file" width="850" height="800" 
                        type="application/pdf">
                    </div>

                  </div>


                  <div class="modal-footer">
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

const ADD_URL = URL_APP + "api/v1/web_pengumuman/";
const FILE_LOAD = URL_APP+'uploads/';

export default {
  name: "web_pengumuman",
  data() {
    return {
      id: "",
      isi: "",
      judul: "",

      file: "",
      file_old: "",
      file_path : FILE_LOAD,
      file_tampil : false,

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
          // console.log(res_data);
        });
    },





    addData: function() {
        var formData = new FormData();
        formData.append('judul', this.judul);
        formData.append('isi', this.isi);
        formData.append('file', this.file);

      fetch(ADD_URL + "addData", {
        method: "POST",
        headers: {
        authorization : 'kikensbatara '+localStorage.token
        },
        body: formData
      }).then(res_data => {
          this.alertku("success", "sukses menambah data");
          this.getView();
          console.log(res_data);
      });
    },

    GetData: function(id,judul, isi,file) {
      this.id = id;
      this.judul = judul;
      this.isi = isi;
      this.file = file;
      this.file_old = file;

      if (file == '') {this.file_tampil = false;}
      else{this.file_tampil = true;}

    },


    editData: function() {
        var formData = new FormData();
        formData.append('judul', this.judul);
        formData.append('isi', this.isi);
        formData.append('file', this.file);
        formData.append('file_old', this.file_old);
        formData.append('id', this.id);

        fetch(ADD_URL + "editData", {
            method: "POST",
            headers: {
                authorization: "kikensbatara " + localStorage.token
            },
            body: formData
        }).then(res_data => {
            this.alertku("success", "Sukses merubah data");
            this.getView();
        });
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


    onFileSelected : function(event){
      this.file = event.target.files[0];
      console.log(this.file);
    },

    mdl_exit: function(){
        this.id = "";
        this.isi = "";
        this.file = "";
        this.file_old = "";
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

        convert_tgl : function(dateString){
          var date = new Date(dateString);

          return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
        },
    // ================== PAGINASI ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {
    this.getView();
  },

};
</script>
