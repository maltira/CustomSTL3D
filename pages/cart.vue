<script setup>
import { ref } from 'vue'
import ProductCard from '../components/UI/ProductCard.vue';
import { useProductsStore } from '@/stores/products'
const { loggedIn, user, session, fetch, clear} = useUserSession()

const promocode = ref('')
const productsStore = useProductsStore()
const isExistCart = ref(false)
const listOfCart = []
const totalPrice = [0, 0] // [old_price, new_price]

onMounted(async () => {
  try {
    isExistCart.value = user.value.cart.length > 0

    for (let item of user.value.cart) {
        listOfCart.push(productsStore.getById(item.product_id))
    }
    console.log('listOfCart: ', listOfCart)

    if (listOfCart.length > 0) {
        for (let item of listOfCart){
            totalPrice[0] += eval(item.old_price)
            totalPrice[1] += eval(item.price)
        }
        console.log('totalPrice:', totalPrice)
    }
  } catch (e) {
    console.error('Ошибка:', e)
  }
})
</script>

<template>
    <div class="cart">
        <div class="cart_content">
            <h1>Your Cart</h1>
            <div class="cart_inner" v-if="isExistCart">
                <div class="cart_items">
                    <ProductCard v-for="(model, i) in listOfCart" :key="i"
                        :id="model.id"
                        :title="model.title"
                        :price="model.price"
                        :category="model.category"
                        :image="model.thumbnail"
                    />
                    
                </div>
                <div class="enter_promocode">
                    <div>
                        <input v-model="promocode" :class="{has_content: promocode.length > 0}" type="text" name="promocode" id="promocode_input" placeholder="Enter the promocode">
                        <button class="button--filled">Apply</button>
                    </div>
                    <p>The promocode is activated, you have received a «20% discount on the purchase»</p>
                </div>
            </div>
            <div class="cart_empty" v-if="!isExistCart"> 
                <img width="60px" src="/icons/search-line.svg" alt="search">
                <h4>There is nothing here</h4>
            </div>
        </div>
        <div class="cart_actions">
            <div class="cart_prices" v-if="isExistCart">
                <p>${{ totalPrice[0] }}</p>
                <h4>${{ totalPrice[1] }}</h4>
            </div>
            <button class="button--filled" :class="{disable_button: !isExistCart}">Proceed To Checkout</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart{
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    padding: 0 320px;
    gap: 60px;
    margin-bottom: 120px;

    & > div > h1 {
        margin-bottom: 25px;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
.cart_inner{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.enter_promocode{
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > p {
        text-align: center;
        opacity: 0.5;
    }
    & > div {
        display: flex;
        gap: 10px;
        > input{
            width: 80%;

            background: transparent;
            border: 1px solid $white;
            outline: none;
            padding: 10px 15px;
            border-radius: 6px;
            opacity: 0.6;
            font-size: 16px;

            font-style: normal;
            font-weight: 400;
            line-height: normal;

            &:focus, &.has_content{
                opacity: 1;
            }
        }
        > button {
            width: calc(20% - 10px);
        }
    }
}
.cart_items{
    display: flex;
    gap: 15px;
    flex-direction: column;
    flex-wrap: wrap; 
    & > a{
        width: calc((100% - 6 * 15px) / 7);
        max-width: 250px;
        flex: 0 0 auto;
        
        height: 140px;
        flex-direction: row;
        max-width: 100%;
        width: 100%;
    }
}
.cart_empty{
    display: flex;
    height: 283px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    border-radius: 6px;
    background: rgba($white, 0.01);

    & > h4 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    & > img {
        opacity: 0.8;
    }
}
.button{
    
    &--filled {
        @include button-filled;
        opacity: 1 !important;
    }
}
.cart_empty{
    display: flex;
    height: 283px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    border-radius: 6px;
    background: rgba($white, 0.01);

    & > h4 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    & > img {
        opacity: 0.8;
    }
}
.disable_button{
    pointer-events: none;
    opacity: 0.5 !important;
}
.cart_actions{
    display: flex;
    gap: 25px;
    justify-content: end;

    & > div {
        display: flex;
        gap: 10px;
        align-items: center;

        & > h4{
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        & > p {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration-line: line-through;
            opacity: 0.5;
        }
    }
}
@media screen and (min-width: 1024px) and (max-width: 1280px){
    .cart{
        padding: 0 90px;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .cart{
        padding: 0 60px;
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .cart{
        margin-top: 100px;
        padding: 0 30px;
    }
    .enter_promocode > div{
        & > button{
            width: calc(30% - 10px);
        } 
        & > input{
            width: 70%;
        }
    }
}
@media screen and (max-width: 559px){
    .cart{
        margin-top: 100px;
        margin-bottom: 40px;
        padding: 0 16px;
    }
    .cart_actions{
        flex-direction: column;
        align-items: center;
        & button { width: 100%;}
    }
    .enter_promocode > div{
        & > button{
            width: calc(40% - 10px);
        } 
        & > input{
            width: 60%;
        }
    }
}
</style>