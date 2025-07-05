<script setup>
import { ref } from 'vue'
import ProductCard from '../components/UI/ProductCard.vue';
import { useProductsStore } from '@/stores/products'
const { loggedIn, user, session, fetch, clear} = useUserSession()
definePageMeta({
  middleware: ['authenticated'],
})

const productsStore = useProductsStore()
const isExistOrders = ref(false)
const listOfOrders = []

onMounted(async () => {
  try {
    isExistOrders.value = user.purchases.length > 0

    for (let item of user.purchases) {
        listOfOrders.push(productsStore.getById(item.product_id))
    }
  } catch (e) {
    console.error('Ошибка:', e)
  }
})

</script>

<template>
    <div class="purchases">
        <h1>Your purchases</h1>
        <div class="purchases_items" v-if="isExistOrders">
            <ProductCard v-for="(model, i) in listOfOrders" :key="i"
                :id="model.id"
                :title="model.title"
                :price="model.price"
                :category="model.category"
                :image="model.thumbnail"
                :download_url="'efepfpsd'"
            />
        </div>

        <div class="purchases_empty" v-if="!isExistOrders"> 
            <img width="60px" src="/icons/search-line.svg" alt="search">
            <h4>There is nothing here</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.purchases{
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
.purchases_items{
    display: flex;
    gap: 15px;
    flex-wrap: wrap; 
    & > a{
        width: calc((100% - 6 * 15px) / 7);
        max-width: 250px;
        flex: 0 0 auto;
    }
}
.purchases_empty{
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
    .purchases{
        padding: 0 90px;
    }
    .purchases_items > a{
        width: calc((100% - 5 * 15px) / 6);
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .purchases{
        padding: 0 60px;
    }
    .purchases_items > a{
        width: calc((100% - 4 * 15px) / 5);
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .purchases{
        margin-top: 100px;
        padding: 0 30px;
    }
    .purchases_items > a{
        width: calc((100% - 2 * 15px) / 3);
    }
}
@media screen and (max-width: 559px){
    .purchases{
        margin-top: 100px;
        margin-bottom: 40px;
        padding: 0 16px;
    }
    .purchases_items > a{
        width: calc((100% - 1 * 15px) / 2);
    }
}
</style>