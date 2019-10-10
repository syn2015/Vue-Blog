import blog from "@/api/blog.js"

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  // 在创建博客的时候直接读取博客 data等信息
  created() {
    // 判断当前页面页码 注意是 $route
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({ page: this.page }).then(res => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
    })
  },

  methods: {
    onPageChange(newPage) {
      blog.getIndexBlogs({
        page: newPage
      }).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        // 将当前分页链接引入路由，使得刷新页面不发生改变
        this.$router.push({ path: '/',query: {page: newPage }})
      })
    }
  }
}
