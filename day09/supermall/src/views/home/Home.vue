<template>
   <div id="home">
       <nav-bar id="home-nav"><div slot="center">购物街</div></nav-bar>
       <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                        @tabClick="switchType" ref="tabControl1"
                        v-show="isTabFixed"/>
       <!-- 下拉滚动 -->
       <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true"
               @scroll="contentScroll" @pullingUp="loadMore">
            <div>
                <home-swiper :banners="banners" @swiperImgLoaded="allImgLoaded"/>
                <recommond-view :recommonds="recommonds" @recommondsImgLoaded="allImgLoaded"/>
                <feature-view @featureImgLoaded="allImgLoaded"/>
                <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                            @tabClick="switchType" ref="tabControl2"/>
                <goods-list :goods="showGoods"/>
            </div>
       </scroll>
       <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
   </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import Scroll from 'components/common/scroll/Scroll'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goodslist/GoodsList'
    import BackTop from 'components/content/backtop/BackTop'
    
    import HomeSwiper from 'views/home/childrenComponents/HomeSwiper'
    import RecommondView from 'views/home/childrenComponents/RecommondView'
    import FeatureView from 'views/home/childrenComponents/FeatureView'

    import {debounce} from 'common/utils'
    import {getHomeMultidate, getHomeGoods} from 'network/home'
    export default {
        name: 'Home',
        data() {
            return {
                // banners: [],
                banners: [
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://imgcps.jd.com/ling4/2922989/5oqi5aSn6aKd5Yi4/5ruhNTHlh481MA/p-5bd8253082acdd181d02f9d8/5001404a/cr/s/q.jpg'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://img20.360buyimg.com/pop/s590x470_jfs/t1/163387/20/13167/84886/60519b3dE7aa0f21c/6727810c5750d876.jpg.webp'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://img13.360buyimg.com/pop/s590x470_jfs/t1/158255/10/13804/83804/6052c580Ec504d19c/c3a7ce1651d2bd1b.png.webp'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://img20.360buyimg.com/da/s590x470_jfs/t1/113875/9/17461/74030/5f5da286E6b1f9741/9277395852be7108.jpg.webp'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://imgcps.jd.com/ling4/4808741/54iG5qy-5aW96LSn6LSt/6YOo5YiG5aW96LSn5LmwMei1oDE/p-5bd8253082acdd181d02fa06/46a185cf/cr/s/q.jpg'
                    },
                ],
                // recommonds: []
                recommonds: [
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/617917/2021/0313/136/f42be4a7-69bf-4ead-940b-31389a0ee484_290x290_90.jpg',
                        title: '服装'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100003976/2021/0108/66/eb33e033-d381-4e00-aac7-6f19aa1f9a8f_290x290_90.jpg',
                        title: '生活'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/605695/2021/0118/54/a8da1f8b-06b3-41e1-b4b0-94767be1f383_290x290_90.jpg',
                        title: '运动'
                    },
                    {
                        link: 'http://www.baidu.com',
                        img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/600403/2021/0224/49/c7b4e53a-39c6-402b-a862-02e80d0deb78_290x290_90.jpg',
                        title: '数码'
                    }
                ],
                goods: {
                    'pop': {
                        page: 0,
                        list: [
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                iid: "iid006",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00103437/10001351/1872622101-3044228842136735744-3044228842136739841-50_5t.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }
                            
                        ]
                    },
                    'new': {
                        page: 0,
                        list: [
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }, 
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/08/18/117/7a5fed41-d23d-4260-81b3-2cf0c4e515fa_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }
                        ]
                    },
                    'sell': {
                        page: 0,
                        list: [
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            },
                            {
                                iid: "iid001",
                                img: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107361/2019/0917/181/c690dd8a-7b25-49ea-96d9-b40197006ba3_420_531.jpg',
                                title: '新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采，新品上货，秀出风采',
                                price: 99.9,
                                favorite: 88
                            }
                        ]
                    }
                },
                currentType: 'pop',
                isShowBackTop: false,
                offsetTop: 0,
                isTabFixed: false,
                scrollY: 0
            }
        },
        components: {
            NavBar,
            HomeSwiper,
            RecommondView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        create(){
            //请求banner图和recommond信息
            // getHomeMultidate()
            
            // 请求流行商品信息
            // getHomeGoods('pop')
            // 请求新品商品信息
            // getHomeGoods('new')
            // 请求精品商品信息
            // getHomeGoods('sell')
        },
        mounted(){
            //监听图片加载事件
            const refresh = debounce(this.$refs.scroll.refresh, 50)
            this.$bus.$on('imgLoaded', () => {
                refresh()
            })
        },
        activated(){
            this.$refs.scroll.scrollTo(0, this.scrollY, 0)
            this.$refs.scroll.refresh()
        },
        deactivated(){
            this.scrollY = this.$refs.scroll.getScrollY()
        },
        destroyed(){
            console.log("destroyed");
        },
        methods: {
            /**
             * 事件监听方法
             */
            switchType(index){
                switch(index){
                    case 0: 
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2: 
                        this.currentType = 'sell'
                        break
                }
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
            },
            backClick(){
                this.$refs.scroll.scrollTo(0, 0, 500)
            },
            contentScroll(position){
                //1.动态决定回到顶部组件是否显示
                this.isShowBackTop = (-position.y) > 1000

                // 2.滚动时动态决定Tab-Controll1选项卡是否吸顶
                this.isTabFixed = (-position.y) > this.offsetTop
            },
            loadMore(){
                // 加载对应分区的下一页数据
                // getHomeGoods(this.currentType)  
                // 结束下拉状态
                // this.$refs.scroll.finishPullUp()
                console.log("下拉加载更多");
                this.$refs.scroll.finishPullUp()
            },
            allImgLoaded(){
                this.offsetTop = this.$refs.tabControl2.$el.offsetTop
            },
            /**
             * 网络请求方法
             */
            getHomeMultidate(){
                getHomeMultidate().then(res => {
                    this.banners = res.banners.list
                    this.recommonds = res.recommends.list
                })
            },
            getHomeGoods(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                })
            }
        },
        computed: {
            showGoods(){
                return this.goods[this.currentType].list
            }
        }
    }
</script>

<style scoped>
    #home {
        /* padding-top: 45px; */
        position: relative;
        height: 100vh;
    }
    #home-nav {
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
        background-color: pink;
    }
    .tab-control {
        position: relative;
        z-index: 9;
        /* position: sticky;
        top: 44px;
        z-index: 9; */
    }
    .content {
        position: absolute;
        overflow: hidden;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
</style>