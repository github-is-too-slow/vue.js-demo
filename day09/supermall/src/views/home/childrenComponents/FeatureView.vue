<template>
   <div class="feature">
       <a href="http://www.baidu.com">
            <img src="~assets/img/home/featureview/feature.jpg" @load="featureImgLoaded"/>
       </a>
   </div>
</template>

<script>
   export default {
       name: 'FeatureView',
       data() {
           return {
               isLoaded: false
           }
       },
       components: {
       },
       methods: {
           featureImgLoaded(){
               //发送特色版块图片已加载事件
                this.$emit("featureImgLoaded")
                this.isLoaded = true
           }
       }
   }
</script>

<style scoped>
    .feature img{
        width: 100%;
    }
</style>