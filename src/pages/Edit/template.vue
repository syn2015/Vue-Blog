<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="titleInput" placeholder="输入您的标题" maxlength="20"></el-input>
    <p class="msg"><span>{{titleMax}}/20</span></p>
    <h3>内容简介</h3>
    <!-- 自适应高度组件：添加 autosize 属性 -->
    <el-input type="textarea" @input="descriptInput" v-model="description" :autosize="{ minRows: 2, maxRows: 4}" placeholder="展示博客简介" maxlength="100"></el-input>
    <p class="msg"><span>{{descriptMax}}/100</span></p>
    <h3>文章内容</h3>
    <el-input type="textarea" @input="contentInput" v-model="content" :autosize="{ minRows: 6, maxRows: 30}" placeholder="请输入内容"></el-input>
    <p class="msg"><span>已输入{{contentLength}}个字</span></p>
    <!-- 添加 atIndex 开关 -->
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang="less"></style>
