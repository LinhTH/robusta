import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : false,
      withoutAnimation: false
    },
    device: 'desktop',
    auth: {
      open: false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    TOGGLE_LOGIN: (state, open) => {
      if (open === undefined) {
        open = !state.auth.open
      }
      state.auth.open = open
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    ToggleLogin: ({ commit }, open) => {
      commit('TOGGLE_LOGIN', open)
    }
  }
}

export default app
