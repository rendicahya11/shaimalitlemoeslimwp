(()=>{var e,t={7079:(e,t,o)=>{"use strict";o.r(t);const r=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-template","title":"Product Template","category":"woocommerce","description":"Contains the block elements used to render a product.","keywords":["WooCommerce"],"textdomain":"woocommerce","usesContext":["queryId","query","queryContext","displayLayout","templateSlug","postId","queryContextIncludes","collection"],"supports":{"inserter":false,"reusable":false,"html":false,"align":["wide","full"],"anchor":true,"__experimentalLayout":{"allowEditing":false},"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}}}');var c=o(9196),l=o(7608),s=o.n(l),a=o(9307);const i=window.wp.data;var u=o(5736);const d=window.wp.blockEditor,p=window.wp.components,m=window.wp.coreData,g=window.wc.wcSettings,w=window.wc.wcTypes,y=window.wc.wcBlocksSharedContext;var h=o(7708),x=o(4333);window.wp.url;const f=window.wp.apiFetch;var k=o.n(f);const v=(0,x.createHigherOrderComponent)((e=>class extends a.Component{constructor(...e){super(...e),(0,h.Z)(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),(0,h.Z)(this,"loadProduct",(()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),(e=>k()({path:`/wc/store/v1/products/${e}`}))(e).then((e=>{this.setState({product:e,loading:!1,error:null})})).catch((async e=>{const t=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);this.setState({product:null,loading:!1,error:t})}))):this.setState({product:null,loading:!1,error:null}))}))}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:o,product:r}=this.state;return(0,c.createElement)(e,{...this.props,error:t,getProduct:this.loadProduct,isLoading:o,product:r})}}),"withProduct");let b=function(e){return e.Product="product",e.Archive="archive",e.Cart="cart",e.Order="order",e.Site="site",e}({});const _="single-product",C="taxonomy-product_cat",I="taxonomy-product_tag",S=async(e,t,o,r)=>{var n,c;r((n=await(0,i.resolveSelect)(m.store).getEntityRecords(e,t,{_fields:["id"],slug:o}))&&n.length&&null!==(c=n[0])&&void 0!==c&&c.id?n[0].id:null)},P=(e,t={})=>({type:e,sourceData:t});o(225);const B=["collection"],E=()=>{const e=(0,d.useInnerBlocksProps)({className:"wc-block-product"},{__unstableDisableLayoutClassNames:!0});return(0,c.createElement)("li",{...e})},O=(0,a.memo)((({blocks:e,blockContextId:t,isHidden:o,setActiveBlockContextId:r})=>{const n=(0,d.__experimentalUseBlockPreview)({blocks:e,props:{className:"wc-block-product"}}),l=()=>{r(t)},s={display:o?"none":void 0};return(0,c.createElement)("li",{...n,tabIndex:0,role:"button",onClick:l,onKeyPress:l,style:s})})),T=v((({isLoading:e,product:t,displayTemplate:o,blocks:r,blockContext:n,setActiveBlockContextId:l})=>(0,c.createElement)(d.BlockContextProvider,{key:n.postId,value:n},(0,c.createElement)(y.ProductDataContextProvider,{product:t,isLoading:e},o?(0,c.createElement)(E,null):null,(0,c.createElement)(O,{blocks:r,blockContextId:n.postId,setActiveBlockContextId:l,isHidden:o})))));o(3228),(0,r.registerBlockType)(n,{icon:()=>(0,c.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,c.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4ZM18 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V9H18.5V6C18.5 5.72386 18.2761 5.5 18 5.5ZM18.5 10.5H10L10 18.5H18C18.2761 18.5 18.5 18.2761 18.5 18V10.5ZM8.5 10.5H5.5V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.5Z",fill:"#1E1E1E"})),edit:e=>{const{clientId:t,context:{query:{perPage:o,offset:r=0,order:n,orderBy:l,search:y,exclude:h,inherit:x,taxQuery:f,pages:k,...v},queryContext:E=[{page:1}],templateSlug:O,displayLayout:{type:j,columns:H,shrinkColumns:M}={type:"flex",columns:3,shrinkColumns:!1},queryContextIncludes:A=[]},__unstableLayoutClassNames:L}=e,N=((e,t)=>{const o=e.templateSlug||"",r=e.postId||null,n=(e=>t=>e.replace(`${t}-`,""))(o),c=(e=>t=>e.includes(t)&&e!==t)(o),l=c(_),s=c(C),u=c(I),[p,m]=(0,a.useState)(null),[g,w]=(0,a.useState)(null),[y,h]=(0,a.useState)(null);(0,a.useEffect)((()=>{if(l){const e=n(_);S("postType","product",e,m)}if(s){const e=n(C);S("taxonomy","product_cat",e,w)}if(u){const e=n(I);S("taxonomy","product_tag",e,h)}}),[l,s,u,n]);const{isInSingleProductBlock:x,isInSomeCartCheckoutBlock:f}=(0,i.useSelect)((e=>{const{getBlockParentsByBlockName:o}=e(d.store),r=e=>o(t,e).length>0;return{isInSingleProductBlock:r(["woocommerce/single-product"]),isInSomeCartCheckoutBlock:r(["woocommerce/cart","woocommerce/checkout","woocommerce/mini-cart-contents"])}}),[t]);if(x)return P(b.Product,{productId:r});if(f)return P(b.Cart);if(l)return P(b.Product,{productId:p});const k=(e=>t=>e===t)(o);if(k(_))return P(b.Product,{productId:null});if(s)return P(b.Archive,{taxonomy:"product_cat",termId:g});if(u)return P(b.Archive,{taxonomy:"product_tag",termId:y});if(k(C))return P(b.Archive,{taxonomy:"product_cat",termId:null});if(k(I))return P(b.Archive,{taxonomy:"product_tag",termId:null});if(k("taxonomy-product_attribute"))return P(b.Archive,{taxonomy:null,termId:null});if("page-cart"===o||"page-checkout"===o)return P(b.Cart);const v=k("order-confirmation");return P(v?b.Order:b.Site)})(e.context,e.clientId),[{page:q}]=E,[D,V]=(0,a.useState)(),W="product",Z=(0,g.getSettingWithCoercion)("loopShopPerPage",12,w.isNumber),F=[...new Set(A.concat(B))],R=(({clientId:e,queryContextIncludes:t})=>{const o=(0,i.useSelect)((t=>{const{getBlockParentsByBlockName:o,getBlockAttributes:r}=t("core/block-editor"),n=o(e,"woocommerce/product-collection",!0);return null!=n&&n.length?r(n[0]):null}),[e]);return(0,a.useMemo)((()=>{if(!o)return null;const e={};return null!=t&&t.length&&t.forEach((t=>{null!=o&&o[t]&&(e[t]=o[t])})),e}),[t,o])})({clientId:t,queryContextIncludes:F}),{products:$,blocks:J}=(0,i.useSelect)((e=>{const{getEntityRecords:c,getTaxonomies:s}=e(m.store),{getBlocks:a}=e(d.store),i=s({type:W,per_page:-1,context:"view"}),u=x&&(null==O?void 0:O.startsWith("category-"))&&c("taxonomy","category",{context:"view",per_page:1,_fields:["id"],slug:O.replace("category-","")}),p={postType:W,offset:o?o*(q-1)+r:0,order:n,orderby:l};if(f&&!x){const e=Object.entries(f).reduce(((e,[t,o])=>{const r=null==i?void 0:i.find((({slug:e})=>e===t));return null!=r&&r.rest_base&&(e[null==r?void 0:r.rest_base]=o),e}),{});Object.keys(e).length&&Object.assign(p,e)}var g;(o&&(p.per_page=o),y&&(p.search=y),null!=h&&h.length&&(p.exclude=h),x)&&(u&&(p.categories=null===(g=u[0])||void 0===g?void 0:g.id),p.per_page=Z);return{products:c("postType",W,{...p,...v,location:N,productCollectionQueryContext:R}),blocks:a(t)}}),[o,q,r,n,l,t,y,W,h,x,O,f,v,N,R,Z]),z=(0,a.useMemo)((()=>null==$?void 0:$.map((e=>({postType:e.type,postId:e.id})))),[$]);let Q="";"flex"===j&&H>1&&(Q=M?`wc-block-product-template__responsive columns-${H}`:`is-flex-container columns-${H}`);const U=(0,d.useBlockProps)({className:s()(L,"wc-block-product-template",Q)});return $?$.length?(0,c.createElement)("ul",{...U},z&&z.map((e=>{var t;const o=e.postId===(D||(null===(t=z[0])||void 0===t?void 0:t.postId));return(0,c.createElement)(T,{key:e.postId,attributes:{productId:e.postId},blocks:J,displayTemplate:o,blockContext:e,setActiveBlockContextId:V})}))):(0,c.createElement)("p",{...U}," ",(0,u.__)("No results found.","woocommerce")):(0,c.createElement)("p",{...U},(0,c.createElement)(p.Spinner,{className:"wc-block-product-template__spinner"}))},save:function(){return(0,c.createElement)(d.InnerBlocks.Content,null)}})},225:()=>{},3228:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e].call(c.exports,c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,o,n,c)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,n,c]=e[u],s=!0,a=0;a<o.length;a++)(!1&c||l>=c)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(s=!1,c<l&&(l=c));if(s){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[o,n,c]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=8538,(()=>{var e={8538:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,c,[l,s,a]=o,i=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(a)var u=a(r)}for(t&&t(o);i<l.length;i++)c=l[i],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(u)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[2869],(()=>r(7079)));n=r.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-template"]=n})();