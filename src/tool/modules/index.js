import Vue from 'vue'

import getTop from '@/components/common/top/getHeader.vue';
Vue.component('getTop', getTop)

import setTop from '@/components/common/top/setHeader.vue';
Vue.component('setTop', setTop)


import getBase from '@/components/common/base/base.vue';
Vue.component('getBase', getBase)

import getTitle from '@/components/content/title/title.vue';
Vue.component('getTitle', getTitle)

import breviary from '@/components/content/breviary/breviary.vue';
Vue.component('breviary', breviary)

import breviaryLong from '@/components/content/breviary/breviaryLong.vue';
Vue.component('breviaryLong', breviaryLong)


import inputBox from "@/components/common/input/input.vue";
Vue.component('inputBox', inputBox)


import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'