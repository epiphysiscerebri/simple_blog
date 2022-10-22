<template>
    <div class="app">
        <PostForm @create="createPost" />
        <PostList :posts="posts"/>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Всё о JS'},
                {id: 2, title: 'Python', body: 'Всё о Python'},
                {id: 3, title: 'C++' , body: 'Всё о C++'},
            ],
        }
    },
    methods: {
        createPost(post) {
           this.posts.push(post)
        }
    }
}
</script>

<style>
/* Обнуление стилей браузера по умолчанию */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
</style>