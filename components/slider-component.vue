<template>

    <swiper
        :modules="modules"
        :slides-per-view="1"
            
        navigation
        
        :scrollbar="{ draggable: true }"
       
        class=" h-full first-carousel"
      >
        <swiper-slide class="flex items-end"  :style="`background-image:url(${SlideItem.image});background-size:100% 100%`">  <div class="text-white text-[18px] md:text-[28px] lg:text-[32px] leading-[39px] uppercase mb-[20px] md:mb-[40px] ml-[40px]">{{SlideItem.title}}</div></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        
      </swiper>
    </template>
    <script setup>
    import { defineProps } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
    import "swiper/swiper.min.css";
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    // import 'swiper/css/scrollbar';
    const modules = [Navigation, Pagination, Scrollbar, A11y]
    const props = defineProps({
        SlideItem:Object,
    })
    console.log(props.SlideItem);
     
    </script>