<template>
    <div class="qiandao-warp">
	        <div class="qiandap-box">
	            <div class="qiandao-con clear">
	               <div class="qiandao-left">
	                    <div class="qiandao-left-top clear">
	                        <div class="current-date">2023年7月18日</div>
	                        <div class="qiandao-history qiandao-tran qiandao-radius" id="js-qiandao-history">我的签到</div>
	                    </div>
	                    <div class="qiandao-main" id="js-qiandao-main">
	                        <ul class="qiandao-list" id="js-qiandao-list"> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li class="date1"><div class="qiandao-icon"></div></li> <li class="date2 qiandao"><div class="qiandao-icon"></div></li> <li class="date3 qiandao"><div class="qiandao-icon"></div></li> <li class="date4"><div class="qiandao-icon"></div></li> <li class="date5 qiandao"><div class="qiandao-icon"></div></li> <li class="date6"><div class="qiandao-icon"></div></li> <li class="date7 qiandao"><div class="qiandao-icon"></div></li> <li class="date8"><div class="qiandao-icon"></div></li> <li class="date9"><div class="qiandao-icon"></div></li> <li class="date10"><div class="qiandao-icon"></div></li> <li class="date11"><div class="qiandao-icon"></div></li> <li class="date12"><div class="qiandao-icon"></div></li> <li class="date13"><div class="qiandao-icon"></div></li> <li class="date14"><div class="qiandao-icon"></div></li> <li class="date15"><div class="qiandao-icon"></div></li> <li class="date16"><div class="qiandao-icon"></div></li> <li class="date17"><div class="qiandao-icon"></div></li> <li class="date18 able-qiandao"><div class="qiandao-icon"></div></li> <li class="date19"><div class="qiandao-icon"></div></li> <li class="date20"><div class="qiandao-icon"></div></li> <li class="date21"><div class="qiandao-icon"></div></li> <li class="date22"><div class="qiandao-icon"></div></li> <li class="date23"><div class="qiandao-icon"></div></li> <li class="date24"><div class="qiandao-icon"></div></li> <li class="date25"><div class="qiandao-icon"></div></li> <li class="date26"><div class="qiandao-icon"></div></li> <li class="date27"><div class="qiandao-icon"></div></li> <li class="date28"><div class="qiandao-icon"></div></li> <li class="date29"><div class="qiandao-icon"></div></li> <li class="date30"><div class="qiandao-icon"></div></li> <li class="date31"><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li> <li><div class="qiandao-icon"></div></li></ul>
	                    </div>
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

        },
        methods: {},
       
    }
</script>

<style scoped lang="less">

