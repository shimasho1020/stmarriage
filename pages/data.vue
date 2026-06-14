<template>
  <div>
    <div class="title_block" style="text-align: center">
      <h1 class="title">IBJ会員データ</h1>
    </div>
    <section class="section">
      <div class="section-wrap">
        <div class="section_body">
          <div class="content">
            <h2 class="title">IBJとは</h2>
            <div class="text">
              全国の結婚相談所約4,800社が加盟する、日本最大級の結婚相談所連盟です。<br />
              登録人数は全国で106958人（2026年1月現在）。<br />
              加盟相談所が協力し合いながら、お見合いをセッティングし、ご成婚を生み出しています。
            </div>
            <div class="img_wrap">
              <img
                class="img"
                src="~/assets/images/ibj_about_2.png"
                alt="IBJについて"
              />
            </div>
          </div>
          <div class="content --1">
            <h3 class="title">成婚者数</h3>
            <div class="data_table">
              <p class="subtitle">年間成婚者数</p>
              <ul class="list">
                <li>
                  <span class="year">2022年</span>
                  <span class="number">12,437名</span>
                </li>
                <li>
                  <span class="year">2023年</span>
                  <span class="number">13,516名</span>
                </li>
                <li>
                  <span class="year">2024年</span>
                  <span class="number">15,374名</span>
                </li>
              </ul>
            </div>
            <!-- <div class="chart_wrap">
            <barChart :data="propSuccessData" label="成婚者数" :height="200" :displayLegend="false"></barChart>
          </div> -->
          </div>
          <div class="content --2">
            <h3 class="title">年齢別会員数</h3>
            <div class="data_table">
              <p class="subtitle">総会員数(2026年3月現在)</p>
              <div class="list">
                <div class="cell">
                  <div class="number">107,597人</div>
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
                <circleChart
                  :data="propAgeData"
                  label="年代別会員比率"
                ></circleChart>
              </div>
            </div>
          </div>
          <div class="content --5">
            <h3 class="title">年収(男性)</h3>
            <div class="chart_wrap">
              <barChart
                :data="propIncomeData"
                label="男性の年収"
                :height="200"
                :displayLegend="false"
              ></barChart>
            </div>
          </div>
          <div class="content --6">
            <h3 class="title">学歴</h3>
            <div class="chart_wrap">
              <barChart
                :data="propAcademicData"
                label="学歴"
                :height="250"
              ></barChart>
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
function getRand(num: number) {
  const arr: number[] = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 1000))
  }
  return arr
}

const propSuccessData: ChartData = {
  labels: ['2022年', '2023年', '2024年'],
  datasets: [
    {
      label: '成婚者数',
      data: [12437, 13516, 15374],
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ],
}

const totalMembers = 107597
const maleTotal = Math.round(totalMembers * 0.545)
const femaleTotal = Math.round(totalMembers * 0.455)
const maleData = [
  Math.round(maleTotal * 0.082),
  Math.round(maleTotal * 0.202),
  Math.round(maleTotal * 0.235),
  Math.round(maleTotal * 0.178),
  Math.round(maleTotal * 0.123),
  Math.round(maleTotal * 0.180),
]
const femaleData = [
  Math.round(femaleTotal * 0.158),
  Math.round(femaleTotal * 0.272),
  Math.round(femaleTotal * 0.263),
  Math.round(femaleTotal * 0.149),
  Math.round(femaleTotal * 0.068),
  Math.round(femaleTotal * 0.089),
]
const generationData = computed(() => {
  return [
    maleData[0] + femaleData[0],
    maleData[1] + femaleData[1] + maleData[2] + femaleData[2],
    maleData[3] + femaleData[3] + maleData[4] + femaleData[4],
    maleData[5] + femaleData[5],
  ]
})
const maleMembers = maleTotal
const femaleMembers = femaleTotal
const maleAcademicData = computed(() => {
  const arr = [55, 18, 14, 12, 1]
  return arr.map((val) => {
    return Math.round((val * maleMembers) / 100)
  })
})
const femaleAcademicData = computed(() => {
  const arr = [71, 12, 9, 7, 1]
  return arr.map((val) => {
    return Math.round((val * femaleMembers) / 100)
  })
})

const propTotalData: ChartData = {
  labels: [
    '20代',
    '30代前半',
    '30代後半',
    '40代前半',
    '40代後半',
    '50代以上',
  ],
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
  ],
}

const propSexData: ChartData = {
  labels: ['男性', '女性'],
  datasets: [
    {
      data: [54.5, 45.5],
      backgroundColor: ['#00CCFF', '#FFCCFF'],
    },
  ],
}

const propAgeData: ChartData = {
  labels: ['20代', '30代', '40代', '50代以上'],
  datasets: [
    {
      data: generationData.value,
      backgroundColor: ['#FFCCFF', '#CCCCFF', '#00CCFF', '#0066FF'],
    },
  ],
}

const propIncomeData: ChartData = {
  labels: ['〜399万', '400〜499万', '500〜699万', '700〜999万', '1000万〜'],
  datasets: [
    {
      label: '年収',
      data: [5214, 6565, 6199, 4713, 3328, 1999, 1197, 3704],
      borderColor: '#0066FF',
      backgroundColor: '#0066FF',
    },
  ],
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
  ],
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
          background-color: #f0f0f0
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
            background-color: #fff
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
