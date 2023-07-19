<template>
    <div class="dynamic-container">
        <month-list />
        <dynamic-detail />
    </div>
</template>

<script type="text/ecmascript-6">
    
    import monthList from './components/month.vue';
    import dynamicDetail from './components/dynamic-detail.vue';
    export default {
        name: '',
        components: {
            monthList,
            dynamicDetail
        },
        data(){
            return {}
        },
        created() {

        },
        mounted() {
           
        },
        methods: {
           
        },
       
    }
</script>

<style scoped lang="less">
    @import 'dynamic';
</style>
