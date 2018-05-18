<template>
	<div>
		<x-header :left-options="{showBack: showBack}" :right-options="{showMore: showMore}" @on-click-more="showMenus = true">with more menu</x-header>
		<div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
	</div>
</template>

<script type="text/javascript">
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  name: 'HeaderItem',
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    showMore: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<style type="text/css"></style>