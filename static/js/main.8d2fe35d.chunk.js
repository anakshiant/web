(this.webpackJsonplockkey=this.webpackJsonplockkey||[]).push([[0],{3:function(e,n,t){},37:function(e,n,t){e.exports=t(76)},73:function(e,n){},76:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(31),c=t.n(a),s=t(4),i=t.n(s),u=t(15),l=t(32),d=t(33),m=t(36),f=t(35),p=t(3),g=t.n(p),v=t(34),h=t.n(v)()("https://api.littra.in/"),w=function(e){var n=e.stream,t=Object(o.useRef)(null);return Object(o.useEffect)((function(){t.current&&(t.current.srcObject=n)}),[n]),r.a.createElement("div",null,r.a.createElement("video",{ref:t,height:300,width:300,controls:!1,autoPlay:!0}))},b=function(e){Object(m.a)(t,e);var n=Object(f.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).peers=[],o.peerConnections={},o.stream="",o.makeOffer=function(e){var n=o.getPeerConnection(e);n.createOffer((function(t){n.setLocalDescription(t),console.log("Creating an offer for",e),console.log(o.state.currentId,e),h.emit("msg",{by:o.state.currentId,to:e,sdp:t,type:"sdp-offer"})}),(function(e){console.log(e)}),{mandatory:{OfferToReceiveVideo:!0,OfferToReceiveAudio:!0}})},o.getPeerConnection=function(e){if(o.peerConnections[e])return o.peerConnections[e];var n=new RTCPeerConnection({iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"}]});return o.peerConnections[e]=n,n.addStream(o.stream),n.onicecandidate=function(n){h.emit("msg",{by:o.state.currentId,to:e,ice:n.candidate,type:"ice"})},n.onaddstream=function(n){console.log("Received new stream"),console.log(n.stream),o.onAddStream(e,n.stream)},n},o.onAddStream=function(e,n){var t=o.state.peers;t.push({id:e,stream:n}),o.setState({peers:t})},o.onDisconnectPeer=function(e){o.peers=o.peers.filter((function(n){return n.id!==e}))},o.addHandlers=function(){h.on("peer.connected",(function(e){console.log("peeer connect"),console.log(e),o.makeOffer(e.id)})),h.on("peer.disconnected",(function(e){o.onDisconnectPeer([e])})),h.on("msg",(function(e){o.handleMessage(e)}))},o.createAnser=function(){var e=Object(u.a)(i.a.mark((function e(n,t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setRemoteDescription(new RTCSessionDescription(t));case 2:return e.next=4,n.createAnswer();case 4:return o=e.sent,e.next=7,n.setLocalDescription(new RTCSessionDescription(o));case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o.handleMessage=function(){var e=Object(u.a)(i.a.mark((function e(n){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.getPeerConnection(n.by),console.log("in handleMessage"),console.log(n),e.t0=n.type,e.next="sdp-offer"===e.t0?6:"sdp-answer"===e.t0?12:"ice"===e.t0?15:17;break;case 6:return e.next=8,o.createAnser(t,n.sdp);case 8:return r=e.sent,console.log(r),h.emit("msg",{by:o.state.currentId,to:n.by,sdp:r,type:"sdp-answer"}),e.abrupt("break",17);case 12:return console.log("in spd answer"),t.setRemoteDescription(new RTCSessionDescription(n.sdp),(function(){console.log("Setting remote description by answer")}),(function(e){console.error(e)})),e.abrupt("break",17);case 15:return n.ice&&(console.log("Adding ice candidates"),t.addIceCandidate(new RTCIceCandidate(n.ice))),e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o.createRoom=function(){h.emit("init",null,(function(e,n){o.setState({roomId:e,currentId:n,connected:!0})}))},o.joinRoom=function(){h.emit("init",{room:o.state.roomId},(function(e,n){o.setState({roomId:e,currentId:n,connected:!0})}))},o.state={roomId:"",currentId:"",connected:"",peers:[]},o}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator&&window.navigator.getUserMedia&&window.navigator.getUserMedia({video:!0,audio:!1},(function(n){var t=document.getElementById("local-videos");console.log("cames in "),console.log(n),t&&(t.srcObject=n),e.stream=n}),(function(e){console.warn(e.message)})),this.addHandlers()}},{key:"render",value:function(){var e=this;return console.log(this.state),console.log(this.peers),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",background:"powderblue",height:"100px"}},r.a.createElement("input",{type:"text",onChange:function(n){return e.setState({roomId:n.target.value})},className:g.a.input}),r.a.createElement("div",{className:g.a.createRoom,onClick:function(){return e.joinRoom()}},"Join Room")),r.a.createElement("div",{className:g.a.chatRoom},this.state.peers.length&&this.state.peers.map((function(e){return r.a.createElement(w,{stream:e.stream})}))),r.a.createElement("video",{id:"local-videos",className:g.a.userVideo,autoPlay:!0}),r.a.createElement("div",{className:g.a.createRoom,onClick:function(){return e.createRoom()}},"Create Room"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.8d2fe35d.chunk.js.map