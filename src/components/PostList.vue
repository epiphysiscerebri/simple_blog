<template>
    <div>
        <h3>Список постов</h3>
        <PostItem 
        :post="post" 
        v-for="post in posts"/>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { PostItem }
}

</script>

<style scoped>
.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid purple;
}
</style>