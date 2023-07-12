import Vue from 'vue';
import Vuex from 'vuex';
import articelList from '@/mock/article'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
    
    },
    // 定义状态
    state: {
        author: 'extra_zhao',
        currentRouteName: '',
        isDetail: false,
        currentArticleID: '',
        articleDetail: {}
    },
    mutations:{
        newAuthor(state,msg){
            state.author = msg
        },
        setCurrentRouteName(state,currentRouteName){
            state.currentRouteName = currentRouteName;
        },
        setIsDetail(state,isDetail) {
            state.isDetail = isDetail;
        },
        setCurrentArticleID(state,currentArticleID){
            state.currentArticleID = currentArticleID;
        },
        setArticleDetail(state,articleID){
            const currentArticle = articelList.filter( v => {
                return v.articelId == articleID;
            })[0] || {};
            state.articleDetail = currentArticle;
        }
    }
})

export default store