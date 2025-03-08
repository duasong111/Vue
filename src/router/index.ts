
//第一步引入createRouter
import { createRouter,createWebHashHistory, createWebHistory } from "vue-router";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import Detail from "@/pages/Detail.vue";

//第二步：创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes: [{
        name:'zhuye',
        path: '/home',
        component: Home
    },
    {
        name:'xinwen',
        path: '/news',
        component:News,
        children:[
            {
                name:'news_detal',
                path:'details/:id/:title/:content?',  //使用params需要去占位
                component:Detail,
                props:true
            }
        ]
    }, {
        name:'guanyu',
        path: '/about',
        component: About
    }
    ]
})
//暴露出路由
export default router