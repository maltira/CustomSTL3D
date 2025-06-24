<script setup>
import { useCartStore } from '~/stores/cart';
const cart = useCartStore()

</script>
<template>
    <div class="counter" v-if="cart.count > 0">
        <h4>{{ cart.count }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.counter{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 99px;
    background: $red;
    z-index: 1;
    pointer-events: none;

    & h4{
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 6px; /* 75% */
    }
}
</style>