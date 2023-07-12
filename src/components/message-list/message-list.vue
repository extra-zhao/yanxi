<template>
    <div class="message-list"  data-aos="flip-down" data-aos-duration="600" data-aos-delay="300">
        <img src="https://extra-zhao.github.io/static/img/avatar.0277ac9.jpeg" class="avatar" >
        <div class="message-info">
            <div class="name">
                不愿透露姓名的吴彦祖先生
            </div>
            <div class="message-text">
                希望大家每天都有收获、每天都在进步，一起学习进步。
            </div>
            <div class="date-time">
                    2023-01-01 08:00:00
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import AOS from 'aos';
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
.message-list{
    display: flex;
    margin-bottom: 30px;
    .avatar{
        widows: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 16px;
    }
    .message-info{
         flex-grow: 1;
         font-size: 14px;
         padding-bottom: 10px;
         border-bottom: 1px solid  #e8e9e7;
         .name{
            font-weight: 700;
            color: #666;
            margin-bottom: 8px;
         }
         .message-text{
            color: #999;
         }
         .date-time{
            color: #999;
            margin-top: 8px;
            font-size: 12px;
         }
    }
    &:last-child{
        .message-info{
            border-bottom: none;
        }
    }
}
</style>
