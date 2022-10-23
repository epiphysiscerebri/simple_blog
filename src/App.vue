<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <MyButton
            @click="showDialog"
            style="margin: 15px 0;">
            Создать пост
        </MyButton>
        <MyDialog v-model:show="dialogVisible">
            <PostForm 
                @create="createPost" 
            />
        </MyDialog>
        <PostList 
            :posts="posts"
            @remove="removePost"
        />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    components: {
    PostForm,
    PostList,
},
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Всё о JS'},
                {id: 2, title: 'Python', body: 'Всё о Python'},
                {id: 3, title: 'C++' , body: 'Всё о C++'},
            ],
            dialogVisible: false
        }
    },
    methods: {
        createPost(post) {
           this.posts.push(post)
           this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(el => el.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
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