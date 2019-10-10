import { mapActions } from 'vuex'
// 用户输入的用户名和密码
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    // 首先取到 Actions 里的 login
    ...mapActions(['login']),

    onLogin() {
      // 把用户输入的内容赋值给 login
      this.login({
          username: this.username,
          password: this.password
        })
        // 跳转路径
        .then(() => {
          this.$router.push({ path: this.$route.query.redirect || '/' })
        })
    }
  }
}
