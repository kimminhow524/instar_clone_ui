<template>
  <div class="post" >
    <div class="post-header">
      <div class="profile" :style="{backgroundImage: `url(${data.userImage})`}"></div>
      <span class="profile-name">{{data.name}}</span>
    </div>
    <div class="post-body" :class="data.filter" :style="{backgroundImage: `url(${data.postImage})`}"></div>
    <div class="post-content">
      <p>{{data.likes}} Likes</p>
      <p><strong>{{data.userId}}</strong> {{data.content}}</p>
      <p class="date">{{data.date}}</p>
    </div>
</div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"_post",
    computed:{
        ...mapState(['sampleData'])
    },
    props:{
      data:Object
    },
    created(){
    }
}
</script>

<style>

</style>