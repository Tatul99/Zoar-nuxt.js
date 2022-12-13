<template>

    <div id="buildingAmenities" class="amenites-main flex flex-col items-center pt-[100px]">
        <div class="title uppercase mb-[80px] text-blue text-[24px] text-center md:text-[40px] leading-[49px] font-bold">{{t('BuildingAmenities.Building-amenities')}}</div>
        <div class="amenities-contain w-[100%] flex flex-col md:flex-row md:justify-between md:items-center">
            <div class="pl-[20px] md:pl-[80px]  lg:pl-[200px]  md:w-[60%] lg:w-[50%] flex flex-col justify-center">
                <div v-for="item in amenities" :key="item.id"
                class="text-blue text-[12px] w-full  md:text-base uppercase mb-[15px] font-normal"
                >
                   . {{t(item.text)}}


                <div class="details text-sm" v-if="item.details.length">
                    <div v-for="detail in item.details"  :key="detail.detailsId">{{t(detail.detailsText)}}</div>
                </div>
                </div>
            </div>
            <div class="building-grapic-image hidden lg:block w-[900px] h-[900px]"></div>
           <div class="w-full lg:w-0 h-[300px] flex justify-end">
            <div class="building-grapic-image-mini w-[240px] h-[240px] md:w-[440px] md:h-[440px] lg:hidden"></div>
           </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
 const {t} = useI18n({useScope:'global'});
let amenities = [
    {id:1,text:'BuildingAmenities.firstLine',details:[]},
    {id:2,text:'BuildingAmenities.secondLine',details:[]},
    {id:3,text:'BuildingAmenities.thirdԼine',details:[]},
    {id:4,text:'BuildingAmenities.fourthLine.title',details:[{detailsId:1,detailsText:'BuildingAmenities.fourthLine.line1'},{detailsId:2,detailsText:'BuildingAmenities.fourthLine.line2'},{detailsId:3,detailsText:'BuildingAmenities.fourthLine.line3'}]},
    {id:5,text:'BuildingAmenities.fifthLine',details:[]},
    {id:6,text:'BuildingAmenities.sixthLine',details:[]},
    {id:7,text:'BuildingAmenities.seventhLine',details:[]},
    {id:8,text:'BuildingAmenities.eighthLine',details:[]},
    {id:9,text:'BuildingAmenities.ninthLine',details:[]},
    {id:10,text:'BuildingAmenities.tenth',details:[]},
    {id:11,text:'BuildingAmenities.eleventhLine',details:[]},
]

</script>

<style scoped>
.building-grapic-image{
    background-image: url('../assets/images/building-grapic-image.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.building-grapic-image-mini{
    background-image: url('../assets/images/build-image-mini.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>