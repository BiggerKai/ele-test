<template>
  <div class="content">
    <div class="doraemon">
      <!-- 头 -->
      <div class="head">
        <!-- 脸 -->
        <div class="face">
          <!-- 眼睛 -->
          <div class="eyes">
            <!-- 左眼 -->
            <div class="eye left">
              <!-- 眼珠 -->
              <div class="eyeball bleft"></div>
            </div>
            <!-- 右眼 -->
            <div class="eye right">
              <!-- 眼珠 -->
              <div class="eyeball bright"></div>
            </div>
          </div>
          <!-- 鼻子 -->
          <div class="nose">
            <!-- 鼻子发光 -->
            <div class="nose_light">

            </div>
          </div>
          <!-- 鼻子垂直线 -->
          <div class="nose_line"></div>
          <!-- 胡须 -->
          <div class="whiskers">
            <div class="whisker whiskerl1 r200"></div>
            <div class="whisker whiskerl2"></div>
            <div class="whisker whiskerl3 r160"></div>
            <div class="whisker whiskerr1 r160"></div>
            <div class="whisker whiskerr2"></div>
            <div class="whisker whiskerr3 r200"></div>
          </div>
          <!-- 嘴巴 -->
          <div class="mouth">

          </div>
        </div>
      </div>
      <!-- 脖子 -->
      <div class="neck">
        <!-- 铃铛 -->
        <div class="bell">
          <div class="bell_line"></div>
          <div class="bell_light"></div>
          <div class="bell_circle"></div>
          <div class="bell_under"></div>
        </div>
      </div>
      <!-- 身体 -->
      <div class="body">
        <div class="wraps">
          <div class="pocket"></div>
        </div>
      </div>
      <div class="hands">
        <!-- 左手 -->
        <div class="hand_left">
          <!-- 手臂 -->
          <div class="arm"></div>
          <!-- 手掌 -->
          <div class="palm"></div>
          <!-- 交接线 -->
          <div class="arm_line"></div>
        </div>
        <!-- 右手 -->
        <div class="hand_right">
          <!-- 手臂 -->
          <div class="arm"></div>
          <!-- 手掌 -->
          <div class="palm"></div>
          <!-- 交接线 -->
          <div class="arm_line"></div>
        </div>
      </div>

      <!-- 脚 -->
      <div class="feet">
        <div class="left"></div>
        <div class="right"></div>
        <div class="rewrite"></div>
      </div>
    </div>

    <div class="wraper">
      <div class="inner"></div>
    </div>
  </div>
