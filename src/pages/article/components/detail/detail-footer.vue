<template>
    <div class="article-footer">
        <div class="previous-and-next">
            <div class="arrow-item" v-if="articelId > 1" @click="nextDetail(-1)">
                <i class="el-icon-back"></i>
                上一篇
            </div>
            <div class="arrow-item" v-if="articelId < 16" @click="nextDetail(1)">
                下一篇
                <i class="el-icon-right"></i>
            </div>
            
        </div>

        <div class="rate">
            <div class="rate-container">
                <el-input class="rate-input" @focus="btnActive = true" @blur="btnActive = false"
                 :class='{"active": showRate}' maxlength="255" size="medium" placeholder="留下您宝贵的意见" prefix-icon="el-icon-tickets" v-model="searchValue"></el-input>
            </div>
            
            <el-button type="primary" :class='{"active": btnActive}' icon="el-icon-edit" class="rate-btn" circle @click="showRateInput"></el-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        props: ['articelId'],
        components: {},
        data(){
            return {
                searchValue: '',
                showRate: false,
                btnActive: false
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            showRateInput() {
                if(!this.showRate) {
                    this.showRate = true;
                }
            },
            nextDetail(num) {
                setTimeout( () => {
                        this.$router.push({name: 'articleDetail', params: {id: Number(this.articelId + num)}})
                    }, 200);
            }
        },
       
    }
</script>

<style scoped lang="less">
.article-footer{
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    align-items: center;
    .previous-and-next{
        font-size: 16px;
        display: flex;
        color: #1d7bde;
        font-weight: bold;
        flex-shrink: 0;
        .arrow-item{
            cursor: pointer;
            margin-right: 24px;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    .rate{
        display: flex;
        align-content: center;
        flex-grow: 1;
        .rate-container{
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
            .rate-input{
                flex: 0;
                border-radius: 24px;
                margin-right: 6px;
                background-color: #f6fafd;
                overflow: hidden;
                /deep/ input.el-input__inner{
                    border-color: transparent;
                    border-radius: 24px;
                    background-color: #f6fafd;
                }
                &.active{
                    .moreWidth();
                }
            }
        }
       
        .rate-btn{
            opacity: 0.5;
            margin-left: 12px;
            &:hover{
                opacity: 1;
            }
            &.active{
                opacity: 1;
            }
        }
    }
}

@keyframes moreWidth {
    from {
        flex: 0;
    }
    to {
        flex: 1;
    }
}

.moreWidth(){
  animation: moreWidth .6s ease-in-out;
  animation-fill-mode: forwards;
}

</style>
