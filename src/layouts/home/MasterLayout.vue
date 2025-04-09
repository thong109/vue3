<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import { provide } from 'vue';

const datas = [
  { name: 'Sr. React Native Developer', category: 'Development', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'San Francisco', id: 1 },
  { name: 'Lead UI/UX Designer', category: 'Design', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'San Francisco', id: 2 },
  { name: 'Head of Inbound Marketing', category: 'Marketing', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'San Francisco', id: 3 },
  { name: 'Lead Brand Designer', category: 'Design', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'Los Angeles', id: 4 },
  { name: 'Lead UI/UX Designer', category: 'Design', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'San Francisco', id: 5 },
  { name: 'Sr. React JS Developer', category: 'Development', detail: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam lorem amet eget in netus laoreet', time: 'Full Time', location: 'Los Angeles', id: 6 },
]

const dataObj = Object.fromEntries(datas.map(item => [item.id, item]))
provide('datas', dataObj)

</script>
