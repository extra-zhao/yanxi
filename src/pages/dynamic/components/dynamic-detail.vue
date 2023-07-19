<template>
    <div class="detail-container" id='dynamic_detail_container'>
        <div class="swiper mySwiper" :style='styleObj'>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item, index) in 10' :key='index'>
                    <v-dynamic-detail />    
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import $ from 'jquery';
    export default {
        name: '',
        components: {},
        data(){
            return {
                styleObj: {
                    width: 0,
                    height: '100%'
                }
            }
        },
        created() {

        },
        mounted() {
            const swiperWidth = $('#dynamic_detail_container').width();
            const swiperHieght = $('#dynamic_detail_container').height();
                this.styleObj = {
                width: swiperWidth + 'px',
                height: swiperHieght + 'px'
            }
            this.$nextTick( () =>  {
              
                var swiper = new Swiper(".mySwiper", {
                    grabCursor: true,
                    effect: "creative",
                    creativeEffect: {
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        }
                    }
                })
               
            }) 
            
        },
        methods: {

        },
       
    }
</script>

<style scoped lang="less">
.detail-container{
    flex-grow: 1;
    height: 100%;
    // background-color: #fff;
    margin-left: 24px;
    overflow-y: auto;
    .swiper {
        // width: 1000px;
        // height: 100%;
    }

    .swiper-slide {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        border-radius: 18px;
        background-color: #fff;
        box-shadow: 2px 2px 8px #eaeaea;
        padding: 64px;
        overflow-y: auto;
        
    }
}

</style>
