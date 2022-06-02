<template>
  <div v-if="workStep==0">
    <Post v-for="(a,i) in data" :key="i" :data="sampleData[i]"/>
  </div>
  <div v-if="workStep==1">
  <div :class="sFilter" class="upload-image" :style="{backgroundImage: `url(${this.$store.state.imageUrl})`}"></div>
    <div class="filters">
      <FilterBox v-for="(a,i) in instarFilter" :key="i" :instarFilter="instarFilter[i]">
      </FilterBox>
    </div>
  </div>
  <div v-if="workStep==2">
  </div>

</template>

<script>
import { mapState } from 'vuex';
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
       ...mapState(['sampleData','workStep','instarFilter'])
    }
}
</script>

<style>

</style>