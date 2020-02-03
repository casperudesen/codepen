


const VueApp = Vue.extend({
	template: `
		<div class="vue-app">
			<h1>Vue App Running</h1>
		</div>
	`
})


new Vue({
	render: h => h(VueApp) 
}).$mount('#app')
