<template>
    <div class="app">
        <PostForm />
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
            title: '',
            body: '',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: new Date(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost)
            this.title = ''
            this.body = ''
        },
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