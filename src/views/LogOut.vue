<script setup>
import { isAuthenticated } from '@/states/global'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogOut = () => {
  isAuthenticated.value = false
  router.push('/')
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <h1 class="text-center">Are you sure you want to log out?</h1>
        <button class="btn btn-primary me-2 my-3" @click="handleLogOut">Log Out</button>
      </div>
    </div>
  </div>
</template>
