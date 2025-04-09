<template>
  <header class="header">
    <nav class="navbar container">
      <!-- logo -->
      <div class="order-0">
        <router-link to="/">
          <img src="https://themewagon.github.io/pinwheel/images/logo.svg" height="30" width="147" alt="logo" />
        </router-link>
      </div>
      <!-- navbar toggler -->
      <input id="nav-toggle" type="checkbox" class="hidden" />
      <label id="show-button" for="nav-toggle" class="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden">
        <svg class="h-6 fill-current" viewBox="0 0 20 20">
          <title>Menu Open</title>
          <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
        </svg>
      </label>
      <label id="hide-button" for="nav-toggle" class="order-2 hidden cursor-pointer items-center lg:order-1">
        <svg class="h-6 fill-current" viewBox="0 0 20 20">
          <title>Menu Close</title>
          <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
            transform="rotate(45 10 10)"></polygon>
        </svg>
      </label>
      <!-- /navbar toggler -->
      <ul id="nav-menu"
        class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/career" class="nav-link">Career</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/blog" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/features" class="nav-link">Features</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/how-it-works" class="nav-link">How It Works</router-link>
        </li> -->
        <!-- <li class="nav-item nav-dropdown group relative">
          <span class="nav-link inline-flex items-center">
            Pages
            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
          <ul
            class="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
            <li class="nav-dropdown-item">
              <router-link to="/career" class="nav-dropdown-link">Career</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/career-single" class="nav-dropdown-link">Career Single</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/integrations" class="nav-dropdown-link">Integrations</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/integration-single" class="nav-dropdown-link">Integration Single</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/pricing" class="nav-dropdown-link">Pricing</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/changelogs" class="nav-dropdown-link">Changelogs</router-link>
            </li>
            <li class="nav-dropdown-item">
              <router-link to="/terms-conditions" class="nav-dropdown-link">Terms & Conditions</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li> -->
        <li class="nav-item mt-3.5 lg:hidden">
          <router-link class="btn btn-white btn-sm border-border" to="/login">Sing Up Now</router-link>
        </li>
      </ul>
      <div class="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
        <router-link class="btn btn-white btn-sm" to="/login">Sing Up Now</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { inject, provide, ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>
