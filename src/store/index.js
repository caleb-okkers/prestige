import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const apiURL = 'https://vv-royale.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    suites: null,
    suite: null,
    reservations: null,
    reservation: null,
    token: null, // Ensure token state is initialized
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setSuites(state, value) {
      state.suites = value
    },
    setSuite(state, value) {
      state.suite = value
    },
    setReservations(state, value) {
      state.reservations = value
    },
    setReservation(state, value) {
      state.reservation = value
    },
    setToken(state, token) {
      state.token = token
    },
    clearAuth(state) {
      state.token = null
      state.user = null
    }

  },
  actions: {
    //Users
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async fetchUser(context, user_id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${user_id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async register(context, payload) {
      try {
        const { msg, err } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/update/${payload.user_id}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async deleteUser(context, user_id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/delete/${user_id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    //Suites
    async fetchSuites(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}suites`)).data
        if (results) {
          context.commit('setSuites', results)
        } else {
          toast.error(`${msg}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }

    },

    async fetchSuite(context, suite_id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}suites/${suite_id}`)).data
        if (result) {
          context.commit('setSuite', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async addSuite(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}suites/add`, payload)).data
        if (msg) {
          context.dispatch('fetchSuites')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async updateSuite(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}suites/update/${payload.suite_id}`, payload)).data
        if (msg) {
          context.dispatch('fetchSuites')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },
    async deleteSuite(context, suite_id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}suites/delete/${suite_id}`)).data
        if (msg) {
          context.dispatch('fetchSuites')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: 'bottom-center'
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: 'bottom-center'
        })
      }
    },

    //reservations
    async fetchReservations(context) {
  try {
    const { results, msg } = await (await axios.get(`${apiURL}reservations`)).data
    if (results) {
      context.commit('setReservations', results)
    } else {
      toast.error(`${msg}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
  }

    },
    async fetchReservation(context, reservation_id) {
  try {
    const { result, msg } = await (await axios.get(`${apiURL}reservations/${reservation_id}`)).data
    if (result) {
      context.commit('setReservation', result)
    } else {
      toast.error(`${msg}`, {
        autoClose: 2000,
        position: 'bottom-center'
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
  }
    },
    async addReservation(context, payload) {
  try {
    const { msg } = await (await axios.post(`${apiURL}reservations/add`, payload)).data
    if (msg) {
      context.dispatch('fetchReservations')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: 'bottom-center'
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
  }
    },
    async updateReservation(context, payload) {
  try {
    const { msg } = await (await axios.patch(`${apiURL}reservations/update/${payload.reservation_id}`, payload)).data
    if (msg) {
      context.dispatch('fetchReservations')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: 'bottom-center'
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
  }
    },
    async cancelReservation(context, reservation_id) {
  try {
    const { msg } = await (await axios.delete(`${apiURL}reservations/cancel/${reservation_id}`)).data
    if (msg) {
      context.dispatch('fetchReservations')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: 'bottom-center'
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    })
  }
},

// Login
async login({ commit }, payload) {
  try {
    const { token, user, msg, err } = (await axios.post(`${apiURL}users/login`, payload)).data;

    if (token && user) {
      localStorage.setItem('authToken', token);
      commit('setToken', token);
      commit('setUser', user);

      toast.success('Login successful', {
        autoClose: 2000,
        position: 'bottom-center'
      });

      return { success: true, user };
    } else {
      toast.error(`${err || msg}`, {
        autoClose: 2000,
        position: 'bottom-center'
      });

      return { success: false };
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: 'bottom-center'
    });

    return { success: false };
  }
},


    // Logout
    logout({ commit }) {
      localStorage.removeItem('authToken') 
      commit('clearAuth')
      toast.success('Logout successful', {
        autoClose: 2000,
        position: 'bottom-center'
      })
      window.location.href = '/'
    }

  },
  modules: {
  }
})