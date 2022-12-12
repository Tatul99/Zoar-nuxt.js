import  {createI18n}  from 'vue-i18n'
import en from '../locales/english.json'
import arm from '../locales/armenian.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'arm',
    messages: {
      en,arm
       
      
    }
  })

  vueApp.use(i18n)
})