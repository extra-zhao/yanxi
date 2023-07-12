<template>
    <div class="article-container">
        <div class="article-list" id="articel_list" :class="{'detail-small': isDetail, 'animate-article-list': animateFlag}">
            <v-article-list v-for="(item, index) in articleList" :key="index" :article='item' />
        </div>
        <div class="articel-detail-container">
            <router-view /> 
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vArticleList from './components/list/list.vue'
    import articelList from '@/mock/article';

    //  import {listenDomScrollAndSetAos} from '@/util/aosUtil';
    export default {
        name: '',
        components: {
            vArticleList
        },
        data(){
            return {
                articleList: articelList,
                animateFlag: false
            }
        },
        computed: {
            isDetail() {
                return this.$store.state.isDetail
            }
        },
        created() {

        },
        mounted() {
            //  this.$nextTick( () => {
            //      listenDomScrollAndSetAos('articel_list', 'article-list-item');
            // })
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    @import 'article';
</style>
