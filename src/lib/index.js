import IconFont from './IconFont.vue';


const vueIconFontPlugin = {
  install: function (Vue, options = {}) {
    if (!options.prefix) {
      return new Error('vueIconFontPlugin:not prefix')
    }
    const optionsMixin = {
      data() {
        return {
          options
        }
      }
    }
    Vue.component(IconFont.name, Vue.extend({
      mixins:[IconFont,optionsMixin]
    }))
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueIconFontPlugin, {
    prefix:'icon'
  })
}

// 导出模块
export default vueIconFontPlugin