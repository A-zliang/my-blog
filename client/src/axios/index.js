import axios from 'axios'
import store from '../store'

// 全局设置
axios.defaults.timeout = 10000; // 时间超时设置10s
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 创建一个axios的实列
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

// request拦截,发送请求前拦截下来
instance.interceptors.request.use(
    config =>{
        if(store.state.user.token){
    // 每次发送请求，检查 vuex 中是否有token,如果有放在headers中
            config.headers.Authorization = store.state.user.token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }   
)

export default {
    // 登录
    api_login(data){
      return instance.post('/api/login',data);
    },
    api_register(data){
        return instance.post('/api/register',data);
    },
    api_checkcode(data){
        return instance.post('/api/checkcode',data)
    },
    api_published_article(data){
        return instance.post('/api/publishedArticle',data)
    },
    api_getContent(){
        return instance.get('/api/getContent')
    }


}