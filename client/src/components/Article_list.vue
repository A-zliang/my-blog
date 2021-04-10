<template>
    <div class="row list-group-item text">
        <div class="col-md-9 title">
            <div class="list-group-item-heading">
                <strong>
                    Android框架设计理念
                    <router-link to='/Article'>1111</router-link>
                </strong>
            </div>
            <p class="list-group-item-text content">所有设计源于生活，框终点在于分层、层与层之间如何交流。</p>
        </div>
        <div class="col-md-3 pic hidden-sm hidden-xs">
            <img src="../assets/images/ic_android2.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
.text{
    padding: 10px 0;
    margin: 0;
    height: 140px;
	overflow: hidden;
}
 h4{
    margin: 0;
    text-align: left;
}
strong{
    font-size: 22px;
}
p{
    margin: 10px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.pic img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 15px;
}
</style>