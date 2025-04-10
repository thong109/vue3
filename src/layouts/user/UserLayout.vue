<template>
  <Aside />
  <main class="ease-soft-in-out ml-[17.125rem] relative h-full max-h-screen rounded-xl transition-all duration-200">
    <Navbar :title="title"/>
    <div class="w-full px-6 py-6 mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script setup>
// import Header from '@/components/user/Header.vue';
import Navbar from '@/components/user/Navbar.vue';
import Aside from '@/components/user/Aside.vue';
import { provide, ref } from 'vue';
const title = ref(null)

provide('title', title)
</script>
