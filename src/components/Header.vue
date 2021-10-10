<template>
  <header class="">
        <!-- Navigation-->
        <nav class="my-12 px-24 hidden lg:flex">
            <!-- Logo -->
            <a href="#">
                <svg class="w-14 h-14" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
                    <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
                </svg>
            </a>
            <!-- Menu -->
            <ul class="flex items-center ml-4 lg:ml-32 font-semibold text-gray-500">
                <!-- Active element-->
                <li class="ml-12">
                    <a href="#about" class="text-blue-900 hover:text-gray-900">
                        About
                    </a>
                </li>
                <li class="ml-12">
                    <a href="#help" class="hover:text-blue-900">
                        Help
                    </a>
                </li>
                <li class="ml-12">
                    <a href="#features" class="hover:text-blue-900">
                        Features
                    </a>
                </li>
            </ul>
            <!-- Login button -->
            <div v-if="accountId" class="block px-8 py-1 shadow-md hover:shadow-sm rounded-full flex text-lg font-semibold text-blue-900 ml-auto items-center bg-white">
                <img src="@/assets/img/near-logo.png" alt="near-logo">
                {{accountId}}
            </div>
            <button @click="signIn" v-else class="block px-8 py-1 shadow-md hover:shadow-sm rounded-full flex text-lg font-semibold text-blue-900 ml-auto items-center bg-white">
                Login with NEAR
                <img src="@/assets/img/near-logo.png" alt="near-logo">
            </button>
        </nav>
        <!-- Naviagtion mobile -->
        <nav class="flex items-center my-6 px-6  lg:hidden" id="openMenu">
            <a href="#" id="burger" onclick="openMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
            <a href="#" class="ml-auto">
                <svg class="w-14 h-14" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
                    <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
                </svg>
            </a>
        </nav>
        <!-- Offer -->
        <div class="mx-6 lg:mx-24 relative">
            <!-- Offer title -->
            <div class="">
                <h2 class="text-4xl lg:text-5xl lg:text-6xl font-bold text-blue-900">
                    Make your <br class="hidden lg:block"> opinion change <br class="hidden lg:block"> your community
                </h2>
            </div>
            <!-- Offer description -->
            <div class="mt-8 w-full md:w-1/2 lg:w-1/3">
                <p class="text-gray-500">
                    Use blockchain technology based on the NEAR protocol to create complaints or suggestions for problems in your community and send them to your town hall with the assurance that they will never be eliminated.
                </p>
            </div>
            <!-- Offer button -->
            <div class="mt-10">
                <a href="#" class="bg-purple-500 hover:bg-purple-400 text-white px-9 py-4 rounded-full">
                    Learn more
                </a>
            </div>
            <!-- Offer img-->
            <div class="block lg:absolute mt-8 lg:mt-0 right-0 top-0" style="z-index: -1;">
                <img src="@/assets/img/offer-img.png" alt="offer-img" class="">
            </div>
        </div>
        <!-- Second offer -->
        <div class="bg-pink-100 rounded-3xl mx-0 lg:mx-24 mt-24 lg:mt-48 py-6 lg:flex">
            <!-- Second offer img -->
            <div class="lg:w-1/2">
                <img src="@/assets/img/second-offer.png" alt="second-offer" class="mx-auto">
            </div>
            <!-- Second offer title -->
            <div class="block lg:flex items-center ml-auto lg:w-1/2 text-center lg:text-left">
                <h2 class="text-4xl lg:text-5xl text-blue-900 font-bold w-full lg:w-96">
                    Decentralize the choice of problems to be solved by the city council
                </h2>
            </div>
        </div>
    </header>
</template>

<script>
import store from '../store/store.js'
import { wallet, CONTRACT_ID } from "@/services/near"


export default {
    setup() {
        const accountId = store.state.accountId

        return {
            accountId,
            signIn: () => wallet.requestSignIn(CONTRACT_ID)
        }
    }
}
</script>