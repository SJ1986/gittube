new Vue({
	el:#app_5,
	data:{
		message:'안녕하세요! Vue.js!''
	},
	methods:{
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})
