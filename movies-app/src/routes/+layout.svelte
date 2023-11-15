<script>
    import "../assets/app.css";
    import DcHeader from "$lib/components/Header/DCHeader.svelte";
</script>

<DcHeader />
<!-- Все страниц(элементы) после lyout будут попадать в <slot />-->
<slot />
<div>Footer</div>