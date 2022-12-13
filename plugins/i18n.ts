import  {createI18n}  from 'vue-i18n'
import en from '../locales/english.json'
import arm from '../locales/armenian.json'
let language:string | null = localStorage.getItem('language') 
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: language || 'arm',
    messages: {
      en,arm
       
      
    }
  })

  vueApp.use(i18n)
})