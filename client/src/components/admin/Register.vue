<template>
    <div class="Register">  
        <div class="pic"></div>
        <div class="input-group">
            <span class="input-group-addon" id="sizing-addon2">用户名</span>
            <input type="text" class="form-control" v-model="user.username" placeholder="Username" aria-describedby="sizing-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="sizing-addon1">密码</span>
            <input type="password" class="form-control" v-model="user.password1" placeholder="password" aria-describedby="sizing-addon1">
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="sizing-addon1">确认密码</span>
            <input type="password" class="form-control" v-model="user.password2" placeholder="password" aria-describedby="sizing-addon1">
        </div>
        <div class="input-group email">
            <span class="input-group-addon"  id="sizing-addon1">邮箱</span>
            <input type="text" class="form-control" v-model="user.email"  placeholder="email" aria-describedby="sizing-addon1">
            <span class="input-group-addon  btn-email" @click="get_checkCode" id="sizing-addon1">获取验证码</span>
        </div>
        <div class="input-group">
            <span class="input-group-addon" id="sizing-addon1">验证码</span>
            <input type="text" class="form-control" v-model="user.code" placeholder="code" aria-describedby="sizing-addon1">
        </div>
        <button class="btn btn-primary btn-submit" @click="submit">提交</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                check_code:'',
                user:{
                    username:'',
                    password1:'',
                    password2:'',
                    email:'',
                    code:''
                }
            }
        },
        methods:{
            // 验证码未加密,没做超时处理
          async get_checkCode(){
              console.log(this.user.email);
              let regeamil = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if(!regeamil.test(this.user.email)){
                    alert('邮箱格式不正确！');
                    return;
                }
                let send_email ={
                    email: this.user.email
                }
                let res = await this.$http.api_checkcode(send_email);
                let {code,data={}} = res.data;
                if(code==200){
                    this.check_code = data.code_num;
                }
            },
          async  submit(){
                console.log(this.user.code);
                console.log('----');
                console.log(this.check_code);
                var regusername = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;  //用户名验证
                var regpassword = /^[a-zA-Z]\w{5,17}$/;
                var regeamil = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                console.log(this.user);
                if(!regusername.test(this.user.username)){
                    alert('用户名格式不符合要求！');
                    return;
                }
                if(!regpassword.test(this.user.password1)){
                    alert('密码格式不符合要求！');
                    return;
                }
                if(this.user.password1!=this.user.password2){
                    alert('两次密码不一致!');
                    return;
                }
                if(!regeamil.test(this.user.email)){
                    alert('邮箱格式不正确！')
                    return;
                }
                if(this.user.code!=this.check_code){
                    alert('验证码不正确！');
                    return;
                }
                let res = await this.$http.api_register(this.user);
                console.log(res);
                alert(res.data.msg);
                if(res.data.code == 200){
                    this.user = {};
                    this.$router.push('/Login');
                }
            }
        }
    }
</script>

<style scoped>
    .Register{
        width: 500px;
        height: 600px;
        background-color: #fff;
        margin: 50px auto;
        padding: 50px;
        box-shadow: 4px 4px 15px rgba(0,0,0,.2);
    }
    .pic{
        width: 100px;
        height: 100px;
        background-color: #888;
        margin: 0 auto;
        border-radius: 50%;
    }
    .input-group{
        margin : 40px 0;
        width: 100%;
    }
    .btn-email{
        padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    }
    .btn-email:hover{
        color: #fff;
        background-color: blue;
    }
    .email{
        width: 100%;
    }
    .input-group-addon{
        width: 80px;
        background-color: #ccc;
    }
    .form-control{
        width: 200px;
    }
    .btn-submit{
        position: absolute;
        left : 50%;
        margin: -15px 0 0 -30px;
    }
</style>