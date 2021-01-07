<template>
  <div>
    <Header />
    <img class="loginBackground" src="../assets/loginBackground.jpg" />
    <div class="card loginCardView">
      <div class="card-content">
        <form>
          <h1 style="text-align: center; font-size: 25px; font-weight: bold">
            SIGN IN
          </h1>
          <div
            style="display: flex; align-items: center; justify-content: center"
            class="form-group"
          >
            <img src="../assets/user.png" />
            <input
              style="width: 80%; height: 35px"
              type="email"
              class="form-control form-control-lg"
            />
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
            "
            class="form-group"
          >
            <img styl src="../assets/lock.png" />
            <input
              style="width: 80%; height: 35px"
              type="password"
              class="form-control form-control-lg"
            />
          </div>
          <p style="text-align: right; padding-left: 30px">
            <router-link to="/forgot-password">Forgot password ?</router-link>
          </p>
          <div
            style="display: flex; align-items: center; margin-left: 40px"
            class="form-group"
          >
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label style="margin-left: 5px" for="checkbox">Remember me</label>
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
            "
            class="form-group"
          >
            <button
              style="width: 80%; height: 35px"
              type="submit"
              class="btn btn-dark btn-lg btn-block"
              @click="signIn"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import axios from 'axios'
export default {
  components: {
    Header,
  },
  data() {
    return {
    };
  },
  methods: {
    signIn() {
     let uri = 'https://api.first.org/data/v1/countries?region=africa&limit=3&pretty=true';
axios.get(uri).then((response) => {
  console.log(response.data)
})

   }
  },
  computed: {
    
  },
  watch: {
    '$store.state.login': 'handleSignInStatusChange',
  },
};
</script>
<style>
.loginBackground {
  display: inline-block;
  position: absolute;
  margin-top: 20px;
}
.loginCardView {
  margin-top: 300px;
  width: 500px;
  margin-left: 100px;
}
.alignLoginCardView {
  justify-content: center;
  align-items: center;
}
</style>
