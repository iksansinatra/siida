<template>
  <div class="informasi">
    <Header />
        <!--==========================
      Services Section
    ============================-->
    <section id="services">
      <div class="container wow fadeIn">
        <div class="section-header">
          <h3 class="section-title">Penjelasan Data dan Informasi SI-IDA</h3>
          <h4 class="section-title">(Sistem Informasi-Inovasi Daerah)</h4>
          <p class="section-description">(Frequently Asked Question)</p>
        </div>
        <div class="row">
          <div class="p-lg-4">
            <div v-for="(data, index) in list_data" :key="index" class="bg-review-slider flexslider p-sm-4 pt-0">
            <div v-html="data.uraian"></div>
          </div>
				</div>
          <!-- <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-bar-chart"></i></a></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-paper-plane"></i></a></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-photo"></i></a></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-road"></i></a></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="box">
              <div class="icon"><a href=""><i class="fa fa-shopping-bag"></i></a></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div> -->
        </div>

      </div>
    </section><!-- #services -->
  </div>
</template>

<script>
  const ADD_URL = URL_APP+"api/v1/publish_informasi/";
  import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
  name: "publish_informasi",
  data: function() {
    return {
      list_data: [],
    };
  },
  methods: {
    getView: function() {
      fetch(ADD_URL, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      }).then(res => res.json())
        .then(res_data => {
          this.list_data = res_data;
        })
    }
    // ambilData: function() {
    //   return "http://localhost:5100/api/v1/publish_tentang/"
    // },
    // GetData: function(data) {
    //     this.id = data.id;
    //     this.uraian = data.uraian;
    // },
  },
  mounted() {
    this.getView();
    // this.GetData();
    // this.ambilData();
  }
}
</script>
