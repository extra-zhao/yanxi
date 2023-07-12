<template>
    <div id="app" @click="palyAudio">

        <!-- <audio controls autoplay loop ref='audio' id="audio">
            <source  type="audio/ogg">
            <source src="./assets/music/huahai.mp3" type="audio/mpeg">
        </audio> -->


        <div id="wrapper_content">
            <v-header />
            <div id="wrapper_body">
                <v-menu />
                <div class="view-container">
                    <router-view />
                </div>
            </div>
            
        </div>
        

       
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {

    },
    methods: {
        palyAudio() {
            //  this.$refs.audio.play();
        }
    }
};
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    font-family: Consolas, Microsoft JhengHei, Apple LiGothic Medium, Microsoft YaHei, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #212220;
    width: 100vw;
    height: 100vh;
    background-color: #e6e9ee;
    padding: 48px;
    #audio{
        display: none;
    }
    #wrapper_content{
        background-color: #fff;
        border-radius: 24px;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        #wrapper_body{
            flex-grow: 1;
            background-color: #eef1f6;
            overflow: hidden;
            display: flex;
            .view-container{
                flex-grow: 1;
                height: 100%;
            }
        }
    }
}
</style>
