<template>
    <div class="menu">
        <ul>
            <!-- <li class="menu-bar active">
                 <i class="el-icon-lollipop logo-icon"></i> 首页
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-postcard logo-icon"></i> 归档
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-document logo-icon"></i> 文章
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-sugar logo-icon"></i> 个人动态
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-notebook-1 logo-icon"></i> 上分日记
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-guide logo-icon"></i> 红黑榜
            </li> -->
            <!-- <li class="menu-bar">
                <i class="el-icon-discover logo-icon"></i> 时光邮局
            </li> -->

            <li class="menu-bar" v-for="(item, index) in routesArr" :key="index" :class='{"active": item.name == currentRouteName}'
                @click="routeJump(item)" v-if="item.meta.show">
                 <i class='logo-icon' :class="item.meta.icon"></i> {{item.meta.title}}
            </li>
            
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import VueRoute from '@/router'
    export default {
        name: '',
        data(){
            return {
                routesArr: []
            }
        },
        computed: {
            currentRouteName() {
                return this.$store.state.currentRouteName
            }
        },
        created() {
            this.routesArr = VueRoute.options.routes;
        },
        mounted() {

        },
        methods: {
            routeJump(routeItem) {
                this.$router.push({name: routeItem.name});
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    .menu{
        height: 100%;
        width: 280px;
        padding-top: 32px;
        background-color: #fff;
        overflow-y: auto;
        flex-shrink: 0;
        ul{
            li.menu-bar{
                list-style: none;
                padding: 24px 48px;
                font-weight: 1000;
                font-size: 18px;
                cursor: pointer;
                .logo-icon{
                    margin-right: 12px;
                    font-size: 20px;
                }
                &.active{
                    color: #1d7bde;
                }
                &:hover:not(.active){
                    color: #1d7bde;
                    font-size: 20px;
                    background-color: #f6fafd;
                }
            }
        }
    }
</style>
