import $ from 'jquery';
const listenDomScrollAndSetAos = function(domID, childClass='init-aos-class') {
    const elementDom = document.getElementById(domID);
    if(!elementDom) {
        return false;
    } else {
        elementDom.addEventListener('scroll', (e) => {
            const childDoms = $(`#${domID} .${childClass}`);
            for(let i = 0; i < childDoms.length; i ++){
                // console.log(childDoms[i].getBoundingClientRect());
                const hasAosClass =  childDoms[i].getAttribute('class').split(' ').includes('aos-animate');
                // console.log(hasAosClass);
                if(!hasAosClass) {
                    // 判断是否在可视区域
                    // console.log(childDoms[i].getBoundingClientRect());
                    if(elementInView(childDoms[i])) {
                        childDoms[i].classList.add('aos-animate')
                    }
                } 
            }
        })
    }
}

function elementInView(element) {
    const rect = element.getBoundingClientRect()
  
    const yInView = rect.top < window.innerHeight && rect.bottom > 0
  
    const xInView = rect.left < window.innerWidth && rect.right > 0
  
    return yInView && xInView
}


export {
    listenDomScrollAndSetAos
}