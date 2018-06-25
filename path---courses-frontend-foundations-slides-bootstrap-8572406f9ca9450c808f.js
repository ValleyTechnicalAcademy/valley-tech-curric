webpackJsonp([0xdf8805ce7f93],{423:function(n,s){n.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<p>class: middle center</p>\n<h2>jQuery</h2>\n<p>.left[</p>\n<ul>\n<li>fast, small, and feature-rich JavaScript library</li>\n<li>makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler</li>\n<li>provides a paradigm for event handling that goes beyond basic DOM element selection and manipulation.\n]</li>\n</ul>\n<hr>\n<h2>ok, but why?</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">changeBachground</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>\nDocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> color<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nOnload<span class="token operator">=</span><span class="token function">changeBackground</span> <span class="token punctuation">(</span>‘red’<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>OR</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">$</span> <span class="token punctuation">(</span>‘body’<span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">css</span> <span class="token punctuation">(</span>‘background’<span class="token punctuation">,</span> ‘#ccc’<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h2>or another</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"yo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> d<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>className <span class="token operator">=</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>className <span class="token operator">+</span> <span class="token string">" selected"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>OR</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".yo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">"selected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle center</p>\n<h2>ajax calls</h2>\n<ul>\n<li>AJAX = Asynchronous JavaScript and XML.</li>\n<li>Loading data in the background and display it on the webpage, without reloading the whole page.</li>\n<li>Send data to a server - in the background, you know, like a form!</li>\n</ul>\n<hr>\n<h2>ajax example</h2>\n<h1>Peasants</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">loadDoc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"ajax_info.txt"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h2>ajax example</h2>\n<h1>Gong farmer</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">"demo_test.txt"</span><span class="token punctuation">,</span>\n    success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#div1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h1>Bootstrap</h1>\n<p><img src="https://www.w3schools.com/bootstrap/bs_themes.jpg" alt="inline"></p>\n<hr>\n<h1>UI Framework</h1>\n<ul>\n<li>\n<p>It includes HTML and CSS based design templates for common user interface\ncomponents like:</p>\n<ul>\n<li>Typography,</li>\n<li>Forms,</li>\n<li>Buttons,</li>\n<li>Tables,</li>\n<li>Navigations,</li>\n<li>Dropdowns,</li>\n<li>Alerts,</li>\n<li>Modals,</li>\n<li>Tabs,</li>\n<li>Accordion,</li>\n<li>Carousel and many other as well as optional JavaScript extensions.</li>\n</ul>\n</li>\n</ul>\n<hr>\n<h1>yeah, but why?</h1>\n<ul>\n<li>Save lots of time —</li>\n<li>Responsive features —</li>\n<li>Consistent design —</li>\n<li>Easy to use —</li>\n<li>Compatible with browsers —</li>\n<li>Open Source — And the best part is, it is completely free to download and use.</li>\n</ul>\n<hr>\n<h1>What you get</h1>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bootstrap<span class="token operator">/</span>\n<span class="token operator">|</span>—— css<span class="token operator">/</span>\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token punctuation">.</span>css\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token punctuation">.</span>min<span class="token punctuation">.</span>css\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token operator">-</span>theme<span class="token punctuation">.</span>css\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token operator">-</span>theme<span class="token punctuation">.</span>min<span class="token punctuation">.</span>css\n<span class="token operator">|</span>—— js<span class="token operator">/</span>\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token punctuation">.</span>js\n<span class="token operator">|</span>   <span class="token operator">|</span>—— bootstrap<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js\n<span class="token operator">|</span>—— fonts<span class="token operator">/</span>\n<span class="token operator">|</span>   <span class="token operator">|</span>—— glyphicons<span class="token operator">-</span>halflings<span class="token operator">-</span>regular<span class="token punctuation">.</span>eot\n<span class="token operator">|</span>   <span class="token operator">|</span>—— glyphicons<span class="token operator">-</span>halflings<span class="token operator">-</span>regular<span class="token punctuation">.</span>svg\n<span class="token operator">|</span>   <span class="token operator">|</span>—— glyphicons<span class="token operator">-</span>halflings<span class="token operator">-</span>regular<span class="token punctuation">.</span>ttf\n<span class="token operator">|</span>   <span class="token operator">|</span>—— glyphicons<span class="token operator">-</span>halflings<span class="token operator">-</span>regular<span class="token punctuation">.</span>woff\n</code></pre>\n      </div>\n<hr>\n<h1>Wiring</h1>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Basic Bootstrap Template<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/bootstrap.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- Optional Bootstrap theme --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/bootstrap-theme.min.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello, world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/jquery-1.11.3.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/bootstrap.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<hr>\n<h1>Bootstrap Grid System</h1>\n<table>\n<thead>\n<tr>\n<th>Features</th>\n<th align="center">Extra small devices Phones (&#x3C;768px)</th>\n<th align="right">Tablets (≥768px)</th>\n<th align="right">Medium devices Desktops (≥992px)</th>\n<th align="right">Large devices Desktops (≥1200px)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Max container width</td>\n<td align="center">None (auto)</td>\n<td align="right">750px</td>\n<td align="right">970px</td>\n<td align="right">1170px</td>\n</tr>\n<tr>\n<td>Grid behavior</td>\n<td align="center">Horizontal at all times</td>\n<td align="right">Collapsed to start, horizontal above breakpoints</td>\n<td align="right"></td>\n<td align="right"></td>\n</tr>\n<tr>\n<td>Class prefix</td>\n<td align="center">.col-xs-</td>\n<td align="right">.col-sm-</td>\n<td align="right">.col-md-</td>\n<td align="right">.col-lg-</td>\n</tr>\n<tr>\n<td>Max column width</td>\n<td align="center">Auto</td>\n<td align="right">~62px</td>\n<td align="right">~81px</td>\n<td align="right">~97px</td>\n</tr>\n</tbody>\n</table>\n<hr>',internal:{content:'---\ntitle: "jQuery & Bootstrap"\ncourseId:  "FSWG101"\ncirriculum:\n  - "Web / Full Stack / Software Development"\ntype: "slide"\ndraft: false\n---\n\nclass: middle center\n\n## jQuery\n\n.left[\n\n* fast, small, and feature-rich JavaScript library\n* makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler\n* provides a paradigm for event handling that goes beyond basic DOM element selection and manipulation.\n  ]\n\n---\n\n## ok, but why?\n\n```js\nfunction changeBachground(color) {\nDocument.body.style.background = color;\n}\n\nOnload=changeBackground (‘red’);\n```\n\n**OR**\n\n```js\n$ (‘body’) .css (‘background’, ‘#ccc’);\n```\n\n---\n\n## or another\n\n```js\nvar d = getElementsByClassName("yo");\nfor (var i = 0; i < d.length; i++) {\n  d[i].className = d[i].className + " selected";\n}\n```\n\n**OR**\n\n```js\n$(".yo").addClass("selected");\n```\n\n---\n\nclass: middle center\n\n## ajax calls\n\n* AJAX = Asynchronous JavaScript and XML.\n* Loading data in the background and display it on the webpage, without reloading the whole page.\n* Send data to a server - in the background, you know, like a form!\n\n---\n\n## ajax example\n\n# Peasants\n\n```js\nfunction loadDoc() {\n  var xhttp = new XMLHttpRequest();\n  xhttp.onreadystatechange = function() {\n    if (this.readyState == 4 && this.status == 200) {\n      document.getElementById("demo").innerHTML =\n      this.responseText;\n    }\n  };\n  xhttp.open("GET", "ajax_info.txt", true);\n  xhttp.send();\n```\n\n---\n\n## ajax example\n\n# Gong farmer\n\n```js\n$("button").click(function() {\n  $.ajax({\n    url: "demo_test.txt",\n    success: function(result) {\n      $("#div1").html(result);\n    }\n  });\n});\n```\n\n---\n\n# Bootstrap\n\n![inline](https://www.w3schools.com/bootstrap/bs_themes.jpg)\n\n---\n\n# UI Framework\n\n* It includes HTML and CSS based design templates for common user interface\n  components like:\n  * Typography,\n  * Forms,\n  * Buttons,\n  * Tables,\n  * Navigations,\n  * Dropdowns,\n  * Alerts,\n  * Modals,\n  * Tabs,\n  * Accordion,\n  * Carousel and many other as well as optional JavaScript extensions.\n\n---\n\n# yeah, but why?\n\n* Save lots of time —\n* Responsive features —\n* Consistent design —\n* Easy to use —\n* Compatible with browsers —\n* Open Source — And the best part is, it is completely free to download and use.\n\n---\n\n# What you get\n\n```js\nbootstrap/\n|—— css/\n|   |—— bootstrap.css\n|   |—— bootstrap.min.css\n|   |—— bootstrap-theme.css\n|   |—— bootstrap-theme.min.css\n|—— js/\n|   |—— bootstrap.js\n|   |—— bootstrap.min.js\n|—— fonts/\n|   |—— glyphicons-halflings-regular.eot\n|   |—— glyphicons-halflings-regular.svg\n|   |—— glyphicons-halflings-regular.ttf\n|   |—— glyphicons-halflings-regular.woff\n```\n\n---\n\n# Wiring\n\n```HTML\n<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>Basic Bootstrap Template</title>\n    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">\n    <!-- Optional Bootstrap theme -->\n    <link rel="stylesheet" href="css/bootstrap-theme.min.css">\n</head>\n<body>\n    <h1>Hello, world!</h1>\n    <script src="js/jquery-1.11.3.min.js"></script>\n    <script src="js/bootstrap.min.js"></script>\n</body>\n</html>\n```\n\n---\n\n# Bootstrap Grid System\n\n| Features            | Extra small devices Phones (<768px) |                                 Tablets (≥768px) | Medium devices Desktops (≥992px) | Large devices Desktops (≥1200px) |\n| ------------------- | :---------------------------------: | -----------------------------------------------: | -------------------------------: | -------------------------------: |\n| Max container width |             None (auto)             |                                            750px |                            970px |                           1170px |\n| Grid behavior       |       Horizontal at all times       | Collapsed to start, horizontal above breakpoints |\n| Class prefix        |              .col-xs-               |                                         .col-sm- |                         .col-md- |                         .col-lg- |\n| Max column width    |                Auto                 |                                            ~62px |                            ~81px |                            ~97px |\n\n---\n'},fields:{slug:"/courses/frontend-foundations/slides/bootstrap/"}}}]}},pathContext:{slug:"/courses/frontend-foundations/slides/bootstrap/"}}}});
//# sourceMappingURL=path---courses-frontend-foundations-slides-bootstrap-8572406f9ca9450c808f.js.map