import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
 path: '/',
 redirect: '/index',
 name: 'Home',
 component: () => import('./views/index/index.vue'),
 meta: {
  title: "首页"
 }
}, {
 path: '/index',
 component: () => import('./views/index/index.vue'),
 meta: {
  title: "首页"
 }
}, {
 path: '/crossTalk',
 name: 'CrossTalk',
 component: () => import('./views/crossTalk/crossTalk.vue'),
 meta: {
  title: "抖音段子"
 }
}, {
 path: "/play",
 name: "Play",
 component: () => import('./views/play/play.vue'),
 meta: {
  title: "短剧本"
 }
}, {
 path: "/tractate",
 name: "Tractate",
 component: () => import('./views/tractate/tractate.vue'),
 meta: {
  title: "短文"
 }
}, {
 path: '/customMade',
 name: "CustomMade",
 component: () => import('./views/customMade/customMade.vue'),
 meta: {
  title: "剧本定制"
 }
}, {
 path: '/information',
 name: "Information",
 component: () => import('./views/information/information.vue'),
 meta: {
  title: "行业资讯"
 }
}]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

router.beforeEach((to, from, next) => {
 document.title = to.meta.title
 next();
})


export default router
