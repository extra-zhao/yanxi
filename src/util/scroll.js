function scrollToElement(containerEl,el){
    if(!containerEl){
        containerEl=container;
    }
    if(!el){
        let input=document.getElementsByTagName('input')[0];
        let id='item'+input.value;
        if(!input.value){
            id='item'+index;
        }
        el=document.getElementById(id);
    }
   //dy即为偏移量
    let dy=el.getBoundingClientRect().top;
    let scrollAnimationFn = doAnimation(dy,300,containerEl);
    let interval=setInterval(()=>{
        scrollAnimationFn(interval)
    },10)
 }
 /**
  * @description: 
  * @param {type} 
  * @return: 
  */
 function doAnimation(dy,duration,el){
      //使用闭包保存变量exe_dy和step等变量(每次动画滚动的距离)
      let exe_dy=0;//已经执行的偏移量
      let step=dy/(duration/10);
      return function(interval){
          exe_dy+=step;
          if(Math.abs(exe_dy)>=Math.abs(dy)){
              clearInterval(interval);
          }
          el.scrollBy(0,step);
      }
 }

export {
    scrollToElement
}