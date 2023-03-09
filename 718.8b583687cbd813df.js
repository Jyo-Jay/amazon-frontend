"use strict";(self.webpackChunkamazon=self.webpackChunkamazon||[]).push([[718],{4718:(L,v,s)=>{s.r(v),s.d(v,{ProductModule:()=>O});var d=s(6895),p=s(9965),t=s(8256),m=s(910),f=s(4004),Z=s(529);let h=(()=>{class r{constructor(e){this.http=e,this.apiURL="https://amazon-backend-c8eo.onrender.com"}getProducts(){return this.http.get(`${this.apiURL}/products`,{}).pipe((0,f.U)(e=>e.data))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(Z.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var b=s(4961);let _=(()=>{class r{constructor(){this.color="gold",this.clickRating=new t.vpe}ngOnInit(){}onClick(){this.clickRating.emit(this.rating)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-star"]],inputs:{rating:"rating"},outputs:{clickRating:"clickRating"},decls:7,vars:12,consts:[[1,"star-container"],[2,"width","80px",3,"click"],[1,"bi","bi-star-fill"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return o.onClick()}),t._UZ(2,"i",2)(3,"i",2)(4,"i",2)(5,"i",2)(6,"i",2),t.qZA()()),2&e&&(t.Udp("width",16*o.rating,"px"),t.xp6(2),t.Udp("color",o.color),t.xp6(1),t.Udp("color",o.color),t.xp6(1),t.Udp("color",o.color),t.xp6(1),t.Udp("color",o.color),t.xp6(1),t.Udp("color",o.color))},styles:[".star-container[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer}"]}),r})(),C=(()=>{class r{constructor(e){this.element=e}onMouseOver(){this.element.nativeElement.style.color="orange"}onMouseOut(){this.element.nativeElement.style.color="black"}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(t.SBq))},r.\u0275dir=t.lG2({type:r,selectors:[["","appTextColor",""]],hostBindings:function(e,o){1&e&&t.NdJ("mouseover",function(){return o.onMouseOver()})("mouseout",function(){return o.onMouseOut()})}}),r})(),g=(()=>{class r{transform(e,o=5){return e-e*o/100}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275pipe=t.Yjl({name:"discount",type:r,pure:!0}),r})();const x=function(r){return["/product","product-details",r]};function T(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"div",6)(4,"h5",7),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.ALo(9,"titlecase"),t.qZA(),t.TgZ(10,"p",9)(11,"del"),t._uU(12),t.ALo(13,"currency"),t.qZA(),t._uU(14),t.ALo(15,"currency"),t.ALo(16,"discount"),t.qZA(),t.TgZ(17,"app-star",10),t.NdJ("clickRating",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.show(i))}),t.qZA(),t.TgZ(18,"p",11)(19,"button",12),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.addCartItems(c._id))}),t._UZ(20,"i",13),t.qZA(),t.TgZ(21,"button",14),t._UZ(22,"i",15),t.qZA()()()()()}if(2&r){const e=n.$implicit,o=t.oxw();t.xp6(2),t.MGl("src","https://amazon-backend-c8eo.onrender.com/",e.productImage,"",t.LSH),t.xp6(2),t.Akn(o.styleclass),t.xp6(1),t.Oqu(t.lcZ(6,14,e.productName)),t.xp6(2),t.Akn(o.styleclass),t.xp6(1),t.Oqu(t.lcZ(9,16,e.productType)),t.xp6(2),t.Akn(o.styleclass),t.xp6(2),t.Oqu(t.xi3(13,18,e.productPrice,"INR")),t.xp6(2),t.AsE("\xa0",t.xi3(15,21,t.xi3(16,24,e.productPrice,o.discountrate),"INR")," (",o.discountrate,"% off)"),t.xp6(3),t.Q6J("rating",e.rating),t.xp6(4),t.Q6J("routerLink",t.VKq(27,x,e._id))}}let y=(()=>{class r{constructor(e,o,i,c){this.cartService=e,this.productservice=o,this.userService=i,this.router=c,this.styleclass={"text-align":"left"},this.styleText={"font-weight":"bold","font-size":"14px"},this.discountrate=10,this.products$=this.productservice.getProducts(),this.user=localStorage.getItem("currentUserId")}ngOnInit(){}show(e){console.log(e)}addCartItems(e){let o=localStorage.getItem("currentUserId");o&&this.cartService.getCartItems(o).subscribe(i=>{if(i.length>0){let c=[],u=!1;i[0].items.forEach(l=>{l.productId==e?(u=!0,c.push({productId:l.productId,quantity:l.quantity+1})):c.push({productId:l.productId,quantity:l.quantity})}),u||c.push({productId:e,quantity:1}),this.cartService.updateCart(c).subscribe(l=>{console.log(l)})}else this.cartService.addToCart(o,e,1).subscribe(c=>{console.log(c)});this.cartService.increaseCartCounter()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.N),t.Y36(h),t.Y36(b.f),t.Y36(p.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-list"]],decls:4,vars:3,consts:[[1,"container"],[1,"row"],["class","col-md-6 col-lg-4 col-xl-3",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","col-xl-3"],[1,"card",2,"width","18rem","margin-top","50px"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],["appTextColor","",1,"card-title"],["appTextColor","",1,"card-text"],[1,"card-text"],[3,"rating","clickRating"],[1,"text-center"],[1,"btn","btn-outline-primary","m-2",3,"click"],[1,"bi","bi-cart-plus"],[1,"btn","btn-outline-primary","m-2",3,"routerLink"],[1,"bi","bi-eye-fill"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0)(1,"div",1),t.YNc(2,T,23,29,"div",2),t.ALo(3,"async"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,o.products$)))},dependencies:[d.sg,p.rH,_,C,d.Ov,d.rS,d.H9,g],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 0 10px #00605e4d}.bottom-border[_ngcontent-%COMP%]{padding-bottom:5px}"]}),r})();var a=s(433);function A(r,n){1&r&&(t.TgZ(0,"span"),t._uU(1," Please Enter Review "),t.qZA())}function w(r,n){1&r&&(t.TgZ(0,"span"),t._uU(1," Please Enter atleast 20 characters "),t.qZA())}function q(r,n){if(1&r&&(t.TgZ(0,"div",28),t.YNc(1,A,2,0,"span",29),t.YNc(2,w,2,0,"span",29),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.review.errors?null:e.review.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.review.errors?null:e.review.errors.minlength)}}function U(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",2),t._UZ(2,"img",9),t.qZA(),t.TgZ(3,"div",3)(4,"div",2),t._uU(5),t.qZA(),t.TgZ(6,"div",2),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",4),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"div",2),t._uU(13),t.ALo(14,"currency"),t.ALo(15,"discount"),t.qZA(),t.TgZ(16,"div",4)(17,"button",10),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.changeQty(c.productId._id,"add"))}),t._uU(18,"+"),t.qZA(),t._uU(19),t.TgZ(20,"button",10),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.changeQty(c.productId._id,"min"))}),t._uU(21,"-"),t.qZA()()(),t.TgZ(22,"div",2),t._uU(23),t.ALo(24,"currency"),t.qZA(),t.TgZ(25,"div",5)(26,"button",11),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.deleteItem(c.productId._id))}),t.qZA()()()}if(2&r){const e=n.$implicit,o=t.oxw();t.xp6(2),t.MGl("src","http://localhost:3000/",e.productId.productImage,"",t.LSH),t.xp6(3),t.Oqu(e.productId.productName),t.xp6(2),t.Oqu(t.xi3(8,8,e.productId.productPrice,"INR")),t.xp6(3),t.AsE("",t.xi3(11,11,10*e.productId.productPrice/100,"INR")," (-",o.discountrate,"% ) "),t.xp6(3),t.Oqu(t.xi3(14,14,t.xi3(15,17,e.productId.productPrice,o.discountrate),"INR")),t.xp6(6),t.hij(" ",e.quantity," "),t.xp6(4),t.hij("",t.xi3(24,20,(e.productId.productPrice-10*e.productId.productPrice/100)*e.quantity,"INR")," ")}}const P=[{path:"list",component:y},{path:"product-details/:id",component:(()=>{class r{constructor(e,o,i){this.activateroute=e,this.productservice=o,this.cartservice=i,this.discountrate=10,this.reviewform=new a.cw({review:new a.NI("",[a.kI.required])})}ngOnInit(){let e=this.activateroute.snapshot.params.id;this.productservice.getProducts().subscribe({next:o=>{this.product=o.find(i=>i._id==e)}})}addToCart(){this.cartservice.increaseCartCounter()}get review(){return this.reviewform.get("review")}onSubmit(){console.log(this.reviewform.value),this.reviewform.reset()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p.gz),t.Y36(h),t.Y36(m.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-details"]],decls:64,vars:21,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-sm-6"],[1,"img-fluid",3,"src"],[1,"text-center"],[1,"table"],[2,"font-size","16px"],[3,"rating"],[1,"row","d-flex","justify-content-center"],[1,"col-sm-4"],["type","submit","value","Add To Cart",1,"btn","btn-warning",3,"click"],["type","submit","data-bs-toggle","modal","data-bs-target","#review","value","Write Review",1,"btn","btn-light"],["id","review","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","review"],["type","textarea","id","review","formControlName","review","minlength","20",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","submit","value","Save",1,"btn","btn-outline-success",3,"disabled"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",2)(5,"h3",4),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t.TgZ(8,"table",5)(9,"tr")(10,"th"),t._uU(11,"Type"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA()(),t.TgZ(14,"tr")(15,"th"),t._uU(16,"Orignal Price"),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"currency"),t.qZA()(),t.TgZ(20,"tr")(21,"th"),t._uU(22,"Discounted Price"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"currency"),t.ALo(26,"discount"),t.qZA()(),t.TgZ(27,"tr")(28,"th"),t._uU(29,"Description"),t.qZA(),t.TgZ(30,"td"),t._uU(31),t.qZA()(),t.TgZ(32,"tr")(33,"th"),t._uU(34,"Rating"),t.qZA(),t.TgZ(35,"td",6),t._UZ(36,"app-star",7),t.qZA()()(),t.TgZ(37,"div",8)(38,"div",9)(39,"input",10),t.NdJ("click",function(){return o.addToCart()}),t.qZA()(),t.TgZ(40,"div",9),t._UZ(41,"input",11),t.qZA(),t._UZ(42,"div",9),t.qZA()()()(),t.TgZ(43,"div",12)(44,"div",13)(45,"div",14)(46,"div",15)(47,"h5",16),t._uU(48,"Write your review here"),t.qZA(),t._UZ(49,"button",17),t.qZA(),t.TgZ(50,"div",18)(51,"div",19)(52,"div",1)(53,"form",20),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(54,"div",21)(55,"label",22),t._uU(56,"Review"),t.qZA(),t.TgZ(57,"textarea",23),t._uU(58," "),t.qZA(),t.YNc(59,q,3,2,"div",24),t.qZA(),t._UZ(60,"input",25),t.qZA()()()(),t.TgZ(61,"div",26)(62,"button",27),t._uU(63,"Close"),t.qZA()()()()()),2&e&&(t.xp6(3),t.MGl("src","https://amazon-backend-c8eo.onrender.com/",o.product.productImage,"",t.LSH),t.xp6(3),t.hij(" ",t.lcZ(7,10,o.product.productName)," "),t.xp6(7),t.Oqu(o.product.productType),t.xp6(5),t.Oqu(t.xi3(19,12,o.product.productPrice,"INR")),t.xp6(6),t.Oqu(t.xi3(25,15,t.xi3(26,18,o.product.productPrice,o.discountrate),"INR")),t.xp6(7),t.Oqu(o.product.productDesc),t.xp6(5),t.Q6J("rating",o.product.rating),t.xp6(17),t.Q6J("formGroup",o.reviewform),t.xp6(6),t.Q6J("ngIf",o.review.invalid&&(o.review.touched||o.review.dirty)),t.xp6(1),t.Q6J("disabled",o.reviewform.invalid))},dependencies:[d.O5,a._Y,a.Fj,a.JJ,a.JL,a.wO,a.sg,a.u,_,d.rS,d.H9,g]}),r})()},{path:"view-cart",component:(()=>{class r{constructor(e,o){this.cartservice=e,this.router=o,this.cart=[],this.updatedCart=[],this.discountrate=10,this.total=0}ngOnInit(){let e=0;this.cartservice.viewCartItems(localStorage.getItem("currentUserId")).subscribe(o=>{this.cart$=o,this.cart$.items.forEach(i=>{e=(i.productId.productPrice-10*i.productId.productPrice/100)*i.quantity,this.total+=e}),console.log(this.total)})}changeQty(e,o){this.cart$.items.forEach(i=>{if(i.productId._id==e){let c=i.quantity;"add"===o?this.updatedCart.push({productId:i.productId._id,quantity:c+1}):"min"===o&&this.updatedCart.push({productId:i.productId._id,quantity:c-1})}else this.updatedCart.push({productId:i.productId,quantity:i.quantity})}),this.cartservice.updateCart(this.updatedCart).subscribe(i=>{this.cartservice.increaseCartCounter(),window.location.reload()})}deleteItem(e){let o=[];this.cart$.items.forEach(i=>{i.productId._id!=e&&o.push({productId:i.productId,quantity:i.quantity})}),this.cartservice.updateCart(o).subscribe(i=>{this.cartservice.increaseCartCounter(),window.location.reload()})}checkOut(){alert("Order is Placed !!");let e=localStorage.getItem("currentUserId");this.cartservice.getCartItems(e).subscribe(o=>{this.cart=o,this.cartservice.orderedItems(e,this.cart[0].items).subscribe(i=>{console.log(i)}),this.router.navigate(["/home"])})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(m.N),t.Y36(p.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-view-cart"]],decls:37,vars:5,consts:[[1,"container","mt-5","divStyle"],[1,"row","bg-dark","d-flex","justify-content-center","headStyle"],[1,"col-sm-2"],[1,"col-sm-7","row"],[1,"col-sm-3"],[1,"col-sm-1"],["class","row d-flex justify-content-center rowStyle",4,"ngFor","ngForOf"],[1,"btn","btn-outline-warning",2,"float","right",3,"click"],[1,"row","d-flex","justify-content-center","rowStyle"],[1,"img-fluid",2,"width","80px","height","100px",3,"src"],[1,"btn",3,"click"],[1,"btn","bi","bi-trash",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"b"),t._uU(4,"Products"),t.qZA()(),t.TgZ(5,"div",3)(6,"div",2)(7,"b"),t._uU(8,"Name"),t.qZA()(),t.TgZ(9,"div",2)(10,"b"),t._uU(11,"Price"),t.qZA()(),t.TgZ(12,"div",4)(13,"b"),t._uU(14,"Discount"),t.qZA()(),t.TgZ(15,"div",2)(16,"b"),t._uU(17,"Rate"),t.qZA()(),t.TgZ(18,"div",4)(19,"b"),t._uU(20,"Quantity"),t.qZA()()(),t.TgZ(21,"div",2)(22,"b"),t._uU(23,"Sub Total"),t.qZA()(),t._UZ(24,"div",5),t.qZA(),t.YNc(25,U,27,23,"div",6),t.TgZ(26,"div",1),t._UZ(27,"div",2)(28,"div",3),t.TgZ(29,"div",2),t._uU(30,"Total : "),t.TgZ(31,"b"),t._uU(32),t.ALo(33,"currency"),t.qZA()(),t.TgZ(34,"div",5)(35,"button",7),t.NdJ("click",function(){return o.checkOut()}),t._uU(36,"Check Out"),t.qZA()()()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",o.cart$.items),t.xp6(7),t.Oqu(t.xi3(33,2,o.total,"INR")))},dependencies:[d.sg,d.H9,g],styles:[".divStyle[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:169px}.rowStyle[_ngcontent-%COMP%]{border:solid 1px rgb(211,211,211);border-radius:12px;margin-bottom:13px;display:flex;align-items:center}.headStyle[_ngcontent-%COMP%]{color:#f5f5f5;border-radius:6px;padding-top:13px;padding-bottom:13px}"]}),r})()}];let S=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.Bz.forChild(P),p.Bz]}),r})();var k=s(4466);let O=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[d.ez,S,k.m]}),r})()}}]);