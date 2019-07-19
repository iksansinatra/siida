<template>
    <div>

<section class="content">
<div class="container-fluid">


        <div class="">

            <div class="card">
                        <div class="header " style="padding:20px 0px 0px 20px">
                            <div class="row">
                                <div class="col-md-4">
                                    <span class="h_page">Peraturan</span>
                                </div>
                                <div class="col-md-4"> </div>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                            <button type="button" class="btn bg-light-blue btn-sm waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_tambah_data"><i class="material-icons">add</i></button>
                                        </span>
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
                                            <th style="width: 10%">Jenis Peraturan</th>
                                            <th style="width: 35%">Nama Peraturan</th>
                                            <th style="width: 10%">Dokumen</th>
                                            <!-- <th style="width: 20%">SATKER</th> -->
                                            <th style="width: 10%" class="text-center">#</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="h_isitable" v-for="(data, index) in list_data" :key="data.id">
                                                <td>{{index+1}}.</td>
                                                <td>{{data.jenis}}</td>
                                                <td>{{data.nama}}</td>
                                                <td>{{data.file}}</td>
                                                <!-- <td>Palangga</td> -->
                                                <td class="text-center" >
                                                    <button  @click="GetData(data.id, data.nama, data.jenis, data.file)" class="btn bg-light-blue btn-xs waves-effect" title="Edit Data" id="edit_data" data-toggle="modal" data-target="#m_lihat_data">
                                                        <i class="material-icons" >visibility</i>
                                                    </button>
                                                        &nbsp; 
                                                    <button  @click="GetData(data.id, data.nama, data.jenis, data.file)"  class="btn bg-light-green btn-xs waves-effect" title="Edit Data" id="edit_data" data-toggle="modal" data-target="#m_edit_data">
                                                        <i class="material-icons" >create</i>
                                                    </button>
                                                        &nbsp; 
                                                    <button @click="removeData(data.id, data.file)" class="btn bg-red btn-xs waves-effect" title="Hapus Data" id="hapus_data">
                                                        <i class="material-icons" >clear</i>
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
                    <div class="modal fade" id="m_tambah_data" tabindex="-1" role="dialog" data-backdrop='static'>
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header bg-light-blue">
                                    <button @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="largeModalLabel">TAMBAH DATA</h4>
                                    <br>
                                </div>

                                <form @submit.prevent="addData()">
                                    <div class="modal-body">
                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Jenis Peraturan</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="jenis">
                                                            <option value="">-- Pilih Peraturan --</option>
                                                            <option value="Peraturan Daerah">Peraturan Daerah</option>
                                                            <option value="Peraturan Bupati">Peraturan Bupati</option>
                                                            <option value="Keputusan Bupati">Keputusan Bupati</option>
                                                            <option value="Instruksi Bupati">Instruksi Bupati</option>
                                                            <option value="Keputusan Kepala SKPD">Keputusan Kepala SKPD</option>
                                                            <option value="Pemerintah Desa">Pemerintah Desa</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Nama Peraturan</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <input v-model="nama" type="text" class="form-control" placeholder="Nama Produk Hukum">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Dokumen</label>
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
                                        <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL TAMBAH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

 

                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
                    <div class="modal fade" id="m_edit_data" tabindex="-1" role="dialog" data-backdrop="static">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header bg-light-green">
                                    <button  @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="largeModalLabel">EDIT DATA</h4>
                                    <br>
                                </div>
                                <div class="modal-body">
                                    <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Jenis Peraturan</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <select class="form-control show-tick" v-model="jenis">
                                                        <option value="">-- Pilih Peraturan --</option>
                                                        <option value="Peraturan Daerah">Peraturan Daerah</option>
                                                        <option value="Peraturan Bupati">Peraturan Bupati</option>
                                                        <option value="Keputusan Bupati">Keputusan Bupati</option>
                                                        <option value="Instruksi Bupati">Instruksi Bupati</option>
                                                        <option value="Keputusan Kepala SKPD">Keputusan Kepala SKPD</option>
                                                        <option value="Pemerintah Desa">Pemerintah Desa</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Nama Peraturan</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input v-model="nama" type="text" class="form-control" placeholder="Nama Produk Hukum">
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Dokumen</label>
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
                                    <button @click="editData" type="button" class="btn btn-info waves-effect">SIMPAN</button>
                                    <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->


                <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
                    <div class="modal fade" id="m_lihat_data" tabindex="-1" role="dialog" data-backdrop="static">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header bg-light-blue">
                                    <button @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="largeModalLabel">LIHAT DATA</h4>
                                    <br>
                                </div>

                                <form @submit.prevent="getData()">

                                <div class="modal-body">
                                    <div class="text-center">
                                        <embed :src="file_path+file" width="850" height="800" 
                                        type="application/pdf">
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                                </div>

                                </form>
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

const ADD_URL = URL_APP + "api/v1/web_peraturan/";
const FILE_LOAD = URL_APP+'uploads/';

export default {
  name: "web_peraturan",
  data() {
    return {
      id: "",
      jenis: "",
      nama: "",
      file: "",
      file_old: "",
      file_path : FILE_LOAD,
      

      list_data: [],
      page_first: 1,
      page_last: 0,
      cari_value: ""
    };
  },

  // =============================================================== METHODS =========================================================================
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
        formData.append('jenis', this.jenis);
        formData.append('nama', this.nama);
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
        });
    },

    editData: function() {
        var formData = new FormData();
        formData.append('jenis', this.jenis);
        formData.append('nama', this.nama);
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

    GetData: function(id, nama, jenis, file) {
      this.id = id;
      this.nama = nama;
      this.jenis = jenis;
      this.file = file;
      this.file_old = file;
      
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
        this.jenis = "";
        this.nama = "";
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
        onFileSelected : function(event){
            this.file = event.target.files[0];
            // console.log(this.file);
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