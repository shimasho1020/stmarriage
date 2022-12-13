<template>
<div class="">
  <div class="title_block" style="text-align:center">
    <h1 class="title">会社概要</h1>
  </div>
  <div class="body">
    <div class="company_table">
      <table id="table01">
        <tr>
          <th>社名</th>
          <td>セントマリアージュ青山</td>
        </tr>
        <tr>
          <th>代表</th>
          <td>島田智子</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td><span class="inline-block">〒107-0052&emsp;</span><span class="inline-block">東京都港区赤坂4丁目8番19号&emsp;</span><span class="inline-block">赤坂フロントタウン3階</span></td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>080-7002-0555</td>
        </tr>
        <tr>
          <th>アクセス</th>
          <td>
            <span class="inline-block">東京メトロ銀座線・丸の内線「赤坂見付駅」4分</span><br>
            <span class="inline-block">東京メトロ千代田線「赤坂駅」8分</span><br>
            <span class="inline-block">東京メトロ有楽町線・南北線・半蔵門線「永田町駅」9分</span><br>
            <span class="inline-block">東京メトロ銀座線・半蔵門線「青山一丁目駅」12分</span><br>
          </td>
        </tr>
      </table>
    </div>
    <div class="access-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.036612253006!2d139.73172281533948!3d35.67610048019553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7e44c75e5d%3A0x739a7864f075e711!2z44CSMTA3LTAwNTIg5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yU5LiB55uu77yY4oiS77yR77yZIOi1pOWdguODleODreODs-ODiOOCv-OCpuODsyAz6ZqO!5e0!3m2!1sja!2sjp!4v1670508275711!5m2!1sja!2sjp"
      width="100%"
      height="400" 
      style="border:0;" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.access-map
  width: 100%
  height: 400px
  object-fit: cover

  +sp-view
    max-width: calc(100% - 10vw)
    margin: auto

.company_table
  padding: 40px 0
  white-space: normal

  +sp-view
    padding: 40px 20px


#table01
  width: 700px
  margin: auto
  text-align: left

  +sp-view
    width: 90%

th
  +text-title(18px)

  +sp-view
    +text-title(16px)

td
  +text-body(18px)
  font-weight: bold

  +sp-view
    +text-body(16px)


</style>

<style scoped>
#table01 tr {
  border-bottom: 1px solid #b5b1b1;
}

#table01 th,
#table01 td {
  padding: 24px 0;
  border: none;
}

#table01 th {
  width: 30%;
}

/* sp */
/* @media only screen and (max-width: 480px) {
  #table01 th,
  #table01 td {
    width: 100%;
    display: block;
  }

  #table01 th {
    width: 100%;
  }

  #table01 td {
    padding-top: 0;
  }
} */
</style>