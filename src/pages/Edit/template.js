import blog from "@/api/blog";

export default {
  data() {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: false,
      titleMax: '',
      descriptMax: '',
      contentLength: ''
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res =>{
      this.title = res.data.title
      this.content = res.data.content
      this.description = res.data.description
      this.atIndex = res.data.atIndex
      this.titleMax = 20-res.data.title.length
      this.descriptMax = 100-res.data.description.length
      this.contentLength = res.data.content.length
    })
  },

  methods: {
    onEdit() {
      blog.updateBlog({ blogId: this.blogId },{
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