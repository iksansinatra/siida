<template>
  <div class="backgg">
    <div class="row paddingku">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="card">
          <div class="body">
            <img class="img-responsive" src="static/images/logo.png" alt>
            <hr>
            <h3 class="text-center">REGISTRASI USER</h3>
            <form>
              <div class="form-group">
                <div class="form-line">
                  <input type="text" class="form-control" placeholder="Username" required>
                </div>
              </div>

              <div class="form-group">
                <div class="form-line">
                  <input type="text" class="form-control" placeholder="password" required>
                </div>
              </div>
              <button type="submit" class="btn btn-block btn-lg btn-info waves-effect">LOGIN</button>
            </form>
              <br>
              <button type="button" class="btn btn-block btn-lg bg-blue btn-sm waves-effect">
                <small><b>REGISTRASI</b></small>
              </button>
            <hr>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "monev_signin"
};
</script>

<style>
.backgg {
  /* background: url('../../../../public/images/2.png') no-repeat center center
    fixed; */
  /* background-image: url(https://i.stack.imgur.com/7X3An.png) ; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
}
.paddingku {
  /* padding: 1%; */
  position: relative;
  top: 40%;
  transform: translateY(40%);
}
</style>
