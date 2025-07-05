<script setup>
import { ref } from 'vue'
import ProductCard from '../components/UI/ProductCard.vue';
import { useProductsStore } from '@/stores/products'
const { loggedIn, user, session, fetch, clear} = useUserSession()
definePageMeta({
  middleware: ['authenticated'],
})

const productsStore = useProductsStore()
const isExistWishlist = ref(false)
const listOfSaved = []

onMounted(async () => {
  try {
    isExistWishlist.value = user.wishlist.length > 0

    for (let itemId of user.wishlist) {
        listOfSaved.push(productsStore.getById(itemId))
    }
  } catch (e) {
    console.error('Ошибка:', e)
  }
})

</script>

<template>
    <div class="wishlist">
        <h1>Your Wishlist</h1>
        <div class="wishlist_items" v-if="isExistWishlist">
            <ProductCard v-for="(model, i) in listOfSaved" :key="i"
                :id="model.id"
                :title="model.title"
                :price="model.price"
                :category="model.category"
                :image="model.thumbnail"
            />
        </div>

        <div class="wishlist_empty" v-if="!isExistWishlist"> 
            <img width="60px" src="/icons/search-line.svg" alt="search">
            <h4>There is nothing here</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wishlist{
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    padding: 0 $pd;
    gap: 25px;
    margin-bottom: 80px;

    & > h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
.wishlist_items{
    display: flex;
    gap: 15px;
    flex-wrap: wrap; 
    & > a{
        width: calc((100% - 6 * 15px) / 7);
        max-width: 250px;
        flex: 0 0 auto;
    }
}
.wishlist_empty{
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

@media screen and (min-width: 1024px) and (max-width: 1280px){
    .wishlist{
        padding: 0 90px;
    }
    .wishlist_items > a{
        width: calc((100% - 5 * 15px) / 6);
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .wishlist{
        padding: 0 60px;
    }
    .wishlist_items > a{
        width: calc((100% - 4 * 15px) / 5);
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .wishlist{
        margin-top: 100px;
        padding: 0 30px;
    }
    .wishlist_items > a{
        width: calc((100% - 2 * 15px) / 3);
    }
}
@media screen and (max-width: 559px){
    .wishlist{
        margin-top: 100px;
        margin-bottom: 40px;
        padding: 0 16px;
    }
    .wishlist_items > a{
        width: calc((100% - 1 * 15px) / 2);
    }
}
</style>