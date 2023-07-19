<template>
    <div class="month-list-container">
        <div class="swiper month-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for='(item, index) in 10' :key='index'>
                    <v-month-calendar />
                </div>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        components: {},
        data(){
            return {}
        },
        created() {

        },
        mounted() {
            setTimeout( () => {
                new Swiper(".month-swiper", {
                    direction: "vertical",
                    effect: "cards",
                    grabCursor: true,
                });
            })
            // this.$nextTick( () => {
            //      var swiper = new Swiper(".mySwiper", {
            //         direction: "vertical",
            //         effect: "cards",
            //         grabCursor: true,
            //     });
            // })
        },
        methods: {},
       
    }
</script>

<style scoped lang="less">
.month-list-container{
    width: 400px;
    flex-shrink: 0;
    // background-color: #fff;
    // padding: 24px;
    padding-top: 24px;

    .swiper {
        width: 352px;
        height: 380px;
    }

    .swiper-slide {
        background-color: #fff;
        padding: 24px;
        border-radius: 18px;
    }
}
</style>
