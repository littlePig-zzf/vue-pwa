<template>
	<tabbar style="position: fixed">
      <tabbar-item selected link="/">
        <x-icon slot="icon" type="ios-arrow-thin-down" size="30"></x-icon>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <x-icon slot="icon" type="ios-arrow-thin-left" size="30"></x-icon>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item link="/LineChart">
        <x-icon slot="icon" type="ios-circle-filled" size="30"></x-icon>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <x-icon slot="icon" type="ios-arrow-thin-left" size="30"></x-icon>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
</template>

<script type="text/javascript">
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'FootToolBar',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
	}
}
</script>