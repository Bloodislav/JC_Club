<script>
	import RecentCard from "./Recent-card.svelte";

</script>

<div class="resents">
    <div class="container mx-auto">
        <h2 class="resents__title">
            Продолжить просмотр
        </h2>
        
        <div class="recent-items">
            <RecentCard />
            <RecentCard />
            <RecentCard />
            <RecentCard />

        </div>
    </div>
</div>

<style>
    .resents {
        background-color: black;
        color: white;
    }

    .resents__title {
        font-size: 20px;
        font-weight: 500;
        padding: 25px 0px;
    }
    .recent-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* задаёт отступы (en-US) между колонками и рядами. */
        gap: 30px;
    }
</style>