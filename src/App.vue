<template>
   <div class="header">
    <ul @click="cancle" class="header-button-left">
      <li>Cancel</li>
    </ul>
    <div></div>
    <ul  class="header-button-right">
      <li @click="next">NEXT</li>
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
import {  mapState } from 'vuex'
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
      this.$store.commit("setImageUrl", url);
      
      this.$store.commit("ChangeWorkStep", 1);
      
    },
    onScroll(){
       if (this.step == 0) {
      if(((window.innerHeight+window.scrollY))>=document.body.offsetHeight-0.5){
        this.$store.dispatch('getData');
      }
    }}
  },
  computed:{
     ...mapState({'step':'workStep'}),
  },

}
</script>

<style>
  @import url("../src/assets/css/style.css");
</style>
