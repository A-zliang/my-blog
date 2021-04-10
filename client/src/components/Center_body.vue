<template>
    <div class="article">
        <div class="row">
            <!-- 左边文章列表 -->
            <div class="col-md-9 left">
                <span href="#" class="list-group-item active">
                    <h4 class="list-group-item-heading">
                        My Life, Like Sun!
                    </h4>
                </span>
                <ArticleList></ArticleList>
        </div>
        <!-- 右边简介 -->
        <div class="col-md-3 right visible-md visible-lg">

            <span href="#" class="list-group-item active">
                <h4 class="list-group-item-heading">
                    About me!
                </h4>
            </span>
            <div class="msg">
                <ul>
                    <li><span>  <i class="glyphicon glyphicon-bullhorn"></i>  学习使我感到快乐</span></li>
                    <li><span>  <i class="glyphicon glyphicon-hourglass"></i>  截至今日运行666天</span></li>
                    <li><span>  <i class="glyphicon glyphicon-envelope"></i>  zl799@foxmail.com</span></li>
                    <li><span>  <i class="glyphicon glyphicon-user"></i>  到访人数：666</span></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-9">
            <div class="page">
                <ul class="pagination">
                    <li class=""><a href="#" aria-label="Previous"><span aria-hidden="true">&lt;</span></a></li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li class=""><a href="#">2 <span class="sr-only">(current)</span></a></li>
                    <li class=""><a href="#">3 <span class="sr-only">(current)</span></a></li>
                    <li class=""><a href="#" aria-label="Next"><span aria-hidden="true">&gt;</span></a></li>
                  </ul>  
             </div>
        </div>
        <!-- <div class="col-md-3"></div> -->
    </div>
</div>
</template>

<script>
import ArticleList from './Article_list'
    export default{
        name:"Center_body",
        components:{ArticleList}
    }
</script>

<style scoped>
/* @media screen and (max-width: 962px){
    .article h3{
        font-size: 12px;
        text-align: left;
    }
    .article ul li{
        font-size: 12px;
        margin-right: 32px !important;
    }
    .msg li span{
        font-size: 10px;
    }
} */
@media screen and (max-width: 1125px){
    .article .right .msg i{
        padding: 0 3px;
    }
    .msg li span{
        font-size: 8px;
   }
}
.article{
    padding: 50px 70px;
}
.article .left{
   padding: 0 15px;
}
.left h4{
    margin: 0;
    text-align: left;
}

.left strong{
    font-size: 22px;
}
.left p{
    margin: 10px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.left .pic img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 15px;
}
.right h4{
    text-align: center;
    margin: 0;
}
.right .msg{
    width: 100%;
    height: 260px;
    border-radius: 5px;
}
.right .msg ul{
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
}
.right .msg ul li{
    box-shadow: 10px 10px 10px #888888;
    list-style: none;
    padding: 10px 0;
    margin-bottom: 15px;
    background-color: rgb(247, 243, 243);
}
.right .msg ul li:hover{
    border-radius: 5px;
    background-color: #337ab7;
    color: #fff;
    box-shadow: none;
}
.right .msg ul li  i{
    padding: 0 10px;
}
.right .msg ul li span{
    width: 100%;
    display: block;
    text-align: left;
    padding: 10px;
    margin: 0;
}
.right .msg ul li span::before{
    vertical-align: middle;
}
.page{
   background-color: red; 
   position: relative;
}
.pagination{
    position: absolute;
}
</style>