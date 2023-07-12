<template>
    <div class="article-detail">
        <div v-if='showDetail'>
            <div class="title" data-aos="fade-left" data-aos-duration="500">
                <div>赤壁赋{{articleDetail.articelId}}</div>
                <div class="icon-info">
                    <i v-if="favor" class="el-icon-star-on icon favored" @click="favor = false"><span class="num">100</span></i>
                    <i v-if="!favor"  class="el-icon-star-off icon favor" @click="favor = true"><span class="num">100</span></i>
                    <i class="el-icon-view icon"><span class="num">200</span></i>
                </div>
            </div>
            <div class="date-and-keywords" data-aos="fade-left" data-aos-duration="500"  data-aos-delay="200">
                <div class="date">2023-01-01 08:00</div> 
                <el-tag effect="plain" size="mini">苏轼</el-tag>
                <el-tag effect="plain" size="mini">诗词</el-tag>
            </div>

            <div class="introduce" data-aos="fade-left" data-aos-duration="500"  data-aos-delay="400">
                <div class="devided">
                    <div>壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。 </div>      
                    <img src="https://img0.baidu.com/it/u=275637376,2942356947&fm=253&fmt=auto&app=138&f=JPEG?w=1080&h=471" alt="">  
                </div>
                
                <div class="devided">
                    于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。
                </div>  

                <div class="devided">
                    苏子愀然，正襟危坐而问客曰：“何为其然也？”客曰：“月明星稀，乌鹊南飞，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。”
                </div>  

                <div class="devided">
                    苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎!且夫天地之间，物各有主,苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”
                </div> 

                <div class="devided">
                    <pre v-highlightjs><code class="javascript">{{ sourcecode }}</code></pre>
                </div>

                <div class="devided">
                    客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。
                </div> 

                <div class="devided">
                    苏轼（1037年1月8日－1101年8月24日），字子瞻，号“东坡居士”，世称“苏东坡”。汉族，眉州人。北宋诗人、词人，宋代文学家，是豪放派词人的主要代表之一，“唐宋八大家”之一。在政治上属于旧党，但也有改革弊政的要求。其文汪洋恣肆，明白畅达，其诗题材广泛，内容丰富，现存诗3900余首。代表作品有《水调歌头·中秋》、《赤壁赋》、《江城子·乙卯正月二十日夜记梦》、《记承天寺夜游》等
                </div>

            </div>

        </div>

        <!-- 上一篇   下一篇  评论 -->
        <artilce-detail :articelId="articleDetail.articelId" v-if='showDetail' />
    </div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery';
    import artilceDetail from './detail-footer.vue';
    export default {
        name: '',
        components: {
            artilceDetail
        },
        data(){
            return {
                showDetail: false,
                sourcecode:
`import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
const high: any = {
    deep: true,
    bind: function (el: any, binding: any) {
        const targets = el.querySelectorAll('code')
        targets.forEach((target: any) => {
        if (binding.value) {
            target.textContent = binding.value;
        }
        (hljs as any).highlightBlock(target);
        })
    },
    componentUpdated: function (el: any, binding: any) {
        const targets = el.querySelectorAll('code')
        targets.forEach((target: any) => {
        if (binding.value) {
            target.textContent = binding.value;
            (hljs as any).highlightBlock(target);
        }
        })
    }
}
Vue.directive('highlightjs', high)`,
                favor: false
            }
        },
        watch: {
            articleDetail(newValue, oldValue) {
                 $('#articel_list').animate({
                    scrollTop: Number(196 * Number(newValue.articelId - 1))
                 });
                 this.showDetail = false;
                 setTimeout( () => {
                    this.showDetail = true;
                 }, 300);
            }
        },
        computed: {
            articleDetail() {
                return this.$store.state.articleDetail;
            }
        },
        created() {
            
        },
        mounted() {
            this.showDetail = false;
            setTimeout( () => {
                this.showDetail = true;
            }, 300);
            setTimeout( () => {
                $('#articel_list').animate({
                    scrollTop: Number(196 * Number(this.articleDetail.articelId - 1))
                });
            }, 600)
        },
        methods: {},
       
    }
</script>

<style scoped lang="less">
    @import 'detail';
</style>
