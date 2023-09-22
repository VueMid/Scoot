<template>
    <div
        class="z-[1111] fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full bg-black/50 flex justify-center items-center lg:px-[0px]">
        <div
            class="w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:bg-tailwind-dark dark:border-gray-700 z-[1111] relative">
            <form class="space-y-6" action="#" @submit.prevent="formValidated">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white title">Welcome to Scoot</h5>
                <div>
                    <button type="button" @click="$emit('closeModal')"
                        class=" text-[#FCB72B] font-bold absolute top-5 right-5" data-modal-hide="staticModal">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <label for="text" class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your full-name
                    </label>
                    <input type="text" name="text" id="text" v-model="fullname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Turabov Umidjon" required>
                </div>
                <div>
                    <label for="email" class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                    </label>
                    <input type="email" name="email" id="email" v-model="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="scoot@company.com" required>
                </div>
                <div>
                    <label for="tel" class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your number
                    </label>
                    <input type="tel" name="tel" id="tel" v-model="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="(+998)" required>
                </div>
                <button type="submit" class=" w-full px-5 py-2.5 rounded-lg border-[3px]
                border-darker-yellow bg-darker-yellow text-white active:text-darker-yellow active:bg-inherit ">
                    Sending
                </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fullname: '',
            email: '',
            tel: '',
        }
    },
    watch: {
        tel(val) {
            if (val) {
                const str = String(val)
                this.tel = str.replace(/\D/g, '')
            }
        }
    },
    methods: {
        formValidated() {

        }
    },
}
</script>
<style>
.title {
    font-family: 'Space Mono';
}

.text {
    font-family: 'Lexend Deca';
}
</style>
