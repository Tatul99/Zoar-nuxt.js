<template>
    <div class="component-mian mb-[160px] h-[760px]">
        <swiper
    :modules="modules"
    :slides-per-view="1"
        
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
   
    class="h-[100%] first-carousel"
  >
    <swiper-slide> <div class="image-contein h-[100%] flex flex-col items-center justify-center">
            <div class="imag-name text-center font-semibold text-6xl leading-[73px] text-white">ZOAR</div>
            <div class="image-text text-white text-2xl leading-[39px] text-center">Բնակելի Շենք</div>
            <button class="image-button border border-white mt-[80px] py-[24px] px-[64px] text-blue">վիդեո տուր</button>
        </div></swiper-slide>
    <swiper-slide>slide2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
       
    </div>
</template>
<script setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]
 
</script>

<style scoped>
.image-contein{
    background-image: url('../assets/images/build-image.png');
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover;  */
}
.image-button{
    background: rgba(255, 255, 255, 0.3);
}
</style>