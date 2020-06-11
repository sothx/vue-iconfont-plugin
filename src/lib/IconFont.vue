<template>
    <svg v-if="type === 'symbol'" class="icon" aria-hidden="true">
		  <use :xlink:href="`#${options.prefix}${name}`"></use>
		</svg>
    <span v-else-if="type === 'font-class'" :class="`iconfont ${options.prefix}${name}`">
    </span>
    <span v-else class="iconfont">
      <slot></slot>
    </span>
</template>

<script>
	/**
	 * iconfont 图标
	 * @description 用于展示 iconfont 图标
	 * @property {String} name 图标名称
	 * @property {String} type 图标展示方式,支持unicode(默认),font-class,symbol
	 * @property {String} prefix 图标前缀
	 */
	export default {
		name: 'IconFont',
		props: {
			name: {
				type: String,
        default: '',
        require:true
			},
			type: {
				type: String,
        default: 'unicode',
        require:false
			}
    },
    data () {
      return {
      }
    },
    created() {

    }
	}
</script>

<style lang="scss" scoped>
/* iconfont Symbol icon 通用CSS */
.icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
