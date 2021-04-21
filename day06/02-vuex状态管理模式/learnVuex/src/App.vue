<template>
  <div id="app">
    <children-com :articles="page.articles"/>
    <button @click="cgcontent">切换内容</button>
    <h2>我是Vue根组件</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <p>{{$store.state.counter}}</p>
    <p>{{$store.getters.moreAgeStus(20)}}</p>
    <p>{{$store.getters.moreAgeStusLength(20)}}</p>
    <p>{{$store.state.info}}</p>
    <router-view/>
  </div>
</template>

<script>
  import ChildrenCom from "./components/ChildrenCom"
  export default {
    name: 'App',
    components: {
      ChildrenCom
    },
    data(){
      return {
        page: {
          articles: [
          {
            id: 1,
            title: '夏红1'
          },
          {
            id: 2,
            title: '夏红2'
          },
          {
            id: 3,
            title: '夏红3'
          }  
        ]
        }
      }
    },
    methods: {
      cgcontent(){
        this.page.articles = [
          {
            id: 5,
            title: 'Jack1'
          },
          {
            id: 6,
            title: "jack2"
          },
          {
            id: 7,
            title: 'jack3'
          }
        ]
      },
      add(){
        this.$store.commit("INCREMENT")
      },
      sub(){
        this.$store.commit("DECREMENT")
      }
    }
  }
</script>

<style>
  
</style>
