import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _062d4d88 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3f94628a = () => interopDefault(import('..\\pages\\Charity.vue' /* webpackChunkName: "pages/Charity" */))
const _6ac903c9 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _4c3bd576 = () => interopDefault(import('..\\pages\\convert.vue' /* webpackChunkName: "pages/convert" */))
const _21c5ca9c = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _791cae98 = () => interopDefault(import('..\\pages\\fee.vue' /* webpackChunkName: "pages/fee" */))
const _0a091b0a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2c8d4949 = () => interopDefault(import('..\\pages\\markets.vue' /* webpackChunkName: "pages/markets" */))
const _346155ee = () => interopDefault(import('..\\pages\\rules.vue' /* webpackChunkName: "pages/rules" */))
const _27a22878 = () => interopDefault(import('..\\pages\\teenagers.vue' /* webpackChunkName: "pages/teenagers" */))
const _e3540214 = () => interopDefault(import('..\\pages\\trade.vue' /* webpackChunkName: "pages/trade" */))
const _6cdf0b98 = () => interopDefault(import('..\\pages\\trade\\_id.vue' /* webpackChunkName: "pages/trade/_id" */))
const _70432538 = () => interopDefault(import('..\\pages\\dashboard\\bank-cards.vue' /* webpackChunkName: "pages/dashboard/bank-cards" */))
const _75c2227d = () => interopDefault(import('..\\pages\\dashboard\\convert.vue' /* webpackChunkName: "pages/dashboard/convert" */))
const _2047fd7f = () => interopDefault(import('..\\pages\\dashboard\\kyc.vue' /* webpackChunkName: "pages/dashboard/kyc" */))
const _6f2552fe = () => interopDefault(import('..\\pages\\dashboard\\markets.vue' /* webpackChunkName: "pages/dashboard/markets" */))
const _007d975f = () => interopDefault(import('..\\pages\\dashboard\\order-history.vue' /* webpackChunkName: "pages/dashboard/order-history" */))
const _294ea130 = () => interopDefault(import('..\\pages\\dashboard\\otc.vue' /* webpackChunkName: "pages/dashboard/otc" */))
const _3d7679af = () => interopDefault(import('..\\pages\\dashboard\\profile\\index.vue' /* webpackChunkName: "pages/dashboard/profile/index" */))
const _d91dab7a = () => interopDefault(import('..\\pages\\dashboard\\referral.vue' /* webpackChunkName: "pages/dashboard/referral" */))
const _47989c66 = () => interopDefault(import('..\\pages\\dashboard\\security.vue' /* webpackChunkName: "pages/dashboard/security" */))
const _699715b2 = () => interopDefault(import('..\\pages\\dashboard\\ticket.vue' /* webpackChunkName: "pages/dashboard/ticket" */))
const _2779d07e = () => interopDefault(import('..\\pages\\dashboard\\wallet\\setting.vue' /* webpackChunkName: "pages/dashboard/wallet/setting" */))
const _23222b98 = () => interopDefault(import('..\\pages\\dashboard\\wallet\\transactions.vue' /* webpackChunkName: "pages/dashboard/wallet/transactions" */))
const _002e594a = () => interopDefault(import('..\\pages\\dashboard\\wallet\\transfer.vue' /* webpackChunkName: "pages/dashboard/wallet/transfer" */))
const _e087e434 = () => interopDefault(import('..\\pages\\r\\_id.vue' /* webpackChunkName: "pages/r/_id" */))
const _3153cf64 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _062d4d88,
    name: "about-us"
  }, {
    path: "/Charity",
    component: _3f94628a,
    name: "Charity"
  }, {
    path: "/contact-us",
    component: _6ac903c9,
    name: "contact-us"
  }, {
    path: "/convert",
    component: _4c3bd576,
    name: "convert"
  }, {
    path: "/dashboard",
    component: _21c5ca9c,
    name: "dashboard"
  }, {
    path: "/fee",
    component: _791cae98,
    name: "fee"
  }, {
    path: "/login",
    component: _0a091b0a,
    name: "login"
  }, {
    path: "/markets",
    component: _2c8d4949,
    name: "markets"
  }, {
    path: "/rules",
    component: _346155ee,
    name: "rules"
  }, {
    path: "/teenagers",
    component: _27a22878,
    name: "teenagers"
  }, {
    path: "/trade",
    component: _e3540214,
    name: "trade",
    children: [{
      path: ":id?",
      component: _6cdf0b98,
      name: "trade-id"
    }]
  }, {
    path: "/dashboard/bank-cards",
    component: _70432538,
    name: "dashboard-bank-cards"
  }, {
    path: "/dashboard/convert",
    component: _75c2227d,
    name: "dashboard-convert"
  }, {
    path: "/dashboard/kyc",
    component: _2047fd7f,
    name: "dashboard-kyc"
  }, {
    path: "/dashboard/markets",
    component: _6f2552fe,
    name: "dashboard-markets"
  }, {
    path: "/dashboard/order-history",
    component: _007d975f,
    name: "dashboard-order-history"
  }, {
    path: "/dashboard/otc",
    component: _294ea130,
    name: "dashboard-otc"
  }, {
    path: "/dashboard/profile",
    component: _3d7679af,
    name: "dashboard-profile"
  }, {
    path: "/dashboard/referral",
    component: _d91dab7a,
    name: "dashboard-referral"
  }, {
    path: "/dashboard/security",
    component: _47989c66,
    name: "dashboard-security"
  }, {
    path: "/dashboard/ticket",
    component: _699715b2,
    name: "dashboard-ticket"
  }, {
    path: "/dashboard/wallet/setting",
    component: _2779d07e,
    name: "dashboard-wallet-setting"
  }, {
    path: "/dashboard/wallet/transactions",
    component: _23222b98,
    name: "dashboard-wallet-transactions"
  }, {
    path: "/dashboard/wallet/transfer",
    component: _002e594a,
    name: "dashboard-wallet-transfer"
  }, {
    path: "/r/:id?",
    component: _e087e434,
    name: "r-id"
  }, {
    path: "/",
    component: _3153cf64,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
