<template>
    <div class="header">
        <div class="left">
            <i class="el-icon-s-promotion logo-icon"></i>
            <div class="name">言蹊</div>
        </div>
        
        <div class="right">
            <div class="search">
                <el-input class="search-input" size="medium" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchValue"></el-input>
            </div>
            <div class="user-info">
                <i class="el-icon-message-solid logo-icon"></i>
                <i class="el-icon-s-tools logo-icon"></i>  
                <div class="info">
                    <div class="avatar">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3246274793,4066644274&fm=253&gp=0.jpg" alt="">
                    </div>
                    <div class="nickname">
                        <div class="name">Extra-zhao</div>
                        <div class="desc">一名前端工程师</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {
                searchValue: ''
            }
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
.header{
    box-shadow: 0 1px 10px #e6e9ee;
    padding: 12px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    .left{
        width: 248px;
        display: flex;
        align-items: center;
        .logo-icon{
            font-size: 32px;
            color: #0169db;
        }
        .name{
            font-size: 20px;
            font-weight: bold;
            margin-left: 12px;
        }
    }
    .right{
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .search{
            .search-input{
                width: 360px;
                border-radius: 24px;
                background-color: #f6fafd;
                /deep/ input.el-input__inner{
                    border-color: transparent;
                    border-radius: 24px;
                    background-color: #f6fafd;
                }
            }
        }
        .user-info{
            display: flex;
            align-items: center;
            .logo-icon{
                color: #99a4bc;
                font-size: 24px;
                margin-right: 32px;
                cursor: pointer;
            }
            .info{
                display: flex;
                align-items: center;
                .avatar{
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    margin-right: 12px;
                }
                .nickname{
                    .name{
                        font-weight: bold;
                    }
                    .desc{
                        font-size: 12px;
                        color: #cdcdcd;
                    }
                }
            }
        }
    }
}
</style>
