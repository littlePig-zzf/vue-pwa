<template>
	<div>
		<header-item></header-item>
	    <v-chart :data="data">
	      <v-line series-field="type" />
	    </v-chart>
  </div>
</template>

<script type="text/javascript">
import { VChart, VLine, VAxis, VTooltip } from 'vux'
export default {
  name: 'LineChart',
  components: {
    VChart,
    VLine,
    VAxis,
    VTooltip,
  },
  data () {
    return {
      data: [
    		{"date": "2010-01-9", "type": "金属", "value": 85.6},
    		{"date": "2010-01-9", "type": "塑料", "value": 36.6},
    		{"date": "2010-01-10", "type": "金属", "value": 8.6},
    		{"date": "2010-01-10", "type": "塑料", "value": 6.6},
    		{"date": "2010-01-11", "type": "金属", "value": 84.6},
    		{"date": "2010-01-11", "type": "塑料", "value": 30.6}
      ]
    }
  }
}
</script>

<style lang="less"></style>