<template>
  <div
    class="fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full bg-black/50 flex justify-center items-center lg:px-[0px]"
  >
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:bg-tailwind-dark dark:border-gray-700 z-[1111] relative"
    >
      <form
        class="space-y-6"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <h5 class="text-xl font-medium text-gray-900 dark:text-white title">
          Welcome to Scoot
        </h5>
        <div class="form-control" :class="error.nameError ? 'invalid' : ''">
          <button
            type="button"
            @click="$emit('closeModal')"
            class="text-[#FCB72B] font-bold absolute top-5 right-5"
            data-modal-hide="staticModal"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <label
            for="username"
            class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your full-name
          </label>
          <input
            type="text"
            name="text"
            id="username"
            v-model="fullname"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Turabov Umidjon"
          />
          <small class="text-red-600 font-black">{{ error.nameError }}</small>
        </div>
        <div
          class="form-control"
          :class="errorSecond.nameErrorSecond ? 'invalid' : ''"
        >
          <label
            for="email"
            class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="scoot@company.com"
          />
          <small class="text-red-600 font-black">{{
            errorSecond.nameErrorSecond
          }}</small>
        </div>
        <div
          class="form-control"
          :class="errorThird.nameErrorThird ? 'invalid' : ''"
        >
          <label
            for="tel"
            class="block text mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your number
          </label>
          <input
            type="tel"
            name="number"
            v-model.number="tel"
            id="tel"
            autocomplete="off"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            maxlength="13"
          />
          <small class="text-red-600 font-black">{{
            errorThird.nameErrorThird
          }}</small>
        </div>
        <button
          type="submit"
          class="w-full px-5 py-2.5 rounded-lg border-[3px] border-darker-yellow bg-darker-yellow text-white active:text-darker-yellow active:bg-inherit cursor-pointer"
        >
          Sending
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      fullname: "",
      email: "",
      tel: "+998",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
      errorThird: {
        nameErrorThird: null,
      },
    };
  },
  methods: {
    validatedForm() {
      let isValid = true;
      if (this.fullname.length === 0) {
        isValid = false;
        this.error.nameError = "*Enter your fullname here";
      } else {
        isValid = true;
        this.error.nameError = null;
      }
      return isValid;
    },
    validatedFormSecond() {
      let isValidSecond = true;
      if (this.email.length === 0) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*Enter your E-mail address here";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    validatedFormThird() {
      let isValidThird = true;
      if (this.tel.length === 0) {
        isValidThird = false;
        this.errorThird.nameErrorThird = "*Enter your number here";
      } else if (this.tel.length > 13) {
        isValidThird = false;
        this.errorThird.nameErrorThird = "*At least 13 characters!";
      } else {
        isValidThird = true;
        this.errorThird.nameErrorThird = null;
      }
      return isValidThird;
    },
    sendInformation() {
      if (
        this.validatedForm() &&
        this.validatedFormSecond() &&
        this.validatedFormThird()
      ) {
        this.sendData(this.fullname, this.email, this.tel);
      }
    },
    async sendData(name, email, tel) {
      const token = `6674983725:AAGnJRpQtV__e2I7bu9iHtT89ucHFW40Zvo`;
      const bot_id = `-1001837026407`;
      const info = `User: %0A<strong>Username:</strong> ${name} %0A<strong>Email Address:</strong> ${email} %0A<strong>Phone Number:</strong> ${tel}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.toast.success("Your information has been sent");
      this.fullname = "";
      this.email = "";
      this.tel = "";
      this.$emit("closeModal");
    },
  },
  watch: {
    tel(val) {
      if (val) {
        const str = String(val);
        this.tel = "+" + str.replace(/\D/g, "");
      }
    },
  },
};
</script>
<style>
.form-control.invalid input {
  border-color: red;
}
.title {
  font-family: "Space Mono";
}
.text {
  font-family: "Lexend Deca";
}
</style>
