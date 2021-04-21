<template>
   <div class="goods-item" @click="itemClick">
       <img :src="goodsItem.img" @load="imgLoaded"/>
       <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="favorite">{{goodsItem.favorite}}</span>
       </div>
   </div>
</template>

<script>
   export default {
       name: 'GoodsListItem',
       data() {
           return {
           }
       },
       props: {
           goodsItem: {
               type: Object,
               dafault(){
                   return {}
               }
           }
       },
       methods: {
           imgLoaded(){
               //通过事件总线发出图片加载成功事件
               this.$bus.$emit("imgLoaded")
           },
           itemClick(){
               this.$router.push('/detail/' + this.goodsItem.iid)
           }
       },
       components: {
       }
   }
</script>

<style scoped>
    .goods-item {
        padding-bottom: 50px;
        position: relative;
        width: 48%;
        margin-bottom: 5px;
    }
    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }
    .goods-info {
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        text-align: center;
        overflow: hidden;
    }
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
        padding: 3px;
    }
    .goods-info .price {
        color: orangered;
        margin-right: 30px;
    }
    .goods-info .favorite {
        position: relative;
    }
    .goods-info .favorite::before{
        content: '';
        position: absolute;
        left: -18px;
        top: -1px;
        width: 16px;
        height: 16px;
        background: url('~assets/img/common/favorite.svg') left top;
    }
</style>