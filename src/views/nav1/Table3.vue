<template>
  <div class="content">
    <canvas id="canvas"></canvas>
    <div class="toolbar">
      <el-button type="primary" @click="clearCanvas()">清 除</el-button>
      <input type="color" v-model="drawColor" :value="drawColor" />
    </div>
  </div>
</template>
<style lang="scss" scope>
#canvas {
  display: block;
}
</style>
<script>
import $ from 'jquery'


export default {
  data() {
    return {
      canvasWidth: 600,
      canvasHeight: 600,
      context: null,
      canvas: null,
      isMouseDown: false,
      lastPoint: { x: 0, y: 0 },
      lastTimestamp: 0,
      lastLineWidth: -1,
      drawColor: '#000',
      maxLineWidth: 15,
      minLineWidth: 1,
      maxSpeed: 10,
      minSpeed: 0.1
    }
  },
  mounted() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;
    this.context = context;
    this.canvas = canvas;

    this.drawGrid();
    canvas.onmousedown = this.onmousedown;
    canvas.onmouseup = this.onmouseup;
    canvas.onmouseout = this.onmouseout;
    canvas.onmousemove = this.onmousemove;
  },
  methods: {
    getPoint(e) {
      var bbox = this.canvas.getBoundingClientRect();
      return {
        x: Math.round(e.clientX - bbox.left),
        y: Math.round(e.clientY - bbox.top)
      }
    },
    calcDistance(loc1, loc2) {
      return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
    },
    calcLineWidth(t, s) {
      var v = s / t;
      var resultLineWidth = 1;
      var lastLineWidth = this.lastLineWidth;
      var maxLineWidth = this.maxLineWidth;
      var minLineWidth = this.minLineWidth;
      var maxSpeed = this.maxSpeed;
      var minSpeed = this.minSpeed;
      if (v <= minSpeed) {
        resultLineWidth = maxLineWidth;
      }
      else if (v >= maxSpeed) {
        resultLineWidth = minLineWidth;
      } else {
        resultLineWidth = maxLineWidth - (v - minSpeed) / (maxSpeed - minSpeed) * (maxLineWidth - minLineWidth);
      }
      if (lastLineWidth == -1) {
        return resultLineWidth;
      }
      return lastLineWidth * 2 / 3 + resultLineWidth * 1 / 3;
    },
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.drawGrid();
    },
    drawGrid() {
      var context = this.context;
      var canvasWidth = this.canvasWidth;
      var canvasHeight = this.canvasHeight;
      context.save();
      context.beginPath();
      context.moveTo(3, 3);
      context.lineTo(canvasWidth - 3, 3);
      context.lineTo(canvasWidth - 3, canvasHeight - 3);
      context.lineTo(3, canvasHeight - 3);
      context.closePath();
      context.strokeStyle = "rgb(230,11,9)";
      context.lineWidth = 6;
      context.stroke();

      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(canvasWidth, canvasHeight);
      context.moveTo(0, canvasHeight);
      context.lineTo(canvasWidth, 0);
      context.moveTo(0, canvasHeight / 2);
      context.lineTo(canvasWidth, canvasHeight / 2);
      context.moveTo(canvasWidth / 2, 0);
      context.lineTo(canvasWidth / 2, canvasHeight);
      context.lineWidth = 1;
      context.stroke();
      context.restore();

    },
    onmousedown(e) {
      e.preventDefault();
      this.isMouseDown = true;
      this.lastPoint = this.getPoint(e);
      this.lastTimestamp = new Date().getTime();
    },
    onmouseup(e) {
      e.preventDefault();
      this.isMouseDown = false;
    },
    onmouseout(e) {
      e.preventDefault();
      this.isMouseDown = false;
    },
    onmousemove(e) {
      e.preventDefault();
      if (this.isMouseDown) {
        var context = this.context;
        var lastPoint = this.lastPoint;
        var curPoint = this.getPoint(e);
        var curTimestamp = new Date().getTime();
        var s = this.calcDistance(curPoint, lastPoint);
        var t = curTimestamp - this.lastTimestamp;
        var lineWidth = this.calcLineWidth(t, s);
        context.beginPath();
        context.moveTo(lastPoint.x, lastPoint.y);
        context.lineTo(curPoint.x, curPoint.y);
        context.strokeStyle = this.drawColor;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = lineWidth;
        context.stroke();
        this.lastPoint = curPoint;
        this.lastTimestamp = curTimestamp;
        this.lastLineWidth = lineWidth;
      }
    }
  }
}
</script>

