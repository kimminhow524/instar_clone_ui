<template>
        <div class="filter-item"  @click="$store.commit('setFilter',instarFilter)"
        :class="instarFilter" :style="{backgroundImage: `url(${$store.state.imgUrl})`}">
            {{instarFilter}}
        </div>
</template>

<script>
export default {
    name:"_filterBox",
    methods:{
    },
    computed:{
    },
    props:{
        instarFilter:String
    }
}
</script>

<style>

</style>