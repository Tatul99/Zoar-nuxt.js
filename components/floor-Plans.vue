<template>
    <div id="fllorePlans" class="plans-main  relative flex flex-col items-center mt-[40px]">
            <div class="plans-title text-blue text-[24px] font-bold md:text-[40px] uppercase" >Հատակագծեր</div>
            <div class="plans-text  text-center text-blue mb-[200px]">Այս բաժնում կարող եք ծանոթանալ շենքում հասանելի բնակարանների հատակագծերինև ընտրել ձեզ առավել հարմար տարբերակը։</div>
            <div class="carousel    ">
              <div class="corusel-contain max-h-[680px] lg:max-h-[870px] mb-[200px] p-[24px] md:p-[56px] bg-white shadow-lg flex justify-between  z-10 shadow-gray">
                <div class="for-image flex-col md:flex-row flex justify-between">
                    <div class="carousel-items w-[330px] md:w-[280px]  lg:min-w-[400px] flex overflow-auto flex-row md:flex-col md:flex-wrap  justify-between">
                        <div class=" relative cursor-pointer border-[1px] ml-[10px] md:ml-0  border-blue p-[20px] w-[104px] h-[104px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px]"  v-for="(item,i) in carouselImages" :key="item" @click="chengeImageUrl(item,i)"
                    :class="{
                        carouselimageitems:i!==activeClass,
                        'md:ml-[20px] lg:ml-[40px]':i>3
                    }">
                        <img class="w-[78px] h-[78px] max-w-none md:w-[90px] md:h-[90px] lg:w-[120px]  lg:h-[120px]" :src="`/images/${item}`" alt="">
                    </div>
                    </div>
                    <div>
                        
                    </div>
                    <div class="flex flex-col lg:flex-row">
                        <div class="image-div">
                       
                       <img class="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px]" :src="`/images/${imageUrl}`" alt="">
                   </div>
                   <div class="ml-[20px] lg:ml-0 carousel0image-text">
                       <ol start="1"  class="uppercase text-[12px] md:text-[16px] text-blue">
                           <li>բնակարանի մակերեսը - 68.9մ2</li>
                           <li>Սենյակների քանակը - 2</li>
                       </ol>
                   </div>
                    </div>
                </div>
                
              </div>
            </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let carouselImages = ['carousel-image-1.png','carousel-image-2.png','carousel-image-3.png','carousel-image-1.png','carousel-image-2.png','carousel-image-3.png','carousel-image-1.png','carousel-image-2.png']
let imageUrl = ref(carouselImages[0])
let activeClass = ref(0)
function chengeImageUrl(item,i){
    activeClass.value = i
    imageUrl.value = item
}

</script>

<style scoped>
.plans-main:before{
    content:'';
    background-color: #002366;
    width:100%;
    height: 240px;
    position: absolute;
    top: 200px;
    left: 0;
    z-index: 0;
}
.carousel{
    z-index: 10;
}
.carouselimageitems:before{
    content:'';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: aliceblue;
    opacity: 0.5;
}
</style>