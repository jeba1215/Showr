/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['database.js']) {
  _$jscoverage['database.js'] = [];
  _$jscoverage['database.js'][4] = 0;
  _$jscoverage['database.js'][5] = 0;
  _$jscoverage['database.js'][7] = 0;
  _$jscoverage['database.js'][20] = 0;
  _$jscoverage['database.js'][21] = 0;
}
_$jscoverage['database.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\"> * Created by eli on 10/7/14.</span>","<span class=\"c\"> */</span>","<span class=\"k\">var</span> mongoose <span class=\"k\">=</span> require <span class=\"k\">(</span><span class=\"s\">'mongoose'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> Schema <span class=\"k\">=</span> mongoose<span class=\"k\">.</span>Schema<span class=\"k\">;</span>","","<span class=\"k\">var</span> S_User <span class=\"k\">=</span> <span class=\"k\">new</span> Schema<span class=\"k\">(</span><span class=\"k\">{</span>","    username<span class=\"k\">:</span> String<span class=\"k\">,</span>","    password<span class=\"k\">:</span> String<span class=\"k\">,</span>","    friends<span class=\"k\">:</span> <span class=\"k\">[</span>String<span class=\"k\">],</span>","    wall_posts<span class=\"k\">:</span> <span class=\"k\">[</span>","        <span class=\"k\">{</span>","            from<span class=\"k\">:</span> String<span class=\"k\">,</span>","            text<span class=\"k\">:</span> String","        <span class=\"k\">}</span>","    <span class=\"k\">],</span>","    photo_album<span class=\"k\">:</span> <span class=\"k\">[</span>String<span class=\"k\">]</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","","mongoose<span class=\"k\">.</span>model<span class=\"k\">(</span><span class=\"s\">'User'</span><span class=\"k\">,</span> S_User<span class=\"k\">,</span> <span class=\"s\">\"users\"</span><span class=\"k\">);</span>","mongoose<span class=\"k\">.</span>connect<span class=\"k\">(</span><span class=\"s\">'mongodb://localhost/showr'</span><span class=\"k\">);</span>"];
_$jscoverage['database.js'][4]++;
var mongoose = require("mongoose");
_$jscoverage['database.js'][5]++;
var Schema = mongoose.Schema;
_$jscoverage['database.js'][7]++;
var S_User = new Schema({username: String, password: String, friends: [String], wall_posts: [{from: String, text: String}], photo_album: [String]});
_$jscoverage['database.js'][20]++;
mongoose.model("User", S_User, "users");
_$jscoverage['database.js'][21]++;
mongoose.connect("mongodb://localhost/showr");
