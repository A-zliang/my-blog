<template>
    <div class="mavonEditor">
        <input type="title" v-model="article.title" class="form-control title"  placeholder="标题">
        <mavon-editor 
            style="height:500px"         
         v-model="article.content"/>
         <button class="btn btn-primary" @click="published_article">发布</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            article:{
                title: '',
                content:''
            }
            
        }
    },
    methods: {
      async published_article(){
          let res = await this.$http.api_published_article(this.article);
          console.log(res);
          if(res.data.code == 200){
              alert(res.data.msg);
          }else{
              alert(res.data.msg);
          }
      }
       


    },
}
</script>
<style scoped>
   .title{
       margin: 10px 0;
   }
   .btn{
       width: 150px;
       margin: 10px auto;
   }

</style>