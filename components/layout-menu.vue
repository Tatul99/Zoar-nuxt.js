<template>
    <div class="menu-main py-[40px] px-[80px] lg:pt-[40px] lg:pr-[200px] lg:pb-[60px] lg:pl-[200px] flex justify-between items-center">
        
        <div class="logo  w-[92px] h-[81px]"></div>
        <div class="navbar hidden  lg:block">
            <ul class="flex  ">
                <li v-for="item in menuItems" :key="item.id"
                class="text-[16px] cursor-pointer leading-5 ml-[48px]"
                @click="scrollToId(item.pathId)"
                >{{t(item.title)}}</li>
            </ul>
           
        </div>
        <div @click="chengeDialog()" class="mobile-menu-icon block lg:hidden "></div>
        <div v-if="dialog" class="dialog  w-[100vw] h-[100vh] fixed top-0 left-0 bg-white">
            <div  class="close-dialog flex flex-col items-end" @click="dialog = false">
            <img class=" my-[60px] mr-[50px] md:m-[80px]" src="../public/images/close.png" alt="">
            <div class="menu-items w-full uppercase">
                <ul class="flex flex-col items-start md:items-center mt-[120px]  ">
                <li  v-for="item in menuItems" :key="item.id"
                class="text-[16px]   cursor-pointer leading-[20px] mt-[40px] ml-[48px]"
                @click="scrollToId(item.pathId)"
                >{{t(item.title)}}</li>
            </ul>
            </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import { useI18n } from 'vue-i18n';
    import {ref} from 'vue'
    const {t} = useI18n({useScope:'global'});
    let dialog = ref(false)
    let menuItems =[
        {id:1,title:'menu-item1',pathId:'BuildingStructure'},
        {id:2,title:'menu-item2',pathId:'buildingAmenities'},
        {id:3,title:'menu-item3',pathId:'packages'},
        {id:4,title:'menu-item4',pathId:'fllorePlans'},
        {id:5,title:'menu-item5',pathId:'fotter-component'}
    ]
    function chengeDialog () {
        dialog.value = true
    }
    function scrollToId(id) {
       dialog.value = false
        document.getElementById(id).scrollIntoView();
    }
    </script>
    
    <style scoped>
    .logo{
        background-image: url('../assets/images/logo.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .mobile-menu-icon{
        width: 40px;
        height: 30px;
        background-image: url("../assets/images/menu-icon.png");
    }
    .dialog{
       
        z-index: 100;
    }
    </style>