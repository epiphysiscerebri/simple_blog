<template>
    <form @submit.prevent>
        <h4> Создание поста</h4>
        <input 
            v-model="post.title"
            class="input" 
            type="text" 
            placeholder="Название поста">
        <input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Содержание поста">
        <MyButton 
            style="align-self: flex-end; margin-top: 15px;"
            @click="createPost"
        >
            Создать пост
        </MyButton>
    </form>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        },
    },
    components: { MyButton }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
.input {
    width: 100%;
    border: 1px solid purple;
    padding: 5px 10px;
    margin-top: 15px;
}
</style>