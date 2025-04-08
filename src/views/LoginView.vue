<template>
  <div class="pt-16">
    <h1 class="text-3xl font-semibold mb-4">Enter your phone number</h1>
    <div class="flex items-center justify-center">
      <button class="p-2 bg-slate-500 rounded-[10px] mx-2 mb-4 w-[100px]" @click="handleChange">Change</button>
    </div>
    <form action="#" v-if="!waitingOnVerification">
      <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div>
            <input type="text" v-maska="'###-####-###'" v-model="credentials.phone" name="phone" id="phone"
              placeholder="077-8960-401"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">Continue</button>
        </div>
      </div>
    </form>
    <form action="#" v-else>
      <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div>
            <input type="text" v-maska="'######'" v-model="credentials.login_code" name="login_code" id="login_code"
              placeholder="077-8960-401"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">Verify</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { vMaska } from "maska/vue";
import { onMounted, reactive, ref, watch } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";
import http from '@/helpers/http'

const router = useRouter()

const credentials = reactive({
  phone: null,
  login_code: null
})

const waitingOnVerification = ref(false)

const myFunction = () => {
  console.log(23);

}
onMounted(() => {
  // if (localStorage.getItem('token')) {
  //   router.push({
  //     name: 'landing'
  //   })
  // }
  myFunction()
})

watch(waitingOnVerification, () => {
  myFunction();
});

const getFormattedCredentials = () => {
  return {
    phone: credentials.phone.replaceAll('-', ''),
    login_code: credentials.login_code
  }
}

const handleChange = () => {
  waitingOnVerification.value = !waitingOnVerification.value;
}

</script>