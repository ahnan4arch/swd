/* global compatibility:true, jsfeat:true */
(function(window){
  "use strict";
  window.swd = window.swd || {};

  function WatchParams() {
    this.win_size = 40;
    this.max_iterations = 30;
    this.epsilon = 1;
    this.min_eigen = 0;
  }

  function Mod_Motion() {
    this.width = 640;
    this.height = 480;
    this.options = null;

    this._curr_img_pyr = null;
    this._prev_img_pyr = null;

    this._point_count = 0;
    this._point_status = null;
    this._prev_xy = null;
    this._curr_xy = null;

    this._canvas = null;

    this._initParameters();
  }
  window.swd.Mod_Motion = Mod_Motion;

  Mod_Motion.prototype._initParameters = function() {
    this._curr_img_pyr = new jsfeat.pyramid_t(3);
    this._prev_img_pyr = new jsfeat.pyramid_t(3);
    this._curr_img_pyr.allocate(640, 480, jsfeat.U8_t|jsfeat.C1_t);
    this._prev_img_pyr.allocate(640, 480, jsfeat.U8_t|jsfeat.C1_t);

    this._point_count = 0;
    this._point_statusOld = new Uint8Array(100);
    this._point_status = new Uint8Array(100);
    this._prev_xy = new Float32Array(100*2);
    this._curr_xy = new Float32Array(100*2);

    this._canvas = document.createElement("canvas");
    this._canvas.width = this.width;
    this._canvas.height = this.height;

    this.options = new WatchParams();
  };

  Mod_Motion.prototype.process = function(layers) {
    var that = this;
    this._context = this._canvas.getContext("2d");

    this._context.drawImage(window.swd.video, 0, 0);
    var imageData = this._context.getImageData(0, 0, this.width, this.height);

    // swap flow data
    var _pt_xy = that._prev_xy;
    that._prev_xy = that._curr_xy;
    that._curr_xy = _pt_xy;
    var _pyr = that._prev_img_pyr;
    that._prev_img_pyr = that._curr_img_pyr;
    that._curr_img_pyr = _pyr;

    var qq;
    for(qq = 0; qq < this._point_count; ++qq) {
      this._point_statusOld[qq] = this._point_status[qq];
    }

    window.graph.filters.rg_chanel(imageData.data, imageData.data);

    if(window.swd.displayProcessing) {
      this._context.putImageData(imageData, 0, 0);
    }

    window.timeStart();
    window.graph.filters.getRChannelAsByteArray(imageData.data, that._curr_img_pyr.data[0].data);
    window.timeEnd("grayscale");
    window.timeStart();
    that._curr_img_pyr.build(that._curr_img_pyr.data[0], true);
    window.timeEnd("build");
    window.timeStart();
    jsfeat.optical_flow_lk.track(that._prev_img_pyr, that._curr_img_pyr, that._prev_xy, that._curr_xy, that._point_count, that.options.win_size|0, that.options.max_iterations|0, that._point_status, that.options.epsilon, that.options.min_eigen);
    window.timeEnd("track");
  };

  Mod_Motion.prototype.reinitPoints = function() {
    this._curr_img_pyr = new jsfeat.pyramid_t(3);
    this._prev_img_pyr = new jsfeat.pyramid_t(3);
    this._curr_img_pyr.allocate(640, 480, jsfeat.U8_t|jsfeat.C1_t);
    this._prev_img_pyr.allocate(640, 480, jsfeat.U8_t|jsfeat.C1_t);
  };

  Mod_Motion.prototype.getPointCount = function(){
    return this._point_count;
  };

  Mod_Motion.prototype.addPoint = function(x, y) {
    this._curr_xy[this._point_count<<1] = x|0;
    this._curr_xy[(this._point_count<<1)+1] = y|0;
    this._point_count++;
  };

  Mod_Motion.prototype.setPoint = function(num, x, y) {
    this._curr_xy[num<<1] = x|0;
    this._curr_xy[(num<<1)+1] = y|0;
    this._point_count = Math.max(num+1, this._point_count);
  };

  Mod_Motion.prototype.removeAllPoints = function() {
    this._point_count = 0;
  };

  Mod_Motion.prototype.getActivePointCount = function() {
    var qq, res = 0;
    for(qq = 0; qq < this._point_count; ++qq) {
      if(this._point_status[qq] === 1) { res++; }
    }
    return res;
  };

  Mod_Motion.prototype.getPoint = function(num) {
    if(num < 0) {
      num = 0;
    } else if(num >= this._point_count) {
      num = this._point_count - 1;
    }
    return {
      "active":(this._point_status[num] === 1),
      "x":this._curr_xy[num<<1],
      "y":this._curr_xy[(num<<1)+1],
      "live":(this._point_statusOld[num] === 1),
      "ox":this._prev_xy[num<<1],
      "oy":this._prev_xy[(num<<1)+1]
    };
  };
})(window);
