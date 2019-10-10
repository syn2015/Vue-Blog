// 博客间无联系，不用 vuex ，直接用 api
import blog from "@/api/blog";

export default {
  data() {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,
      titleMax: 20,
      descriptMax: 100,
      contentLength: 0
    }
  },

  methods: {
    onCreate() {
      blog.createBlog({
          title: this.title,
          description: this.description,
          content: this.content,
          atIndex: this.atIndex
        })
        .then(res => {
          this.$message.success(res.msg) // 创建成功
          this.$router.push({
            path: `/detail/${res.data.id}`
          }) // 跳转页面至对应博客详情页
        })
    },
    // 添加文本框输入实时计数功能
    titleInput() {
      var txtVal = this.title.length
      this.titleMax = 20 - txtVal
      if (this.titleMax === 0) {
        this.$message.warning("字数太多了哦")
      }
    },
    descriptInput() {
      var txtVal = this.description.length
      this.descriptMax = 100 - txtVal
      if (this.descriptMax === 0) {
        this.$message.warning("字数太多了哦")
      }
    },
    contentInput() {
      this.contentLength = this.content.length
    }
  }
};
