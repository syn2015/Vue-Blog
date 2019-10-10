<template>
  <div id="login">
    <h4>用户名</h4>
    <!-- 这里未用UI组件，input 样式在 common.less 里新增 -->
    <input v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin"> <!-- 回车登录 -->
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有帐号？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
