<script setup>
import { authCredentials, isAuthenticated } from '@/states/global'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  username: '',
  password: ''
})

const errors = ref({
  username: null,
  password: null,
  auth: null
})

const clearForm = () => {
  formData.value = {
    username: '',
    password: ''
  }

  errors.value = {
    username: null,
    password: null,
    auth: null
  }
}

const validateName = () => {
  if (!formData.value.username) errors.value.username = 'Username is required'
}

const validatePassword = () => {
  if (!formData.value.password) errors.value.password = 'Password is required'
}

const submitForm = () => {
  if (
    formData.value.username === authCredentials.value.username &&
    formData.value.password === authCredentials.value.password
  ) {
    isAuthenticated.value = true
    console.log('ok')
    clearForm()
    router.push('/')
    return
  }
  errors.value.auth = 'Username/Password is not valid'
}
</script>

<template>
  <!-- 🗄️ W3. Library Login Form -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ W4. Library Login Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="formData.username"
                @blur="() => validateName()"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="formData.password"
                @blur="() => validatePassword()"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>
          <div v-if="errors.auth" class="text-danger pb-2">{{ errors.auth }}</div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Login</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
