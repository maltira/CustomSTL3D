<script setup>
defineProps({
    id: String,
    title: String,
    price: [Number, String],
    category: String,
    image: {
        type: String,
        default: '/img/product-image.png'
    },
    download_url: String
})
</script>

<template>
  <NuxtLink :to="`/product/${id}`" class="product-card">
    <img :src="image" :alt="title" class="product-image" />
    <div class="product-info">
        <div class="product-info__title">
            <span class="product-category">{{ category }}</span>
            <h3 class="product-title">{{ title }}</h3>
        </div>
        <p class="product-price">{{ price }} $</p>
        <a class="download-model" :href=download_url v-if="download_url != null" @click.stop>
            <p>Download</p>
            <img src="/icons/download.svg" alt="">
        </a>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.product-card{
    display: flex;
    flex-direction: column;
    background: $black;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;

    &:hover{
        background: rgba($black, 0.9);
        .product-title{
            opacity: 1;
        }
    }
}
.product-image{
    width: 100%;
    aspect-ratio: 1/1;
}
.download-model{
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    opacity: 0.6;

    & > p {
        font-size: 14px;
    }

    & > img {
        width: 18px;
    }

    &:hover{
        opacity: 1;
    }
}
.product-info{
    padding: 15px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-width: 100%;
    & .product-info__title{
        display: flex;
        gap: 5px;
        flex-direction: column;

        & span {
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