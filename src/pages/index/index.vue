<template>
    <div class="hello">
        <!-- <v-header />
        <h1>{{ msg }}</h1>
        <el-button type="primary" icon="el-icon-edit" @click="setAuthor">
            {{author}}
        </el-button>
        <div class="test">
            1111
            <button class="test-flexible">测试</button>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            author () {
                return this.$store.state.author
            }
        },
        methods:{
            setAuthor(){
                this.$store.commit("newAuthor",'new');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "index.less";
</style>
