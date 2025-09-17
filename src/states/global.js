import { ref } from 'vue'

export const isAuthenticated = ref(false)

export const authCredentials = ref({
  username: 'admin',
  password: 'admin'
})
