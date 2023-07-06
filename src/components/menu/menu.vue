<template>
    <div class="menu">
        <ul>
            <li class="menu-bar active">
                 <i class="el-icon-lollipop logo-icon"></i> 首页
            </li>
            <li class="menu-bar">
                <i class="el-icon-edit logo-icon"></i> 归档
            </li>
            <li class="menu-bar">
                <i class="el-icon-star-off logo-icon"></i> 分享
            </li>
            <li class="menu-bar">
                <i class="el-icon-wind-power logo-icon"></i> 我的动态
            </li>
            <li class="menu-bar">
                <i class="el-icon-postcard logo-icon"></i> 上分日记
            </li>
            <li class="menu-bar">
                <i class="el-icon-guide logo-icon"></i> 红黑榜
            </li>
            <li class="menu-bar">
                <i class="el-icon-discover logo-icon"></i> 时光邮局
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {}
    }
</script>

<style scoped lang="less">
    .menu{
        height: 100%;
        width: 280px;
        padding-top: 32px;
        background-color: #fff;
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
            }
        }
    }
</style>
