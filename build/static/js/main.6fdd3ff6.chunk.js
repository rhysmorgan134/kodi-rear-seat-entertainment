(window["webpackJsonpelectron-headunit"]=window["webpackJsonpelectron-headunit"]||[]).push([[0],[,,,,,,function(e,t){e.exports={channels:{APP_INFO:"app_info",APP_CLOSE:"app_close"}}},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(2),i=n.n(o),c=(n(14),n(3)),r=n(4),s=n(7),h=n(5),m=n(8);n(15),n(16);var u=function(e){var t=e.file.split("/");return t=t[t.length-1],l.a.createElement("div",{className:"flex items-center flex-column br3 pa3 ml5 mr5 mt2 mb2 grow bw2 shadow-5 tc card",onClick:function(){return e.playMovie(t)}},l.a.createElement("div",{className:"flex flex-row"},l.a.createElement("img",{className:"image mr4",alt:"noimage",src:"http://www.gerdamuller.com.au/wp-content/uploads/2017/07/movie-reel.png"}),l.a.createElement("div",null,l.a.createElement("h2",null,"title: ",t),l.a.createElement("h2",null,"type: ",e.filetype))))};var f=function(e){var t=e.films,n=e.playMovie,a=t.map(function(e,a){return l.a.createElement(u,{file:t[a].file,filetype:t[a].filetype,playMovie:n})});return l.a.createElement("div",null,a)};n(17);var p=function(e){var t=e.searchChange;return l.a.createElement("div",{className:"pa2 "},l.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue search",type:"search",placeholder:"Search films",onChange:t}))},d=[{file:"despicable me",filetype:"film"},{file:"despicable me 2",filetype:"film"},{file:"toy story",filetype:"film"}];n(18);var v=function(e){return l.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"480px"}},e.children)},g=window.ipcRenderer,w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).onSearchChange=function(e){n.setState({searchField:e.target.value})},n.quit=function(e){console.log(n.state),g.send(n.state.channels.APP_CLOSE),g.on(n.state.channels.APP_CLOSE,function(e,t){console.log(e,t)})},n.playMovie=function(e){fetch("http://localhost:3001/play",{method:"POST",headers:{Accept:"application/json","content-type":"application/json"},body:JSON.stringify({film:e})}).then(function(e){console.log(e.status)})},n.state={appName:"",appVersion:"",films:d,searchField:"",channels:e.channels},console.log(e.channels),console.log(n.state.channels),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(g),fetch("http://localhost:3001/films").then(function(e){return e.json()}).then(function(t){return e.setState({films:t})})}},{key:"render",value:function(){var e=this,t=this.state.films.filter(function(t){return t.file.toLowerCase().includes(e.state.searchField.toLowerCase())});return l.a.createElement("div",{className:"tc"},l.a.createElement("h1",{className:"topH"},"Rear Seat Entertainment"),l.a.createElement(p,{searchChange:this.onSearchChange}),l.a.createElement("a",{class:"example_a",href:"add-website-here",onClick:this.quit},"quit"),l.a.createElement(v,null,l.a.createElement(f,{films:t,playMovie:this.playMovie})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(6);n(19);i.a.render(l.a.createElement(w,{channels:y.channels}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.6fdd3ff6.chunk.js.map