<template>
    <div>
        <h2>我是主页</h2>
        <p>哈哈哈哈哈</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return {
                path: '/home/news'
            }
        },
        created(){
            console.log("Home created")
        },
        destroyed(){
            console.log("Home destroy")
        },
        activated(){
            this.$router.push(this.path)
        },
        beforeRouteLeave(to, from, next){
            this.path = this.$route.path
            next()
        }
     }
</script>

<style>

</style>