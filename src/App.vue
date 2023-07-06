<template>
    <div id="app">
        <div id="wrapper_content">
            <v-header />
            <div id="wrapper_body">
                <v-menu />
                <router-view />
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: "App",
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
        }
    }
}
</style>
