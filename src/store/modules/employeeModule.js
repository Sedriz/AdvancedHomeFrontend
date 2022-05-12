import router from '../../router'
import axiosConf from '../axios'

const axios = axiosConf.axios

const employeeModule = {
  namespaced: true,
  state: {
    profileIndex: 0,
    profile: {},
    editedProfile: {},
    userPrincipal: null,
    userFavorites: [],
    allRoles: [],
    employeeRoles: [],
    contactHistory: [],
    allIntern: [],
    allContacts: [],
    externalNames: [],
    onlineUsers: [],
    history: []
  },
  actions: {
    loadUser: ({ commit }, target) => {
      return axios
        .get(`/user/check`)
        .then(response => {
          commit('SET_USER_PRINCIPAL', response.data)
        })
        .catch(() => {
          // eslint-disable-next-line no-undef
          location.href= process.env.NODE_ENV === 'production'
          // eslint-disable-next-line no-undef
          ? process.env.VUE_APP_BASE_URL
          // eslint-disable-next-line no-undef
          : process.env.VUE_APP_BASE_URL + '/user/login?target=' + target
        })
    },
    loadOnlineUsers: ({ commit }) => {
      return axios
        .get(`/user/online`)
        .then((response) => {
          commit('SET_ONLINE_USERS', response.data)
        })
        .catch((error) => {
          console.warn(error)
          commit('SET_ONLINE_USERS', [])
          throw error
        })
    },
    loadAllRoles: ({ commit }) => {
      return axios
        .get(`/user/roles`)
        .then(response => {
          commit('SET_ALL_ROLES', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          router.push('/error/1')
          throw error
        })
    },
    loadAllEmployeesWithRoles: ({ commit }) => {
      commit('SET_IS_LOADING', true, { root: true })
      return axios
        .get(`/user/roles/employees`)
        .then(response => {
          commit('SET_ALL_EMPLOYEE_ROLES', response.data)
          commit('SET_IS_LOADING', false, { root: true })
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_IS_LOADING', false, { root: true })
          router.push('/error/1')
          throw error
        })
    },
    saveNewRoleToEmployee: ({ commit }, employeeRoleDTO) => {
      commit('SET_IS_LOADING', true, { root: true })
      return axios
        .post(`/user/roles`, employeeRoleDTO)
        .then(response => {
          commit('REPLACE_UPDATED_EMPLOYEE_ROLE', response.data)
          commit('SET_IS_LOADING', false, { root: true })
          return response.data
        })
        .catch(error => {
          console.warn(error)
          router.push('/error/1')
          commit('SET_IS_LOADING', false, { root: true })
          throw error
        })
    },
    loadEmployeeImage: ({ commit }, id) => {
      return axios
        .get(`/employee/${id}/image`)
        .then((response) => {
          commit('LOAD_EMPLOYEES_IMAGE')
          return response.data
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    saveNewImage: ({ commit }, { id, image }) => {
      let formData = new FormData()
      if(image != null){
        formData.append('file', image, image.name)
      }
      return axios
        .post(`/employee/` + id + `/image`, formData)
        .then((response) => {
          commit('UPLOAD_PROFILE_IMAGE')
          return response.data
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    deleteImage: ({ commit }, id) => {
      return axios
        .delete(`/employee/` + id + `/image`)
        .then((response) => {
          commit('REMOVE_PROFILE_IMAGE')
          return response.data
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    loadAllInternEmployees: ({ commit }) => {
      return axios
        .get(`/employee/intern`)
        .then(response => {
          commit('SET_ALL_INTERN_EMPLOYEES', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_ALL_INTERN_EMPLOYEES', [])
          throw error
        })
    },
    loadAllContactPersons: ({ commit }) => {
      commit('SET_IS_LOADING', true, { root: true })
      return axios
        .get(`/employee/contact`)
        .then(response => {
          commit('SET_ALL_CONTACT_PERSONS', response.data)
          commit('SET_IS_LOADING', false, { root: true })
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_IS_LOADING', false, { root: true })
          commit('SET_ALL_CONTACT_PERSONS', [])
          throw error
        })
    },
    loadProfile: ({ commit }, id) => {
      return axios
        .get(`/employee/profile/${id}`)
        .then(response => {
          commit('LOAD_PROFILE')
          return response.data
        })
        .catch(error => {
          console.warn(error)
          router.push('/error/1')
          throw error
        })
    },
    loadProfileHistory: ({ commit }, id) => {
      return axios
        .get(`/employee/profile/audit/${id}`)
        .then(response => {
          commit('SET_PROFILE_HISTORY', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_PROFILE_HISTORY', [])
          throw error
        })
    },
    loadContactHistory: ({ commit }, id) => {
      return axios
        .get(`/employee/${id}/contacts`)
        .then(response => {
          commit('SET_CONTACT_HISTORY', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_CONTACT_HISTORY', [])
          throw error
        })
    },
    saveNewContactHistoryEntry: ({ commit }, { newEntryObj, id }) => {
      return axios
        .post(`/employee/${id}/contacts`, newEntryObj)
        .then(response => {
          commit('ADD_TO_CONTACT_HISTORY', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    exportEmployeeProfile: ({ commit }, { employeeId, wizardInput }) => {
      return axios
        .post(`/employee/export/${employeeId}`, wizardInput)
        .then(response => {
          commit('EXPORT_PROFILE')
          commit('SET_IS_LOADING', false, { root: true })
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit('SET_IS_LOADING', false, { root: true })
          throw error
        })
    },
    loadLatestExport: ({ commit }, id) => {
      return axios
        .get(`/employee/export/data/${id}`)
        .then(response => {
          commit('LOAD_LATEST_EXPORT')
          commit('SET_IS_LOADING', false, { root: true })
          return response.data
        })
        .catch(error => {
          commit('SET_IS_LOADING', false, { root: true })
          throw error
        })
    },
    updateProfile: ({ commit }, profileObj) => {
      return axios
        .put(`/employee/update`, profileObj)
        .then((response) => {
          commit('SET_PROFILE', response.data)
          return response.data
        })
        .catch(error => {
          console.warn(error)
          commit(
            'SET_SNACKBAR',
            {
              showSnackbar: true,
              snackbarText: 'Speichern fehlgeschlagen',
              snackbarColor: 'error'
            },
            { root: true }
          )
          commit('SET_IS_LOADING', false, { root: true })
          throw error
        })
    },
    loadUserFavorites: ({ commit, rootState }) => {
      axios
        .get(`/employee/fav/get/${rootState.employeeModule.userPrincipal.id}`)
        .then(response => {
          commit('SET_USER_FAVORITES', response.data)
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    setFavoriteEmployee: ({ commit, rootState }, favEmployeeId) => {
      axios
        .get(`/employee/fav/set/${rootState.employeeModule.userPrincipal.id}/${favEmployeeId}`)
        .then(response => {
          if (response.data === 'Removed from Favourite-List') {
            commit('DELETE_USER_FROM_FAVORITES', {
              favEmployeeId: favEmployeeId,
              rootState: rootState
            })
          } else if (response.data === 'Added to Favourite-List')
            commit('ADD_USER_TO_FAVORITES', {
              favEmployeeId: favEmployeeId,
              rootState: rootState
            })
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    },
    loadExternalNames: ({ commit }) => {
      return axios
        .get(`/employee/external/names`)
        .then(response => {
          commit('SET_EXTERNAL_NAMES', response.data)
          return response.data
        })
        .catch(error => {
          commit('SET_EXTERNAL_NAMES', [])
          console.warn(error)
          throw error
        })
    },
    loadExternalEmployee: ({ commit }, id) => {
      return axios
        .get(`/employee/external/${id}`)
        .then(response => {
          commit('LOAD_EXTERNAL_EMPLOYEE')
          return response.data
        })
        .catch(error => {
          console.warn(error)
          throw error
        })
    }
  },
  mutations: {
    EXPORT_PROFILE: () => {},
    LOAD_PROFILE: () => {},
    LOAD_EXTERNAL_EMPLOYEE: () => {},
    UPLOAD_PROFILE_IMAGE: () => {},
    UNTRACK_USER: () => {},
    LOAD_EMPLOYEES_IMAGE: () => {},
    REMOVE_PROFILE_IMAGE: () => {},
    LOAD_LATEST_EXPORT: () => {},
    SET_EXTERNAL_NAMES: (state, names) => {
      state.externalNames = names
    },
    SET_PROFILE_HISTORY: (state, history) => {
      state.history = history
    },
    SET_ONLINE_USERS: (state, users) => {
      state.onlineUsers = users
    },
    SET_ALL_ROLES: (state, roles) => {
      state.allRoles = roles
    },
    SET_ALL_INTERN_EMPLOYEES: (state, emps) => {
      state.allIntern = emps
    },
    SET_ALL_CONTACT_PERSONS: (state, emps) => {
      state.allContacts = emps
    },
    SET_ALL_EMPLOYEE_ROLES: (state, empRoles) => {
      state.employeeRoles = empRoles
    },
    REPLACE_UPDATED_EMPLOYEE_ROLE: (state, updatedDTO) => {
      let index = state.employeeRoles.findIndex(emp => emp.id === updatedDTO.id)
      state.employeeRoles.splice(index, 1, updatedDTO)
    },
    SET_USER_PRINCIPAL: (state, principal) => {
      state.userPrincipal = principal
    },
    SET_PROFILE: (state, profile) => {
      state.profileIndex++
      state.profile = profile
      state.editedProfile = JSON.parse(JSON.stringify(state.profile))
    },
    SET_USER_FAVORITES: (state, favoriteList) => {
      state.userFavorites = favoriteList
    },
    SET_CONTACT_HISTORY: (state, history) => {
      state.contactHistory = history
    },
    ADD_TO_CONTACT_HISTORY: (state, entry) => {
      state.contactHistory.splice(0, 0, entry)
    },
    DELETE_USER_FROM_FAVORITES: (state, { favEmployeeId, rootState }) => {
      //indexe suchen
      let indexOfFavEmpInUserFav = state.userFavorites
        .map(employeeObj => employeeObj.employee.id)
        .indexOf(favEmployeeId)
      let indexOfFavEmpInSearch = rootState.searchModule.searchResults
        .map(employeeObj => employeeObj.employee.id)
        .indexOf(favEmployeeId)

      //Werte in userFavorites ändern
      if (indexOfFavEmpInUserFav !== -1) {
        state.userFavorites[indexOfFavEmpInUserFav].favorite = false
        state.userFavorites.splice(indexOfFavEmpInUserFav, 1)
      }

      //Werte in searchResults ändern
      if (indexOfFavEmpInSearch !== -1) {
        rootState.searchModule.searchResults[indexOfFavEmpInSearch].favorite = false
      }

      //Werte in teamSkills ändern
      if (rootState.statisticModule.teamSkillsStats.length > 0) {
        rootState.statisticModule.teamSkillsStats.map(skillList =>
          skillList.employees.map(employee => {
            if (employee.employeeId === favEmployeeId) {
              employee.favorite = false
            }
          })
        )
      }

      //Werte in teamObj ändern
      if (rootState.teamModule.teamObj.employees) {
        rootState.teamModule.teamObj.employees.map(employee => {
          if (employee.employee.id === favEmployeeId) {
            employee.favorite = false
          }
        })

        if (rootState.teamModule.teamObj.teamLeader.employee.id === favEmployeeId) {
          rootState.teamModule.teamObj.teamLeader.favorite = false
        }
      }
    },
    ADD_USER_TO_FAVORITES: (state, { favEmployeeId, rootState }) => {
      //indexe suchen
      let indexOfFavEmpInSearch = rootState.searchModule.searchResults
        .map(employeeObj => employeeObj.employee.id)
        .indexOf(favEmployeeId)

      //Werte in searchResults ändern
      if (indexOfFavEmpInSearch !== -1) {
        rootState.searchModule.searchResults[indexOfFavEmpInSearch].favorite = true
      }

      //Werte in teamSkills ändern
      if (rootState.statisticModule.teamSkillsStats.length > 0) {
        rootState.statisticModule.teamSkillsStats.map(skillList =>
          skillList.employees.map(employee => {
            if (employee.employeeId === favEmployeeId) {
              employee.favorite = true
            }
          })
        )
      }

      //Werte in teamObj ändern
      if (rootState.teamModule.teamObj.employees) {
        rootState.teamModule.teamObj.employees.map(employee => {
          if (employee.employee.id === favEmployeeId) {
            employee.favorite = true
          }
        })

        if (rootState.teamModule.teamObj.teamLeader.employee.id === favEmployeeId) {
          rootState.teamModule.teamObj.teamLeader.favorite = true
        }
      }
    },
  },
  getters: {
    getProfileSkillByCategory: state => category => {
      return state.profile.skills.filter(data => data.arrayKeyName === category)
    },
    getEditedProfile: state => () => {
      return JSON.parse(JSON.stringify(state.editedProfile))
    }
  }
}

export default employeeModule
