<script setup>
import { ref } from 'vue'
import ProductCard from '../components/UI/ProductCard.vue';
import NewestModels from '../UI/NewestModels.vue';
import ModelsByWord from '../UI/ModelsByWord.vue';

const categories = ['Films & Movies', 'Animes & Mangas', 'Video Games', 'Browse All']
const activeCategory = ref(0)
</script>
<template>
    <div class="main">
        <div class="background-render">
            <img src="/public/img/abstract2g.png" alt="bg-img">
            <img src="/public/img/abstract6g.png" alt="bg-img">
            <img src="/public/img/abstract40g.png" alt="bg-img">
            <img src="/public/img/abstract43g.png" alt="bg-img">
        </div>
        <div class="title">
            <h1>Choose and buy your favourites from our <span>1000+</span> 3D models</h1>
            <button class="button--outline">View All Models</button>
        </div>
        <div class="categories">
            <input type="search" id="site-search" placeholder="Which 3D model do you want to find?">
            <div class="categories_block">
                <div class="categories_buttons">
                    <button v-for="(category, index) in categories" :key="index" :class="['category_button', { active: activeCategory === index }]"
                            @click="activeCategory = index">
                        {{ category }}
                    </button>
                </div>
                <div class="category_items">
                    <div class="category_items__cards">

                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= '6.99'
                            image= "/img/product-image.png"
                        />
                        <ProductCard
                            title= "Name of the model"
                            category= "CATEGORY"
                            price= 6.99
                            image= "/img/product-image.png"
                        />
                        
                    </div>
                    <NuxtLink>
                        <p>SEE MORE</p>
                        <img src="/icons/arrow.svg" alt="arrow-img">
                    </NuxtLink>
                </div>
            </div>
        </div>
        <NewestModels title="Newest Models"/>
        <NewestModels title="Popular 3D Models" style="background-color: transparent; margin-top: 0 !important;"/>
        <ModelsByWord/>
    </div>
</template>

