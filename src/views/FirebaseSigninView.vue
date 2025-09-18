<template>
  <div class="d-flex justify-content-center align-items-center pt-5">
    <div class="text-center border rounded p-4 shadow">
      <h1>Sign in</h1>
      <p>
        <input type="text" class="form-control my-2" placeholder="Email" v-model="email" />
      </p>
      <p>
        <input
          type="password"
          class="form-control my-2"
          placeholder="Password"
          v-model="password"
        />
      </p>
      <p>
        <button class="btn btn-primary w-100" @click="signin">Sign in via Firebase</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Firebase Register Successful!')
      router.push('/')
      console.log(auth.currentUser) //To check the current User signed in
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
