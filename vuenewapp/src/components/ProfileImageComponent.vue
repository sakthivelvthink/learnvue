<template>
  <div class="vue-tempalte">
    <form>
      <h3 v-if="showSignup">Sign In</h3>
      <h3 v-else>Sign Up</h3>

      <div class="form-group">
        <label v-text="email"></label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="userName"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="passWord"
        />
      </div>
      <div>
        <div v-if="showSignup" id="hide">
          <button
            type="submit"
            class="btn btn-dark btn-lg btn-block marginBottom"
            @click="clicked('Signin Button Clicked')"
          >
            Sign In
          </button>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="signUp"
      >
        Sign Up
      </button>
      <div>
        Data:
        {{ signUpData }}
      </div>
    </form>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import clickMixin from "../mixins/clickMixin";
export default {
  mixins: [clickMixin],
  data() {
    return {
      userName: "",
      passWord: "",
      signUpData: {},
      email:"EMAIL"
    };
  },
  methods: {
    submit() {
      this.$router.push("/");
    },
    async signUp() {
      const res = await axios.post("http://localhost:4001/graphql", {
        query: ` query {
      contacts {
        id,
        lastName,
        email
      }
    }`,
        variables: {
        },
      })
      this.signUpData = res.data.data.contacts;


let uri = 'https://api.first.org/data/v1/countries?region=africa&limit=3&pretty=true';
axios.get(uri).then((response) => {
  console.log(response.data)
})
      // For Show hide signup Page
      this.$store.dispatch("showSignUp", !this.$store.state.showSignup);
    },
  },
  computed: {
    showSignup() {
      return this.$store.state.showSignup;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #2554ff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
.marginBottom {
  margin-bottom: 10px;
}
.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.vertical-center .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554ff;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>