/* 以上可合并 */
.clear{clear:both}
.clear:after{clear:both;display:table;content:''}
.qiandao-sprits{background-image:url(~@/assets/diary/qiandao_sprits.png);background-repeat:no-repeat}
.qiandao-tran{-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out;-ms-transition:all .3s ease-out}
.qiandao-radius{-webkit-border-radius:5px;-moz-border-radius:5px;-o-border-radius:5px;-ms-border-radius:5px}
.qiandap-box{margin:50px auto;width:70pc;}
.qiandao-con{margin:0 auto;width:1035px;height:684px;background-image:url(~@/assets/diary/qiandao_con.png)}
.qiandao-left{float:left;padding:20px 42px 0 39px;width:603px}
.qiandao-right{float:right;padding:0 20px;width:290px}
.current-date{float:left;padding-top:5px;padding-left:55px;color:#b25d06;font-size:18px}
.qiandao-history{float:right;width:92px;height:36px;border-radius:4px;background-color:#b25d06;color:#fff;text-align:center;font-size:1pc;line-height:36px;cursor:pointer}
.qiandao-history:hover{background-color:#9c4f01}
.qiandao-top{padding-top:70px;height:13pc}
.just-qiandao{margin:0 auto 20px;width:212px;height:67px;cursor:pointer}
.just-qiandao.actived,.just-qiandao:active{background-position:0 -68px}
.qiandao-notic{color:#b25d06;text-align:center;font-size:18px}
.qiandao-rule-list{margin-bottom:35px;color:#8d8ebb;font-size:1pc;line-height:26px}
.qiandao-rule-list h4{font-weight:bolder;font-size:1pc}
.qiandao-main{overflow:hidden;width:603px}
.qiandao-list{margin-top:76px;margin-right:-10px}
.qiandao-list li{position:relative;float:left;list-style:none;margin:0 1px 1px 0;width:85px;height:85px;background-image:url(~@/assets/diary/qiandao_day.png);background-position:0 0}
.qiandao-list li.date1{background-position:-430px 0}
.qiandao-list li.date2{background-position:-516px 0}
.qiandao-list li.date3{background-position:0 -86px}
.qiandao-list li.date4{background-position:-86px -86px}
.qiandao-list li.date5{background-position:-172px -86px}
.qiandao-list li.date6{background-position:-258px -86px}
.qiandao-list li.date7{background-position:-344px -86px}
.qiandao-list li.date8{background-position:-430px -86px}
.qiandao-list li.date9{background-position:-516px -86px}
.qiandao-list li.date10{background-position:0 -172px}
.qiandao-list li.date11{background-position:-86px -172px}
.qiandao-list li.date12{background-position:-172px -172px}
.qiandao-list li.date13{background-position:-258px -172px}
.qiandao-list li.date14{background-position:-344px -172px}
.qiandao-list li.date15{background-position:-430px -172px}
.qiandao-list li.date16{background-position:-516px -172px}
.qiandao-list li.date17{background-position:0 -258px}
.qiandao-list li.date18{background-position:-86px -258px}
.qiandao-list li.date19{background-position:-172px -258px}
.qiandao-list li.date20{background-position:-258px -258px}
.qiandao-list li.date21{background-position:-344px -258px}
.qiandao-list li.date22{background-position:-430px -258px}
.qiandao-list li.date23{background-position:-516px -258px}
.qiandao-list li.date24{background-position:0 -344px}
.qiandao-list li.date25{background-position:-86px -344px}
.qiandao-list li.date26{background-position:-172px -344px}
.qiandao-list li.date27{background-position:-258px -344px}
.qiandao-list li.date28{background-position:-344px -344px}
.qiandao-list li.date29{background-position:-430px -344px}
.qiandao-list li.date30{background-position:-516px -344px}
.qiandao-list li.date31{background-position:0 -430px}
.qiandao-list li .qiandao-icon{position:absolute;top:0;left:0;z-index:2;display:none;width:85px;height:85px;background:url(~@/assets/diary/qiandao_icon.png) no-repeat center center}
.qiandao-list li.qiandao .qiandao-icon{display:block}
.qiandao-layer{position:fixed;top:0;bottom:0;left:0;z-index:888;display:none;width:100%}
.qiandao-layer-bg{width:100%;height:100%;background-color:#000;opacity:.55;filter:alpha(opacity=55)}
.qiandao-layer-con{position:absolute;top:50%;left:50%;z-index:999;padding-top:30px;border:3px #33b23f solid;border-radius:5px;background-color:#fff}
.qiandao-history-layer .qiandao-layer-con{margin:-257px 0 0 -293px;width:586px;height:484px}
.close-qiandao-layer{position:absolute;top:13px;right:13px;width:1pc;height:1pc;background-position:-228px -51px}
.qiandao-history-inf{margin-top:25px;color:#666;text-align:center;font-size:14px}
.qiandao-history-inf li{float:left;width:25%}
.qiandao-history-inf li h4{color:#33b23f;font-size:40px;line-height:50px}
.qiandao-history-table{overflow:hidden;margin:20px;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0;-o-border-radius:5px 5px 0 0;-ms-border-radius:5px 5px 0 0}
.qiandao-history-table table{width:100%;color:#666;text-align:center;font-size:1pc;border-spacing:0}
.qiandao-history-table table th{width:33.3%;background-color:#f2f2f2;text-align:center;line-height:40px}
.qiandao-history-table td{width:33.3%;border-bottom:1px #e5e5e5 dashed;line-height:34px}
.qiandao-active .qiandao-layer-con{margin:-232px 0 0 -211px;width:422px;height:434px}
.yiqiandao{margin:36px 0 0 40px;color:#666;font-size:14px;line-height:38px}
.yiqiandao .yiqiandao-icon{float:left;margin:0 25px;width:178px;height:38px;background-position:-217px 0}
.qiandao-jiangli{position:relative;margin:45px auto;width:335px;height:170px;background-position:0 -146px}
.qiandao-jiangli span{position:absolute;top:58px;left:50px;display:block;width:178px;height:106px;color:#ff7300;text-align:center;font-weight:bolder;font-size:30px;line-height:106px}
.qiandao-jiangli span em{padding-left:5px;font-style:normal;font-size:1pc}
.qiandao-share{display:block;margin:60px auto 0;width:318px;height:3pc;border-radius:5px;background-color:#4ab854;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:3pc}
.qiandao-share:hover{background-color:#3e9d46}
</style>
