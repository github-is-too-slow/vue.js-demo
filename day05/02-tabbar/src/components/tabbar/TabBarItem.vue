<template>
  <div class="tab-bar-item" @click="onclick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        data(){
          return {
            
          }
        },
        props: {
          path: String,
          activeColor: {
            type: String,
            default: "#d4237a"
          }
        },
        methods: {
          onclick(){
            this.$router.push(this.path)
          }
        },
        computed: {
          isActive(){
            return this.$route.path.indexOf(this.path) != -1
          },
          activeStyle(){
            return this.isActive? {color: this.activeColor}: {}
          }
        }
    }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 14px;
    text-align: center;
    line-height: 14px;
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      margin-bottom: 2px;
      vertical-align: center;
  }
</style>
