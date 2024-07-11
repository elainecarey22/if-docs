"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[229],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const i={},o="Plugins",l={unversionedId:"reference/plugins",id:"reference/plugins",title:"Plugins",description:"Impact Framework works by executing pipelines of plugins over input data. Those plugins are re-useable units of code that can be thought of as Lego bricks - simple blocks of code that can be assembled into complex workflows.",source:"@site/docs/reference/plugins.md",sourceDirName:"reference",slug:"/reference/plugins",permalink:"/reference/plugins",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/reference/plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Errors",permalink:"/reference/errors"},next:{title:"FAQs",permalink:"/FAQ"}},p={},s=[{value:"<code>built-in</code>",id:"built-in",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Impact Framework works by executing pipelines of plugins over input data. Those plugins are re-useable units of code that can be thought of as Lego bricks - simple blocks of code that can be assembled into complex workflows. "),(0,a.kt)("p",null,"IF comes bundled with a standard library of ",(0,a.kt)("inlineCode",{parentName:"p"},"builtins")," that allow you to do basic and/or generic operations over your data. These include simple arithmetic, regrouping data, calculating SCI scores, and running processes in a spawned shell."),(0,a.kt)("p",null,"Most IF plugins are created and maintained by the community. Anyone can create a plugin and share it so that other iF users can install it and use it in their pipelines."),(0,a.kt)("p",null,"We provide a website where you can search for plugins:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://explorer.if.greensoftware.foundation"},"IF Explorer")),(0,a.kt)("p",null,"You can also add your own plugins to the Explorer using this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.greensoftware.foundation/how-to-add-plugins"},"form"),"."),(0,a.kt)("h3",{id:"built-in"},(0,a.kt)("inlineCode",{parentName:"h3"},"built-in")),(0,a.kt)("p",null,"IF builtins all come bundled with IF. Below you will find a list of each builtin along with a brief description of its purpose and a link to its README documentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins#readme"},"Time Sync"),": Takes a heterogeneous set of time series data that might be offset, discontinuous or irregularly spaces and returns time series conforming to a user defined time grid. E.g. a user can define that all sets of observations should start at some global start time, end at some global end time and have a specific temporal resolution. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins#readme"},"Groupby"),": Allows a user to regroup their output data according to given keys.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/sci-embodied"},"SCI-embodied")," - Calculates the embodied carbon for a component.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/sci"},"SCI"),": Calculates the software carbon intensity.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/shell"},"Shell")," - A plugin that enables external code in any language to be run in a child process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/sum"},"Sum"),": a generic arithmetic plugin that allows you to sum any set of input parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/multiply"},"Multiply"),": a generic arithmetic plugin that allows you to multiply any set of input parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/coefficient"},"Coefficient"),": a generic arithmetic plugin that allows you to multiply any input value by a coefficient.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/mock-observations"},"Mock Observations"),": A plugin for mocking observations (inputs) for testing and demo purposes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/subtract"},"Subtract"),": a generic plugin for subtracting one value from another")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/divide"},"Divide"),": A generic plugin for doing arithmetic division of two values.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/regex"},"Regex"),": A generic plugin to match part of one string and extract it into another.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/exponent"},"Exponent"),": A generic plugin for raising a value to a power")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/interpolation"},"Interpolation"),": A generic plugin for interpolating between known points.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/builtins/copy-param"},"Copy Param"),": A generic plugin for copying a parameter to a new element in the input array, optionally deleting the original. Useful as a way to rename parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/blob/main/src/if-run/builtins/csv-lookup/README.md"},"CSV lookup"),": A generic plugin for querying data from CSV files."))))}c.isMDXComponent=!0}}]);