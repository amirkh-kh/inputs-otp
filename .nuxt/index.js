import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_05337709 from 'nuxt_plugin_plugin_05337709' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_7a3a7720 from 'nuxt_plugin_sentryserver_7a3a7720' // Source: .\\sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_5d2952e8 from 'nuxt_plugin_sentryclient_5d2952e8' // Source: .\\sentry.client.js (mode: 'client')
import nuxt_plugin_plugin_1d7c6cea from 'nuxt_plugin_plugin_1d7c6cea' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_17bd8f58 from 'nuxt_plugin_cookieuniversalnuxt_17bd8f58' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_toast_5416bd5b from 'nuxt_plugin_toast_5416bd5b' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_clipboard_7adb1e0c from 'nuxt_plugin_clipboard_7adb1e0c' // Source: .\\clipboard.js (mode: 'client')
import nuxt_plugin_recaptcha_2bf2c91b from 'nuxt_plugin_recaptcha_2bf2c91b' // Source: .\\recaptcha.js (mode: 'all')
import nuxt_plugin_axios_f0331ea8 from 'nuxt_plugin_axios_f0331ea8' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_workbox_ac452a70 from 'nuxt_plugin_workbox_ac452a70' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_35351748 from 'nuxt_plugin_metaplugin_35351748' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_39dcbcbc from 'nuxt_plugin_iconplugin_39dcbcbc' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_hotjar_1858cafe from 'nuxt_plugin_hotjar_1858cafe' // Source: .\\hotjar.js (mode: 'client')
import nuxt_plugin_googleanalytics_3853f80c from 'nuxt_plugin_googleanalytics_3853f80c' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ..\\plugins\\axios (mode: 'all')
import nuxt_plugin_veevalidate_6e5ad03a from 'nuxt_plugin_veevalidate_6e5ad03a' // Source: ..\\plugins\\vee-validate (mode: 'all')
import nuxt_plugin_vuecryptoicon_529d4c57 from 'nuxt_plugin_vuecryptoicon_529d4c57' // Source: ..\\plugins\\vue-cryptoicon (mode: 'client')
import nuxt_plugin_apexchart_4eb301ee from 'nuxt_plugin_apexchart_4eb301ee' // Source: ..\\plugins\\apex-chart.js (mode: 'client')
import nuxt_plugin_swiper_68e7f06e from 'nuxt_plugin_swiper_68e7f06e' // Source: ..\\plugins\\swiper.js (mode: 'client')
import nuxt_plugin_mixins_5013a1f0 from 'nuxt_plugin_mixins_5013a1f0' // Source: ..\\plugins\\mixins (mode: 'all')
import nuxt_plugin_auth_215319f8 from 'nuxt_plugin_auth_215319f8' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"رابین‌کش","titleTemplate":"رابین‌کش | %s","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1,user-scalable=no,viewport-fit=cover"},{"hid":"description","name":"description","content":"صرافی دیجیتال رابین‌کش"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"mobile-web-app-capable","content":"yes"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"shortcut icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphone5_splash.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-iphonese"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphone6_splash.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-iphone6"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphoneplus_splash.png","media":"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","hid":"apple-touch-startup-image-iphoneplus"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphonex_splash.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","hid":"apple-touch-startup-image-iphonex"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphonexr_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-iphonexr"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fiphonexsmax_splash.png","media":"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)","hid":"apple-touch-startup-image-iphonexsmax"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fipad_splash.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-ipad_splash"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fipadpro1_splash.png","media":"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-ipadpro1_splash"},{"rel":"apple-touch-startup-image","href":"\u002Fsplashscreens\u002Fipadpro2_splash.png","media":"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)","hid":"apple-touch-startup-image-ipadpro2_splash"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_05337709 === 'function') {
    await nuxt_plugin_plugin_05337709(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_7a3a7720 === 'function') {
    await nuxt_plugin_sentryserver_7a3a7720(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_5d2952e8 === 'function') {
    await nuxt_plugin_sentryclient_5d2952e8(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_1d7c6cea === 'function') {
    await nuxt_plugin_plugin_1d7c6cea(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_17bd8f58 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_17bd8f58(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_5416bd5b === 'function') {
    await nuxt_plugin_toast_5416bd5b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_clipboard_7adb1e0c === 'function') {
    await nuxt_plugin_clipboard_7adb1e0c(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_2bf2c91b === 'function') {
    await nuxt_plugin_recaptcha_2bf2c91b(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_f0331ea8 === 'function') {
    await nuxt_plugin_axios_f0331ea8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_ac452a70 === 'function') {
    await nuxt_plugin_workbox_ac452a70(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_35351748 === 'function') {
    await nuxt_plugin_metaplugin_35351748(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_39dcbcbc === 'function') {
    await nuxt_plugin_iconplugin_39dcbcbc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_hotjar_1858cafe === 'function') {
    await nuxt_plugin_hotjar_1858cafe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_3853f80c === 'function') {
    await nuxt_plugin_googleanalytics_3853f80c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_6e5ad03a === 'function') {
    await nuxt_plugin_veevalidate_6e5ad03a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecryptoicon_529d4c57 === 'function') {
    await nuxt_plugin_vuecryptoicon_529d4c57(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_apexchart_4eb301ee === 'function') {
    await nuxt_plugin_apexchart_4eb301ee(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_swiper_68e7f06e === 'function') {
    await nuxt_plugin_swiper_68e7f06e(app.context, inject)
  }

  if (typeof nuxt_plugin_mixins_5013a1f0 === 'function') {
    await nuxt_plugin_mixins_5013a1f0(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_215319f8 === 'function') {
    await nuxt_plugin_auth_215319f8(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
