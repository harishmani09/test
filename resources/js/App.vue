<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="container mx-auto font-sans bg-indigo-200">
        <header class="py-6 mb-8">
            <img src="/images/logo.svg" alt="laracast" />
        </header>
        <main class="flex">
            <aside class="w-1/5">
                <section class="mb-8">
                    <h5 class="uppercase font-bold mb-2">The Brand</h5>
                    <ul class="list-reset">
                        <li class="text-black text-sm pb-2">
                            <router-link :to="{ name: 'logo' }"
                                >Logo</router-link
                            >
                        </li>

                        <li class="text-black text-sm pb-2">
                            <router-link :to="{ name: 'logosymbol' }"
                                >Logo Symbol</router-link
                            >
                        </li>

                        <li class="text-black text-sm pb-2">
                            <router-link :to="{ name: 'colors' }"
                                >Colors</router-link
                            >
                        </li>

                        <li class="text-black text-sm pb-2">
                            <router-link :to="{ name: 'typography' }"
                                >Typography</router-link
                            >
                        </li>
                    </ul>
                </section>
                <section>
                    <h5 class="uppercase font-bold mb-2">The Doodles</h5>
                    <ul class="list-reset">
                        <li class="text-sm text-black pb-2">
                            <router-link :to="{ name: 'mascots' }"
                                >Mascots</router-link
                            >
                        </li>

                        <li class="text-sm text-black pb-2">
                            <router-link :to="{ name: 'illustrations' }"
                                >Illustrations</router-link
                            >
                        </li>
                        <li class="text-sm text-black pb-2">
                            <router-link :to="{ name: 'loadersAnimations' }"
                                >Loaders & Animations</router-link
                            >
                        </li>
                        <li class="text-sm text-black pb-2">
                            <router-link :to="{ name: 'wallpapers' }"
                                >Wallpapers</router-link
                            >
                        </li>
                    </ul>
                </section>
            </aside>
            <div class="primary flex-1">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
