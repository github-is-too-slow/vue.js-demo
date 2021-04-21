<template>
    <!-- 根据网络请求内容动态决定 -->
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="'swiper' + index">
            <a :href="item.link">
                <img :src="item.img" @load="swiperImgLoaded"/>
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper/index'
    export default {
        name: 'HomeSwiper',
        data() {
            return {
                isLoaded: false
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            banners: {
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            swiperImgLoaded(){
                if(!this.isLoaded){
                    //发送轮播图片已加载事件
                    this.$emit("swiperImgLoaded")
                    this.isLoaded = true
                }
            }
        }
    }
</script>

<style scoped>
    
</style>