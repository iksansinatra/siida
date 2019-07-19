<template>
  <div id="tentang">
    <section class="content">
      <div class="container-fluid">
        <div class>
          <div class="card">
            <div class="header" style="padding:20px 0px 0px 20px">
              <div class="row">
                <div class="col-md-4">
                  <span class="h_page">Tentang</span>
                </div>

                <div class="col-md-4"></div>

                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn bg-light-blue btn-sm waves-effect" title="Tambah Data" data-toggle="modal" data-target="#m_tambah_data">
                        <i class="material-icons">add</i>
                      </button>
                    </span>
                    <input type="text" class="form-control" placeholder="   Cari data" @keyup="cari_data" v-model="cari_value">
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
                              <th style="width: 80%">Uraian</th>
                              <!-- <th style="width: 20%">SATKER</th> -->
                              <th class="text-center" style="width: 15%">#</th>
                          </tr>
                      </thead>
                      <tbody>
                      <!-- v-for="(data, index) in list_urusan" track-by="data.createdtime" -->
                      <tr v-for="(data, index) in list_data" :key="data.id" class="h_isitable">
                          <td class="text-center">{{index + 1}}</td>
                          <td><div v-html="data.uraian"></div></td>
                          <!-- <td>Palangga</td> -->
                          <td class="text-center">
                              <button  @click="GetData(data)"  class="btn bg-blue btn-xs waves-effect" title="Edit Data" data-toggle="modal" data-target="#m_lihat_data">
                                  <i class="material-icons" >search</i>
                              </button>
                                  &nbsp;
                              <button  @click="GetData(data)"  class="btn bg-light-green btn-xs waves-effect" title="Edit Data" data-toggle="modal" data-target="#m_edit_data">
                                  <i class="material-icons" >create</i>
                              </button>
                                  &nbsp; 
                              <button @click="removeData(data.id)" class="btn bg-red btn-xs waves-effect" title="Hapus Data" id="hapus_data">
                                  <i class="material-icons" >clear</i>
                              </button>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                </div>

                <!-- <div class="h_isitable" v-html="isi"></div> -->

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
          <div class="modal fade" id="m_tambah_data" role="dialog" data-backdrop="static">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header bg-light-blue">
                  <button @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                  <h4 class="modal-title" id="largeModalLabel">TAMBAH DATA</h4>
                  <br>
                </div>

                  <div class="modal-body">

                    <div class="row clearfix">
                      <div class="col-md-12 form-control-label">
                        <label for="kode">Uraian</label>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="form-line">
                            <div id="editor"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="modal-footer">
                    <button @click="addData" type="button" class="btn btn-info waves-effect">SIMPAN</button>
                    <button @click="mdl_exit" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                  </div>

              </div>
            </div>
          </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL TAMBAH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
          <div class="modal fade" id="m_edit_data" role="dialog" data-backdrop="static">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header bg-light-green">
                  <button @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="largeModalLabel">Edit</h4>
                  <br>
                </div>

                <form>
                  <div class="modal-body">

                    <div class="row clearfix">
                      <div class="col-md-12 form-control-label">
                        <label for="kode">Uraian</label>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="form-line">
                            <div id="editor1"></div>
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
          </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL EDIT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
            <div class="modal fade" id="m_lihat_data" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-blue">
                        <button @click="mdl_exit" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="largeModalLabel">DETAIL DATA</h4>
                        <br>
                    </div>

                    <div class="modal-body">
                          <div class="ql-editor">
                              <div v-html="uraian"></div>
                          </div>
                    </div>

                    <div class="modal-footer" @click="mdl_exit">
                        <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal">KEMBALI</button>
                    </div>
                </div>
                </div>
            </div>
        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx MODAL LIHAT xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
        </div>
      </div>
    </section>
  </div>
</template>



 

<script>
import { VueEditor } from 'vue2-editor'
import {Quill} from 'quill';

const ADD_URL = URL_APP + "api/v1/web_tentang/";

export default {
  name: "web_tentang",
  components: {VueEditor},
  data() {
    return {
      id: "",
      uraian: "",

      list_data: [],
      page_first: 1,
      page_last: 0,
      cari_value: "",
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
        fetch(ADD_URL + "addData", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: "kikensbatara " + localStorage.token
            },
            body: JSON.stringify({
              uraian : CKEDITOR.instances.editor.getData()
            })
        }).then(res_data => {
            this.alertku("success", "sukses menambah data");
            this.getView();
        });
    },

    editData: function() {

        fetch(ADD_URL + "editData", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: "kikensbatara " + localStorage.token
            },
            body: JSON.stringify({
              id : this.id,
              uraian : CKEDITOR.instances.editor1.getData()
            })
        }).then(res_data => {
            this.alertku("success", "Sukses merubah data");
            this.getView();
        });
    },

    GetData: function(data) {
        this.id = data.id;
        this.uraian = data.uraian;
        CKEDITOR.instances.editor1.setData(data.uraian);
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
        })
      }).then(res_data => {
        this.getView();
        this.alertku("success", "sukses menghapus data");
      });
    },

    mdl_exit: function() {
      this.id = '';
      CKEDITOR.instances.editor.setData("");
      CKEDITOR.instances.editor1.setData("");
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
      this.page_first = 1;
      this.getView();
    },
    onFileSelected: function(event) {
      this.file = event.target.files[0];
    },
    convert_tgl: function(dateString) {
      var date = new Date(dateString);
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
  // ================== PAGINASI ====================
  },
  // =============================================================== METHODS =========================================================================

  mounted() {
    this.getView();





CKEDITOR.replace( 'editor',{
            // width: 793.700787,
            height: 1122.519685,
            startupFocus : true,
            tabindex: false
        });

        
CKEDITOR.replace( 'editor1',{
            // width: 793.700787,
            height: 1122.519685,
        });
  }
};
</script>
