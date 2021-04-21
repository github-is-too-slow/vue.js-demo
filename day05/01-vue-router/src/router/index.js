import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 路由懒加载
const Home = () => import('../components/Home')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.安装VueRouter插件
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: "首页"
        },
        children: [
            // {
            //     path: '',
            //     redirect: 'news'
            // },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: "关于"
        }
    },
    {
        path: '/user/:username',
        component: User,
        meta: {
            title: "用户"
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: "我的"
        }
    }
]

// 2.创建VueRouter实例
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

//监听每次组件的切换
router.beforeEach((to, from, next) => {
    window.document.title = to.matched[0].meta.title
    next()
})
// 3.导出VueRouter实例
export default router

