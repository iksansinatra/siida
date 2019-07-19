

<template>
  <div id="kakaoa">
    <section class="content">
      <div class="container-fluid">
        <div class>
          <div class="card">
            <div class="header" style="padding:20px 0px 0px 20px">
              <div class="row">

                <div class="col-md-4">
                  <span class="h_page">Daftar Harga</span>
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
                                                <th style="width: 10%">Petani</th>
                                                <th style="width: 10%">Pengumpul</th>
                                                <th style="width: 10%">Daerah</th>
                                                <th style="width: 10%">Pengencer</th>
                                                <th style="width: 10%">Minggu</th>
                                                <th style="width: 10%">Bulan</th>
                                                <th style="width: 10%">Tahun</th> 
                                                <th class="text-center" style="width: 15%">#</th>
                      </tr>
                    </thead>
                    <tbody >
                        <tr v-for="(data, index) in list_data" :key="data.id" class="h_isitable">
                                            <td class="text-center">{{index + 1}}</td>
                                            <td>{{data.petani}}</td>
                                            <td>{{data.pengumpul}}</td>
                                            <td>{{data.daerah}}</td>
                                            <td>{{data.pengencer}}</td>
                                            <td>{{data.minggu}}</td>
                                            <td>{{data.bulan}}</td>
                                            <td>{{data.tahun}}</td>
                                            <td class="text-center">  
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
                          <label for="kode">Petani / Produsen</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="petani" type="text" class="form-control" placeholder="Petani / Produsen"/>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Pengumpul</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input v-model="pengumpul" type="text" class="form-control" placeholder="Pengumpul"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Pedagang Antar Daerah</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input v-model="daerah" type="text" class="form-control" placeholder="Pedagang Antar Daerah"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row clearfix">
                                    <div class="col-md-2 form-control-label">
                                        <label for="kode">Pengencer</label>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input v-model="pengencer" type="text" class="form-control" placeholder="Pengencer"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Minggu Ke-</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="minggu">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="I">I</option>
                                                            <option value="II">II</option>
                                                            <option value="III">III</option>
                                                            <option value="IIII">IIII</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Bulan</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="bulan">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="Januari">Januari</option>
                                                            <option value="Februari">Februari</option>
                                                            <option value="Maret">Maret</option>
                                                            <option value="April">April</option>
                                                            <option value="Mei">Mei</option>
                                                            <option value="Juni">Juni</option>
                                                            <option value="Juli">Juli</option>
                                                            <option value="Agustus">Agustus</option>
                                                            <option value="September">September</option>
                                                            <option value="Oktober">Oktober</option>
                                                            <option value="November">November</option>
                                                            <option value="Desember">Desember</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Tahun</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="tahun">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                        </select>
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
          <div class="modal fade" id="m_edit_data" tabindex="-1" role="dialog">
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
                          <label for="kode">Petani / Produsen</label>
                        </div>
                        <div class="col-md-10">
                          <div class="form-group">
                            <div class="form-line">
                                <input v-model="petani" type="text" class="form-control" placeholder="Petani / Produsen"/>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Pengumpul</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input v-model="pengumpul" type="text" class="form-control" placeholder="Pengumpul"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row clearfix">
                                        <div class="col-md-2 form-control-label">
                                            <label for="kode">Pedagang Antar Daerah</label>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input v-model="daerah" type="text" class="form-control" placeholder="Pedagang Antar Daerah"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row clearfix">
                                    <div class="col-md-2 form-control-label">
                                        <label for="kode">Pengencer</label>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input v-model="pengencer" type="text" class="form-control" placeholder="Pengencer"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Minggu Ke-</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="minggu">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="I">I</option>
                                                            <option value="II">II</option>
                                                            <option value="III">III</option>
                                                            <option value="IIII">IIII</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Bulan</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="bulan">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="Januari">Januari</option>
                                                            <option value="Februari">Februari</option>
                                                            <option value="Maret">Maret</option>
                                                            <option value="April">April</option>
                                                            <option value="Mei">Mei</option>
                                                            <option value="Juni">Juni</option>
                                                            <option value="Juli">Juli</option>
                                                            <option value="Agustus">Agustus</option>
                                                            <option value="September">September</option>
                                                            <option value="Oktober">Oktober</option>
                                                            <option value="November">November</option>
                                                            <option value="Desember">Desember</option> 
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-md-2 form-control-label">
                                                <label for="kode">Tahun</label>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <select class="form-control show-tick" v-model="tahun">
                                                            <option value="">-- Pilih --</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                        </select>
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

 
        <!-- ============================================================ MODAL ======================================================================== -->
        </div>
      </div>
    </section>
  </div>
</template>



 

<script>

const ADD_URL = URL_APP + "api/v1/web_kakaoa/";

export default {
  name: "web_kakaoa",
  data() {
    return {
      id: "",
      petani: "",
      pengumpul: "",
      daerah: "",
      pengencer: "",
      minggu: "",
      bulan: "",
      tahun: "",

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
          authorization: "iksansinatra " + localStorage.token
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
        formData.append('petani', this.petani);
        formData.append('pengumpul', this.pengumpul);
        formData.append('daerah', this.daerah);
        formData.append('pengencer', this.pengencer);
        formData.append('minggu', this.minggu);
        formData.append('bulan', this.bulan);
        formData.append('tahun', this.tahun);

      fetch(ADD_URL + "addData", {
        method: "POST",
        headers: {
        authorization : 'iksansinatra '+localStorage.token
        },
        body: formData
      }).then(res_data => {
          this.alertku("success", "Sukses Menambah Data");
          this.getView();
          console.log(res_data);
      });
    },

    GetData: function(data) {
      this.petani = data.petani;
      this.pengumpul = data.pengumpul;
      this.daerah = data.daerah;
      this.pengencer = data.pengencer;
      this.minggu = data.minggu;
      this.bulan = data.bulan;
      this.tahun = data.tahun;
    },


    editData: function() {
        var formData = new FormData();
        formData.append('petani', this.petani);
        formData.append('pengumpul', this.pengumpul);
        formData.append('daerah', this.daerah);
        formData.append('pengencer', this.pengencer);
        formData.append('minggu', this.minggu);
        formData.append('bulan', this.bulan);
        formData.append('tahun', this.tahun);
        formData.append('id', this.id);

        fetch(ADD_URL + "editData", {
            method: "POST",
            headers: {
                authorization: "iksansinatra " + localStorage.token
            },
            body: formData
        }).then(res_data => {
            this.alertku("success", "Sukses Mengubah Data");
            this.getView();
        });
    },

    removeData: function(idnya) {
      fetch(ADD_URL + "removeData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "iksansinatra " + localStorage.token
        },
        body: JSON.stringify({
          id: idnya
        })
      }).then(res_data => {
        this.getView();
        this.alertku("success", "Sukses Menghapus Data");
      });
    },


    // onFileSelected : function(event){
    //   this.file = event.target.files[0];
    //   console.log(this.file);
    // },

    mdl_exit: function(){
        this.id = "";
        this.petani = "";
        this.pengumpul = "";
        this.daerah = "";
        this.pengencer = "";
        this.minggu = "";
        this.bulan = "";
        this.tahun = "";
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
