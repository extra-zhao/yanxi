import Vue from 'vue';
import vheader from './header';
import vmenu from './menu';
import vMessageBoard from './message-board';
import vleavemessage from './leave-message';
import vMessageList from './message-list';

const publicComponents = {
    'v-header': vheader,
    'v-menu': vmenu,
    'v-message-board': vMessageBoard,
    'v-leave-message': vleavemessage,
    'v-message-list': vMessageList
}



Vue.use({
    install: Vue => {
        Object.keys(publicComponents).forEach(key => {
            Vue.component(`${key}`, publicComponents[key]);
        })
    }
})



