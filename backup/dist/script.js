"use strict";
var VueApp = Vue.extend({
    template: "\n\t\t<div class=\"vue-app\">\n\t\t\t<h1>Vue App Running</h1>\n\t\t</div>\n\t"
});
new Vue({
    render: function (h) { return h(VueApp); }
}).$mount('#app');