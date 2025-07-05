<template>
    <div class="login_page">
        <img src="/img/abstract42g.png" alt="img">
        <div class="login_content">
            <h1>Log In To Your <span>CustomSTL3D</span> Account</h1>
            <div class="all_inputs">
                <div class="input_email">
                    <input 
                        @blur="validateEmail" 
                        @focus="resetValidationEmail"
                        :style="{ opacity: email.length > 0 ? '1' : ''}"
                        :class="{incorrect_input: !isValidEmail && email && isDirtyEmail}"
                        v-model="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required
                    >
                </div>
                <div class="input_pass" v-if="isValidEmail && isDirtyEmail && email">
                    <input 
                        @blur="validatePassword" 
                        @focus="resetValidationPassword"
                        :style="{ opacity: password.length > 0 ? '1' : ''}"
                        :class="{incorrect_input: !isValidPassword && password && isDirtyPassword && !hasAccount}"
                        v-model="password" 
                        type="password" 
                        placeholder="Enter your password" 
                        required
                    >
                </div>
                <div class="input_pass_repeat" v-if="isValidEmail && isDirtyEmail && email && !hasAccount">
                    <input 
                        @blur="checkPassword" 
                        @focus="resetValidationPassword"
                        :style="{ opacity: password_repeat.length > 0 ? '1' : ''}"
                        :class="{incorrect_input: !password_match && password_repeat && isDirtyPasswordRepeat}"
                        v-model="password_repeat" 
                        type="password" 
                        placeholder="Repeat your password" 
                        required
                    >
                </div>
                <p class="incorrect_text" v-if="error">{{ error }}</p>
                <p class="incorrect_text" v-if="!password_match && password_repeat && isDirtyPasswordRepeat">Passwords don't match</p>
                <p class="incorrect_text" v-if="password && !isValidPassword && isDirtyPassword && !hasAccount">Password must be at least 8 characters long and include a number, a letter, and a special character</p>
                <p class="incorrect_text" v-if="email && !isValidEmail && isDirtyEmail">Incorrect email address is specified</p>
            </div>
            <button 
                @click="hasAccount ? auth() : register()" 
                :class="{active: hasAccount && email && password}" 
                class="button--filled"
                >Log In</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const { loggedIn, session, user, clear, fetch: refreshSession } = useUserSession()
const router = useRouter()
const hasAccount = ref(false)
const error = ref('')

const email = ref('')
const isValidEmail = ref(false)
const isDirtyEmail = ref(false)

const password = ref('')
const isValidPassword = ref(false)
const isDirtyPassword = ref(false)

const password_repeat = ref('')
const password_match = ref(false)
const isDirtyPasswordRepeat = ref(true)

async function validateEmail() {
    isDirtyEmail.value = true
    isValidEmail.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)

    if (email && isValidEmail && isDirtyEmail) {
        try {
            const res = await $fetch('/api/auth/email-check', {
                method: 'POST',
                body: { email: email.value }
            })
            hasAccount.value = res
        } catch (e) {
            console.log("Ошибка:", e)
        }
    }
}
function validatePassword() {
    isDirtyPassword.value = true
    isValidPassword.value = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password.value)
}
function resetValidationEmail() {
    isDirtyEmail.value = false
    password.value = ''
    password_repeat.value = ''
}
function resetValidationPassword() {
    isDirtyPassword.value = false
    isDirtyPasswordRepeat.value = false
}
function checkPassword() {
    isDirtyPasswordRepeat.value = true
    password_match.value = password.value === password_repeat.value
}
async function register() {
    await $fetch('/api/auth/register', {
        method: 'POST',
        body: { email: email.value, password: password.value }
    }).then(async () => {
        await refreshSession()
        router.push('/email-verification')
        console.log('user', user.value)
    }).catch((e) => {
        error.value = e.data.message
        console.log("Ошибка:", e)
    })
}
async function auth() {
    await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email: email.value, password: password.value }
    }).then(async () => {
        await refreshSession()
        router.push('/')
        console.log('user', user.value)
        cart.setCount(user.value.wishlist.lenght)
    }).catch((e) => {
        error.value = e.data.message
        console.log("Ошибка:", e)
    })
}
</script>

<style lang="scss" scoped>
.login_page{
    margin-top: 208px;
    margin-bottom: 80px;
    padding: 0 $pd;

    & > img {
        position: absolute;
        right: 206px;
        top: 208px
    }
}
.login_content{
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 453px;

    & > h1 {
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        width: 603px;
        line-height: normal;

        & > span{
            font-size: 40px;
            background: linear-gradient(87deg, #8EE1FF, #38caff, #84edff, #5cfff7,  #4afdd6);
            background-size: 300%;
            animation: gradient 4s ease-in-out infinite;
            -moz-animation: gradient 4s ease-in-out infinite;
            -webkit-animation: gradient 4s ease-in-out infinite;
            -webkit-background-clip: text;
            transform: translate3d(0, 0, 0);
            background-clip: text;
            font-weight: 700;
            color: transparent;
        }   
    }

    & input{
        padding: 10px 15px;
        border-radius: 6px;
        background: transparent;
        border: 1px solid $white;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 100%;
        
        opacity: 0.6;

        &:focus{
            opacity: 1;
        }
    }
    & .input_email {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
}
button{
    width: 100% !important;
    pointer-events: none;
    opacity: 0.5 !important;

    &.active{
        pointer-events: auto;
        opacity: 1 !important;
    }
}
.button {
    &--filled {
        @include button-filled;
    }
}
.all_inputs{
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > p {
        font-size: 14px;
    }
}
.incorrect_text, .incorrect_input{
    color: $red;
    border-color: $red !important;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>