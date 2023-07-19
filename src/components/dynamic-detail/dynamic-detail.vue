<template>
    <div class="detail-item">
        <div class="avatar">
            <img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3246274793,4066644274&fm=253&gp=0.jpg' />
        </div>
        <div class="detail-info">
            <div class="divided">
                新上，南区临湖别墅，<span class="hot">#润扬森林会</span>     4套在售
            </div>

            <div class="divided">
                【面积售价】毛坯产证546平，售价590万
            </div>

             <div class="divided">
                【户型楼层】 5/3/4 前后花园2亩地起，依湖而建，楼层1-3
            </div>

            <el-image class='source-img' style="width: 150px; height: 150px" v-for='(item, index) in srcList' :key='index'
             :preview-src-list="srcList" :src="item" fit="none"></el-image>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        components: {},
        data(){
            return {
                srcList: [
                    'https://img2.baidu.com/it/u=3747762036,2590701722&fm=253&fmt=auto&app=138&f=JPEG?w=722&h=500',
                    'https://img2.baidu.com/it/u=2917898717,1122761777&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
                    'https://img0.baidu.com/it/u=3905371471,2861711221&fm=253&fmt=auto&app=138&f=JPEG?w=277&h=500',
                    'https://img2.baidu.com/it/u=3747762036,2590701722&fm=253&fmt=auto&app=138&f=JPEG?w=722&h=500'
                ]
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {},
       
    }
</script>

<style scoped lang="less">
.detail-item{
    display: flex;
    .avatar{
        margin-right: 24px;
        img{
             width: 100px;
        }
    }
    .detail-info{
        font-weight: bold;
        font-size: 20px;
        color: #333;
        .divided{
            margin-bottom: 16px;
            .hot{
                color: #1d7bde;
                display: inline-block;
                cursor: pointer;
            }
        }
        .source-img{
            margin: 10px;
            &.single{
                width: 100%;
                /deep/ .el-image__inner{
                    max-width: 100%;
                    object-fit: unset !important;
                }
            }
            &.double{
                width: 360px;
                height: 360px;
            }
            &.odd{
                width: 150px;
                height: 150px;
            }
            &.even{
                width: 150px;
                height: 150px;
            }
        }
    }
}
</style>
