<template>
    <form @submit.prevent>
        <h4> Создание поста</h4>
        <input 
            :value="post.title"
            @input="post.title = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Название поста">
        <input 
            :value="post.body"
            @input="post.body = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Содержание поста">
        <button 
            class="btn"
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