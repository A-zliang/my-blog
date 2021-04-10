<template>
    <div>
       <div class="login">
            <div class="form-group">
                <label for="">用户名</label>
                <input type="text" class="form-control" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="">密码</label>
                <input type="password" class="form-control" v-model="user.password">
            </div>
            <button class="btn" @click="submit">登录</button>
            <router-link to="/Register" class="toreg">去注册</router-link>
       </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user:{
                    username:'',
                    password:''
                }
            }
        },
        methods: {
          async submit(){
                let res = await this.$http.api_login(this.user);
                console.log(res);
                let {code,msg,data={}} = res.data;
                console.log('---------------');
                console.log(data);
                if(code == 200){
                    alert(msg);
                    // 保存信息到state
                    this.$store.commit('save', {
                        id: data.id,
                        username: data.username,
                        token: data.token, 
                        email:data.email,
                        avatar: data.avatar
                    });
                     this.$router.push('/managePage');
                     console.log(this.$store.state.user);
                }
            }
        }
    }
</script>

<style scoped> 
    .login{
        width: 400px;
        height: 300px;
        background-color: #fff;
        padding: 30px;
        position: absolute;
        border-radius: 5px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -150px;
        border: 1px solid #ccc;
        box-shadow: 4px 4px 15px rgba(0,0,0,.2);
    }
    .login .form-group{
        margin-bottom: 50px;
    }
    .login .input{
        display: block;
    }
    .login .btn{
        position: absolute;
        left: 42%;
        margin: 0 auto;
    }
   .login .toreg{
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
</style>