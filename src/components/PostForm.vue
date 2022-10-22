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
        <button 
            class="btn"
            @click="createPost"
        >
            Создать пост
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return{
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        },
    }
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
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: purple;
    border: 1px solid purple;
}
</style>