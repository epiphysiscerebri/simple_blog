<template>
    <!-- Компонент списка постов -->
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <PostItem 
        v-for="post in posts"
        :post="post" 
        :key="post.id"
        @remove="$emit('remove', post)"
        />
    </div>
    <div v-else>
        <h2 style="color: red">Нет постов</h2>
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

</style>