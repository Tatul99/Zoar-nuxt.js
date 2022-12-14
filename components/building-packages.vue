<template>
    <div id="packages" class="packages-main pt-[100px] flex flex-col items-center ">
        <div class="packages-title text-blue text-[24px] md:text-[40px] font-bold leading-[49px] mb-[40px]">{{$t('PACKAGES.Packages')}}</div>
        <div class="under-title text-blue text-center text-[16px] mb-[80px]">{{$t('PACKAGES.subTitle')}}</div>
        <div class="packages-contain p-[24px] md:pl-[100px] lg:pl-[250px] md:pr-[100px] lg:pr-[200px] w-[100%] ">
                <div class=" flex justify-between cursor-pointer flex-wrap w-[100%] ">
                    <div class="item hover-plus w-full md:w-[50%]  relative flex flex-col items-center p-[20px] lg:p-[64px] mb-[40px]" v-for="(item,i) in packageItems" :key="item.id"
                        :class="{
                            ' lg:w-[30%]':i<packageItems.length-1,
                            'border-b-[3px] md:border-b-[0px] border-blue':i<packageItems.length-1,
                            'md:border-r-[3px] border-blue':i<1,
                            'lg:border-r-[3px] border-blue':i<2,
                            
                            'lg:w-[100%] flex lg:justify-center md:border-l-[3px] lg:border-l-[0px] lg:border-b-2  border-blue':i === packageItems.length-1,
                           
                        }"
                    >
                        <div class="item-title flex justify-center leading-[39px] text-blue text-[32px] relative">{{$t(item.title)}}</div>
                        <ul class="text-blue mt-[50px] flex flex-col"><li v-for="list in item.text" :key="list" class="text-center leading-[30px]">{{$t(list)}}</li></ul>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
 const {t} = useI18n({useScope:'global'});
let packageItems = [
    {id:1,title:'PACKAGES.Standard.title',text:['PACKAGES.Standard.line1','PACKAGES.Standard.line2','PACKAGES.Standard.line3','PACKAGES.Standard.line4', 'PACKAGES.Standard.line5', 'PACKAGES.Standard.line6', 'PACKAGES.Standard.line7']},
    {id:2,title:'PACKAGES.Comfort.title',text:['PACKAGES.Comfort.line1', 'PACKAGES.Comfort.line2','PACKAGES.Comfort.line3', 'PACKAGES.Comfort.line4', 'PACKAGES.Comfort.line5', 'PACKAGES.Comfort.line6', 'PACKAGES.Comfort.line7']},
    {id:3,title:'PACKAGES.ComfortPlus.title', text:['PACKAGES.ComfortPlus.line1', 'PACKAGES.ComfortPlus.line2', 'PACKAGES.ComfortPlus.line3', 'PACKAGES.ComfortPlus.line4', 'PACKAGES.ComfortPlus.line5','PACKAGES.ComfortPlus.line6', 'PACKAGES.ComfortPlus.line7']},
    {id:4,title:'PACKAGES.Lux.title',text:['PACKAGES.Lux.line1']}
]
</script>

<style scoped>
.hover-plus:before{
content:'';
position:absolute;
width:32px;
height: 2px;
background: #002366;
top:15vh;
right: 50%;
}
.hover-plus:hover:before{
    display: none;
}
.hover-plus:hover:after{
content:'+';
position:absolute;
font-size: 52px;
color: #002366;
top:10vh;
left: 50%;
}
.hover-plus:hover .item-title{
    font-weight: 700;
}
@media (max-width: 1024px){
    .hover-plus:before{

top:7vh;
right: 45%;
}

.hover-plus:hover:after{

top:5vh;
left: 50%;
}
}
@media (max-width: 430px){
    .hover-plus:before{

top:9vh;
right: 45%;
}

.hover-plus:hover:after{

top:6vh;
left: 50%;
}
}

</style>