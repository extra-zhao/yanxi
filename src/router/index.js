import Vue from 'vue';
import Router from 'vue-router';
import store from "@/vuex/store";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['pages/index'], resolve),
            meta: {
                title: '首页',
                show: true,
                icon: 'el-icon-lollipop'
            }
        },
        {
            path: '/archive',
            name: 'archive',
            component: resolve => require(['pages/archive'], resolve),
            meta: {
                title: '归档',
                show: true,
                icon: 'el-icon-postcard'
            }
        },
        {
            path: '/article',
            name: 'article',
            component: resolve => require(['pages/article'], resolve),
            meta: {
                title: '文章',
                show: true,
                icon: 'el-icon-document'
            },
            children: [
                {
                    path: 'article-detail/:id',
                    name: 'articleDetail',
                    component: resolve => require(['./../pages/article/components/detail'], resolve),
                    meta: {
                        isCildren: true,
                        parentName: 'article'
                    }
                }
            ]
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: resolve => require(['pages/dynamic'], resolve),
            meta: {
                title: '个人动态',
                show: true,
                icon: 'el-icon-sugar'
            }
        },
        {
            path: '/diary',
            name: 'diary',
            component: resolve => require(['pages/diary'], resolve),
            meta: {
                title: '上分日记',
                show: true,
                icon: 'el-icon-notebook-1'
            }
        },
        {
            path: '*',
            name: 'notFound',
            component: resolve => require(['pages/not-found'], resolve),
            meta: {
                title: '迷路了',
                show: false
            }
        }
    ]
});


router.beforeEach((to, from, next) => {
    // 同一个路由不做跳转
    if((to.path == from.path) && to.name != 'index') {
        return false;
    }

    // 当前路由与菜单pip
    if(to.meta.isCildren) {
        store.commit('setCurrentRouteName', to.meta.parentName);
    } else {
        store.commit('setCurrentRouteName', to.name);
    }

    //是否是文章详情，是否收起文章列表展示文章详情
    if(to.name == 'articleDetail') {
        store.commit('setIsDetail', true);
        // 如果是文章详情，那么去更新store的值
        store.commit('setCurrentArticleID', to.params.id);
        store.commit('setArticleDetail', to.params.id);
    } else {
        store.commit('setIsDetail', false);
    }
    
   
   next();
   
})

export default router;
