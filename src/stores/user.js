import {
  defineStore
} from 'pinia'
import axiosConfig from '@/helpers/axiosConfig'

export const useUserStore = defineStore('user', {
  state: () => ({
    data: {
      id: null,
      name: '',
      email: '',
      user_info: {
        address: '',
        avatar: '',
        description: '',
        location: '',
        phone: ''
      }
    },
    isLoading: false
  }),
  actions: {
    async fetchUser() {
      this.isLoading = true
      try {
        const response = await axiosConfig.get('/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
          }
        })
        const res = response.data
        this.data.id = res.id
        this.data.name = res.name
        this.data.email = res.email
        this.data.user_info = {
          address: res.user_info?.address ?? '',
          avatar: res.user_info?.avatar ?? '',
          description: res.user_info?.description ?? '',
          location: res.user_info?.location ?? '',
          phone: res.user_info?.phone ?? ''
        }
      } catch (err) {
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },

    async updateUserProfile() {
      try {
        const response = await axiosConfig.post(`/user/update/${this.data.id}`, this.data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json'
          }
        })
        console.log(response.data)
        return response.data
      } catch (err) {
        console.error('Update failed:', err)
        throw err
      }
    }
  }
})