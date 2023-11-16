<script>
	import DcButton from "../common/DCButton.svelte";

</script>
<div class="navbar">
    <!-- Огрничение по контайнеру для того чтобы элементы не прилипли к краямм экрана -->
    <div class="container mx-auto flex items-center justify-between">
        <img src="/images/logo.svg" alt="Not Work">
        <DcButton>Войти</DcButton>
    </div>
</div>

<style>
    .navbar{
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 0;
        /* Это все описано в классе container с помощью tailwind */
        /* display: flex;
        Вертекальное выравнивание
        align-items: center;
        Горизантальное выравнивание по левую и правую часть экрана
        justify-content: space-between; */
    }
</style>