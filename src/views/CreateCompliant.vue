<template>
    <div class="page-bg">
    <header class="flex">
        <nav class="border-r-4 border-blue-100" style="min-width: 125px; min-height: 100vh;">
            <!-- <div class="w-full py-10">
                <a href="#" class="ml-auto block text-center">
                    <img src="@/assets/img/communite-logo.png" alt="" class="mx-auto">
                </a>
            </div> -->
            <ul class="mt-48">
                <li class="mt-8">
                    <router-link to="/dashboard" class="block py-2 hover:bg-gray-200">
                        <img src="@/assets/img/dashboard.png" alt="" class="mx-auto">
                    </router-link>
                </li>
                <li class="mt-8 border-r-8 border-purple-500">
                    <router-link to="/create" class="block py-2 hover:bg-gray-200">
                        <img src="@/assets/img/form.png" alt="" class="mx-auto">
                    </router-link>
                </li>
            </ul>
        </nav>
        <main class="mr-auto block" style="height: 100vh;">
            <nav class="w-full pt-12 ml-10">
                <h1 class="text-2xl text-gray-900 font-semibold">
                    Create complaint or suggestion
                </h1>
                <form action="" class="mt-8">
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mt-1 absolute left-4 top-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" class="pl-16 h-12 w-96 h-10 rounded-2xl outline-none shadow-2xl">
                    </div>
                </form>
            </nav>
            <div class="shadow-2xl rounded-3xl mt-10 ml-10 px-12 py-4" style="width: 600px; background: rgba(255, 255, 255, 0.5);"> 
                <form action="" class="mt-10 w-full">
                    <div class="mt-8">
                        <h3 class="text-lg font-semibold">
                            Compliant title
                        </h3>
                        <input type="text" placeholder="Write here" class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4">
                    </div>
                    <div class="mt-8">
                        <h3 class="text-lg font-semibold">
                            Description
                        </h3>
                        <input type="textarea" placeholder="Write here" class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4">
                    </div>
                    <div class="mt-8">
                        <h3 class="text-lg font-semibold">
                            Category
                        </h3>
                        <input type="text" placeholder="Write here" class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4">
                    </div>
                    <div class="mt-8">
                        <h3 class="text-lg font-semibold">
                            Location
                        </h3>
                        <input type="text" placeholder="Write here" class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4">
                    </div>
                    <div class="w-full mt-10 flex justify-center">
                        <a href="" class="bg-purple-500 hover:bg-purple-400 text-white text-lg font-semibold py-4 px-8 rounded-full">Create</a>
                    </div>
                </form>
            </div>
        </main>
        <section class="px-10 border-l-4 border-blue-100 px-12">
            <div class="w-96 mt-12">
                <a type="button" @click="signOut" class="flex  items-center text-gray-900 bg-white hover:bg-gray-50 active:shadow-none py-2 rounded-2xl shadow-2xl text-xl text-center font-semibold flex item-center justify-center">
                    <img src="@/assets/img/near-logo.png" alt="near-logo">
                    <span>
                        {{accountId}}
                    </span> 
                    <div class="flex flex-col mx-3 items-center mt-1 ml-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <!-- <p class="text-sm">logout</p> -->
                        </div>
                </a>
            </div>
            <h2 class="mt-16 text-2xl text-gray-900 font-semibold">
                Your recent compliants
            </h2>
            <div class="rounded-3xl shadow-2xl mt-8 px-6 py-10" style=" background: url(./img/card.png) center no-repeat; background-size: cover;">
                <h3 class="text-xl text-gray-900 font-medium ">
                    Water problem 
                </h3>
                <h3 class="text-xl text-gray-600 font-medium mt-2">
                    Description: 
                </h3>
                <p class="text-lg text-gray-900 font-semibold">
                    There is a water leak on my street
                </p>
                <h3 class="text-xl text-gray-600 font-medium mt-2">
                    Location: 
                </h3>
                <p class="text-lg text-gray-900 font-semibold">
                    Coyoacan street zip code 63040 
                </p>

                <div class="flex mt-2">
                    <h3 class="text-xl text-gray-600 font-medium">
                        Votes: 
                    </h3>
                    <p class="text-xl text-gray-900 font-semibold ml-4">
                        5
                    </p>
                </div>
                <div class="flex mt-2">
                    <h3 class="text-xl text-gray-600 font-medium">
                        Status: 
                    </h3>
                    <p class="text-xl text-gray-900 font-semibold ml-4">
                        In progress
                    </p>
                </div>
            </div>
            <!-- <div class="w-full mt-24 flex justify-center">
                <a href="" class="bg-purple-500 hover:bg-purple-400 text-white text-lg font-semibold py-4 px-8 rounded-full">New compliant</a>
            </div> -->
        </section>
    </header>
    </div>
</template>

<script>
import store from '../store/store.js'
import { wallet} from "@/services/near";
import router from '@/router/index.js'

export default {
    setup() {
        const accountId = store.state.accountId

        return {
            accountId,
            signOut: () => {
                wallet.signOut();
                router.push('/')
            }
        }
    }
}
</script>