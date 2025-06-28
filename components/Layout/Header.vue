<script setup>
import CartCounter from '../UI/CartCounter.vue';
import { ref, onMounted} from 'vue'

const isOpen = ref(false);
const isAuth = ref(false)

const isOpenModal = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
    const modal = document.getElementById('modal-pop');
    const modal_button = document.getElementById('modal_action')
    document.addEventListener('click', (event) => {
        if (modal && !modal.contains(event.target) && !modal_button.contains(event.target)) {
            isOpenModal.value = false
        }   
            
    })
})

</script>

<template>
  <div id="main">
    <div id="modal-pop" class='user_actions pop-up-window' :class="{open_pop: isOpenModal}" v-if="!isAuth">
        <NuxtLink to="/wishlist">
            Wishlist
        </NuxtLink>
        <NuxtLink>
            Orders
        </NuxtLink>
        <NuxtLink>
            Log Out
        </NuxtLink>
    </div>
    <div class="header_search" >
        <NuxtLink to="/" @click="scrollToTop">CustomSTL3D</NuxtLink>
        <input type="search" id="site-search" placeholder="Search for 3D models">
    </div>

    <div class="menu-buttons">
        <div style="position: relative;">
            <CartCounter style="top: 14px; left: 12px;"/>
            <NuxtLink class="user_cart">
                    <img src="/icons/cart.svg" alt="cart">
            </NuxtLink>
        </div>

        <button class="menu" @click="toggleMenu">
            <img src="/icons/menu.svg" alt="menu-img">
        </button>

        <div class="usermenu" :class="{'open': isOpen}">
            <input style="width: 100%;" type="search" id="site-search" class="search-second" placeholder="Search for 3D models">
            <div class="divider"></div>
            <div class="links">
                <NuxtLink class="links_item">
                    All Models
                </NuxtLink>
                <NuxtLink class="links_item">
                    Miniatures
                </NuxtLink>
            </div>
            <div class="divider"></div>
            <NuxtLink class="user_profile" v-if="isAuth">
                <img src="/icons/user-circle.svg" alt="user-profile">
                <h4>Log In</h4>
            </NuxtLink>
            <div class='user_actions' v-if="!isAuth">
                <NuxtLink to="/wishlist">
                    Wishlist
                </NuxtLink>
                <NuxtLink>
                    Orders
                </NuxtLink>
                <NuxtLink>
                    Log Out
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="header_items">
        <div class="links">
            <NuxtLink class="links_item">
                All Models
            </NuxtLink>
            <NuxtLink class="links_item">
                Miniatures
            </NuxtLink>
        </div>
        <div class="header_user">
            <CartCounter/>
            <NuxtLink class="user_cart">
                <img src="/icons/cart.svg" alt="cart">
            </NuxtLink>
            <NuxtLink id="modal_action" class="user_profile" @click="!isAuth ? isOpenModal=!isOpenModal : null">
                <img src="/icons/user-circle.svg" alt="user-profile">
                <h4 v-if="isAuth">Log In</h4>
            </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped >
#main{
    width: 100%;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    padding: 18px $pd;
    z-index: 100;
    backdrop-filter: blur(12px);

    background: rgba($bg1, 0.1);
}
.header_user {
    position: relative;

    & > div {
        left: 12px;
        top: 14px;
    }
}
.menu-buttons{
    display: none;
    
    & > button{
        background: transparent;
        border: none;
        opacity: 0.8;

        &:hover{
            opacity: 1;
        }
    }

    & > .usermenu{
        display: flex;
        flex-direction: column;
        position: fixed;
        align-items: center;
        top: 75px;
        left: 0;
        right: 0;
        width: 100%;
        padding: 30px;
        background: $black;
        opacity: 0;
        z-index: 999;
        pointer-events: none;

        & > .divider{
            background: rgba($white, 0.1);
            border-radius: 10px;
            height: 1px;
            margin-top: 25px;
            margin-bottom: 25px;
            width: 100%;
        }

        & > .links{
            flex-direction: column;
            gap: 30px;
            & > a {
                opacity: 1;
            }
        }
    }
}
.user_actions{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > a:last-child {
        color: $red;
    }
}
.open{
    opacity: 1 !important;
    pointer-events: auto !important;
}
.pop-up-window{
    pointer-events: none;
    opacity: 0;
    position: absolute;
    background: $black;
    width: 200px;
    right: 120px;
    top: 75px;
    gap: 0;
    border-radius: 6px;
    border: 1px solid rgba($white, 0.1);
    align-items: start;

    & > a {
        padding: 15px;
        opacity: 0.8;
        width: 100%;

        &:hover{
            background: rgba($white, 0.05);
            opacity: 1;
        }
        &:last-child{
            opacity: 1;

            &:hover{
                background: rgba($red, 0.05);
            }
        }
    }

    &.open_pop{
        pointer-events: auto !important;
        opacity: 1 !important;
    }
}
.header_search, .header_items, .header_user, .user_profile{
    display: flex;
    align-items: center;
}
.header_search{
    gap: 50px;

    & > a{
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
#site-search{
    width: 344px;
    padding: 8px 0px 8px 10px;
    align-items: center;
    gap: 12px;

    background: url('/icons/search-line.svg') no-repeat 10px center !important;
    padding-left: 45px;

    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 6px;
    border: 1px solid $white;
    background: transparent;
    opacity: 0.6;

    &:hover{
        opacity: 0.7;
    }

    &:focus{
        opacity: 1;
    }
}

.header_items{
    gap: 50px;
}
.header_user{
    gap: 20px;
}
.links{
    display: flex;
    gap: 20px;

    & > .links_item{
        opacity: 0.8;
        &:hover{
            opacity: 1;
        }
    }
}
.links_item, .user_profile > h4 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.header_user > a{
    opacity: 0.8;

    &:hover{
        opacity: 1;
    }
}
.user_profile{
    gap: 5px;
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
    #main{
        padding: 18px 90px;
    }
    .links{
        display: none;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    #main{
        padding: 18px 60px;
    }
    .links{
        display: none;
    }
}
@media screen and (max-width: 899px){
    #main{
        padding: 18px 16px;
    }
    #site-search{
        display: none;
    }
    .search-second{
        display: block !important;
    }
    .header_items{
        display: none;
    }
    .menu-buttons{
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>