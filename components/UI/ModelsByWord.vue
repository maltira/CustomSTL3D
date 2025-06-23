<script setup>
const words = [ 
  {
    word: 'House',
    category: [
      { count: 12, name: 'A house on a tree' },
      { count: 3, name: 'High-rise building' },
      { count: 6, name: 'Castle/Mansion' },
      { count: 1, name: 'Village house' }
    ]
  },
  {
    word: 'Car',
    category: [
      { count: 12, name: 'Police car' },
      { count: 3, name: 'SUV / off-road vehicle' },
      { count: 6, name: 'Damaged / destroyed car' },
      { count: 1, name: 'Taxi' },
      { count: 4, name: 'Futuristic concept car' }
    ]
  },
  {
    word: 'Cup',
    category: [
      { count: 12, name: 'Ceramic coffee cup' },
      { count: 3, name: 'Steaming hot cup' },
      { count: 6, name: 'Fantasy potion cup' },
      { count: 1, name: 'Glass teacup' }
    ]
  },
  {
    word: 'Architecture',
    category: [
      { count: 12, name: 'Tower' },
      { count: 3, name: 'Bunker' },
      { count: 6, name: 'Ruins' }
    ]
  },
  {
    word: 'Weapons',
    category: [
      { count: 12, name: 'Gun' },
      { count: 3, name: 'Spear' },
      { count: 6, name: 'Bow' },
      { count: 12, name: 'Axe' },
      { count: 12, name: 'Grenade' }
    ]
  },
  {
    word: 'Props & Items',
    category: [
      { count: 12, name: 'Backpack' },
      { count: 3, name: 'Potion' },
      { count: 6, name: 'Treasure Chest' },
      { count: 12, name: 'Coin' }
    ]
  }
]
</script>

<template>
    <div class="main">
        <h1 class="title-main">3D Models According To Words</h1>
        <div class="words-category">
            <div class="word_item" v-for="(item, index) in words" :key="index">
                <h2>{{ item.word }}</h2>
                <div class="word_item__subjects">
                    <div class="subject_item" v-for="(sub, i) in item.category" :key="i">
                        <p>{{ sub.count }}</p>
                        <h4>{{ sub.name }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main{
    margin-top: 0 !important;
    padding: 50px 0;
    padding-top: 0;
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
.words-category{
    display: flex;
    justify-content: space-between;
}
.word_item {
    
    & h2 {
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 10px;
    }
}
.word_item__subjects{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.subject_item{
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 5px;

  & > p{
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & > h4{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    opacity: 0.8;
  }
  &:hover{
    text-decoration: underline;
    & > h4{
      opacity: 1;
    }
  }
}
@media screen and (min-width: 1024px) and (max-width: 1280px){
    .main{
        padding-left: 90px;
        padding-right: 90px;
        margin-left: -90px;
        margin-right: -90px;
    }
    .word_item:nth-child(n+6){
      display: none;
    }
}
@media screen and (min-width: 900px) and (max-width: 1023px){
    .main{
        padding-left: 60px;
        padding-right: 60px;
        margin-left: -60px;
        margin-right: -60px;
    }
    .word_item:nth-child(n+5){
      display: none;
    }
}
@media screen and (min-width: 560px)  and (max-width: 899px){
    .main{
        padding-left: 30px;
        padding-right: 30px;
        margin-left: -30px;
        margin-right: -30px;
    }
    .word_item:nth-child(n+4){
      display: none;
    }
}
@media screen and (max-width: 559px){
    .main{
        padding-left: 16px;
        padding-right: 16px;
        margin-left: -16px;
        margin-right: -16px;
    }
    .word_item:nth-child(n+3){
      display: none;
    }
    .words-category{
      flex-direction: column;
      gap: 30px;
    }
    .word_item > h2{
      text-align: center;
    }
    .subject_item{
      justify-content: center;
    }
    .title-main{
      margin-bottom: 20px !important;
    }
}
</style>