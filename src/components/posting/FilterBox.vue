<template>
    <div>
        <div @click="$store.commit('setFilter',instarFilter)" class="filter-item" 
        :class="instarFilter" :style="{backgroundImage: `url(${$store.state.imageUrl})`}">
            {{instarFilter}}
        </div>
    </div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"_filterBox",
    methods:{
    },
    computed:{
        ...mapState(['instarFilter'])
    },
    props:{
        instarFilter:Array
    }
}
</script>

<style>

</style>