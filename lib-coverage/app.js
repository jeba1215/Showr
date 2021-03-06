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
if (! _$jscoverage['app.js']) {
  _$jscoverage['app.js'] = [];
  _$jscoverage['app.js'][1] = 0;
  _$jscoverage['app.js'][2] = 0;
  _$jscoverage['app.js'][3] = 0;
  _$jscoverage['app.js'][4] = 0;
  _$jscoverage['app.js'][5] = 0;
  _$jscoverage['app.js'][6] = 0;
  _$jscoverage['app.js'][7] = 0;
  _$jscoverage['app.js'][8] = 0;
  _$jscoverage['app.js'][9] = 0;
  _$jscoverage['app.js'][10] = 0;
  _$jscoverage['app.js'][11] = 0;
  _$jscoverage['app.js'][12] = 0;
  _$jscoverage['app.js'][13] = 0;
  _$jscoverage['app.js'][14] = 0;
  _$jscoverage['app.js'][17] = 0;
  _$jscoverage['app.js'][18] = 0;
  _$jscoverage['app.js'][20] = 0;
  _$jscoverage['app.js'][23] = 0;
  _$jscoverage['app.js'][24] = 0;
  _$jscoverage['app.js'][25] = 0;
  _$jscoverage['app.js'][26] = 0;
  _$jscoverage['app.js'][27] = 0;
  _$jscoverage['app.js'][29] = 0;
  _$jscoverage['app.js'][30] = 0;
  _$jscoverage['app.js'][31] = 0;
  _$jscoverage['app.js'][32] = 0;
  _$jscoverage['app.js'][36] = 0;
  _$jscoverage['app.js'][37] = 0;
  _$jscoverage['app.js'][47] = 0;
  _$jscoverage['app.js'][48] = 0;
  _$jscoverage['app.js'][51] = 0;
  _$jscoverage['app.js'][52] = 0;
  _$jscoverage['app.js'][53] = 0;
  _$jscoverage['app.js'][54] = 0;
  _$jscoverage['app.js'][61] = 0;
  _$jscoverage['app.js'][62] = 0;
  _$jscoverage['app.js'][63] = 0;
  _$jscoverage['app.js'][64] = 0;
  _$jscoverage['app.js'][73] = 0;
  _$jscoverage['app.js'][74] = 0;
  _$jscoverage['app.js'][75] = 0;
  _$jscoverage['app.js'][81] = 0;
}
_$jscoverage['app.js'].source = ["<span class=\"k\">var</span> database <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'./database.js'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> express <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'express'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> qt <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'quickthumb'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> path <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'path'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> favicon <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'serve-favicon'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> logger <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'morgan'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> bodyParser <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'body-parser'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> partials <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'express-partials'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> routes <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'./routes/index'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> users <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'./routes/users'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> cookieParser <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'cookie-parser'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> session <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'express-session'</span><span class=\"k\">);</span>","<span class=\"k\">var</span> MongoStore <span class=\"k\">=</span> require<span class=\"k\">(</span><span class=\"s\">'connect-mongo'</span><span class=\"k\">)(</span>session<span class=\"k\">);</span>","<span class=\"k\">var</span> app <span class=\"k\">=</span> express<span class=\"k\">();</span>","","<span class=\"c\">// view engine setup</span>","app<span class=\"k\">.</span>set<span class=\"k\">(</span><span class=\"s\">'views'</span><span class=\"k\">,</span> path<span class=\"k\">.</span>join<span class=\"k\">(</span>__dirname<span class=\"k\">,</span> <span class=\"s\">'views/pages'</span><span class=\"k\">));</span>","app<span class=\"k\">.</span>set<span class=\"k\">(</span><span class=\"s\">'view engine'</span><span class=\"k\">,</span> <span class=\"s\">'ejs'</span><span class=\"k\">);</span>","","app<span class=\"k\">.</span>use<span class=\"k\">(</span>partials<span class=\"k\">());</span>","<span class=\"c\">// uncomment after placing your favicon in /public</span>","<span class=\"c\">//app.use(favicon(__dirname + '/public/favicon.ico'));</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>logger<span class=\"k\">(</span><span class=\"s\">'dev'</span><span class=\"k\">));</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>bodyParser<span class=\"k\">.</span>json<span class=\"k\">());</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>bodyParser<span class=\"k\">.</span>urlencoded<span class=\"k\">(</span><span class=\"k\">{</span> extended<span class=\"k\">:</span> <span class=\"k\">false</span> <span class=\"k\">}</span><span class=\"k\">));</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>express<span class=\"k\">.</span>static<span class=\"k\">(</span>path<span class=\"k\">.</span>join<span class=\"k\">(</span>__dirname<span class=\"k\">,</span> <span class=\"s\">'public'</span><span class=\"k\">)));</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>qt<span class=\"k\">.</span>static<span class=\"k\">(</span>path<span class=\"k\">.</span>join<span class=\"k\">(</span>__dirname <span class=\"k\">+</span> <span class=\"s\">'/'</span><span class=\"k\">)));</span>","","app<span class=\"k\">.</span>all<span class=\"k\">(</span><span class=\"s\">'*'</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span>req<span class=\"k\">,</span> res<span class=\"k\">,</span> next<span class=\"k\">)</span> <span class=\"k\">{</span>","    res<span class=\"k\">.</span>header<span class=\"k\">(</span><span class=\"s\">\"Access-Control-Allow-Origin\"</span><span class=\"k\">,</span> <span class=\"s\">\"*\"</span><span class=\"k\">);</span>","    res<span class=\"k\">.</span>header<span class=\"k\">(</span><span class=\"s\">\"Access-Control-Allow-Headers\"</span><span class=\"k\">,</span> <span class=\"s\">\"Origin, X-Requested-With, Content-Type, Accept\"</span><span class=\"k\">);</span>","    next<span class=\"k\">();</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","","<span class=\"c\">//Setting up the session</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>cookieParser<span class=\"k\">());</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span>session<span class=\"k\">(</span><span class=\"k\">{</span>","    secret<span class=\"k\">:</span> <span class=\"s\">'1234567890QWERTY'</span><span class=\"k\">,</span>","    cookie<span class=\"k\">:</span> <span class=\"k\">{</span>maxAge<span class=\"k\">:</span> <span class=\"s\">24</span><span class=\"k\">*</span><span class=\"s\">60</span><span class=\"k\">*</span><span class=\"s\">1000</span><span class=\"k\">}</span><span class=\"k\">,</span>","    store<span class=\"k\">:</span> <span class=\"k\">new</span> MongoStore<span class=\"k\">(</span><span class=\"k\">{</span>","        host<span class=\"k\">:</span> <span class=\"s\">'localhost'</span><span class=\"k\">,</span>","        db<span class=\"k\">:</span> <span class=\"s\">'showr'</span><span class=\"k\">,</span>","        port<span class=\"k\">:</span> <span class=\"s\">'27017'</span>","    <span class=\"k\">}</span><span class=\"k\">)</span>","<span class=\"k\">}</span><span class=\"k\">));</span>","","app<span class=\"k\">.</span>use<span class=\"k\">(</span><span class=\"s\">'/'</span><span class=\"k\">,</span> routes<span class=\"k\">);</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span><span class=\"s\">'/users'</span><span class=\"k\">,</span> users<span class=\"k\">);</span>","","<span class=\"c\">// catch 404 and forward to error handler</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>req<span class=\"k\">,</span> res<span class=\"k\">,</span> next<span class=\"k\">)</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> err <span class=\"k\">=</span> <span class=\"k\">new</span> Error<span class=\"k\">(</span><span class=\"s\">'Not Found'</span><span class=\"k\">);</span>","    err<span class=\"k\">.</span>status <span class=\"k\">=</span> <span class=\"s\">404</span><span class=\"k\">;</span>","    next<span class=\"k\">(</span>err<span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","","<span class=\"c\">// error handlers</span>","","<span class=\"c\">// development error handler</span>","<span class=\"c\">// will print stacktrace</span>","<span class=\"k\">if</span> <span class=\"k\">(</span>app<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">'env'</span><span class=\"k\">)</span> <span class=\"k\">===</span> <span class=\"s\">'development'</span><span class=\"k\">)</span> <span class=\"k\">{</span>","    app<span class=\"k\">.</span>use<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>err<span class=\"k\">,</span> req<span class=\"k\">,</span> res<span class=\"k\">,</span> next<span class=\"k\">)</span> <span class=\"k\">{</span>","        res<span class=\"k\">.</span>status<span class=\"k\">(</span>err<span class=\"k\">.</span>status <span class=\"k\">||</span> <span class=\"s\">500</span><span class=\"k\">);</span>","        res<span class=\"k\">.</span>render<span class=\"k\">(</span><span class=\"s\">'error'</span><span class=\"k\">,</span> <span class=\"k\">{</span>","            message<span class=\"k\">:</span> err<span class=\"k\">.</span>message<span class=\"k\">,</span>","            error<span class=\"k\">:</span> err","        <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span>","","<span class=\"c\">// production error handler</span>","<span class=\"c\">// no stacktraces leaked to user</span>","app<span class=\"k\">.</span>use<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>err<span class=\"k\">,</span> req<span class=\"k\">,</span> res<span class=\"k\">,</span> next<span class=\"k\">)</span> <span class=\"k\">{</span>","    res<span class=\"k\">.</span>status<span class=\"k\">(</span>err<span class=\"k\">.</span>status <span class=\"k\">||</span> <span class=\"s\">500</span><span class=\"k\">);</span>","    res<span class=\"k\">.</span>render<span class=\"k\">(</span><span class=\"s\">'error'</span><span class=\"k\">,</span> <span class=\"k\">{</span>","        message<span class=\"k\">:</span> err<span class=\"k\">.</span>message<span class=\"k\">,</span>","        error<span class=\"k\">:</span> <span class=\"k\">{}</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">);</span>","","module<span class=\"k\">.</span>exports <span class=\"k\">=</span> app<span class=\"k\">;</span>"];
_$jscoverage['app.js'][1]++;
var database = require("./database.js");
_$jscoverage['app.js'][2]++;
var express = require("express");
_$jscoverage['app.js'][3]++;
var qt = require("quickthumb");
_$jscoverage['app.js'][4]++;
var path = require("path");
_$jscoverage['app.js'][5]++;
var favicon = require("serve-favicon");
_$jscoverage['app.js'][6]++;
var logger = require("morgan");
_$jscoverage['app.js'][7]++;
var bodyParser = require("body-parser");
_$jscoverage['app.js'][8]++;
var partials = require("express-partials");
_$jscoverage['app.js'][9]++;
var routes = require("./routes/index");
_$jscoverage['app.js'][10]++;
var users = require("./routes/users");
_$jscoverage['app.js'][11]++;
var cookieParser = require("cookie-parser");
_$jscoverage['app.js'][12]++;
var session = require("express-session");
_$jscoverage['app.js'][13]++;
var MongoStore = (require("connect-mongo"))(session);
_$jscoverage['app.js'][14]++;
var app = express();
_$jscoverage['app.js'][17]++;
app.set("views", path.join(__dirname, "views/pages"));
_$jscoverage['app.js'][18]++;
app.set("view engine", "ejs");
_$jscoverage['app.js'][20]++;
app.use(partials());
_$jscoverage['app.js'][23]++;
app.use(logger("dev"));
_$jscoverage['app.js'][24]++;
app.use(bodyParser.json());
_$jscoverage['app.js'][25]++;
app.use(bodyParser.urlencoded({extended: false}));
_$jscoverage['app.js'][26]++;
app.use(express["static"](path.join(__dirname, "public")));
_$jscoverage['app.js'][27]++;
app.use(qt["static"](path.join((__dirname + "/"))));
_$jscoverage['app.js'][29]++;
app.all("*", (function (req, res, next) {
  _$jscoverage['app.js'][30]++;
  res.header("Access-Control-Allow-Origin", "*");
  _$jscoverage['app.js'][31]++;
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  _$jscoverage['app.js'][32]++;
  next();
}));
_$jscoverage['app.js'][36]++;
app.use(cookieParser());
_$jscoverage['app.js'][37]++;
app.use(session({secret: "1234567890QWERTY", cookie: {maxAge: 1440000}, store: new MongoStore({host: "localhost", db: "showr", port: "27017"})}));
_$jscoverage['app.js'][47]++;
app.use("/", routes);
_$jscoverage['app.js'][48]++;
app.use("/users", users);
_$jscoverage['app.js'][51]++;
app.use((function (req, res, next) {
  _$jscoverage['app.js'][52]++;
  var err = new Error("Not Found");
  _$jscoverage['app.js'][53]++;
  err.status = 404;
  _$jscoverage['app.js'][54]++;
  next(err);
}));
_$jscoverage['app.js'][61]++;
if ((app.get("env") === "development")) {
  _$jscoverage['app.js'][62]++;
  app.use((function (err, req, res, next) {
  _$jscoverage['app.js'][63]++;
  res.status((err.status || 500));
  _$jscoverage['app.js'][64]++;
  res.render("error", {message: err.message, error: err});
}));
}
_$jscoverage['app.js'][73]++;
app.use((function (err, req, res, next) {
  _$jscoverage['app.js'][74]++;
  res.status((err.status || 500));
  _$jscoverage['app.js'][75]++;
  res.render("error", {message: err.message, error: {}});
}));
_$jscoverage['app.js'][81]++;
module.exports = app;
