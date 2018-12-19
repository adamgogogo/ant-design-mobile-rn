webpackJsonp([50],{1257:function(t,n){t.exports={content:["section",["p","\u4e00\u79cd\u8f7b\u91cf\u7ea7\u53cd\u9988/\u63d0\u793a\uff0c\u53ef\u4ee5\u7528\u6765\u663e\u793a\u4e0d\u4f1a\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u5185\u5bb9\uff0c\u9002\u5408\u7528\u4e8e\u9875\u9762\u8f6c\u573a\u3001\u6570\u636e\u4ea4\u4e92\u7684\u7b49\u573a\u666f\u4e2d\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u4e00\u6b21\u53ea\u663e\u793a\u4e00\u4e2a toast\u3002"]],["li",["p","\u6709 Icon \u7684 Toast\uff0c\u5b57\u6570\u4e3a 4-6 \u4e2a\uff1b\u6ca1\u6709 Icon \u7684 Toast\uff0c\u5b57\u6570\u4e0d\u5b9c\u8d85\u8fc7 14 \u4e2a\u3002"]]]],meta:{category:"Components",type:"Feedback",title:"Toast",subtitle:"\u8f7b\u63d0\u793a",filename:"components/toast/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","Toast.success(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.fail(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.info(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.loading(content, duration, onClose, mask)"]]],["li",["p",["code","Toast.offline(content, duration, onClose, mask)"]]]],["p","\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e94\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u53c2\u6570\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","content"],["td","\u63d0\u793a\u5185\u5bb9"],["td","React.Element or String"],["td","\u65e0"]],["tr",["td","duration"],["td","\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2"],["td","number"],["td","3"]],["tr",["td","onClose"],["td","\u5173\u95ed\u540e\u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","mask"],["td","\u662f\u5426\u663e\u793a\u900f\u660e\u8499\u5c42\uff0c\u9632\u6b62\u89e6\u6478\u7a7f\u900f"],["td","Boolean"],["td","true"]]]],["blockquote",["p",["strong","\u6ce8\uff1a"],"  duration = 0 \u65f6\uff0conClose \u65e0\u6548\uff0ctoast \u4e0d\u4f1a\u6d88\u5931\uff1b\u9690\u85cf toast \u9700\u8981\u624b\u52a8\u8c03\u7528 hide"],["p","3.0.0 \u5f00\u59cb\u79fb\u9664\u4e86 \u4e4b\u524d\u7684",["code","Toast.hide"],"\u65b9\u6cd5\uff0c",["code","Toast.xxx"]," \u73b0\u5728\u8fd4\u56de\u4e00\u4e2a",["code","key"],"\u53ef\u4ee5\u4f7f\u7528",["code","Portal.remove(key)"],"\u624b\u52a8\u5173\u95ed\u63d0\u793a"]],["pre",{lang:"js",highlighted:'  <span class="token keyword">import</span> <span class="token punctuation">{</span> Portal<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span>\n  <span class="token keyword">const</span> key Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'messsage\'</span><span class="token punctuation">)</span>\n  Portal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>'},["code","  import { Portal, Toast } from '@ant-design/react-native'\n  const key Toast.loading('messsage')\n  Portal.remove(key)"]]]}}});