<template>
    <el-drawer  title="留言板"  :visible.sync="drawerFlag"  @close="changeParentVisible" :wrapperClosable="true">
        <div class="drawer-content">
            <v-leave-message />
            <div class="message-title">历史留言(100条)</div>

            <div class="message-list-box" id="message_list_box">
                <v-message-list v-for="(item, index) in 10" :key="index" />
            </div>
            
        </div>
    </el-drawer>
</template>

<script type="text/ecmascript-6">
    import {listenDomScrollAndSetAos} from '@/util/aosUtil';
    export default {
        name: '',
        props: ["drawer"],
        data(){
            return {
                drawerFlag: this.drawer 
            }
        },
        watch: {
            drawer: {
                handler(newValue, oldValue) {
                    this.drawerFlag = newValue;
                    this.$nextTick( () => {
                        listenDomScrollAndSetAos('message_list_box', 'message-list');
                    })
                },
                deep: true,
                immediate: true
            }
        },
        created() {

        },
        mounted() {
            
        },
        methods: {
            changeParentVisible() {
                this.$parent.drawer = false;
            },
        },
        components: {}
    }
</script>

<style scoped lang="less">
.drawer-content{
     padding: 0 20px;
     height: 100%;
     overflow: hidden;
     display: flex;
     flex-direction: column;
    .message-title{
        margin: 32px 0 24px 0;
    }
    .message-list-box{
        flex-grow: 1;
        overflow-y: auto;
    }
}

</style>
