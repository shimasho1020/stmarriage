<template>
<div>
  <div class="title_block" style="text-align:center">
    <h1 class="title">IBJ会員データ</h1>
  </div>
  <section class="section">
    <div class="section-wrap">
      <!-- <div class="section_title_block --1">
        <h2 class="title">IBJ会員データ</h2>
      </div> -->
      <div class="section_body">
        <div class="content">
          <h2 class="title">日本結婚相談所連盟 IBJとは</h2>
          <div class="text">
            全国の結婚相談所3649社が加盟する、日本最大級の結婚相談所連盟です。<br>
            登録人数は全国で約80,000人。<br>
            加盟相談所が協力し合いながら、お見合いをセッティングし、交際をサポートしながら、ご成婚を生み出しています。
          </div>
          <div class="img_wrap">
            <img class="img" src="~/assets/images/ibj_about.webp" alt="IBJについて">
          </div>
        </div>
        <div class="content --1">
          <h3 class="title">成婚者数</h3>
          <div class="data_table">
            <p class="subtitle">年間成婚者数</p>
            <ul class="list">
              <li>
                <span class="year">2019年</span>
                <span class="number">11,909名</span>
              </li>
              <li>
                <span class="year">2020年</span>
                <span class="number">12,249名</span>
              </li>
              <li>
                <span class="year">2021年</span>
                <span class="number">14,671名</span>
              </li>
            </ul>
          </div>
          <div class="chart_wrap">
            <barChart :data="propSuccessData" label="成婚者数" :height="200" :displayLegend="false"></barChart>
          </div>
        </div>
        <div class="content --2">
          <h3 class="title">年齢別会員数</h3>
          <div class="data_table">
            <p class="subtitle">総会員数(2023年2月現在)</p>
            <div class="list">
              <div class="cell">
                <div class="number">81,721名</div>
              </div>
            </div>
          </div>
          <div class="chart_wrap">
            <barChart :data="propTotalData" label="年齢別会員数"></barChart>
          </div>
        </div>
        <div class="content_wrap">
          <div class="content --3">
            <h3 class="title">男女比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propSexData" label="男女比率"></circleChart>
            </div>
          </div>
          <div class="content --4">
            <h3 class="title">年代別会員比率</h3>
            <div class="chart_wrap">
              <circleChart :data="propAgeData" label="年代別会員比率"></circleChart>
            </div>
          </div>
        </div>
        <div class="content --5">
          <h3 class="title">年収(男性)</h3>
          <div class="chart_wrap">
            <barChart :data="propIncomeData" label="男性の年収" :height="200" :displayLegend="false"></barChart>
          </div>
        </div>
        <div class="content --6">
          <h3 class="title">学歴</h3>
          <div class="chart_wrap">
            <barChart :data="propAcademicData" label="学歴"></barChart>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from '@nuxtjs/composition-api'
import { ChartData } from '~/types/index'

// ランダムな数値製造マシーン
function getRand (num: number) {
  const arr: number[] = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 1000))
  }
  return arr
}

