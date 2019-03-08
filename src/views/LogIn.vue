<template>
  <v-app id="login">
    <v-layout row wrap>
      <v-flex class="content-wrap justify-content-center align-center">
        <v-container fluid class="justify-center">
          <v-layout row wrap>
            <v-flex>
              <h1 class="title-text blue--text font-weight-bold">Take your poker game to the next level</h1>
            </v-flex>
            <router-view/>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-if="clientWidth > 1025" class="side-img-wrap justify-content-center align-center">
        <div class="logo-card justify-center align-center column">
          <div class="justify-center align-center">
            <v-img class="img-logo" :src="images[0].logo"></v-img>
          </div>
        </div>
        <div class="txt-card justify-center align-center">
          <blockquote class="block-txt white--text font-regular-medium">
            <p class="quote-symb">&ldquo;</p>
            Analyze your game, know your opponent next move and win.
          </blockquote>
        </div>
        <div class="fill-height dark-background"></div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  name: 'logIn',
  data () {
    return {
      clientWidth: this.checkClientWidth(),
      images: [
        { logo: require('@/assets/login/logo.png') }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.clientWidth = this.checkClientWidth()
      })
    })
  },
  methods: {
    checkClientWidth: () => {
      return document.documentElement.clientWidth
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.checkClientWidth)
  }
}
</script>

<style scoped>
#login {
  background-color: #fff;
}

/* Styling left side */
.content-wrap {
  display: flex;
  width: 50%;
}
.content-wrap > .container {
  display: flex;
}
.content-wrap .layout {
  position: relative;
  max-width: 510px;
  width: 100%;
  z-index: 5;
}
  .title-text {
    font-size: 36px;
    text-align: left;
    height: 160px;
    margin: 0 35px;
  }

  * /deep/ .v-form {
    display: flex;
    flex-direction: column;
  }
  * /deep/ .v-form > .input-card {
    max-width: 220px;
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
  }
    * /deep/ .input-card > label {
      font-size: 14px;
    }
    * /deep/ .input-card > input {
      margin-top: 12px;
      width: 100%;
      height: 47px;
      text-align: center;
      font-size: 18px;
      border: 1px solid #e0e0e0 !important;
      outline: none;
    }
    * /deep/ .input-card > input:active,
    * /deep/ .input-card > input:focus {
      border-left-width: 2px !important;
      border-left-color: #56CCF2 !important;
    }
    * /deep/ .input-card > input::placeholder {
      color: #bdbdbd;
    }
  * /deep/ .submit-btn {
    width: 108px;
    height: 40px;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    font-size: 18px;
    margin-top: 50px;
  }
  * /deep/ .google-login-card,
  * /deep/ .create-acc-card {
    margin-top: 35px;
  }
  * /deep/ .google-login-card {
    display: flex;
    justify-content: center;
  }
    * /deep/ .google-btn {
      width: 160px;
      height: 40px;
      border: 1px solid #E0E0E0;
      border-radius: 50px;
      font-size: 14px;
    }
  * /deep/ .create-acc-card {
    color: #4F4F4F;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
    * /deep/ .create-acc-card > * {
      display: inline-block;
    }
    * /deep/ .create-acc-card > .sign-up-btn {
      text-decoration: underline;
      outline: none;
    }
    * /deep/ .create-acc-card > .sign-up-btn:hover {
      text-decoration: none;
      transform: scale(1.1);
      transition: all 100ms;
    }

@media (max-width: 1025px) {
  .content-wrap {
    position: relative;
    background: url(../assets/login/login_bg_mob.jpg) no-repeat center;
    background-size: cover;
  }
  .content-wrap::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .7);
  }
  .title-text {
    color: #fff !important;
  }
  * /deep/ .submit-btn,
  * /deep/ .google-login-card,
  * /deep/ .create-acc-card {
    margin-top: 30px;
  }
  * /deep/ .create-acc-card {
    color: #fff;
  }
}

@media (max-width: 550px) {
  .title-text {
    font-size: 30px;
    margin: 0 30px;
    height: auto;
  }
}

/* Styling right side (show's only screen > 1025px) */
.side-img-wrap {
  display: flex;
  position: relative;
  width: 50%;
  height: 100%;
  background: url(../assets/login/login_bg.jpg) no-repeat center;
  background-size: cover;
}
  .side-img-wrap > .dark-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  .logo-card {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 10;
  }
    .logo-card > div {
      width: 152px;
      height: 152px;
      border-radius: 20px;
      background-color: #fff;
      display: flex;
      transform: translateY(-30px);
    }
      .logo-card .img-logo {
        flex: none;
        width: 124px;
        height: 118px;
      }
  .txt-card {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 10;
  }
    .txt-card > .block-txt {
      width: 425px;
      text-align: left;
      font-size: 18px;
      line-height: normal;
      transform: translateY(200px);
    }
      .block-txt > .quote-symb {
        font-size: 48px;
        height: 30px;
        transform: translate(-15px, 15px);
      }
</style>
