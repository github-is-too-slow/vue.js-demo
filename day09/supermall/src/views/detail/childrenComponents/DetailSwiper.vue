<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="(item, index) in topImgs" :key="'topImgs' + index">
            <img :src="item"/>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        name: 'DetailSwiper',
        data() {
            return {
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        props: {
            topImgs: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
    .detail-swiper {
        height: 200px;
        overflow: hidden;
    }
</style>