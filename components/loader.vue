<template>
  <div
    v-show="showValue"
    class="
    fixed z-50 w-screen h-screen
    flex flex-col justify-center items-center
    back-gradient"
    ref="cube">

    <!-- cube loader from https://tobiasahlin.com/spinkit/ start -->
    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
    <!-- cube loader from https://tobiasahlin.com/spinkit/ end -->

  </div>
</template>

<script>
  export default {
    name: 'v-loader',
    data () {
     return {
       showValue: false,
       doStart: null,
       doStop: null
     }
    },
    mounted () {
      this.setup()
    },
    methods: {
      start () {
        if (this.doStop) {
          this.doStop.pause()
        }
        if (this.doStart) {
          this.doStart.restart()
        }
      },
      stop () {
        if (this.doStart) {
          this.doStart.pause()
        }
        if (this.doStop) {
          this.doStop.restart()
        }
      },
      setup () {
        this.doStart = this.$anime({
          autoplay: false,
          targets: this.$el,
          opacity: [0, 1],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.showValue = true
            this.$emit('starting')
          },
          complete: () => {
            this.$emit('started')
          }
        })
        this.doStop = this.$anime({
          autoplay: false,
          targets: this.$el,
          opacity: [1, 0],
          duration: 500,
          delay: 500,
          easing: 'linear',
          begin: () => {
            this.$emit('stopping')
          },
          complete: () => {
            this.showValue = false
            this.$emit('stopped')
          }
        })
      }
    }
  }
</script>

<style scoped>

   /* cube loader from https://tobiasahlin.com/spinkit/ start */
  .sk-folding-cube {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }
  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
    transform: scale(1.1) rotateZ(90deg);
  }
  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
    transform: scale(1.1) rotateZ(180deg);
  }
  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
    transform: scale(1.1) rotateZ(270deg);
  }
  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      } 90%, 100% {
          -webkit-transform: perspective(140px) rotateY(180deg);
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
        }
  }
  @keyframes sk-foldCubeAngle {
    0%, 10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
      } 90%, 100% {
          -webkit-transform: perspective(140px) rotateY(180deg);
          transform: perspective(140px) rotateY(180deg);
          opacity: 0;
        }
  }
   /* cube loader from https://tobiasahlin.com/spinkit/ end */

  .back-gradient {
    background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
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

</style>
