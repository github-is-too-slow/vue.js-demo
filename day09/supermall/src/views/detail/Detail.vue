<template>
   <div class="detail">
       <detail-nav-bar/>
       <detail-swiper :topImgs="topImgs"/>
   </div>
</template>

<script>
    import {getDetail} from 'network/detail'
    import DetailNavBar from './childrenComponents/DetailNavBar'
    import DetailSwiper from './childrenComponents/DetailSwiper'
    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topImgs: [
                    'https://a.vpimg3.com/upload/merchandise/pdcvis/2020/10/26/37/d5f8593e-0caf-4452-969f-c50443545bbf_420x420_90.jpg',
                    'https://a.vpimg3.com/upload/merchandise/pdcvis/2020/10/26/77/5b77aa5e-bc4d-451f-9e72-c6bd01ff49ee_420x420_90.jpg',
                    'https://a.vpimg3.com/upload/merchandise/pdcvis/2020/10/26/59/c7f0696d-d908-4f1c-9293-d74a67d11f62_420x420_90.jpg',
                    'https://a.vpimg3.com/upload/merchandise/pdcvis/2020/10/26/59/c7f0696d-d908-4f1c-9293-d74a67d11f62_420x420_90.jpg'
                ]
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper
        },
        created(){
            this.iid = this.$route.params.iid
            // getDetail(this.iid).then((res) => {
            //     this.topImgs = res.result.itemInfo.topImgs
            // })
            console.log(this.iid);
        }
    }
</script>

<style scoped>
</style>