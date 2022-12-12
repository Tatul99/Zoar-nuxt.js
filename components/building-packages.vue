<template>
    <div id="packages" class="packages-main pt-[100px] flex flex-col items-center ">
        <div class="packages-title text-blue text-[24px] md:text-[40px] font-bold leading-[49px] mb-[40px]">ՓԱԹԵԹՆԵՐ</div>
        <div class="under-title text-blue text-center text-[16px] mb-[80px]">Ստորև կարող եք ընտրել ներքին հարդարման Ձեզ առավել հարմար փաթեթը։</div>
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
                        <div class="item-title flex justify-center leading-[39px] text-blue text-[32px] relative">{{item.title}}</div>
                        <ul class="text-blue mt-[50px] flex flex-col"><li v-for="list in item.text" :key="list" class="text-center leading-[30px]">{{list}}</li></ul>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
let packageItems = [
    {id:1,title:'Ստանդարտ',text:['Մուտքի դուռ','Գաջած պատեր','Հոսնքի լարանցում','Դրսի պատուհաններ', 'Առաջնային ստյաժկա', 'Մուտքային ջրագծերի  հիմնական կետեր', 'Կոյուղու հիմնական կետեր']},
    {id:2,title:'Կոմֆորտ',text:['Քիվեր Վերանորոգում', 'Պատուհանագոգ',' Ներկած   պատեր', 'Հոսանքի միացման վերջնական մոնտաժ առանց անջատիչների', 'Սանհանգույցի սալիկապատում', 'Լամինատե և պռեսգրանիտե հատակ', ' Առաստաղի գիպսակարտոն և ներկում']},
    {id:3,title:'Կոմֆորտ  պլյուս', text:['Ջահը', 'Լույսերը', 'Ծորակները', 'Վարդակները', 'Վարագույրի կախիչները',' Խոհանոցի լամինատե կահույքը', 'Ավելանում է սանհանգույցի կահույքը']},
    {id:4,title:'Լյուքս',text:['Վերոնշյալ տարբերակներից որևէ մեկին ավելանում է անհատական ինտերիեր դիզայն և դրա վերանորոգման աշխատանքները']}
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