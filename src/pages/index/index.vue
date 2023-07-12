<template>
    <div class="index-page-content">
        <img :src="require('@/assets/image/banner/2.jpeg')" alt="" class="banner-img" />
        <div class="mask"></div>  

        <div class="guide">
            <div class="name"  data-aos="fade-right" data-aos-duration="500">言蹊的博客</div>
            <div class="welcome" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">小哥哥小姐姐们好,欢迎来到言蹊的博客!很幸运被你们点进来，欢迎在我的博客内交流沟通，分享自己的观点，给出友好的建议。祝各位CP多多,在接下来的日子里，运气爆棚，钱包鼓鼓，感情顺利。</div>   
            <div class="introduce-container">
                <div class="introduce-item">
                    <div class="item-title"  data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">个人信息</div>
                    <div class="item-text"  data-aos="fade-right" data-aos-duration="500" data-aos-delay="700">
                        <ul>
                            <li>坐标: 南京</li>
                            <li>职业：Web前端开发</li>
                            <li>爱好： 上班: 摸鱼、小作品；下班：LOL、三国杀</li>
                        </ul>
                    </div>
                </div>

                <div class="introduce-item">
                    <div class="item-title"  data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">建博初衷</div>
                    <div class="item-text"  data-aos="fade-right" data-aos-duration="500" data-aos-delay="900">
                        一个人无聊的日子里打发时间。2020年搭建的博客源码丢失，又重新搭建了此博客，欢迎各位前端大佬指导沟通。此博客使用vue脚手架搭建，页面样式参考了花瓣网里的设计，博客代码纯手打，博客素材(图片、视频)来自于网络。
                        在此声明，建博纯属练手，试着用vue简单的写了这个博客，假装自己不是弱鸡。既然建了就要对它负责,平时会写一些不严谨的博客、更新LOL排位日记、分享抄袭内容、发泄让你打我的情绪、上传三国杀贱贱的搅屎棍视频。 
                        希望在我的博客，你能学到点东西，多一些笑容，不要忘记给内容点赞哦，感谢支持!欢迎各位点赞、留言，不喜勿喷。
                    </div>
                </div>
            </div>        

            
            <div class="actions">
                <el-button class="btn"  type="primary" round icon="el-icon-magic-stick" @click="jumpArchive"
                    data-aos="fade-right" data-aos-duration="800" data-aos-delay="1400">我的生涯</el-button>
                <el-button class="btn"  type="primary" round icon="el-icon-edit" @click="showMeaasgeBoard"
                    data-aos="fade-left" data-aos-duration="800" data-aos-delay="1400">留言板</el-button>
            </div>
        </div>

        <v-message-board ref="boardRef" v-if="drawer" :drawer="drawer" />
    </div>
</template>

<script>
    import AOS  from'aos';
    export default {
        name: 'index',
        data () {
            return {
                drawer: false
            }
        },
        computed: {
            author () {
                return this.$store.state.author
            }
        },
        mounted() {
            
        },
        methods:{
            setAuthor(){
                this.$store.commit("newAuthor",'new');
            },
            jumpArchive() {
                this.$router.push({name: 'archive'});
            },
            showMeaasgeBoard() {
                this.drawer = true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "index.less";
</style>
