<template>
    <!-- Переиспользуемый компонент кнопки -->
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: purple;
    border: 1px solid purple;
}
</style>