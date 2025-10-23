<template>
  <div class="container pt-5">
    <div class="d-flex justify-content-center mb-4">
      <div class="text-center border rounded p-4 shadow" style="max-width: 400px; width: 100%">
        <h1>Add Book</h1>
        <form @submit.prevent="addBook">
          <div class="mb-3 text-start">
            <label for="isbn" class="form-label">ISBN:</label>
            <input type="text" v-model="isbn" id="isbn" class="form-control" required />
          </div>
          <div class="mb-3 text-start">
            <label for="name" class="form-label">Name:</label>
            <input type="text" v-model="name" id="name" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Add Book</button>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="border rounded p-4 shadow w-100" style="max-width: 600px">
        <BookList />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

import BookList from '../components/BookList.vue'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        isbn.value = ''
        name.value = ''
        alert('Book added successfully! something change')
      } catch (error) {
        console.error('Error adding book: ', error)
      }
    }

    return { isbn, name, addBook }
  },
  components: {
    BookList
  }
}
</script>
