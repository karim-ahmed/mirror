(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(280)},108:function(e,t,n){},110:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),s=n.n(o),c=(n(108),n(15)),i=n(16),l=n(18),u=n(17),p=n(19),m=(n(110),n(22)),d=n.n(m),h=n(35),g=n(29),f=n(61),v=n.n(f),y={GET_MODULE:"/api/model",getModuleLayerOutput:function(e){return"/api/model/layer/output/".concat(e)}},E=(n(135),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tree:null,isLoading:!1,open:!1,outputs:[],layer:{name:""},last:0,settings:{size:50}},n.toogleDrawer=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({open:!n.state.open});case 2:case"end":return e.stop()}},e,this)})),n.getLayerOutputs=Object(h.a)(d.a.mark(function e(){var t,a,r,o,s,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:n.state.layer,a=t.id==n.state.layer.id,r=a?n.state.last+64:0,e.prev=3,e.next=6,n.setState({isLoading:!0});case 6:return e.next=8,v.a.get(y.getModuleLayerOutput(t.id,r),{params:{last:r}});case 8:return o=e.sent,s=a?n.state.outputs.concat(o.data):o.data,e.next=12,n.setState({outputs:s,layer:t,last:r,isLoading:!1});case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(3),e.next=18,n.setState({isLoading:!1});case 18:case"end":return e.stop()}},e,this,[[3,14]])})),n.changeSettings=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({settings:t});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"getTree",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({isLoading:!0});case 2:return e.next=4,v.a.get(y.GET_MODULE);case 4:return t=e.sent,n=t.data,e.next=8,this.setState({tree:n,isLoading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(g.a)),b=n(24),O=n.n(b),w=n(30),j=n.n(w),x=n(46),k=n.n(x),L=n(95),S=n.n(L),C=n(93),M=n.n(C),z=n(94),I=n.n(z),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},n.getMoreOnScrollBottom=function(){var e=n.props.module.state.layerId==n.props.layer.id;window.scrollY==window.scrollMaxY&&e&&!n.props.module.state.isLoading&&n.props.module.getLayerOutputs(n.props.layer.id)},n.handleClick=function(e){n.setState(function(e){return{open:!e.open}}),n.props.module.getLayerOutputs(e)},n.renderLayer=function(e){var a=n.props.layer.name.split("(")[0];return r.a.createElement(O.a,null,r.a.createElement(j.a,{button:!0,onClick:function(){return n.handleClick(n.props.layer)}},r.a.createElement(k.a,{primary:a}),n.state.open?r.a.createElement(M.a,null):r.a.createElement(I.a,null)),r.a.createElement(S.a,{in:n.state.open,timeout:"auto",unmountOnExit:!0},e.children.map(function(e,a){return r.a.createElement(t,{layer:e,module:n.props.module,key:a,deepth:n.props.deepth+1})})))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.getMoreOnScrollBottom)}},{key:"componentWillUnmount",value:function(){window.addEventListener("scroll",this.getMoreOnScrollBottom)}},{key:"render",value:function(){var e=this.props.layer;return r.a.createElement(O.a,{style:{marginLeft:8*this.props.deepth/2}},e?this.renderLayer(e):r.a.createElement(j.a,null))}}]),t}(a.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.module.getTree()}},{key:"render",value:function(){var e=this.props.module.state.tree;return r.a.createElement(O.a,null,r.a.createElement(B,{layer:e,module:this.props.module,deepth:1}))}}]),t}(a.Component),D=n(47),A=n.n(D),G=n(60),W=n.n(G),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSlider=function(e,t){var a=n.props.module,r=a.state.settings;r=Object.assign({},r,{size:t}),console.log(r),a.changeSettings(r)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toogle,n=e.classes,a=e.open,o=e.module;return r.a.createElement(A.a,{anchor:"right",open:a,onClose:t},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(O.a,{className:n.settings},r.a.createElement(j.a,null,r.a.createElement(k.a,null,"Image size : ",o.state.settings.size)),r.a.createElement(j.a,null,r.a.createElement(W.a,{value:o.state.settings.size,"aria-labelledby":"label",min:0,max:100,step:1,onChange:this.handleSlider}))))}}]),t}(a.Component),U=n(97),J=n.n(U),P=n(99),Y=n.n(P),_=n(34),H=n.n(_),$=n(98),q=n.n($),F=n(45),K=n(101),Q=n.n(K),R=n(25),V=n.n(R),X=n(96),Z=n.n(X),ee=function(e){var t=e.src,n=e.size,a={height:"".concat(n/20*100,"px"),width:"".concat(n/20*100,"px")};return r.a.createElement(V.a,{item:!0},r.a.createElement("img",{style:a,src:t}))},te=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.module;return r.a.createElement("div",null,r.a.createElement(V.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(H.a,{variant:"h6",gutterBottom:!0,style:{textAlign:"center"}},e.state.layer.name.split("(")[0])),e.state.outputs.map(function(t,n){return r.a.createElement(ee,Object.assign({src:t},e.state.settings,{key:n}))})),r.a.createElement(V.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:8},r.a.createElement(V.a,{item:!0},r.a.createElement(Z.a,{variant:"contained",color:"primary",onClick:function(){return e.getLayerOutputs()}},"More"))))}}]),t}(r.a.Component),ne=n(100),ae=n.n(ne);function re(e){var t=e.module,n=e.classes;return r.a.createElement(J.a,{position:"fixed",className:n.appBar},r.a.createElement(q.a,null,r.a.createElement(H.a,{variant:"h6",color:"inherit",noWrap:!0},"Mirror"),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(Y.a,{color:"inherit",onClick:t.toogleDrawer},r.a.createElement(ae.a,null))))}var oe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={openSettings:!1},n.toggleSettings=function(){var e=!n.state.openSettings;n.setState({openSettings:e})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(g.b,null,r.a.createElement(g.c,{to:[E]},function(n){return r.a.createElement("div",{className:t.root},r.a.createElement(re,Object.assign({module:re},e.props,{module:n})),r.a.createElement(A.a,{variant:"permanent",classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(N,{module:n})),n.state.isLoading?r.a.createElement(Q.a,{color:"secondary",className:t.progress}):"",r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(te,{module:n})),r.a.createElement(T,{toogle:n.toogleDrawer,open:n.state.open,module:n,classes:t}))}))}}]),t}(a.Component),se=Object(F.withStyles)(function(e){return{root:{flexGrow:1,zIndex:1,position:"relative",display:"flex",minHeight:"100vh"},appBar:{zIndex:e.zIndex.drawer+1},drawerPaper:{position:"relative",width:300},content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit,minWidth:0},toolbar:e.mixins.toolbar,progress:{position:"fixed",top:"0",width:"100vw",zIndex:9999},settn:{width:"300px !important"}}})(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,2,1]]]);
//# sourceMappingURL=main.33f09332.chunk.js.map