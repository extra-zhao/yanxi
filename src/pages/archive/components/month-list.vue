<template>
    <div class="month-list" id="archive_list">
        <div class="month-item" :class="{'active': activeIndex == index}" @click="scrollToItem(index)"
              v-for="(item, index) in 12" :key="index" >
            <div class="month-name" >
                <div>1月</div>
                <div>Jan</div>
            </div>
            <div class="item">上传了<span class="num">5</span>篇原创文章</div>
            <div class="item">发表了<span class="num">10</span>条个人动态</div>
            <div class="item">更新了<span class="num">10</span>次排位日记</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery';
    export default {
        name: '',
        data(){
            return {
                activeIndex: 0
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            scrollToItem(index) {
                this.activeIndex = index;
                 $('#archive_list').animate({
                    scrollTop: Number(130 * index)
                 });
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    .month-item{
        // height: 300px;
        // background: url(~@/assets/image/archive/1.png) no-repeat;
        // background-position: left 30px center;
        // background-color: #e6e6e6;
        padding: 16px;
        padding-left: 160px;
        box-shadow: 2px 2px 8px #ccc;
        border-radius: 12px;
        margin-bottom: 16px;
        cursor: pointer;
        position: relative;
        &:hover{
            box-shadow: 2px 2px 8px #0000007d;
        }
        &:last-child{
            margin-bottom: 0;
        }
        .month-name{
            position: absolute;
            top: 24px;
            left: 24px;
            width: 100px;
            height: 100px;
            text-align: center;
            font-size: 32px;
            font-weight: bold;
        }
        .item{
            margin: 4px 0;
            color: #333;
            .num{
                font-size: 18px;
                font-weight: bold;
                display: inline-block;
                margin: 0 4px;
            }
        }
        &.active{
            transform: scale(1.04);
            margin-top: 24px;
            margin-bottom: 24px;
            color: #fff;
            background-color: #1181f9d4;
            .item{
                color: #fff;
            }
        }
    }
</style>
