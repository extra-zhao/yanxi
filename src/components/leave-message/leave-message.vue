<template>
    <div class="leave-message">
         <el-input class="search-input" maxlength="10" placeholder="兄台，怎么称呼" clearable prefix-icon="el-icon-postcard"  size="small" v-model.trim ="name"></el-input>
         <el-input  type="textarea" @focus="textAreaFocus = true" @blur="textAreaFocus = false" class="textarea"  :rows="4" maxlength="200"  placeholder="有何高论,欢迎留言..." v-model="textarea"></el-input>
        
         <el-button type="primary" class="submit-btn" :class='{"active": textAreaFocus}' icon="el-icon-edit" size="small" circle></el-button>
         
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {
                name: '',
                textarea: '',
                textAreaFocus: false
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
.leave-message{
    font-weight: 100;
    clear: both;
    position: relative;
    .textarea{
        margin-top: 16px;
        /deep/ .el-textarea__inner{
            font-family: Consolas, Microsoft JhengHei, Apple LiGothic Medium, Microsoft YaHei, Arial, sans-serif;
            resize: none;
        }   
    }

    .submit-btn{
        position: absolute;
        right: 6px;
        bottom: 6px;
        opacity: 0.3;
        &.active{
            opacity: 1;
        }
    }
   
}




</style>
