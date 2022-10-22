<template>
    <div class="post">
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Cодержание: </strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>