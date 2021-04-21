<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + username" tag="button">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: '张三', age: 18, email: '133607@qq.com'}}" tag="button">档案</router-link>
    <!-- <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button> -->
    <keep-alive exclude='Profile,User'>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        username: '李四'
      }
    },
    methods: {
      linkToHome(){
        // this.$router.push('/home')
        this.$router.replace('/home')
      },
      linkToAbout(){
        // this.$router.push('/about')
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>
  /* .router-link-active {
    background-color: red;
  } */
  .active {
    background-color: purple;
  }
</style>
