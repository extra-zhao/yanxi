<template>
    <div class="not-found">
        <img src="@/assets/image/404.png" class="not-found-img" alt="">
        <div class="title">Whoops!</div> 
        <div class="tips">
            兄台，好像迷路了呢，这个页面还没开发呢，我们回
            <el-button type="primary" size="medium" @click="backHome">首页</el-button>
            看看吧</div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        components: {},
        data(){
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {
            backHome() {
                this.$router.push({name: 'index'});
            }
        },
       
    }
</script>

<style scoped lang="less">
.not-found{
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #2864dd;
    font-weight: bold;
    .not-found-img{
        width: 800px;
        display: block;
        margin: 0 auto;
    }
    .title{
        font-size: 32px;
        font-weight: bold;
        margin: 24px 0 16px 0;
    }
}
</style>
