webpackJsonp([0xb996799716e9],{420:function(n,a){n.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<p>class: middle center\n<img src="https://cdn-images-1.medium.com/max/700/1*yQPzM3BaubJgWQkoL29iOw.png" alt="inline"></p>\n<hr>\n<p>class: middle center</p>\n<h2>Cool, who are you?</h2>\n<p>.left[</p>\n<ul>\n<li>Josue Plaza</li>\n<li>Full Stack Instructor @ Valley Tech</li>\n<li>I Enjoy JavaScript, no really</li>\n<li>Recovering journalism major\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>So what is React ?</h2>\n<hr>\n<p>class: middle center</p>\n<h2>What it’s not</h2>\n<p>.left[</p>\n<ul>\n<li>An event system (other than vanilla DOM events)</li>\n<li>Any AJAX capabilities whatsoever</li>\n<li>router for routing things like redirects</li>\n<li>Fetch (or axios) for HTTP requests</li>\n<li>A wide variety of techniques for CSS encapsulation</li>\n<li>Enzyme for additional unit-testing utilities.</li>\n<li>Any form of a data layer</li>\n<li>Promises</li>\n<li>Any application framework at all</li>\n<li>Opinions of any sort of the above</li>\n<li>Any idea how implement the above\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>Ummm, ok, I guess I still want to know ?</h2>\n<p><img src="http://www.tvovermind.com/wp-content/uploads/2017/03/Ted.jpg" alt="inline"></p>\n<hr>\n<p>class: middle center</p>\n<h2>Hard Sell</h2>\n<blockquote>\n<p>React gives you the full power of JavaScript in all aspects of your application instead of giving you a watered-down way to control interactions.</p>\n</blockquote>\n<p>~ someone on internet</p>\n<hr>\n<p>class: middle center</p>\n<h2>The DOM</h2>\n<p><img src="https://cdn.css-tricks.com/wp-content/uploads/2013/12/dom-dom-dom-dom.jpg" alt="inline"></p>\n<hr>\n<p>class: middle center</p>\n<h2>Only peasants manually manipulate the DOM</h2>\n<p><img src="http://adscam.typepad.com/.a/6a00d8341bfa1853ef0120a60bc023970b-800wi" alt="inline"></p>\n<hr>\n<p>class: middle center</p>\n<h1>React …is rad</h1>\n<hr>\n<p>class: middle center</p>\n<h2>What is it</h2>\n<p>.left[</p>\n<ul>\n<li>React is ONLY THE VIEW LAYER.</li>\n<li>You DO NOT GET any of the following:\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h3>NOPE</h3>\n<p>.left[</p>\n<ul>\n<li>An event system (other than vanilla DOM events)</li>\n<li>Any AJAX capabilities whatsoever</li>\n<li>React-router for routing</li>\n<li>Fetch (or axios) for HTTP requests</li>\n<li>A wide variety of techniques for CSS encapsulation</li>\n<li>Enzyme for additional unit-testing utilities.</li>\n<li>Any form of a data layer</li>\n<li>Promises</li>\n<li>Any application framework at all</li>\n<li>Any idea how implement the above\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h2>So why am i learning this?</h2>\n<hr>\n<p>class: middle center</p>\n<h2>Only peasants manually manipulate the DOM</h2>\n<hr>\n<p>class: middle center</p>\n<h2>Fast render with Virtual DOM</h2>\n<p><img src="https://image.slidesharecdn.com/react-webinar-161101082735/95/react-webinar-with-codepolitan-17-638.jpg" alt="inline"></p>\n<hr>\n<p>class: middle center\n<img src="https://image.slidesharecdn.com/reacttalk-140508080139-phpapp01/95/reactjs-om-a-handson-walkthrough-of-better-ways-to-build-web-uis-8-638.jpg?cb=1399536390" alt="inline"></p>\n<hr>\n<p>class: middle center</p>\n<h1>HTML is Javascript? shut your mouth!</h1>\n<p>.left[</p>\n<ul>\n<li>it’s not HTML, it’s markup, say it out out loud</li>\n<li>Resuable components</li>\n<li>small, simple, concise components</li>\n<li>Bundling Javascript and HTML into JSX makes components easily understandable.</li>\n<li>Embedding Expressions in JSX</li>\n<li>no special template logic\n]</li>\n</ul>\n<hr>\n<h2>Like so</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> elements1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> elements2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> newElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\nelements1<span class="token punctuation">.</span>length <span class="token operator">===</span> elements2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle center</p>\n<h2>Instead</h2>\n<p>.left[</p>\n<ol>\n<li>\n<p>Declare what we want our web app to look like</p>\n</li>\n<li>\n<p>Pass it our data</p>\n</li>\n<li>\n<p>There is no step 3</p>\n</li>\n<li>\n<p>(This declaration is refered to as a component)\n]</p>\n</li>\n</ol>\n<hr>\n<p>class: middle center</p>\n<h2>HTML is Javascript? shut your mouth!</h2>\n<p>.left[</p>\n<ul>\n<li>it’s not HTML, it’s markup, say it out out loud</li>\n<li>Resuable components</li>\n<li>small, simple, concise components</li>\n<li>Bundling Javascript and HTML into JSX makes components easily understandable.</li>\n<li>Embedding Expressions in JSX</li>\n<li>no special template logic, just more JavaScript\n]</li>\n</ul>\n<hr>\n<p>.middle[## JSX what ?]</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>h3<span class="token operator">></span>TODO<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>\n        <span class="token operator">&lt;</span>TodoList items<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span><span class="token string">\'Add #\'</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p>class: middle center</p>\n<h1>All the dev things</h1>\n<p>.left[</p>\n<ul>\n<li>great tooling (react cli, redux, create-react-app, webpack, rollup, npm, yarn…)</li>\n<li>vibrant community, help, tutorials,\n]</li>\n</ul>\n<hr>\n<p>class: middle center</p>\n<h3>With that</h3>\n<blockquote>\n<p>“React is not just a library, but an idea,a concept to executed anyway you like or see fit to”</p>\n</blockquote>\n<p>~someone giving a presentation</p>',internal:{content:'---\ntitle: "React Intro"\ncourseId:  "FSWG105-RT"\ncirriculum:\n  - "Web / Full Stack / Software Development"\ntype: "slide"\ndraft: false\n---\n\nclass: middle center\n![inline](https://cdn-images-1.medium.com/max/700/1*yQPzM3BaubJgWQkoL29iOw.png)\n\n---\n\nclass: middle center\n\n## Cool, who are you?\n\n.left[\n\n* Josue Plaza\n* Full Stack Instructor @ Valley Tech\n* I Enjoy JavaScript, no really\n* Recovering journalism major\n  ]\n\n---\n\nclass: middle center\n\n## So what is React ?\n\n---\n\nclass: middle center\n\n## What it\'s not\n\n.left[\n\n* An event system (other than vanilla DOM events)\n* Any AJAX capabilities whatsoever\n* router for routing things like redirects\n* Fetch (or axios) for HTTP requests\n* A wide variety of techniques for CSS encapsulation\n* Enzyme for additional unit-testing utilities.\n* Any form of a data layer\n* Promises\n* Any application framework at all\n* Opinions of any sort of the above\n* Any idea how implement the above\n  ]\n\n---\n\nclass: middle center\n\n## Ummm, ok, I guess I still want to know ?\n\n![inline](http://www.tvovermind.com/wp-content/uploads/2017/03/Ted.jpg)\n\n---\n\nclass: middle center\n\n## Hard Sell\n\n> React gives you the full power of JavaScript in all aspects of your application instead of giving you a watered-down way to control interactions.\n\n~ someone on internet\n\n---\n\nclass: middle center\n\n## The DOM\n\n![inline](https://cdn.css-tricks.com/wp-content/uploads/2013/12/dom-dom-dom-dom.jpg)\n\n---\n\nclass: middle center\n\n## Only peasants manually manipulate the DOM\n\n![inline](http://adscam.typepad.com/.a/6a00d8341bfa1853ef0120a60bc023970b-800wi)\n\n---\n\nclass: middle center\n\n# React ...is rad\n\n---\n\nclass: middle center\n\n## What is it\n\n.left[\n\n* React is ONLY THE VIEW LAYER.\n* You DO NOT GET any of the following:\n  ]\n\n---\n\nclass: middle center\n\n### NOPE\n\n.left[\n\n* An event system (other than vanilla DOM events)\n* Any AJAX capabilities whatsoever\n* React-router for routing\n* Fetch (or axios) for HTTP requests\n* A wide variety of techniques for CSS encapsulation\n* Enzyme for additional unit-testing utilities.\n* Any form of a data layer\n* Promises\n* Any application framework at all\n* Any idea how implement the above\n  ]\n\n---\n\nclass: middle center\n\n## So why am i learning this?\n\n---\n\nclass: middle center\n\n## Only peasants manually manipulate the DOM\n\n---\n\nclass: middle center\n\n## Fast render with Virtual DOM\n\n![inline](https://image.slidesharecdn.com/react-webinar-161101082735/95/react-webinar-with-codepolitan-17-638.jpg)\n\n---\n\nclass: middle center\n![inline](https://image.slidesharecdn.com/reacttalk-140508080139-phpapp01/95/reactjs-om-a-handson-walkthrough-of-better-ways-to-build-web-uis-8-638.jpg?cb=1399536390)\n\n---\n\nclass: middle center\n\n# HTML is Javascript? shut your mouth!\n\n.left[\n\n* it\'s not HTML, it\'s markup, say it out out loud\n* Resuable components\n* small, simple, concise components\n* Bundling Javascript and HTML into JSX makes components easily understandable.\n* Embedding Expressions in JSX\n* no special template logic\n  ]\n\n---\n\n## Like so\n\n```js\nconst elements1 = document.querySelectorAll("div");\nconst elements2 = document.getElementsByTagName("div");\nconst newElement = document.createElement("div");\n\ndocument.body.appendChild(newElement);\nelements1.length === elements2.length; // false\n```\n\n---\n\nclass: middle center\n\n## Instead\n\n.left[\n\n1. Declare what we want our web app to look like\n2. Pass it our data\n3. There is no step 3\n\n* (This declaration is refered to as a component)\n  ]\n\n---\n\nclass: middle center\n\n## HTML is Javascript? shut your mouth!\n\n.left[\n\n* it\'s not HTML, it\'s markup, say it out out loud\n* Resuable components\n* small, simple, concise components\n* Bundling Javascript and HTML into JSX makes components easily understandable.\n* Embedding Expressions in JSX\n* no special template logic, just more JavaScript\n  ]\n\n---\n\n.middle[## JSX what ?]\n\n```js\nrender() {\n    return (\n      <div>\n        <h3>TODO</h3>\n        <TodoList items={this.state.items} />\n        <form onSubmit={this.handleSubmit}>\n          <input onChange={this.handleChange} value={this.state.text} />\n          <button>{\'Add #\' + (this.state.items.length + 1)}</button>\n        </form>\n      </div>\n    );\n  }\n```\n\n---\n\nclass: middle center\n\n# All the dev things\n\n.left[\n\n* great tooling (react cli, redux, create-react-app, webpack, rollup, npm, yarn...)\n* vibrant community, help, tutorials,\n  ]\n\n---\n\nclass: middle center\n\n### With that\n\n> "React is not just a library, but an idea,a concept to executed anyway you like or see fit to"\n\n~someone giving a presentation\n'},fields:{slug:"/courses/frontend-foundations-react/slides/react-intro/"}}}]}},pathContext:{slug:"/courses/frontend-foundations-react/slides/react-intro/"}}}});
//# sourceMappingURL=path---courses-frontend-foundations-react-slides-react-intro-37bc36a9746fcb9d181b.js.map