<template>
    <div class="diary-container">
        <div id="diary_turn_container">
             <div class="diary-turn-item" v-for="(item, index) in 10" :key="index">
                <div class="diary-left">
                    <div class="diary-info">
                        <div class="title">日期{{index}}</div>
                        <div class="desc">2023年3月1日</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">天气</div>
                        <div class="desc">晴朗</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">大区</div>
                        <div class="desc">黑色玫瑰</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">ID</div>
                        <div class="desc">faker</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">段位</div>
                        <div class="desc">黄金</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">胜场/场次</div>
                        <div class="desc">5/10</div>
                    </div>
                    <div class="diary-info">
                        <div class="title">上分</div>
                        <div class="desc">-50</div>
                    </div>
                    
                </div>
                <div class="diary-rigth">

                    <p class="p">对面的打野一直抓我，气死了，直接拉黑名单对面的打野一直抓我，气死了，
                        直接拉黑名单对面的打野一直抓我，气死了，直接拉黑名单对面的打野一直抓我，气死了，
                        直接拉黑名单对面的打野一直抓我，气死了，直接拉黑名单对面的打野一直抓我，气死了，
                        直接拉黑名单对面的打野一直抓我，气死了，直接拉黑名单对面的打野一直抓我，气死了，
                        直接拉黑名单对面的打野一直抓我，气死了，直接拉黑名单对面的打野一直抓我，气死了，
                        直接拉黑名单对面的打野一直抓我，气死了，直接拉黑名单</p>

                    <img class="diary-img" src='https://img0.baidu.com/it/u=913981874,2619394631&fm=253&fmt=auto?w=1422&h=800' />
                    
                    <!-- <p class="p rate">队友评价</p> -->
                    <p class="p red">红榜</p>  
                    <p class="p red-list">theshy、UZI</p>
                    <p class="p red-list">theshy、UZI</p>
                    <p class="p red-list">theshy、UZI</p>
                    <p class="p black">黑榜</p>  
                    <p class="p black-list">
                        bang、rookie、吴彦祖
                    </p> 
                </div>  

            </div>
        </div>
       
        
    </div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery';
    import turn from "@/util/turn.js";
    export default {
        name: '',
        components: {},
        data(){
            return {}
        },
        created() {

        },
        mounted() {
            this.onTurn();
        },
        methods: {
            onTurn() {
            var _that = this;
            this.$nextTick(() => {
                //自适应宽高
                var w = $(".diary-container").width();
                var h = $(".diary-container").height();
                $("#diary_turn_container").turn({
                acceleration: true, //启用硬件加速,移动端有效
                display: "single", //显示：single=单页，double=双页，默认双页
                duration: 500, // 翻页撒开鼠标，页面的延迟
                page: 1, // 默认显示第几页
                pages: 2,
                gradients: true, // 折叠处的光泽渐变，主要体现翻页的立体感、真实感
                autoCenter: true, //
                turnCorners: "bl,br", // 设置可翻页的页角(都试过了，乱写 4个角都能出发卷起)， bl,br   tl,tr   bl,tr
                width: w,
                height: h,
                when: {
                    turned: function (e, page, view) {
                        console.log(e, page, view);
                        // if (page == 2) {
                            // _that.$router.push({ path: "/zchb/contents", query: { id: 1 } });
                        // }
                    },
                },
                });
            });
            }
        },
       
    }
</script>

<style scoped lang="less">
    @import 'diary';
</style>
