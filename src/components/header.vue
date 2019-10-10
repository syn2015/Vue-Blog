<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>
        <router-link to="/" :title="'返回首页'">Let's share</router-link>
      </h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>
        <router-link to="/" :title="'回到首页'">Let's share</router-link>
      </h1>
      <router-link to="/create"><i class="edit el-icon-edit" :title="'新建博客'"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  // 测试
  // import auth from "@/api/auth";
  // window.auth = auth;

  export default {
    data() {
      return {};
    },

    computed: {
      ...mapGetters(["isLogin", "user"])
    },

    created() {
      this.checkLogin();
    },

    methods: {
      ...mapActions(["checkLogin", "logout"]),

      onLogout() {
        this.logout();
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/base.less";

  header.no-login {
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1 {
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: uppercase;

      a {
        color: #fff;
      }
    }

    p {
      margin: 15px 0 0 0;
      color: #fff;
    }

    .btns {
      display: flex;
      text-align: center;
      justify-content: center;
    }

    button {
      margin: 20px 50px 0;
    }
  }

  header.login {
    display: flex;
    align-items: center;
    background: @bgColor;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 40px;
      text-transform: uppercase;
      flex: 1;

      a {
        color: #fff;
      }
    }

    .edit {
      color: #fff;
      font-size: 30px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      margin-left: 15px;
    }

    .user {
      position: relative;

      ul {
        display: none;
        position: absolute;
        right: 0;
        list-style: none;
        border: 1px solid #eaeaea;
        margin: 0;
        padding: 0;
        background-color: #fff;

        a {
          text-decoration: none;
          color: #333;
          font-size: 12px;
          display: block;
          padding: 5px 10px;

          &:hover {
            background-color: #eaeaea;
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    header.no-login {
      h1{
        margin: 40px 0 0 0;
      }
      .btns {
        max-width: 300px;
      }
      button {
        margin: 20px 30px 0;
      }
    }
  }
</style>
