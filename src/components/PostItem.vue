<template>
    <!-- Компонент каждого отдельного поста -->
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Cодержание: </strong>{{ post.body }}</div>
        </div>
        <div class="post_btns">
            <MyButton
            @click="$router.push(`/posts/${post.id}`)"
            > Открыть
            </MyButton>
            <MyButton
            @click="$emit('remove', post)"
            > Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
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
.post_btns{
    display: flex;
}
</style>