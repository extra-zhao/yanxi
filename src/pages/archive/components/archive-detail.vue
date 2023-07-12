<template>
    <div class="archive-detail">
        <el-timeline>
            <el-timeline-item timestamp="2023/01/01" placement="top" v-for="(item, index) in 6" :key="index">
                <el-card class="archive-card-item">
                    <div class="archive-type">上传原创文章</div>
                    <div class='archive-title'>一次就学会VUE路由守卫的使用</div>
                    <div class="archive-collect">
                        <div class="info">
                            <i class="el-icon-time"></i>
                            08:30
                        </div>
                        <div class="info">
                            <i class="el-icon-star-off"></i>
                            100
                        </div>
                        <div class="info">
                             <i class="el-icon-view"></i>
                             100
                        </div>
                    </div>
                </el-card>
                <el-card class="archive-card-item">
                    <div class="archive-type">发表个人动态</div>
                    <div class='archive-title'>富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观</div>
                    <div class="archive-collect">
                        <div class="info">
                            <i class="el-icon-time"></i>
                            08:30
                        </div>
                        <div class="info">
                            <i class="el-icon-star-off"></i>
                            100
                        </div>
                        <div class="info">
                             <i class="el-icon-view"></i>
                             100
                        </div>
                    </div>
                </el-card>
                <el-card class="archive-card-item">
                    <div class="archive-type">更新排位日记</div>
                    <div class='archive-title'>打了五把排位，赢了三把，输了两把，总计上分50分。红榜增加三人，黑榜增加一人。</div>
                    <div class="archive-collect">
                        <div class="info">
                            <i class="el-icon-time"></i>
                            08:30
                        </div>
                        <div class="info">
                            <i class="el-icon-star-off"></i>
                            100
                        </div>
                        <div class="info">
                             <i class="el-icon-view"></i>
                             100
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>


            
        </el-timeline>
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
.archive-detail{
    padding: 24px;
    /deep/ .archive-card-item{
        margin-bottom: 12px;
        &:last-child{
            margin-bottom: 0;
        }
        .el-card__body, .el-main{
            padding: 10px 16px;
        }
        .archive-type{
            color: #333;
        }
        .archive-title{
            font-weight: bold;
            margin: 6px 0;
            font-size: 16px;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
        .archive-collect{
            color: #999;
            display: flex;
            font-size: 14px;
            .info{
                margin-right: 18px;
            }
        }
    }
}
</style>
