<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '~/stores/cart';
import { useProductsStore } from '@/stores/products'
const { loggedIn, user, session, fetch, clear} = useUserSession()

const productsStore = useProductsStore()
const cart = useCartStore()
const activeImage = ref(0)
const isSaved = ref(false)
const isAdded = ref(false)
const route = useRoute()

// Вытаскиваем исходную модель
const model = computed(() => productsStore.getById(route.params.name))

async function toggleSaved() {
  isSaved.value = !isSaved.value
  if (isSaved.value) {
    try {
      const response = await $fetch('/api/user/wishlist', {
        method: 'POST',
        body: {product_id: route.params.name}
      });

      if (response.success) console.log(`Товар ${route.params.name} сохранён в вишлист`);
      else console.error('Не удалось сохрнаить товар');
    } catch (error) {
      console.error('Ошибка при сохранении товара:', error);
    }
  }
  else{
    try {
      const response = await $fetch('/api/user/wishlist', {
        method: 'DELETE',
        body: { product_id: route.params.name }
      });
      console.log(response.wishlist)
      if (response.success) console.log(`Товар ${route.params.name} удалён из вишлиста`);
      else console.error('Не удалось удалить сохранённый товар');
    } catch (error) {
      console.error('Ошибка при удалении сохранённого товара:', error);
    }
  }
}
async function toggleAdded() {
  isAdded.value = !isAdded.value
  console.log(isAdded.value)
  if (isAdded.value) {
    cart.increment()
    try {
      const response = await fetch('/api/user/cart', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({product_id: route.params.name})
      });
      const result = await response.json();

      if (result.success) console.log(`Товар ${route.params.name} успешно добавлен в корзину`);
      else console.error('Не удалось добавить товар');
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
    }
  }
  else {
    cart.decrement()
    try {
      const response = await fetch('/api/user/cart', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ product_id: route.params.name })
      });

      const result = await response.json();

      if (result.success) console.log(`Товар ${route.params.name} удалён из корзины`);
      else console.error('Не удалось удалить товар');
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
    }
  }
}

onMounted(async () => {
  try {
    console.log('product:', user.value)
    isAdded.value = user.value.cart.some(item => item.product_id === route.params.name)
    isSaved.value = user.value.wishlist.includes(route.params.name)
    console.log(isSaved.value, isAdded.value)
  } catch (e) {
    console.error('Ошибка запроса:', e)
  }
})
</script>
<template>
  <div id="product">
    <div class="product_block">
      <div class="product_block_route">
          Home / All Models / {{ model.category }} / {{ model.title }}
      </div>
      <div class="product_block_content">
        <div class="product_images">
          <div class="main-image" alt="">{{ activeImage }}</div>
          <div class="add-images">
            <div alt="" :class="{active: activeImage === 0}" @click="activeImage=0">0</div>
            <div alt="" :class="{active: activeImage === 1}" @click="activeImage=1">1</div>
            <div alt="" :class="{active: activeImage === 2}" @click="activeImage=2">2</div>
          </div>
        </div>
        <div class="product_text">
          <div class="product_title">
            <h1>{{model.title}}</h1>
            <div class="product_price">
              <p class="old-price">${{ model.old_price }}</p>
              <p class="new-price">${{ model.price }}</p>
            </div>
          </div>
          <div class="product_actions">
            <button class="save-product" @click="toggleSaved" :class="{active_save_button: isSaved}">
              <img :src="isSaved ? '/icons/heart-filled.svg' : '/icons/heart-outline.svg'" alt="heatd-outline">
            </button>
            <button class="add_to_cart" @click="toggleAdded" :class="{active_cart_button: isAdded}">
              <img :src="isAdded ? '/icons/cart-check.svg' : '/icons/add-to-cart.svg'" alt="add-to-cart">
              <p>{{ isAdded ? 'Added To Cart' : 'Add To Cart'}}</p>
            </button>
          </div>
          <div class="product_tags">
            <p class="block_name">Tag(s)</p>
            <div>
              <span v-for="(item, index) in model.tags" :key="index">
                <NuxtLink>{{ item }}</NuxtLink><span v-if="index < model.tags.length - 1"> , </span>
              </span>
            </div>
          </div>
          <div class="product_description">
            <p class="block_name">Description</p>
            <div style="white-space: pre-line;">
              {{ `${model.description}` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#product{
  margin-top: 160px;
  margin-bottom: 125px;
  padding: 0 $pd;
}
.product_block_route{
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.4;

  margin-bottom: 10px;
}
.product_images{
  display: flex;
  flex-direction: column;
  gap: 10px
}
.main-image, .add-images > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($white, 0.2);
}
.active{
  background: rgba($white, 0.7) !important;
}
.main-image{
  height: 468px;
  width: 468px;
  background: rgba($white, 0.7);
}
.add-images {
  display: flex;
  gap: 10px;
  cursor: pointer;

  & > div{
    width: 100px;
    height: 100px;

    &:hover{
      background: rgba($white, 0.3);
    }
  }
}
.product_block_content{
  display: flex;
  gap: 100px;

  & > .product_text{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
.product_title{
  & > h1{
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 20px;
  }

  & > .product_price{
    & .old-price{
      margin-bottom: 5px;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: line-through;
      opacity: 0.5;
    }

    & .new-price{
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}
.product_tags{

  & > div {
    display: flex;
    gap: 3px;
    & > p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      opacity: 0.6;
      pointer-events: none;
    }
    & > span > a{
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background: linear-gradient(99deg, #8EE1FF 108.42%, #0915EF 1139.16%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    & > span > span{
      opacity: 0.5;

    }
  }
}
.block_name{
  margin-bottom: 10px;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.product_description{

  & > div {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
  }
}
.product_actions{
  display: flex;
  gap: 10px;
}
.save-product{
  min-width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  background: transparent;
  border: 1px solid $white;

  &:hover{
    opacity: 0.8;
  }
}
.add_to_cart{
  display: flex;
  width: 285px;
  height: 46px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 6px;
  background: $white;
  border: 1px solid $white;

  & > img {
    width: 24px;
    height: 24px;
  }
  & > p {
    color: $black;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:hover{
    opacity: 0.9;
  }
  &.active_cart_button{
    background: transparent;

    & > p {
      color: $white;
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px){
    #product{
        padding-left: 90px;
        padding-right: 90px;
    }
    .product_block_content{
      gap: 50px;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    #product{
        padding-left: 60px;
        padding-right: 60px;
    }
    .product_block_content{
      gap: 30px;
    }

}
@media screen and (min-width: 560px)  and (max-width: 899px){
    #product{
        margin-top: 100px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .product_block_content{
      flex-direction: column;
      gap: 30px;
    }
}
@media screen and (max-width: 559px){
    #product{
        margin-top: 100px;

        margin-bottom: 80px;
        padding-left: 16px;
        padding-right: 16px;
    }
    .main-image{
      height: auto;
      aspect-ratio: 1 / 1;
      width: 100%;
    }
    .add-images {
      & > div {
        height: auto;
        max-width: 100px;
        aspect-ratio: 1 / 1;
      }
    }
    .add_to_cart{
      width: 100%;
    }
    .product_block_content{
      flex-direction: column;
      gap: 30px;
    }
    .product_text{
      gap: 25px !important;
    }
}
</style>