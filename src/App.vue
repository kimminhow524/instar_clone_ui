<template>
   <div class="header">
    <ul v-if="workStep != 0" @click="ChangeWorkStep(0)" class="header-button-left">
      <li >Cancel</li>
    </ul>
    <div></div>
    <ul  class="header-button-right">
      <li v-if="workStep == 0">Login</li>
      <li v-if="workStep != 0&&workStep==2" @click="ChangeWorkStep(workStep+1)">NEXT</li>
      <li v-if="workStep==2" @click="publishWriteData">Write</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
<Container></Container>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept=".gif, .jpg, .png" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import {  mapMutations, mapState } from 'vuex'
  import Container from "./components/Container.vue"
export default {
  name: 'App',
 
  components: {
    Container,
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      this.onScroll()
    });
  },
  methods:{
    upload(e){
      const imageFile =e.target.files;
      const url=URL.createObjectURL(imageFile[0])
      this.setImageUrl(url);
      this.ChangeWorkStep(1);
    },
    publishWriteData(){
      const myData={
        name:"temp",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgUrl,
        likes: 0,
        date: "May 15",
        liked: false,
        content:this.writeText,
        filter: this.useFilter
      }
      this.setMore(myData)
      this.ChangeWorkStep(0)
    },
    onScroll(){
       if (this.workStep == 0) {
      if(((window.innerHeight+window.scrollY))>=document.body.offsetHeight-0.5){
        this.$store.dispatch('getData');
      }
    }},
    ...mapMutations(['setImageUrl','ChangeWorkStep','setMore'])
  },
  computed:{
     ...mapState({'workStep':'workStep'
        ,'imgUrl':'imgUrl'
        ,'useFilter':'useFilter'
        ,'writeText':'writeText'
        ,'sampleData':'sampleData'
        }),
  },

}
</script>

<style>
  @import url("../src/assets/css/style.css");
</style>
