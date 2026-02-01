<template>
  <div class="top_page_body" ref="pageObserver">
    <div class="hero">
      <div class="page-title">
        <div class="page-title__block">
          <div class="page-title__block--sp">
            <span
              class="page-title__character"
              v-for="text in Array.from('経験豊かな成婚カウンセラーが')"
              :key="text"
            >
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
          <div class="page-title__block--sp">
            <span
              class="page-title__character"
              v-for="text in Array.from('マンツーマンであなたの婚活を')"
              :key="text"
            >
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
          <div class="page-title__block--sp">
            <span
              class="page-title__character"
              v-for="text in Array.from('サポートします!')"
              :key="text"
            >
              <span class="page-title__child">{{ text }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="img_block">
        <img
          class="hero_img"
          src="~/assets/images/jewelry_hero.webp"
          alt="メイン写真"
        />
      </div>
      <div class="intro">
        <div class="intro-card">
          <h1 class="intro-title">セントマリアージュ青山について</h1>
          <div class="intro-cont">
            <div class="img_block left">
              <img
                class="img"
                src="~/assets/images/marriage-gate.webp"
                alt="セントマリアージュ青山"
              />
            </div>
            <div class="text">
              当社のホームページをご覧いただきありがとうございます。<br />
              財閥系の大手結婚相談所にて多くの方々の幸せを叶えてきた経験をもとに、お一人お一人に合ったきめ細やかなサポートをおこないます。<br />
              <span class="resposive_text"
                >「結婚はしたいけど、結婚相談所には抵抗がある」「いつか自然に運命の相手と出会えるはず」と考えている方、何もしないで時間だけが過ぎていませんか？　少しだけ勇気を出して始めてみたら、あなたの未来が変わります！<br
              /></span>
              無料カウンセリングを随時受け付けております。是非お気軽にお問合せ、ご相談ください。
            </div>
            <div class="img_block right">
              <img
                class="img"
                src="~/assets/images/clean_bouquet.webp"
                alt="セントマリアージュ青山"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <section class="section --0">
        <div class="section-wrap">
          <div class="section_title_block --0">
            <h2 class="title">お知らせ</h2>
            <div class="title__border"></div>
          </div>
          <div class="news-block">
            <div class="news-item">
              <div class="news-item__date">2026.01</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  「IBJアワード　プレミアム部門2025年下期」8期連続受賞しました！
                </p>
              </div>
              <div class="news-item__img">
                <img
                  src="~/assets/images/IBJ_award_2025_back.webp"
                  class="img"
                  alt="新着情報"
                />
              </div>
            </div>
            <div class="news-item">
              <div class="news-item__date">2025.12</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  2025年下半期、6名の方が成婚退会されました。（30代女性、20代女性、40代男性、50代男性、30代男性、30代女性）
                </p>
              </div>
            </div>
            <div class="news-item">
              <div class="news-item__date">2025.08.15</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  「IBJアワード　プレミアム部門2025年上期」7期連続受賞しました！
                </p>
              </div>
              <div class="news-item__img">
                <img
                  src="~/assets/images/IBJ_award_2025_front.png"
                  class="img"
                  alt="新着情報"
                />
              </div>
            </div>
            <div class="news-item">
              <div class="news-item__date">2025.02.28</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  「IBJアワード　プレミアム部門2024年下期」6期連続受賞しました！
                </p>
              </div>
              <div class="news-item__img">
                <img
                  src="~/assets/images/IBJ_award_2024_back.jpg"
                  class="img"
                  alt="新着情報"
                />
              </div>
            </div>
            <div class="news-item">
              <div class="news-item__date">2024.07.13</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  「IBJアワード　プレミアム部門2024年上期」5期連続受賞しました！
                </p>
              </div>
              <div class="news-item__img">
                <img
                  src="~/assets/images/IBJ_award_2024_front.png"
                  class="img"
                  alt="新着情報"
                />
              </div>
            </div>
            <!-- <div class="news-item">
              <div class="news-item__date">2024.07.13</div>
              <div class="news-item__text">
                <p class="news-item__text__content">
                  8月25日(日)
                  「赤坂プリンスホテル」でのお見合いパーティーのご案内
                </p>
                <a
                  class="news-item__text__url"
                  href="https://drive.google.com/file/d/18ZLPVEImDlUlfWriecEc61AalWeTIGZ6/view?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  >パーティーの案内はこちら</a
                >
              </div>
              <div class="news-item__img">
                <img
                  src="~/assets/images/news_2.jpg"
                  class="img"
                  alt="新着情報"
                />
              </div>
            </div> -->
          </div>
        </div>
      </section>
      <section class="section --1">
        <div class="section-wrap">
          <div class="section_title_block --1">
            <h2 class="title">ご成婚者様からの声</h2>
            <div class="title__border"></div>
            <p class="title__sub point">
              セントマリアージュ青山でご成婚された方々
            </p>
          </div>
          <div class="case_list">
            <div class="slide_wrap">
              <VueSlickCarousel class="slide" v-bind="settings">
                <template #prevArrow="arrowOption">
                  <div class="custom-arrow">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                  </div>
                </template>
                <template #nextArrow="arrowOption">
                  <div class="custom-arrow">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                  </div>
                </template>
                <nuxt-link
                  class="case-item"
                  v-for="n of 5"
                  :key="n"
                  :to="`/interview/${displayCaseList[n - 1]?.id ?? ''}`"
                >
                  <div class="case-card">
                    <div class="case-item__image_block">
                      <img
                        class="case-item__image"
                        :src="displayCaseList[n - 1]?.url ?? ''"
                        :alt="`${displayCaseList[n - 1]?.age ?? ''}歳の${
                          displayCaseList[n - 1]?.sex ?? ''
                        }会員様のご成婚事例`"
                      />
                    </div>
                    <div class="card">
                      <div class="__link">
                        <p class="__title">
                          <span class="inline-block"
                            >{{ displayCaseList[n - 1]?.age ?? '' }}歳の{{
                              displayCaseList[n - 1]?.sex ?? ''
                            }}会員様が</span
                          ><span class="inline-block">ご成婚されました！</span>
                        </p>
                        <ArrowImage
                          class="right-arrow"
                          direction="right"
                        ></ArrowImage>
                      </div>
                      <p class="__title">
                        <span class="inline-block"
                          >インタビュー内容はこちら</span
                        >
                      </p>
                    </div>
                  </div>
                </nuxt-link>
              </VueSlickCarousel>
            </div>
            <nuxt-link
              class="case-item case-wrap"
              v-for="n of 3"
              :key="n"
              :to="`/interview/${displayCaseList[n - 1]?.id ?? ''}`"
            >
              <div class="case-card">
                <div class="case-item__image_block">
                  <img
                    class="case-item__image"
                    :src="displayCaseList[n - 1]?.url ?? ''"
                    alt="インタビュー"
                  />
                </div>
                <div class="card">
                  <div class="__link">
                    <p class="__title">
                      <span class="inline-block"
                        >{{ displayCaseList[n - 1]?.age ?? '' }}歳の{{
                          displayCaseList[n - 1]?.sex ?? ''
                        }}会員様が</span
                      ><span class="inline-block">ご成婚されました！</span>
                    </p>
                    <ArrowImage
                      class="right-arrow"
                      direction="right"
                    ></ArrowImage>
                  </div>
                  <p class="__title">
                    <span class="inline-block">インタビュー内容はこちら</span>
                  </p>
                </div>
              </div>
            </nuxt-link>
            <div class="case-item empty"></div>
            <div class="case-item empty"></div>
          </div>
          <div class="link-block">
            <nuxt-link class="list-link" to="/interview">
              <div class="list-link-wrap" ref="linkPos3">
                <span class="list-link-text inline-block"
                  >ご成婚事例を全て見る</span
                >
              </div>
              <ArrowImage class="right-arrow" direction="right"></ArrowImage>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="section --2">
        <div class="section-wrap">
          <div class="section_title_block --2">
            <h2 class="title">
              <span class="inline-block">カウンセラーからの</span
              ><span class="inline-block">ご挨拶</span>
            </h2>
            <div class="title__border"></div>
            <p class="title__sub">カウンセラーからのご挨拶</p>
          </div>
          <div class="self_introduction">
            <div class="self-pic">
              <div class="img_block">
                <img
                  src="~/assets/images/ShimadaTomoko.webp"
                  class="img"
                  alt="三菱の結婚相談所「ダイヤモンドファミリークラブ」に勤めていた島田智子です"
                />
              </div>
            </div>
            <div class="self-p">
              <div class="self-p_wrap">
                <span class="inline-block">
                  代表カウンセラーの島田智子です。<br />
                  三菱の結婚相談所「ダイヤモンドファミリークラブ」のカウンセラーとして、約10年勤務しておりました。<br />
                  延べ1000人以上の会員様を担当し、20代から50代までの幅広い年齢層の方々のご成婚実績が多数ございます。
                  豊富な経験・知識を生かして、年齢、性別を問わず、お一人お一人に寄り添ったサポートをいたします。<br />
                  「お見合いを成功させる秘訣」「異性に好かれる身だしなみ、行動、会話」「仮交際から真剣交際への進め方」「ご成婚への最後の一押し」等、幅広く丁寧にアドバイスいたします。
                  <br />過去のご成婚者の方々から近況報告をいただいたり、元会員様から恋愛相談を受けたりと、現在でも長くお付き合いを続けさせていただいています。結婚後（成婚退会後）も何か悩みを抱えた時、いつでもご相談いただけるような身近な存在でありたいと思っております。
                </span>
              </div>
            </div>
          </div>
          <div class="about_diamond_family_club">
            <span class="title_wrap">
              <h2 class="title">
                <span class="inline-block">ダイヤモンドファミリークラブに</span
                ><span class="inline-block">ついて</span>
              </h2>
            </span>
            <div class="about_body">
              ダイヤモンドファミリークラブとは、1972年に三菱グループの社員のために設立された結婚相談所です。
              約50年間に渡り、三菱の社員のご縁を繋ぐサポートをおこない、2021年5月に業務終了しました。
            </div>
          </div>
          <div class="self-body">
            <div class="self-comments">
              <div class="self-comment 1">
                <span class="inline-block">入会1ヵ月以内のお見合い成立率</span
                ><span class="big_font inline-block">&emsp;95%</span>
              </div>
              <div class="self-comment 2">
                <span class="inline-block">入会1カ月以内の交際成立率</span
                ><span class="big_font inline-block">&emsp;90%</span>
              </div>
              <div class="self-comment 3">
                <span class="inline-block">成婚率</span
                ><span class="big_font inline-block">&emsp;70%</span>
              </div>
              <div class="mini_comment">※成婚退会者数÷全退会者数</div>
              <div class="mini_comment">※2025年4月現在</div>
            </div>
            <div class="self-table">
              <div class="text">セントマリアージュ青山で活動中の会員様</div>
              <div class="table --1">
                <h3 class="table_title">会員データ</h3>
                <ul class="table_list">
                  <li class="list_item th">年齢層</li>
                  <li class="list_item">20代半ばから60代半ば</li>
                  <li class="list_item th">男女比</li>
                  <li class="list_item">(約) 5対5</li>
                  <!-- <li class="list_item th">男性平均年収</li>
                  <li class="list_item">約1000万</li> -->
                </ul>
              </div>
              <div class="table --2">
                <h3 class="table_title">
                  <span class="inline-block">ご職業</span
                  ><span class="inline-block">(一例)</span>
                </h3>
                <ul class="table_list">
                  <li class="list_item">三菱グループ各社</li>
                  <li class="list_item">大手総合商社</li>
                  <li class="list_item">医師</li>
                  <li class="list_item">大手金融機関</li>
                  <li class="list_item">大手広告代理店</li>
                  <li class="list_item">弁護士</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="award_wrap">
            <div class="award-title">
              <span class="inline-block">セントマリアージュ青山が</span><br />
              <span class="inline-block">IBJ AWARD 2025年下期</span><br />
              <span class="inline-block">IBJ AWARD 2025年上期</span><br />
              <span class="inline-block">IBJ AWARD 2024年下期</span><br />
              <span class="inline-block">IBJ AWARD 2024年上期</span><br />
              <span class="inline-block">IBJ AWARD 2023年下期</span><br />
              <span class="inline-block">IBJ AWARD 2023年上期</span><br />
              <span class="inline-block">IBJ AWARD 2022年上期</span><br />
              <span class="inline-block">IBJ AWARD 2021年下期</span><br />
              <span class="inline-block">8期連続受賞しました！</span>
            </div>
            <div class="content_wrap --2">
              <div class="content_body img">
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2025_back.webp"
                      class="c-img__img"
                      alt="ibjアワード1"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2025_front.png"
                      class="c-img__img"
                      alt="ibjアワード1"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2024_back.jpg"
                      class="c-img__img"
                      alt="ibjアワード1"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2024_front.png"
                      class="c-img__img"
                      alt="ibjアワード1"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2023_back.webp"
                      class="c-img__img"
                      alt="ibjアワード1"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2023_front.webp"
                      class="c-img__img"
                      alt="ibjアワード2"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2022_back.webp"
                      class="c-img__img"
                      alt="ibjアワード3"
                    />
                  </div>
                </div>
                <div class="top-service__img">
                  <div class="c-img">
                    <img
                      src="~/assets/images/IBJ_award_2021.webp"
                      class="c-img__img"
                      alt="ibjアワード3"
                    />
                  </div>
                </div>
              </div>
              <div class="content_body text">
                <p>
                  IBJアワードとは、IBJの全加盟店の中で、過去6ヶ月間で特に顕著な実績を残した相談所に贈られる賞です。<br />
                  2025年下期は、全加盟店約4,766社のうち644社が受賞しており、こちらの受賞率は13.5%となります。
                  選定基準は、「入会数、成婚数」「地域への貢献度」「ガイドライン、法令の遵守」「クレームやトラブルがない事」等になります。<br />
                  これらの厳しい選定基準をクリアし、IBJがお勧めできる優良結婚相談所としてお墨付きをいただいたことになります。<br />
                  これからも、お1人でも多くの会員様に幸せになっていただくよう、心を込めてサポートさせていただきます！<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section --3">
        <div class="section-wrap">
          <div class="section_title_block --3">
            <h2 class="title">選ばれる理由</h2>
            <div class="title__border"></div>
            <p class="title__sub">選ばれる理由</p>
          </div>
          <ul class="content_wrap">
            <li class="content_body ---1 top-our_strengths__container">
              <div class="top-our_strengths__container--body ---1">
                <h3 class="top-our_strengths__container--point">1</h3>
                <p class="top-our_strengths__container--heading">
                  全国約90,000人を対象に<br />お相手探し
                </p>
                <p class="top-our_strengths__container--about">
                  セントマリアージュ青山は、会員数・成婚数業界ナンバー１の<span
                    class="big_font"
                    >IBJ</span
                  >の正規加盟店です。<br />
                  IBJに加盟している相談所の全国<span class="big_font"
                    >約90,000人</span
                  >の会員様を対象に、ご自身のスマホやパソコンを使ってスムーズなお相手探しができます。<br />
                  毎月4,200名以上の新規会員の方が入会していますので、常に新たな出会いが期待できます。<br />
                  お見合いのセッティング、交際から成婚まで、カウンセラーがきめ細かくサポートさせていただきます。<br /><br />
                </p>
              </div>
              <div class="top-our_strengths__container--img ---1">
                <div class="img_block --1">
                  <img
                    src="~/assets/images/black_wedding.webp"
                    class="img"
                    alt="丁寧なサポート"
                  />
                </div>
              </div>
            </li>
            <li class="content_body ---2 top-our_strengths__container">
              <div class="top-our_strengths__container--body ---2">
                <h3 class="top-our_strengths__container--point">2</h3>
                <p class="top-our_strengths__container--heading">
                  経験に基づく<br />きめ細やかなサポート
                </p>
                <p class="top-our_strengths__container--about">
                  三菱の結婚相談所「ダイヤモンドファミリークラブ」で約10年間勤務し、延べ1000人以上の会員様の担当カウンセラーとして婚活サポートを行ってきました。<br />
                  幅広い年齢層の成婚実績が多数ございますので、経験に基づく的確なアドバイスをいたします。<br />
                  お見合い後の振り返りや、交際中の状況を確認しながら活動状況に応じてアドバイスをさせていただきます。<br />
                  婚活中は誰にも相談できず孤独に陥りがちですが、いつでもメールや電話で相談いただける体制を整えています。
                </p>
              </div>
              <div class="top-our_strengths__container--img ---2">
                <div class="img_block">
                  <img
                    src="~/assets/images/wedding_hall.webp"
                    class="img"
                    alt="満足度"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="section --4" id="access" name="access">
        <div class="section-wrap">
          <div class="section_title_block --4">
            <h2 class="title">アクセス</h2>
            <div class="title__border"></div>
            <p class="title__sub">アクセス</p>
          </div>
          <div class="access-comment big">
            <span class="inline-block"
              ><span style="font-weight: bold">【営業時間】</span><br /><span
                class="inline-block"
                >&emsp;平日 11:00～19:00</span
              ><span class="inline-block">&emsp;(火曜定休日) </span><br /><span
                class="inline-block"
                >&emsp;土日祝11:00～18:00</span
              ></span
            ><br />
            <span class="inline-block"
              ><span style="font-weight: bold">【所在地】</span><br /><span
                class="inline-block"
                >&emsp;〒107-0052</span
              ><span class="inline-block">&emsp;東京都港区赤坂4丁目8番19号</span
              ><span class="inline-block"
                >&emsp;赤坂フロントタウン3階</span
              ></span
            ><br />
            <span class="inline-block"
              ><span style="font-weight: bold">【電話番号】</span><br /><span
                class="inline-block"
                >&emsp;080-7002-0555</span
              ></span
            ><br />
          </div>
          <div class="access-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.036612253006!2d139.73172281533948!3d35.67610048019553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7e44c75e5d%3A0x739a7864f075e711!2z44CSMTA3LTAwNTIg5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yU5LiB55uu77yY4oiS77yR77yZIOi1pOWdguODleODreODs-ODiOOCv-OCpuODsyAz6ZqO!5e0!3m2!1sja!2sjp!4v1670508275711!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div class="access-comment small">
            <span class="inline-block" style="font-weight: bold">【交通】</span
            ><br />
            <span class="inline-block"
              >&emsp;東京メトロ銀座線・丸の内線「赤坂見付駅」4分</span
            ><br />
            <span class="inline-block"
              >&emsp;東京メトロ千代田線「赤坂駅」8分</span
            ><br />
            <span class="inline-block"
              >&emsp;東京メトロ有楽町線・南北線・半蔵門線「永田町駅」9分</span
            ><br />
            <span class="inline-block"
              >&emsp;東京メトロ銀座線・半蔵門線「青山一丁目駅」12分</span
            ><br />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  useContext,
} from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { useInterviewers } from '~/composables/useInterviewers'

const { store } = useContext()
const { displayCaseList } = useInterviewers()

const trigger: string[] = [
  '.intro',
  '.section_title_block.--0',
  '.news-block',
  '.section_title_block.--1',
  '.case_list',
  '.link-block',
  '.section_title_block.--2',
  '.self-pic',
  '.self-p',
  '.self-comments',
  '.about_diamond_family_club',
  '.self-table',
  '.award-title',
  '.content_body.img',
  '.content_body.text',
  '.section_title_block.--3',
  '.top-our_strengths__container--img.---1',
  '.top-our_strengths__container--img.---2',
  '.top-our_strengths__container--body.---1',
  '.top-our_strengths__container--body.---2',
  '.section_title_block.--4',
  '.access-comment.big',
  '.access-map',
  '.access-comment.small',
]
const settings = {
  fade: false,
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  // "cssEase": "linear",
  swipe: true,
  pauseOnHover: true,
  // "dotsClass": "dots"
}

let circleAnim: gsap.core.Tween
let headerAnim = ref<gsap.core.Tween>({} as gsap.core.Tween)
let fuwaAnim = ref<gsap.core.Tween[]>([])
let fuwaSetAnim = ref<gsap.core.Tween[]>([])
let isLoadingEnabled = computed<boolean>(
  () => store.getters['isLoadingEnabled']
)
const myObserver = ref<ResizeObserver>({} as ResizeObserver)
const pageObserver = ref()

onMounted(() => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      fuwaAnim.value.forEach((val) => {
        val.scrollTrigger?.refresh()
      })
      headerAnim.value.scrollTrigger?.refresh()
    }
  })
  myObserver.value = resizeObserver
  myObserver.value.observe(pageObserver.value)
  if (isLoadingEnabled.value) {
    store.dispatch('startLoading')
  }
  circleAnim = gsap.fromTo(
    '.flow_block',
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: '.body',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      duration: 0.3,
    }
  )

  headerAnim.value = gsap.to('.header_wrap', {
    scrollTrigger: {
      trigger: '.intro',
      start: 'top 40%',
      toggleActions: 'play none none reverse',
    },
    onStart: () => store.commit('changeHeaderToBlue'),
    onReverseComplete: () => store.commit('changeHeaderToTrans'),
  })
  trigger.forEach((value) => {
    let array: gsap.core.Tween = gsap.set(value, {
      opacity: 0,
      y: 40,
    })
    fuwaSetAnim.value.push(array)
  })
  trigger.forEach((value) => {
    let array: gsap.core.Tween = gsap.to(value, {
      scrollTrigger: {
        trigger: value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
      opacity: 1,
      y: 0,
      duration: 1,
    })
    fuwaAnim.value.push(array)
  })

  const el = document.getElementsByClassName('slick-dots')[0] as HTMLElement
  if (el) {
    el.style.bottom = '20px'
  }
})

onBeforeUnmount(() => {
  myObserver.value.unobserve(pageObserver.value)
  circleAnim.scrollTrigger?.disable()
  headerAnim.value.scrollTrigger?.disable()
  fuwaAnim.value.forEach((value) => {
    value.scrollTrigger?.disable()
  })
})
</script>

<style lang="sass" scoped>
.hero
  position: relative
  > .page-title
    position: absolute
    top: 50vh
    left: 50vw
    transform: translate(-50%,-50%)
    text-align: center
    margin: auto
    width: 1080px
    max-width: calc(100% - 10vw)
    +text-title(54px)
    color: var(--sub)

    +sp-view
      +text-subtitle(24px)
      transform: translate(-50%,-70%)
      color: var(--sub)
    > .page-title__block
      display: flex
      flex-wrap: wrap
      justify-content: center
      > .page-title__block--sp
        display: flex
        justify-content: center
        padding: 8px 0
        .page-title__character
          //overflow: hidden
          > .page-title__child
            transform: translateY(32px)
            display: block
  > .img_block
    width: 100vw
    height: 100vh
    z-index: -50
    position: sticky
    top: 0
    > .hero_img
      width: 100%
      height: 100%
      object-fit: cover
      +sp-view
        object-position: 78% center
  > .intro
    padding: 240px 0 160px
    +sp-view
      padding: 80px 0 80px
    > .intro-card
      width: 1080px
      max-width: calc(100% - 10vw)
      margin: auto
      text-align: center
      box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%)
      border-radius: 20px
      padding: 30px 40px 40px
      background-color: rgba(255, 255, 255, 0.9)
      background-image: url("/images/frame-topleft.svg"), url("/images/frame-topright.svg"), url("/images/frame-bottomleft.svg"), url("/images/frame-bottomright.svg")
      background-position: left 2px top 2px, right 2px top 2px, left 2px bottom 2px, right 2px bottom 2px
      background-size: 66px 66px
      +sp-view
        padding: 30px 16px 40px
      > .intro-title
        +text-title(36px)
        color: var(--sub)
        display: inline-block
        position: relative
        text-align: center
        margin-bottom: 10px
        padding: 0 17%

        +sp-view
          font-size: 20px
          padding: 0

        &::before,&::after
          content: ''
          position: absolute
          top: 50%
          display: inline-block
          width: 15%
          height: 2px
          background-color: #000875
          +sp-view
            display: none

        &::before
          left:0
          background: linear-gradient(-45deg, transparent, #000875 10%, #000875 30%, transparent)
        &::after
          right: 0
          background: linear-gradient(-45deg, transparent, #000875 70%, #000875 90%, transparent)
      > .intro-cont
        display: flex
        justify-content: space-between
        align-items: center
        > .text
          +text-body(16px)
          padding: 0 20px
          text-align: left
          +sp-view
            padding: 0 8px
            > .resposive_text
              display: none
        > .img_block
          flex: 0 0 25%
          position: relative
          +sp-view
            display: none
          &::after
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
          &.left
            &::after
              background-image: linear-gradient(90deg, transparent 0 60%, #FFF 100%), linear-gradient(0deg, transparent 0 60%, #FFF 100%)

          &.right
            &::after
              background-image: linear-gradient(270deg, transparent 0 40%, #FFF 100%),linear-gradient(0deg, transparent 0 60%, #FFF 100%)

          > .img
            width: 100%
            height: 20vw
            object-fit: cover
.body
  height: auto
  position: relative
  background-image: url("/images/luxury-2.webp")
  background-size: 25%
  background-repeat: repeat

  > .section
    // padding: 150px 0 150px
    > .section-wrap
      margin: auto
      width: 1080px
      max-width: calc(100% - 10vw)
      position: relative
      padding: 40px 0 80px
      +sp-view
        padding: 60px 0 60px
      > .section_title_block
        display: flex
        justify-content: center
        flex-wrap: wrap
        width:100%
        margin: 60px 0 60px
        text-align: center
        +sp-view
          margin: 0 0 20px
        > .title
          +text-subtitle(40px)
          position: relative
          text-align: center
          margin: 0 0 20px
          +sp-view
            +text-subtitle(32px)
          &::before
            position: absolute
            bottom: -10px
            left: calc(50% - 50px)
            width: 100px
            height: 5px
            content: ''
            border-radius: 3px
            background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
        > .title__border
          width: 70px
          height: 2px
          background: var(--main)
          transform: rotate(-33deg)
          margin: 50px 20px 0
          display: none
          +sp-view
            transform: rotate(0)
            margin: 3% 0
        > .title__sub
          display: none
          &.point
            display: inline-block
            +text-subtitle(16px)
            width: 100%
            margin-top: 0
    &.--0
      .section-wrap
        .news-block
          display: flex
          flex-direction: column
          gap: 20px
          padding: 20px
          background-color: #fff

          +sp-view
            width: 100%
            flex-direction: column

          .news-item
            display: flex
            align-items: center
            padding: 10px
            border-bottom: 1px solid #e0e0e0

            +sp-view
              flex-direction: column
              align-items: flex-start

            &__date
              min-width: 100px
              +text-body(16px)
              color: #999
              +sp-view
                +text-body(14px)
                color: #999

            &__text
              flex-grow: 1
              padding: 0 20px

              &__content
                +text-body(16px)
                font-weight: bold
                +sp-view
                  +text-body(14px)
                  font-weight: bold

              &__url
                +text-body(14px)
                color: var(--main)
                text-decoration: underline
                cursor: pointer
                +sp-view
                  +text-body(12px)
                  color: var(--main)

            &__img
              width: 200px

              +sp-view
                display: none

              img
                width: 100%
                height: auto
                border-radius: 5px




    &.--1
      > .section-wrap
        > .case_list
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          gap: 0 8px
          +sp-view
            width: 100%
            flex-direction: column

          > .slide_wrap
            display: none
            width: 90%
            margin: auto

            +sp-view
              display: block
            > .slide
              width: 100%
              height: 400px

            .slick-prev,.slick-next
              width: 24px
              z-index: 1
            .slick-prev:before,.slick-next:before
              color: var(--main) !important
              font-size: 24px !important
            .slick-dots
              bottom: 100px !important
          > .case-item
            min-width: 280px
            flex: 1
            margin-bottom: 40px
            border-radius: 8px
            &.empty
              width: 100%
              height: 0
              margin-bottom: 0px
              padding: 0px
              border-top: 0
            +sp-view
              min-width: 240px
              display: none

          .case-card
            width: 100%
            box-shadow: 0 2px 14px rgba(0, 0, 0, .1)
            border-radius: 16px
            > .case-item__image_block
              position: relative
              width: 100%
              overflow: hidden
              border-radius: 16px 16px 0px 0px
              &::before
                content:""
                display: block
                padding-top: 63%    // (縦220px / 横350px)より
              > .case-item__image
                display: block
                position: absolute
                height: 100%
                width: 100%
                top: 0
                object-fit: cover
            > .card
              display: block
              background-color: white
              height: fit-content
              flex-shrink: 0
              width: 100%
              border-radius: 0 0 16px 16px
              padding: 30px
              +sp-view
                padding: 24px 5vw
              > .__link
                padding: 8px 0
                display: flex
                align-items: center
                justify-content: space-between
                > .__title
                  +text-title(24px)
                  +sp-view
                    +text-title(24px)
                > .right-arrow
                  color: var(--main)
              > .__logo
                height: 32px
                width: auto
                margin-top: 12px
              > .__title
                margin-top: 12px
                +text-subtitle(16px)
        > .link-block
          text-align: center
          border-radius: 25px
          background-color: var(--main)
          width: 100%
          margin: auto
          +sp-view
            width: 100%
          > .list-link
            display: flex
            align-items: center
            justify-content: center
            gap: 8px
            > .list-link-wrap
              overflow: hidden
              display: flex
              align-items: center
              height: 48px
              >.list-link-text
                +text-title(28px)
                color: var(--white-1)
                display: inline-block
                white-space: nowrap
                +sp-view
                  +text-title(24px)
                  color: var(--white-1)
            > .right-arrow
              height: 11px
              width: 27px
              color: var(--white-1)
    &.--2
      background-color: var(--main)
      > .section-wrap
        border-bottom: 1px solid black
        > .section_title_block
          > .title
            color: var(--white-1)
            &::before
              background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
          > .title__border
            background: var(--white-1)
          > .title__sub
            color: var(--white-1)

        > .self_introduction
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          gap: 60px
          margin: 20px 0 0
          padding: 20px
          +sp-view
            padding: 0
            gap: 40px
          > .self-pic
            flex: 0 0 30%
            +sp-view
              flex: 0 0 100%
            > .img_block
              position: relative
              width: 100%
              border-radius: 20px
              overflow: hidden
              +sp-view
                width: 80%
                margin: auto
              &::before
                content:""
                display: block
                padding-top: 160%
                +sp-view
                padding-top: 140%
              &::after
                content: ''
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background-image: linear-gradient(90deg, transparent 0 95%, var(--main) 100%), linear-gradient(0deg, transparent 0 95%, var(--main) 100%), linear-gradient(180deg, transparent 0 95%, var(--main) 100%), linear-gradient(270deg, transparent 0 95%, var(--main) 100%)
                // background-image: linear-gradient(90deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(0deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(180deg, transparent 0 95%, white 95%, transparent 100%), linear-gradient(270deg, transparent 0 95%, white 95%, transparent 100%)
              > .img
                display: block
                position: absolute
                height: 100%
                width: 100%
                top: 0
                object-fit: cover
          > .self-p
            +text-body(16px)
            color: var(--white-1)
            position: relative
            line-height: 2
            flex: 0 0 60%
            +sp-view
              flex: 0 0 100%
            > .self-p_wrap
              &::after
                content: ''
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%

        > .about_diamond_family_club
          text-align: center
          padding: 40px 0
          margin: 0 0 40px

          +sp-view
            margin: 0

          > .title_wrap
            position: relative

            +sp-view
              &::after
                content: ""
                position: absolute
                left: 0
                bottom: -2px
                width: 100%
                height: 2px
                background: -webkit-repeating-linear-gradient(-45deg, #6ad1c8, #6ad1c8 2px, #fff 2px, #fff 4px)
                background: repeating-linear-gradient(-45deg, #6ad1c8, #6ad1c8 2px, #fff 2px, #fff 4px)

            > .title
              +text-title(28px)
              color: var(--white-1)
              display: inline-block
              position: relative
              margin-bottom: 10px
              padding: 0 55px

              +sp-view
                padding: 0
                font-size: 18px

              &::before,&::after
                content: ''
                position: absolute
                top: 50%
                display: inline-block
                width: 45px
                height: 1px
                background-color: white

                +sp-view
                  font-size: 20px
                  display: none

              &::before
                left: 0
                +sp-view
                  display: none

              &::after
                right: 0

          > .about_body
            max-width: 560px
            margin: auto
            width: 80%
            min-width: 310px
            text-align: left
            +text-body(16px)
            color: var(--white-1)

        > .self-body
          flex: 70%

          > .self-comments
            > .mini_comment
              +text-body(12px)
              color: var(--white-1)
              text-align: center
              position: relative
              top: -20px
            > .self-comment
              text-align: center
              +text-title(40px)
              background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%)
              background-clip: text
              -webkit-text-fill-color: transparent
              margin-bottom: 20px

              +sp-view
                font-size: 22px
                line-height: 1.5

              > .big_font
                font-size: 48px
                display: inline-block
                +sp-view
                  font-size: 30px
          > .self-table
            width: 100%
            margin: 40px auto
            +text-subtitle(16px)
            display: flex
            justify-content: space-between
            flex-wrap: wrap

            +sp-view
              width: 100%
              margin: 0

            > .text
              width: 100%
              text-align: center
              color: var(--white-1)
            > .table
              border-radius: 10px
              padding: 20px
              box-sizing: border-box
              width: 48%
              margin: auto
              border: 1px solid var(--white-1)
              background-color: white
              +sp-view
                width: 100%
                margin: 0 0 20px
              > .table_title
                +text-title(24px)
                color: var(--main)
                text-align: center
                margin: 0 0 20px
                line-height: 1.3
                border-bottom: 1px solid var(--main)
                padding-bottom: 10px
                +sp-view
                  +text-title(20px)
              > .table_list
                display: flex
                justify-content: space-between
                flex-wrap: wrap
                list-style: none
                > .list_item
                  +text-body(16px)
                  font-weight: bold
                  width: 49%
                  text-align: center
                  padding: 10px
                  box-sizing: border-box
                  border-radius: 5px
                  background: #efecdd
                  margin-bottom: 5px
                  +sp-view
                    font-size: 12px

              &.--1
                > .table_list
                  > .list_item
                    background: var(--skyBlue)
                    &.th
                      background: var(--main)
                      color: var(--white-1)

        > .award_wrap
          > .award-title
            text-align: center
            width: 100%
            +text-title(32px)
            margin-bottom: 10px
            background-image: linear-gradient(135deg, #b8751e 0%, #ffce08 37%,  #e1ce08 63%, #b8751e 100%)
            background-clip: text
            -webkit-text-fill-color: transparent
            margin: 0 0 80px
            line-height: 1.5
            +sp-view
              font-size: 20px
              margin: 0 0 40px
          > .content_wrap
            display: flex
            // flex-direction: column
            justify-content: space-between
            flex-wrap: wrap
            row-gap: 40px
            > .content_body
              width: calc(50% - 30px)
              display: flex
              flex-wrap: wrap
              +sp-view
                width: 100%
              > .top-service__img
                flex: 0 0 40%
                margin: auto

                +sp-view
                  flex: 1

                > .c-img
                  position: relative
                  width: 100%
                  border-radius: 12px
                  overflow: hidden
                  &::before
                    content:""
                    display: block
                    padding-top: 100%
                  > .c-img__img
                    display: block
                    position: absolute
                    height: 100%
                    width: 100%
                    object-fit: cover
                    top: 0
                    box-shadow: 3px 3px 6px rgba(0,0,0,.6)
                    // margin: 5% 0 0 5%
                    z-index: 2
              &.img
                display: flex
                // flex-direction: column
                gap: 20px
              &.text
                +text-body(16px)
                color: var(--white-1)
                letter-spacing: .1em
                line-height: 1.8em
                +sp-view
                  +text-body(16px)
                  color: var(--white-1)
    &.--3
      background-color: var(--white-1)
      > .section-wrap
        border-bottom: 1px solid black
        > .content_wrap
          display: flex
          justify-content: space-between
          flex-wrap: wrap
          padding: 40px 0 0
          +sp-view
            gap: 40px
            padding: 0
          > .content_body
            width: 45%
            list-style: none
            color: #707070
            text-align: left
            padding: 10px

            +sp-view
              width: 100%
              display: flex
              flex-wrap: wrap-reverse
              gap: 10px
            > .top-our_strengths__container--body
              > .top-our_strengths__container--point
                +text-title(40px)
                background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
                background-clip: text
                -webkit-text-fill-color: transparent
                +sp-view
                  &::after
                    margin: 3% 0 5%
                &::before
                  content: "Point"
                  +text-subtitle(30px)
                  color: var(--sub)
                  margin-right: 10px
                  +sp-view
                    font-size: 20px
                &::after
                  content: ""
                  width: 50px
                  height: 3px
                  background: var(--sub)
                  display: block
                  margin: 5% 0 8%
                  +sp-view
                    margin: 0% 0 8%
              > .top-our_strengths__container--heading
                +text-title(36px)
                line-height: 1.4em
                background-image: linear-gradient(135deg, #000875 0%, #17aaee 37%,  #17aaee 63%, #000875 100%)
                background-clip: text
                -webkit-text-fill-color: transparent
                padding: 0 0 4px
                +sp-view
                  +text-title(27px)
              > .top-our_strengths__container--about
                +text-body(20px)
                line-height: 1.4em
                margin: 8% 0 13%

                +sp-view
                  margin:5% 0 5%
                  +text-body(16px)

                > .big_font
                  font-weight: bold
                  +sp-view


            > .top-our_strengths__container--img
              width: 95%
              +sp-view
                width: 65vw
                margin: 0 0 0 auto
                padding: 0 5% 0 0
              > .img_block
                position: relative
                width: 100%
                &::before
                  content:""
                  display: block
                  padding-top: 70%
                &::after
                  content: ''
                  position: absolute
                  top: 0
                  left: 0
                  width: 100%
                  height: 100%
                  background-image: linear-gradient(90deg, transparent 0 95%, var(--white-1) 100%), linear-gradient(0deg, transparent 0 95%, var(--white-1) 100%), linear-gradient(180deg, transparent 0 95%, var(--white-1) 100%), linear-gradient(270deg, transparent 0 95%, var(--white-1) 100%)
                > .img
                  display: block
                  position: absolute
                  height: 100%
                  width: 100%
                  top: 0
                  object-fit: cover

    &.--4
      background-color: var(--white-1)
      > .section-wrap
        width: 100%
        max-width: 100%
        text-align: center
        +sp-view
          width: 1080px
          max-width: calc(100% - 10vw)
        > .access-comment
          text-align: left
          display: inline-block
          margin: 20px auto
          +text-body(16px)

          +sp-view
            margin: 20px 0

          &.small
            +text-body(16px)

            +sp-view
              +text-body(12px)

        > .access-map
          width: 100%
          height: 400px
          object-fit: cover
</style>
