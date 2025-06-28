<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/products'
defineProps({
  title: String,
})
const productsStore = useProductsStore()
const slider = ref(null)

// доступ к массиву моделей
const models = productsStore.models

const scrollLeft = () => {
  slider.value.scrollBy({
    left: -slider.value.offsetWidth / 3.0, // прокрутка влево
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  slider.value.scrollBy({
    left: slider.value.offsetWidth / 3.0, // прокрутка вправо
    behavior: 'smooth'
  })
}
</script>

<template>
    <div class="main">
        <h1 class="title-main">{{ title }}</h1>
        <div class="slide-wrapper">
            <div class="all_cards" ref="slider"> 
                <ProductCard v-for="(item, index) in models" 
                    :key="index"
                    :id="item.id"
                    :title="item.title"
                    :price="item.price"
                    :category="item.category"
                    :image="item.thumbnail"
                />
            </div>
        </div>
        <div class="cards_arrow">
            <button @click="scrollLeft"><img src="/icons/arrow.svg" style="transform: rotate(180deg);" alt="left-arrow"></button>
            <button @click="scrollRight"><img src="/icons/arrow.svg" alt="right-arrow"></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    margin-top: 50px !important;
    padding: 50px $pd;
    background: rgba(217, 217, 217, 0.05);
    margin-left: -120px;
    margin-right: -120px;
    margin-bottom: 0 !important;

    & > .title-main{
        text-align: center;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 50px;
    }
}
.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.all_cards{
    display: flex;
    gap: 15px;
    overflow-x: auto;
    scroll-behavior: smooth;


    & > a{
        min-width: calc((100% - 6 * 15px) / 7);
    }
}
.all_cards::-webkit-scrollbar {
  display: none;
}
.cards_arrow{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.cards_arrow > button {
    background: none;
    border: none;

    &:hover{
        & > img {
            opacity: 1;
        }
    }
    & > img {
        opacity: 0.8;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
    .main{
        padding-left: 90px;
        padding-right: 90px;
        margin-left: -90px;
        margin-right: -90px;
    }
    .all_cards{
        & > a{
            min-width: calc((100% - 5 * 15px) / 6) !important;
        }
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .main{
        padding-left: 60px;
        padding-right: 60px;
        margin-left: -60px;
        margin-right: -60px;
    }
    .all_cards{
        & > a{
            min-width: calc((100% - 4 * 15px) / 5);
        }
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .main{
        padding-left: 30px;
        padding-right: 30px;
        margin-left: -30px;
        margin-right: -30px;
    }
    .all_cards{
        & > a{
            min-width: calc((100% - 2 * 15px) / 3);
        }
    }
}
@media screen and (max-width: 559px){
    .main{
        padding-left: 16px;
        padding-right: 16px;
        margin-left: -16px;
        margin-right: -16px;
    }
    .all_cards{
        & > a{
            min-width: calc((100% - 1 * 15px) / 2);
        }
    }
}
</style>