<style lang="scss" scoped>
.main{
    margin-top: 361px;
    padding-left: $pd;
    padding-right: $pd;
    margin-bottom: 50px;
}
.background-render > img{
    position: absolute;
    z-index: -1;
    &:nth-child(1){
        left: 780px;
        top: 480px;
    }
    &:nth-child(2){
        right: 260px;
        top: 147px;
    }
    &:nth-child(3){
        left: 606px;
        top: 216px;
    }
    &:nth-child(4){
        left: 126px;
        top: 197px;
    }
}
.button {
  &--filled {
    @include button-filled
  }

  &--outline {
    @include button-outline;
  }
}
.title {
    display: flex;
    flex-direction: column;
    gap: 35px;
}
.title > h1{
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 677px;
    & > span{
        font-size: 2.25rem;
        background: linear-gradient(87deg, #8EE1FF, #38caff, #84edff, #5cfff7,  #4afdd6);
        background-size: 300%;
	    animation: gradient 2s ease-in-out infinite;
        -moz-animation: gradient 2s ease-in-out infinite;
	    -webkit-animation: gradient 2s ease-in-out infinite;
        -webkit-background-clip: text;
        transform: translate3d(0, 0, 0);
        background-clip: text;
        color: transparent;
    }
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
.categories{
    margin-top: 162px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    & .categories_block{
        display: flex;
        flex-direction: column;
        gap: 25px;

        & .categories_buttons{
            display: flex;
            gap: 10px;

            & .category_button{
                width: 100%;
                border: none;
                border-radius: 6px;
                display: flex;
                height: 150px;
                padding: 0px 36px;
                align-items: center;
                opacity: 0.7;

                font-size: 1.75rem;
                font-style: normal;
                text-align: start;
                font-weight: 700;
                line-height: normal;

                &.active{
                    opacity: 1 !important;
                    cursor: default;
                }
                &:hover{
                    opacity: 0.9;
                }
                &:nth-child(1){
                    background: linear-gradient(270deg, rgba(46, 84, 137, 0.70) -86.67%, rgba(17, 204, 153, 0.70) 166.84%);
                }
                &:nth-child(2){
                    background: linear-gradient(270deg, rgba(108, 141, 250, 0.70) -86.67%, rgba(59, 31, 142, 0.70) 166.84%);
                }
                &:nth-child(3){
                    background: linear-gradient(270deg, rgba(250, 108, 108, 0.70) -86.67%, rgba(224, 132, 67, 0.70) 166.84%);
                }
                &:nth-child(4){
                    background: linear-gradient(270deg, rgba(19, 156, 120, 0.70) -86.67%, rgba(67, 182, 146, 0.70) 166.84%);
                }
            }
        }
    }
}
.category_items{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: end;
}
.category_items__cards{
    display: flex;
    width: 100%;
    gap: 15px;
}
#site-search{
    background-image: url('/icons/search-black.svg');
    background-repeat: no-repeat;
    background-position: 20px center;
    padding-left: 54px;
    height: 64px;
    border-radius: 20px;

    color: $black;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
}
.category_items > a {
    display: flex;
    align-items: center;
    gap: 5px;
    opacity: 0.8;

    &:hover{
        opacity: 1;
    }
}
@media screen and (min-width: 1024px) and (max-width: 1280px){
    .main{
        padding-left: 90px;
        padding-right: 90px;
        margin-top: 300px;
    }
    .background-render > img{
        &:nth-child(1){
            left: 680px;
            top: 446px;
            width: 200px;
        }
        &:nth-child(2){
            right: 120px;
            top: 147px;
            width: 260px;
        }
        &:nth-child(3){
            left: 556px;
            top: 196px;
        }
        &:nth-child(4){
            left: 126px;
            top: 197px;
        }
    }
    .category_items__cards > div:last-child{
        display: none;
    }
    .category_button{
        height: 130px !important;
        font-size: 1.5rem !important; 
        padding: 0px 24px !important;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .main{
        padding-left: 60px;
        padding-right: 60px;
        margin-top: 300px;
    }
    .background-render > img{
        &:nth-child(1){
            right: 100px;
            top: 446px;
            left: auto;
            width: 200px;
        }
        &:nth-child(2){
            display: none;
        }
        &:nth-child(3){
            left: 556px;
            top: 196px;
        }
        &:nth-child(4){
            left: 126px;
            top: 197px;
        }
    }
    .category_items__cards > div:nth-child(n+6){
        display: none;
    }
    .category_button{
        height: 110px !important;
        font-size: 1.375rem !important; 
        padding: 0px 20px !important;
    }
    .categories{
        margin-top: 100px;
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .main{
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 250px;
    }
    .title > h1{
        width: 80%;
    }
    .background-render > img{
        &:nth-child(1){
            right: 100px;
            top: 500px;
            left: auto;
            width: 150px;
        }
        &:nth-child(2){
            display: none;
        }
        &:nth-child(3){
            right: 200px;
            left: auto;
            top: 136px;
        }
        &:nth-child(4){
            left: 86px;
            top: 130px;
        }
    }
    .category_items__cards > div:nth-child(n+4){
        display: none;
    }
    .category_button{
        height: 110px !important;
        font-size: 1.25rem !important; 
        padding: 0px 15px !important;
    }
    .categories{
        margin-top: 100px;
    }
}
@media screen and (max-width: 559px){
    .main{
        padding-left: 16px;
        padding-right: 16px;
        margin-top: 200px;
    }
    .title > h1{
        font-size: 2.125rem;
        width: 100%;
    }
    .background-render > img{
        &:nth-child(1){
            display: none;
        }
        &:nth-child(2){
            display: none;
        }
        &:nth-child(3){
            right: 100px;
            left: auto;
            top: 66px;
        }
        &:nth-child(4){
            left: 46px;
            top: 130px;
        }
    }
    .category_items__cards > div:nth-child(n+3){
        display: none;
    }
    .categories_buttons{
        flex-wrap: wrap; 
    }
    .category_button{
        height: 100px !important;
        font-size: 1.25rem !important; 
        padding: 0px 15px !important;
        flex: 0 0 calc(50% - 7.5px);
    }
    .categories{
        margin-top: 70px;
    }
    .title > button{
        width: 100%;
    }
    #site-search{
        font-size: 1rem;
    }
}
</style>