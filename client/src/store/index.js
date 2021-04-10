import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user:{
        id: window.sessionStorage.getItem('id') || '',
        username: window.sessionStorage.getItem('username') || '',
        email: window.sessionStorage.getItem('email') || '',
        token: window.sessionStorage.getItem('token') || '',
        avatar: window.sessionStorage.getItem('avatar') || '',
    }
}

const mutations = {
    save: (state,data) => {
        state.user.id = data.id;
        state.user.username = data.username;
        state.user.email = data.email;
        state.user.token = data.token;
        state.user.avatar = data.avatar;

        window.sessionStorage.getItem('id',data.id);
        window.sessionStorage.getItem('username',data.username);
        window.sessionStorage.getItem('token',data.token);
        window.sessionStorage.getItem('avatar',data.avatar);
    },
    remove:(state) => {
        state.user.id = '';
        state.user.username = '';
        state.user.email = '';
        state.user.token = '';
        state.user.avatar = '';

        window.sessionStorage.removeItem('id');
        window.sessionStorage.removeItem('username');
        window.sessionStorage.removeItem('email');
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('avatar');
    }
}

export default new Vuex.Store({
    state,
    mutations
})

