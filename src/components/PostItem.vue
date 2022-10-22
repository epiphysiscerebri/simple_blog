<template>
    <div class="post">
        <div>
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Cодержание: </strong>{{ post.body }}</div>
        </div>
        <div class="post_btn">
            <MyButton
            > Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    components: { MyButton }
}
</script>

<style scoped>
.post {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid purple;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>