const propSuccessData: ChartData = {
  labels: ['2017年', '2018年', '2019年', '2020年', '2021年'],
  datasets: [
    {
      label: '成婚者数',
      data: [5708, 6344, 7847, 8624, 10803],
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ]
}

const maleData = [1282,4510,6674,6349,6365,3766,2017,1956]
const femaleData = [4019,9264,10131,6614,3796,1914,1007,984]
const generationData = computed(() => {
  const arr = []
  for(let i = 0; i < femaleData.length; i++) {
    if(i === 0 || i === 7){
      arr.push(femaleData[i] + maleData[i])
    } else if (i === 1 || i === 3 || i === 5) {
      arr.push(femaleData[i] + maleData[i] + femaleData[i+1] + maleData[i+1])
    }
  }
  return arr
})
const totalMembers = generationData.value.reduce((sum, element) => sum + element, 0)
const maleAcademicData = computed(() => {
  const arr = [55,18,14,12,1]
  return arr.map((val) => {
    return Math.round( val * totalMembers / 100)
  })
})
const femaleAcademicData = computed(() => {
  const arr = [71,12,9,7,1]
  return arr.map((val) => {
    return Math.round( val * totalMembers / 100)
  })
})

const propTotalData: ChartData = {
  labels: ['〜29歳', '30歳〜34歳', '35歳〜39歳', '40歳〜44歳', '45歳〜49歳', '50歳〜54歳', '55歳〜59歳', '60歳〜'],
  datasets: [
    {
    label: '男性',
    data: maleData,
    borderColor: '#00CCFF',
    backgroundColor: '#00CCFF',
    },
    {
    label: '女性',
    data: femaleData,
    borderColor: '#FFCCFF',
    backgroundColor: '#FFCCFF',
    },
  ]
}

const propSexData: ChartData = {
  labels: ['男性', '女性',],
  datasets: [
    {
      data: [32919,37729],
      backgroundColor: ['#00CCFF','#FFCCFF'],
    },
  ]
}

const propAgeData: ChartData = {
  labels: ['20代','30代','40代','50代','60代'],
  datasets: [
    {
    data: generationData.value,
    backgroundColor: ['#FFCCFF','#CCCCFF', '#00CCFF', '#0099FF','#0066FF'],
    },
  ]
}

const propIncomeData: ChartData = {
  labels: ['〜399万', '400〜499万', '500〜699万', '700〜999万', '1000万〜'],
  datasets: [
    {
      label: '年収',
      data: [5214,6565,6199,4713,3328,1999,1197,3704],
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ]
}

const propAcademicData: ChartData = {
  labels: ['四大卒', '高卒', '院卒', '専門卒', 'その他'],
  datasets: [
    {
      label: '男性',
      data: maleAcademicData.value,
      borderColor: '#00CCFF',
      backgroundColor: '#00CCFF',
    },
    {
      label: '女性',
      data: femaleAcademicData.value,
      borderColor: '#FFCCFF',
      backgroundColor: '#FFCCFF',
    },
  ]
}

</script>

<style lang="sass" scoped>
.section
  padding: 80px 0 
  +sp-view
    padding: 40px 0 
  > .section-wrap
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    position: relative

    // > .section_title_block
    //   display: flex
    //   justify-content: center
    //   flex-wrap: wrap
    //   width:100%
    //   margin: 60px 0 60px
    //   text-align: center
    //   +sp-view
    //     margin: 0 0 20px
    //   > .title
    //     +text-subtitle(32px)
    //     position: relative
    //     text-align: center
    //     margin: 0 0 20px
    //     +sp-view
    //       +text-subtitle(28px)
    //     &::before 
    //       position: absolute
    //       bottom: -10px
    //       left: calc(50% - 50px)
    //       width: 100px
    //       height: 5px
    //       content: ''
    //       border-radius: 3px
    //       background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)

    > .section_body
      width: 90%
      margin: auto

      +sp-view
        width: 100%
      .content
        padding: 0 0 40px
        > .title
          +text-subtitle(24px)
          padding: 0.25em 0.5em
          background: transparent
          border-left: solid 5px #17aaee

        > .text
          +text-body(20px)
          padding: 10px 20px 10px

          +sp-view
            font-size: 16px

        > .img_wrap
          width: 50%
          margin: auto

          +sp-view
            width: 100%
            max-width: 500px

          > .img
            width: 100%

        > .data_table
          margin: 20px 0 
          background-color: #fff
          padding: 20px
          border-radius: 8px
          overflow: hidden
          > .subtitle
            +text-title(20px)
            text-align: center
            padding: 0 0 20px

          > .list
            padding: 10px 0
            margin-bottom: 10px
            background-color: #f5f5f5
            display: flex

            +sp-view
              flex-direction: column
              padding: 0 10px


            > li
              width: 33%
              display: flex
              justify-content: space-between
              align-items: center
              padding: 15px 20px
              border-right: 1px solid #ddd

              &:nth-child(3)
                border-right: none

                +sp-view
                  border-bottom: none

              +sp-view
                width: 100%
                border-bottom: 1px solid #ddd
                border-right: none

              > .year
                +text-body(16px)
              > .number
                +text-title(20px)

            > .cell
              text-align: center
              padding: 8px
              width: 100%

              > .number
                +text-title(22px)
                text-align: center

.content_wrap
  display: flex
  flex-wrap: wrap
  justify-content: space-between

  > .content
    flex: 0 0 45%

    +sp-view
      flex: 0 0 100%
</style>