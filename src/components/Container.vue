<template>
  <div v-if="workStep==0">
    <Post v-for="(a,i) in sampleData" :key="i" :data="sampleData[i]"/>
  </div>
  <div v-if="workStep==1">
    <div :class="useFilter" class="upload-image" :style="{backgroundImage: `url(${$store.state.imgUrl})`}">
    </div>
    <div class="filters">
      <FilterBox v-for="(a,i) in instarFilter" :key="i" :instarFilter="instarFilter[i]" />
    </div>
  </div>
  <div v-if="workStep==2">
    <div :class="useFilter" class="upload-image" :style="{backgroundImage: `url(${$store.state.imgUrl})`}">
    </div>
    <div class="write">
    <textarea @input="setWriteText()" class="write-box">write!</textarea>
  </div>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Post from "./posting/Post.vue";
import FilterBox from "./posting/FilterBox.vue";
export default {
    name:"_container",
    data(){
      return{
        data:this.$store.state.sampleData,
      }
    },
    components:{
    Post,
    FilterBox,
    },
    computed:{
       ...mapState(['sampleData','workStep','instarFilter','imgUrl','useFilter' ]),
       ...mapMutations(['setWriteText'])
    },
}
</script>

<style>

</style>