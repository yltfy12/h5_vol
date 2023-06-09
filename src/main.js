import Vue from 'vue'
import App from './App.vue'
import postcss from 'postcss';
// 移动端适配
import postcssPxToViewport from 'postcss-px-to-viewport';
// 公共样式
import '@/assets/css/base.css'
// 组件库样式
import 'vant/lib/index.css';
// iconfont
import '@/assets/iconfont/iconfont.css'
// import './api/mock'
// 引入路由
import router from '@/router/index'
// 引入工具
import { isLogin } from "@/utils/Login";
// backbar
import Back from '@/components/Backbar.vue/Backbar'
// 按需引入
import { Tabbar, TabbarItem, Toast, Lazyload, Icon, Button, Uploader } from 'vant';

Vue.component('Back',Back)
// 全局注册

Vue.use(Uploader);
Vue.use(Button)
// 轻提示
Vue.use(Toast);
// 图标
Vue.use(Icon);
// 懒加载
Vue.use(Lazyload);
// TabBar
Vue.use(Tabbar);
Vue.use(TabbarItem);

// 判断是否登录
Vue.prototype.isLogin = isLogin
// 移动端适配
const postcssPlugins = [
  postcssPxToViewport({
    viewportWidth: 375,
    viewportHeight: 1334,
    unitPrecision: 3,
    viewportUnit: 'vw',
    selectorBlackList: ['.ignore', '.hairlines'],
    minPixelValue: 1,
    mediaQuery: false
  })
]
// 定义全局的 postcss 实例
Vue.prototype.$postcss = postcss(postcssPlugins);
Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  if (to.name === 'ChatGpt') {
    return
  }
  
  window.scrollTo(0, 0);
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