</template>
<style lang="scss" scope>
.content {
  .wraper {
    display: none;
    width: 400px;
    height: 300px;
    background: grey;
    position: relative;

    .inner {
      position: absolute;
      width: 200px;
      height: 120px;
      background: blue;
      left: 100px;
      top: 90px;
    }
  }

  .doraemon {
    position: relative;
    .head {
      width: 320px;
      height: 300px;
      border-radius: 150px;
      background: -webkit-radial-gradient(right top, #fff 10%, #07bbee 20%, #10a6ce 75%, #000);
      border: 2px solid #555;
      box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.45);

      .face {
        position: absolute;
        top: 75px;
        left: 25px;
        z-index: 2;
        width: 265px;
        height: 195px;
        border: 2px solid #000;
        border-radius: 150px;
        background: #fff;
        background: -webkit-radial-gradient(right top, #fff 75%, #eee 80%, #999 90%, #444);
        .eyes {
          width: 150px;
          margin: 0 auto;
          position: relative;
          top: -36px;
          z-index: 3;
          .eye {
            width: 72px;
            height: 82px;
            border: 2px solid #000;
            border-radius: 35px 35px;
            background: #fff;
            float: left;
            @-webkit-keyframes eyemove {
              70% {
                margin: 0 0 0 0;
              }
              80% {
                margin: -22px 0 0 0;
              }

              85% {
                margin: -22px 0 0 5px;
              }

              90% {
                margin: -22px 10px 0 0;
              }

              93% {
                margin: -22px 0 0 0;
              }

              96% {
                margin: 0 0 0 0;
              }
            }
            .eyeball {
              width: 14px;
              height: 14px;
              background: #000;
              border-radius: 7px;
              position: relative;
              top: 40px;
              animation: eyemove 3s linear infinite;
            }
          }
          .right {
            margin-left: -2px;
          }

          .bleft {
            left: 50px;
          }
          .bright {
            left: 7px;
          }
        }
        .nose {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          background: #c93300;
          border: 2px solid #000;
          margin: 0 auto;
          margin-top: 36px;
          z-index: 4;
          left: 115px;
          position: absolute;
          .nose_light {
            width: 10px;
            height: 10px;
            border-radius: 5px;
            box-shadow: 19px 8px 5px #fff;
          }
        }
        .nose_line {
          width: 3px;
          height: 100px;
          background: #333;
          left: 131px;
          top: 70px;
          z-index: 3;
          position: absolute;
        }
        .mouth {
          width: 220px;
          height: 400px;
          border-bottom: 3px solid #333;
          border-radius: 120px;
          position: absolute;
          top: -230px;
          left: 20px;
        }
        .whiskers {
          width: 220px;
          height: 80px;
          background: #fff;
          position: absolute;
          top: 40px;
          left: 20px;
          z-index: 2;
          .whisker {
            width: 60px;
            height: 2px;
            background: #333;
            position: absolute;
          }

          .whiskerl1 {
            left: 0;
            top: 25px;
          }
          .whiskerl2 {
            left: -2px;
            top: 45px;
          }
          .whiskerl3 {
            left: 0;
            top: 65px;
          }
          .whiskerr1 {
            left: 165px;
            top: 25px;
          }
          .whiskerr2 {
            left: 167px;
            top: 45px;
          }
          .whiskerr3 {
            left: 165px;
            top: 65px;
          }
          .r160 {
            transform: rotate(160deg)
          }
          .r200 {
            transform: rotate(200deg)
          }
        }
      }
    }
    .neck {
      width: 230px;
      height: 20px;
      background: red;
      border: 2px solid #000;
      border-radius: 10px;
      position: relative;
      left: 45px;
      top: -40px;
      z-index: 4;
      background: linear-gradient(#c40, #800400);
      .bell {
        width: 40px;
        height: 40px;
        border: 2px solid #000;
        border-radius: 50%;
        position: relative;
        left: 90px;
        top: 4px;
        background: linear-gradient( #f9f12a, #e9e11a 75%, #a9a100);
        box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);

        .bell_line {
          width: 36px;
          height: 2px;
          background: #f9f12a;
          border: 2px solid #333;
          border-radius: 3px 3px 0 0;
          position: absolute;
          top: 10px;
        }

        .bell_light {
          width: 12px;
          height: 12px;
          border-radius: 10px;
          box-shadow: 22px 2px 5px #fff;
          opacity: 0.7;
        }

        .bell_circle {
          width: 12px;
          height: 10px;
          background: #000;
          border-radius: 5px;
          position: relative;
          left: 14px;
          top: 6px;
        }
        .bell_under {
          width: 3px;
          height: 15px;
          background: #000;
          position: relative;
          left: 18px;
          top: 5px;
        }
      }
    }
    .body {
      width: 220px;
      height: 165px; //background: -webkit-gradient(linear, right top, left top, from(#07beea), color-stop(0.5, #0073b3), color-stop(0.75, #00b0e0), to(#0096be)); 
      background: -webkit-linear-gradient(right, #07beea, #0073b3 5%, #00b0e0 75%, #0096be);
      position: relative;
      top: -42px;
      left: 50px;
      border: 2px solid #333;
      z-index: 1;
      .wraps {
        width: 170px;
        height: 170px;
        background: #fff;
        border: 2px solid #000;
        border-radius: 85px 85px;
        position: absolute;
        left: 20px;
        top: -40px;
        .pocket {
          width: 130px;
          height: 65px;
          border-radius: 0 0 65px 65px;
          background: #fff;
          background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.70, #fff), color-stop(0.75, #f8f8f8), color-stop(0.80, #eee), color-stop(0.88, #ddd), to(#fff));
          background: -moz-linear-gradient(right top, #fff, #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff);
          background: -ms-linear-gradient(right top, #fff, #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff);
          border: 2px solid #000;
          position: absolute;
          top: 84px;
          left: 18px;
        }
      }
    }
    .hands {
      position: absolute;
      .hand_left,
      .hand_right {
        width: 100px;
        height: 100px;
        position: relative;
        .arm {
          width: 80px;
          height: 50px;
          z-index: -1;
          background: -webkit-gradient(linear, left top, left bottom, from(#07beea), color-stop(0.85, #07beea), to(#555));
          border: 1px solid #000;
          box-shadow: -10px 7px 10px rgba(0, 0, 0, 0.35);
        }

        .palm {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          border: 2px solid #000;
          background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.5, #fff), color-stop(0.70, #eee), color-stop(0.8, #ddd), to(#999));
          position: absolute;
          top: 10px;
        }
        .arm_line {
          height: 36px;
          width: 5px;
          position: absolute;
          z-index: 99;
        }
      }
      .hand_left {
        left: -15px;
        top: -202px;
        .arm {
          transform: rotate(-35deg);
          background: #0096be;
        }
        .palm {
          left: -12px;
        }
        .arm_line {
          left: 65px;
          top: -7px;
          background: #0096be;
        }
      }
      .hand_right {
        left: 257px;
        top: -302px;

        .arm {
          transform: rotate(35deg);
        }
        .palm {
          left: 30px;
        }
        .arm_line {
          top: -7px;
          left: 12px;
          background: #07beea;
        }
      }
    }
    .feet {
      position: absolute;
      .left,
      .right {
        width: 125px;
        height: 30px;
        background: #fff;
        border: 2px solid #333;
        position: relative;
        background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.75, #fff), color-stop(0.85, #eee), to(#999));

        border-radius: 60px 80px 40px 60px;
      }
      .left {
        top: -44px;
        left: 30px;
        border-radius: 80px 60px 60px 40px;
        box-shadow: -6px 0 10px rgba(0, 0, 0, 0.35);
      }
      .right {
        top: -78px;
        left: 162px;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.35);
      }
      .rewrite {
        width: 20px;
        height: 10px;
        background: #fff;
        background: -webkit-gradient(linear, right top, left bottom, from(#666), color-stop(0.83, #fff), to(#fff));
        background: -moz-linear-gradient(right top, #666, #fff 83%, #fff);
        background: -ms-linear-gradient(right top, #666, #fff 83%, #fff);
        /*制作半圆效果*/
        border: 2px solid #000;
        border-bottom: none;
        border-radius: 40px 40px 0 0;
        position: relative;
        top: -122px;
        left: 150px;
        z-index: 5;
      }
    }
  }
}
</style>
<script>
export default {

}
</script>

