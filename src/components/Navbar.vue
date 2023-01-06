<template>
    <div class="navbar">
        <div @click='$router.push("/")'>simple_blog</div>
        <div class="navbar_btns">
            <MyButton @click='$router.push("/posts")'>Посты</MyButton>
            <MyButton @click='$router.push("/about")' style="margin-left: 20px;">О приложении</MyButton>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: gray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar_btns {
    margin-left: auto;
}
</style>