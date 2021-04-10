<template>
    <div class="manage_page">
        <div class="row top">
            <div class="col-md-1 logo">
                <h3>Zliang</h3>
            </div>
            <div class="col-md-11 other"></div>
        </div>
        <div class="row main">

            <div class="col-md-1 tab">
                <ul class="nav nav-tabs nav-stacked">
                    <li @click="bgcActive($event)"><router-link to="/Article_manager" ><span class="glyphicon glyphicon-home"></span>文章管理</router-link></li>
                    <li ref="tabs"><router-link to="/newArticle"><span class="glyphicon glyphicon-pencil"></span>新建文章</router-link></li>
                    <li ref="tabs"><router-link to="/userManage"><span class="glyphicon glyphicon-user"></span>用户管理</router-link></li>
                    <li><a href="#"><span class="glyphicon glyphicon-off"></span>退出登录</a></li>
                </ul>
            </div>
            <div class="col-md-11 showArea">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>
  export default{
      data() {
          return {
              
          }
      },
      methods: {
          bgcActive(e){
              console.log(this.$refs.tabs);
              console.log(e.target);
          }
      },
  }
</script>


<style scoped>
    .isactive{
        background-color: #eee;
    }
    .top{
        height: 70px;
        background-color: #337ab7;
    }
    .logo{
        height: 70px;
    }
    .logo h3{
        margin: 0;
        padding: 0 auto;
        line-height: 70px;
        font-size: 25px;
        text-align: center;
        color: #fff;
        font-family: 'Times New Roman', Times, serif;
    }
    .other{
        height: 70px;
        border-left: 2px solid #fff;
    }
     .tab{
        background-color: #fff;
        padding: 0;
    } 
    .nav-tabs>li>a{
        text-align: center;
        border-radius: 0 ;
        border: 0;
        margin: 0;
    }
    .nav-tabs>li>a>span{
        margin: 0 10px;
    }
     .tab ul{
        display: block;
        width: 100%;
    }
    .showArea{
       background-color: #fff;
       border-left: 1px solid #ccc;
    }
</style>