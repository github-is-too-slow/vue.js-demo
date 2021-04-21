<template>
   <div class="detail-nav">
       <nav-bar>
            <div slot="left" class="back" @click="back">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div slot="center" class="title">
                <div v-for="(item, index) in title" :key="'detail' + index" 
                    class="title-item" :class="{active: index === currentIndex}"
                    @click="itemClick(index)">
                    {{item}}
                </div>
            </div>
       </nav-bar>
   </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'DetailNavBar',
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        components: {
            NavBar
        },
        methods: {
            itemClick(index){
                this.currentIndex = index
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
    }
    .title-item {
        flex: 1;
    }
    .active{
        color: #c7585f;
    }
</style>