<template>
    <div class="archive-container">
        <month-list />
        <archive-detail />
    </div>
</template>

<script type="text/ecmascript-6">
    import monthList from './components/month-list.vue';
    import archiveDetail from './components/archive-detail.vue';
    export default {
        name: '',
        components: {
            monthList,
            archiveDetail
        },
        data(){
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {}
       
    }
</script>

<style lang="less">
    @import 'archive';
</style>
