<template v-if="blog.user">
  <div id="index">
    <section class="blog-posts">
      <!-- 列表渲染，指定博客对应路径 -->
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}}<span> {{friendlyDate(blog.createdAt)}}</span></h3> 
        <p>{{blog.user.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        @current-change="onPageChange"
        layout="prev, pager, next"
        :current-page="page"
        :total="total">
      </el-pagination>
    </section>
  </div> 
</template>

<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
