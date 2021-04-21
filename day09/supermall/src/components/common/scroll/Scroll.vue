<template>
   <div class="wrapper" ref="wrapper">
       <div class="content">
           <slot></slot>
       </div>
   </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: '',
        data() {
            return {
                bscroll: null
            }
        },
        props: {
            probeType: {
                type: Number,
                default(){
                    return 0
                }
            },
            pullUpLoad: {
                type: Boolean,
                default(){
                    return false
                }
            }
        },
        methods: {
            scrollTo(x, y, time=500){
                this.bscroll && this.bscroll.scrollTo(x, y, time)
            },
            finishPullUp(){
                this.bscroll && this.bscroll.finishPullUp()
            },
            refresh(){
                this.bscroll && this.bscroll.refresh()
            },
            getScrollY(){
                return this.bscroll? this.bscroll.y: 0
            }
        },
        components: {
        },
        mounted(){
            this.bscroll = new BScroll(this.$refs.wrapper, {
                // 实时监听滚动
                probeType: this.probeType,
                // 开启点击监听
                click: true,
                // 上拉加载监听
                pullUpLoad: this.pullUpLoad
            })
            if(this.probeType == 2 || this.probeType == 3){
                this.bscroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            }
            if(this.pullUpLoad){
                this.bscroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
            }
        }
    }
</script>

<style scoped>
</style>