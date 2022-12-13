<template>
    <div id="BuildingStructure" class="structure-main flex flex-col items-center lg:px-[200px]">
        <div class="titel uppercase mb-[80px] text-blue text-[24px] md:text-[40px] leading-[49px] font-bold">{{t('BuildingStructure.Building-structure')}}</div>
        <div class="items bg-no-repeat w-[100%] h-[150px] md:h-[400px] mb-[40px] flex items-end" v-for="item in BuildingStructureItems" :key="item.id"
    
        >
        
       <SliderComponent :SlideItem="item"/>
        </div>
     
    </div>
</template>

<script setup>
 import { useI18n } from 'vue-i18n';
 const {t} = useI18n({useScope:'global'});

let BuildingStructureItems = [
    {
        id:1,
        title:'BuildingStructure.Entrance-hall',
        image:'../images/image-1.png',
    }, 
    {
        id:2,
        title:'BuildingStructure.Corridor',
        image:'./images/image-2.png',
    },
     {
        id:3,
        title:'BuildingStructure.GardenAndPlayground',
        image:'./images/image-3.png',
    },
     {
        id:4,
        title:'BuildingStructure.parking',
        image:'./images/image-4.png',
    },
]
</script>

<style scoped>
.image{
    background-image:url('../assets/images/image-1.png');
}
</style>