(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),o=a.n(n),s=a(20),r=a.n(s),l=a(9),i=a(10),c=a(12),p=a(11),u=a(13),d=a(7);function m(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"quickly adopt a new friend"),o.a.createElement("p",null,"welcome to petful, your one stop shop to adopting a cat or a dog."),o.a.createElement(d.b,{to:"/adopt"},o.a.createElement("button",null,"Lets adopt a Pet")))}var h=a(14),g={REACT_APP_API_ENDPOINT:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_ENDPOINT||"http://localhost:8000"},E={getPeople:function(){return fetch("".concat(g.REACT_APP_API_ENDPOINT,"/people"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},addPerson:function(e){return fetch("".concat(g.REACT_APP_API_ENDPOINT,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},f={getPets:function(){return fetch("".concat(g.REACT_APP_API_ENDPOINT,"/pets"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},adopt:function(e){return fetch("".concat(g.REACT_APP_API_ENDPOINT,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:e})}).then((function(e){return e.ok?null:function(e){return Promise.reject(e)}}))}},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).updatePets=function(){return f.getPets().then((function(e){console.log(e),a.setState({dog:e.dog,cat:e.cat})}))},a.updatePeople=function(){return E.getPeople().then((function(e){var t;if(t=e.filter((function(e){return null!==e})),a.state.name){var n=a.state.name;a.setState({people:[].concat(Object(h.a)(t),[n])}),E.addPerson(n)}else a.setState({people:Object(h.a)(t)})}))},a.adoptCat=function(){f.adopt("cat").then((function(){a.setState((function(e){return{people:e.people.slice(1)}})),a.setState({name:null}),a.setState({adopted:"Meow! You adopted a cat :)"}),a.setState({inLine:!1})}))},a.adoptDog=function(){f.adopt("dog").then((function(){a.setState((function(e){return{people:e.people.slice(1)}})),a.setState({name:null}),a.setState({adopted:"Woof! You adopted a dog :)"}),a.setState({inLine:!1})}))},a.peopleString=function(){var e="";if(a.state.people)for(var t=0;t<a.state.people.length;t++){if(t===a.state.people.length-1&&1!==a.state.people.length){e=e+"and "+a.state.people[t];break}e=e+a.state.people[t]+", "}return e},a.serveACustomer=function(){if(!a.state.error){if(a.state.people&&a.state.people[0]!==a.state.name&&a.state.people&&a.state.people.length>1){var e="cat";2===Math.floor(2*Math.random())+1&&(e="dog"),f.adopt(e).then((function(){a.setState((function(e){return{people:e.people.slice(1)}}))})).then((function(){a.updatePets()})).catch((function(e){return a.setState({error:e.message})}))}if(a.state.people&&a.state.people.length<5){var t=["Dana","Samantha Power","Alister Crowley","Max Michaels"],n=t[a.state.count%t.length];E.addPerson(n).then((function(e){a.setState((function(e){return{people:[].concat(Object(h.a)(e.people),[n])}})),a.setState((function(e){return{count:e.count+1}}))}))}}},a.getInLine=function(e){e.preventDefault();var t=e.target.name;a.state.inLine?a.setState({message:"You are already in line!"}):(a.setState({name:t.value}),a.updatePeople(),a.setState({inLine:!0}))},a.state={dog:{age:3,breed:"Golden Retriever",description:"A smiling golden-brown golden retreiver listening to music.",gender:"Male",imageURL:"https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Zim",story:"Owner Passed away"},cat:{age:3,breed:"Tabby",description:"boxer dog",gender:"Male",imageURL:"https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name:"Vince the Pince",story:"Found in neighborhood"},people:null,error:null,autoAdopt:!0,count:0,adopted:null,name:null,inLine:!1,message:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePets(),this.updatePeople(),setInterval(this.serveACustomer,5e3,0)}},{key:"render",value:function(){return this.state.people&&this.state.people[0]!==this.state.name?o.a.createElement("section",null,o.a.createElement("p",null,this.state.message),o.a.createElement("form",{onSubmit:this.getInLine},o.a.createElement("label",{htmlFor:"name"},"Your name:"),o.a.createElement("input",{type:"text",id:"name",name:"name"}),o.a.createElement("input",{type:"submit",value:"Get In Line"})),o.a.createElement("p",null,this.state.adopted),o.a.createElement("p",null,"The current queue is: ",this.peopleString(),". The pets up for adoption are:")," ",o.a.createElement("br",null),o.a.createElement("div",{className:"petDisplay"},o.a.createElement("p",null,"First we have ",this.state.cat.name," a ",this.state.cat.age," year old ",this.state.cat.gender," ",this.state.cat.breed,' whose story is "',this.state.cat.story,'"'),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.cat.imageURL,alt:this.state.cat.description}),o.a.createElement("br",null)),o.a.createElement("div",{className:"petDisplay"},o.a.createElement("p",null," ","And next is ",this.state.dog.name," a ",this.state.cat.age," year old"," ",this.state.dog.gender," ",this.state.dog.breed,' whose story is "',this.state.dog.story,'"'),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.dog.imageURL,alt:this.state.dog.description}),o.a.createElement("br",null))):o.a.createElement("section",null,o.a.createElement("p",null,this.state.adopted),o.a.createElement("p",null,"The current queue is: ",this.peopleString(),". The pets up for adoption are:")," ",o.a.createElement("br",null),o.a.createElement("button",{onClick:this.adoptCat},"Adopt the cat ",this.state.cat.name,"!"),o.a.createElement("button",{onClick:this.adoptDog},"Adopt the dog ",this.state.dog.name,"!"),o.a.createElement("div",{className:"petDisplay"},o.a.createElement("p",null,"First we have ",this.state.cat.name," a ",this.state.cat.age," year old ",this.state.cat.gender," ",this.state.cat.breed,' whose story is "',this.state.cat.story,'"'),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.cat.imageURL,alt:this.state.cat.description}),o.a.createElement("br",null)),o.a.createElement("div",{className:"petDisplay"},o.a.createElement("p",null," ","And next is ",this.state.dog.name," a ",this.state.cat.age," year old"," ",this.state.dog.gender," ",this.state.dog.breed,' whose story is "',this.state.dog.story,'"'),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.dog.imageURL,alt:this.state.dog.description}),o.a.createElement("br",null)))}}]),t}(o.a.Component),P=a(5),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Petful"),o.a.createElement(P.b,null,o.a.createElement(m,{exact:!0,path:"/"}),o.a.createElement(b,{path:"/adopt"})))}}]),t}(o.a.Component);r.a.render(o.a.createElement(d.a,null,o.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.95971502.chunk.js.map