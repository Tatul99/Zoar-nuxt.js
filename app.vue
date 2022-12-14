<template>
  <NuxtLayout>
    <router-view />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import { useI18n } from 'vue-i18n';
let language:string | null = null;
if(typeof window === "object"){
  language = localStorage.getItem('language')
}
onMounted(() =>{
  const i18n = useI18n();
  i18n.locale.value = language || 'arm'
  console.log(useI18n());
  
})


</script>