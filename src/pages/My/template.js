import blog from '@/api/blog.js'
// 通过 vuex 组件获取 我的 的 user
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  
  computed: {
    ...mapGetters(['user'])
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        // console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
  },

  methods: {
    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        // getMouth() 返回值是 0（一月） 到 11（十二月）的一个整数
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },

    // 引入 弹框组件
    async onDelete(blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await
        blog.deleteBlog({ blogId })
        this.$message.success('删除成功!')
        // 从数组里面过滤出已删除的博客，达到不用刷新页面就去掉已删除博客的优化
        this.blogs = this.blogs.filter(blog => blog.id != blogId)
    },

    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id,{ page: newPage })
        .then(res => {
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({ path: "/my",query: {page: newPage }})
        })
    }
  }
}