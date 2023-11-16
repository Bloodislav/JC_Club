<!-- Для того чтобы не ругался на типы подключаем lang='ts' -->
<script lang='ts'>
	import RecentCard from "./Recent-card.svelte";
    // ? Хук, говорящий что мы на клиете 
    import { onMount } from "svelte";
    // register - для регстрации элемента, для типизации 
    import { register, type SwiperContainer } from 'swiper/element/bundle';
    // SwiperOptions - настройки свайпера
    import type { SwiperOptions } from "swiper/types";

    register();
    let swiperEl: SwiperContainer;

    const swiperParams: SwiperOptions = {
        // Кол-во отобрааемых слайдов
        slidesPerView: 4,
        // 20 пикселей между каждым слайдом
        spaceBetween: 20,
        // переопределение CSS свойств
        injectStyles: [
            `
            .swiper {
                overflow: visible;
            }
        `
        ]
    }

    onMount(() => {
        // заполнение настроек
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
        // console.log(swiperEl)
    })
</script>

<div class="resents">
    <div class="container mx-auto">
        <h2 class="resents__title">
            Продолжить просмотр
        </h2>
        <!-- bind:this={swiperEl} - найди swiperEl 
             init="false" - для добавления кастомных настроек -->
        <swiper-container bind:this={swiperEl} init="false">
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
            <swiper-slide><RecentCard /></swiper-slide>
        </swiper-container>
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