//当前项目的路由模块
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Movie from "@/components/Movie.vue";
import About from "@/components/About.vue";
import Movie1 from "@/components/Movie1.vue";
import Movie2 from "@/components/Movie2.vue";
import Login from "@/components/Login.vue";
import Main from "@/components/Main.vue";

//使用vue.use()函数，把vueRouter 安装为vue插件
Vue.use(VueRouter)

//创建路由的实例对象
const router = new VueRouter({
    //routes是一个数组，定义hash地址和组件的对应关系
    routes: [
        //路由规则
        //redirect跳转到
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Movie',
            component: Movie,
            children: [{
                    path: 'Movie1',
                    component: Movie1
                },
                {
                    path: 'Movie2',
                    component: Movie2
                },
            ],
            redirect: '/Movie/Movie1'
        },
        {
            path: '/About/:id',
            component: About,
            props: true,
        },
        {
            path: '/Main',
            component:Main,
        },
        {
            path:'/Login',
            component:Login,
        }
    ]
})

//为router实例对象，声明全局前置守卫
/*
router.beforeEach(function (to, from, next) {
    //to表示将要访问的路由信息
    //from表示发出请求的路由信息
    //next函数表示放行
    
    if(to.path=='/Main'){
        const token = localStorage.getItem('token')
        if(token){
            next();
        }else{
            next('/Login');
        }
    }else{
        next()
    }
})
*/

//向外共享router实例
export default router