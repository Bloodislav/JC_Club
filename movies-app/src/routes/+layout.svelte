<script>
    import "../assets/app.css";
    import DcHeader from "$lib/components/Header/DCHeader.svelte";
	import DcFooter from "$lib/components/DCFooter.svelte";
</script>

<DcHeader />
<!-- Все страниц(элементы) после lyout будут попадать в <slot />-->
<slot />
<DcFooter />