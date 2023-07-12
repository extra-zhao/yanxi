<template>
    <div class="article-list-item" :id='"article_item_" + article.articelId'  :class="{'detail-small': isDetail, 'active': article.articelId == currentArticleID}">
        <div class="wrapper-content" @click="goDetail">
            <div class="mask"></div>
            <div class="introduce">
                <div class="title">{{article.title}}</div>
                <div class="desc">{{article.desc}}</div>
                <div class="time-and-keywords">
                    {{article.date}}
                    <span class="tag">博客</span>
                    <span class="tag">github</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
   
    export default {
        name: '',
        props: {
            article: Object,
            default: {}
        },
        components: {},
        data(){
            return {}
        },
         computed: {
            isDetail() {
                return this.$store.state.isDetail
            },
            currentArticleID() {
                return this.$store.state.currentArticleID
            }
        },
        created() {
            
        },
        mounted() {
           
        },
        methods: {
            goDetail() {
                if(this.$route.name == 'articleDetail') {
                    this.$router.push({name: 'articleDetail', params: {id: this.article.articelId}})
                } else {
                    this.$parent.animateFlag = true;
                    setTimeout( () => {
                        this.$router.push({name: 'articleDetail', params: {id: this.article.articelId}})
                    }, 500);
                    setTimeout( () => {
                        this.$parent.animateFlag = false;
                    }, 1000);
                }
                
            }
        },
       
    }
</script>

<style scoped lang="less">
.article-list-item{
    width: 33.33%;
    overflow: hidden;
    position: relative;
    padding: 24px;
    .wrapper-content{
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        padding-bottom: 180px;
        background: url(https://img2.baidu.com/it/u=2954326682,1150777949&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500) no-repeat center;
        background-size: cover;
        box-shadow: 2px 2px 8px #0000007d;
        &:hover{
            cursor: pointer;
            transform: scale(1.02);
        }

        .mask{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #000;
            // opacity: 0.5;
            opacity: 0.12;
        }
        .introduce{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            color: #fff;
            padding: 24px;
            .title{
                font-size: 22px;
                font-weight: bold;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                // color: #666;
            }
            .desc{
                font-size: 16px;
                // color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                // 下面这句用来控制行数
                -webkit-line-clamp: 3;  
                -webkit-box-orient: vertical;
                height: 60px;
                margin-top: 12px;
            }
            .time-and-keywords{
                font-size: 14px;
                margin-top: 14px;
                .tag{
                    background-color: #0000007d;
                    opacity: 0.9;
                    color: #fff;
                    font-size: 14px;
                    display: inline-block;
                    padding:0 6px;
                    margin-left: 8px;
                    border-radius: 4px;
                    height: 20px;
                    line-height: 20px;
                }
            }
        }
    }

     &.detail-small {
        width: 100%;
        padding: 8px;
        .wrapper-content{
            .introduce{
                padding: 18px;
            }
            // &:hover{
            //     .highLight;
            // }
        }
        &.active{
            .wrapper-content{
                .highLight;
            }
        }
        
    }
    
}

.highLight{
    background: none;
    background-color: #1181f9d4;
}
</style>
