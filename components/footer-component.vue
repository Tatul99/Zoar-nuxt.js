<template>
    <div  id="fotter-component" class="footer-main p-[30px] md:p-[80px] lg:px-[200px] bg-blue lg:pt-[152px] lg:pb-[116px] ">
            <div class="contain flex justify-between w-[100%]">

                <div class="logo">
                    <img src="../assets/images/logo-white.svg" alt="">
                </div>
                <div class="contain">
                    <div class="text-[30px] text-white">{{t('chenge-Language')}}</div>
                   <div class="flex "> <span @click="a('arm')" class="fi fi-am mr-[30px] cursor-pointer"></span>
                    <span @click="a('en')" class="cursor-pointer fi fi-gb"></span></div> 
                    <ul class="text-white">
                        <li >zoar.am</li>
                        <li>+374 41 22 12 02</li>
                        <li>zoar@sales.am</li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script setup>

 import { useI18n } from 'vue-i18n';
 const {t} = useI18n({useScope:'global'});
 function a(language){
    localStorage.setItem('language',language)
    location.reload()
 }
</script>