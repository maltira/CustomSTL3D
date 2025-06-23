<script setup>
defineProps({
  title: String,
  price: [Number, String],
  category: String,
  image: {
    type: String,
    default: '/img/product-image.png'
  }
})
</script>

<template>
  <div class="product-card">
    <img :src="image" :alt="title" class="product-image" />
    <div class="product-info">
        <div class="product-info__title">
            <NuxtLink class="product-category">{{ category }}</NuxtLink>
            <h3 class="product-title">{{ title }}</h3>
        </div>
        <p class="product-price">{{ price }} $</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card{
    background: $black;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
        .product-title{
            opacity: 1;
        }
    }
}
.product-image{
    width: 100%;
}
.product-info{
    padding: 15px 20px 20px 20px;

    & .product-info__title{
        display: flex;
        gap: 5px;
        flex-direction: column;

        & a {
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            opacity: 0.6;
            line-height: normal;
            cursor: pointer;
            
            &:hover{
                opacity: 0.9;
            }
        }

        & h3 {
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            opacity: 0.8;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            align-self: stretch;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    & .product-price{
        margin-top: 13px;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
</style>