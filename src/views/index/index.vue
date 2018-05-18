<template>
	<div class="page">
    <header-item :showBack="false" :showMore="false"></header-item>
		<div class="content">
        <h5>hello,i am {{name}}</h5> 
    </div>
	</div>
</template>

<script type="text/javascript">
import wxConfig from '@/assets/js/wxConfig'
export default {
  components: {

  },
  data () {
  	return {
      name: ''
  	}
  },
  mounted () {
  	this.init();
  },
  methods: {
  	init () {
  		// wxConfig();
      this.$http(this.$api.common.index, (res) => {
        console.log(res.data)
        this.name = res.data[0].name
      })
  	},
  	seeChart () {
  		this.$router.push({path: '/LineChart'})
  	}
  }
}
</script>
