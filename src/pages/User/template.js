import blog from '@/api/blog.js'

export default {
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0
    }
  },

  created() {
    this.userId = this.$route.params.userId
    this.page = this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, { page: this.page })
      .then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        if(res.data.length > 0){
          this.user = res.data[0].user
        }
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

    onPageChange(newPage) {
      blog.getBlogsByUserId(this.userId,{ page: newPage })
        .then(res => {
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({ path: `/user/${this.userId}`,query: {page: newPage }})
        })
    }
  }
}
