<template>
  <!-- <div class="flex flex-wrap w-[50%] m-auto mt-10 bg-black">
    <div v-for="(cell, index) in board" :key="index"
      class="aspect-square w-[calc(100%/15)] border flex items-center justify-center text-xl cursor-pointer" :class="getCellColor(cell)"
      @click="makeMove(index)">
      {{ cell }}
    </div>
  </div> -->Room
</template>

<script setup>
import { ref } from 'vue'
import { inject, onMounted } from "vue";

const title = inject('title')

onMounted(() => {
  title.value = 'Room'
})
// const board = ref(Array(15 * 15).fill(''))

// const currentPlayer = ref('X') // X, O, Δ

// const makeMove = (index) => {
//   if (board.value[index] !== '') return
//   board.value[index] = currentPlayer.value
//   // emit socket event ở đây
//   nextPlayer()
// }

// const nextPlayer = () => {
//   if (currentPlayer.value === 'X') currentPlayer.value = 'O'
//   else if (currentPlayer.value === 'O') currentPlayer.value = 'Δ'
//   else currentPlayer.value = 'X'
// }

// const getCellColor = (cell) => {
//   return {
//     'text-red-500': cell === 'X',
//     'text-blue-500': cell === 'O',
//     'text-green-500': cell === 'Δ',
//   }
// }
</script>
