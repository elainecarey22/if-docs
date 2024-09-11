"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[712],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(4137));const o={"sidebar-position":3},r="Software Carbon Intensity (SCI)",s={unversionedId:"pipelines/sci",id:"pipelines/sci",title:"Software Carbon Intensity (SCI)",description:"Description",source:"@site/docs/pipelines/sci.md",sourceDirName:"pipelines",slug:"/pipelines/sci",permalink:"/pipelines/sci",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/pipelines/sci.md",tags:[],version:"current",frontMatter:{"sidebar-position":3},sidebar:"tutorialSidebar",previous:{title:"Instance metadata pipeline",permalink:"/pipelines/instance-metadata"},next:{title:"Reference",permalink:"/reference/"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Tags",id:"tags",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Scope",id:"scope",level:2},{value:"Common patterns",id:"common-patterns",level:2},{value:"Observations",id:"observations",level:2},{value:"Constants and coefficients:",id:"constants-and-coefficients",level:2},{value:"Assumptions and limitations",id:"assumptions-and-limitations",level:2},{value:"Components",id:"components",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Interpolate",id:"interpolate",level:3},{value:"config",id:"config",level:4},{value:"Multiply",id:"multiply",level:3},{value:"config",id:"config-1",level:4},{value:"Divide",id:"divide",level:3},{value:"config",id:"config-2",level:4},{value:"Sum",id:"sum",level:3},{value:"config",id:"config-3",level:4},{value:"SciEmbodied",id:"sciembodied",level:3},{value:"config",id:"config-4",level:4},{value:"SCI",id:"sci",level:3},{value:"config:",id:"config-5",level:4},{value:"Manifest",id:"manifest",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software-carbon-intensity-sci"},"Software Carbon Intensity (SCI)"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://greensoftware.foundation/articles/software-carbon-intensity-sci-specification-project"},"software carbon intensity (SCI)")," score is perhaps the most important value that can be generated using Impact Framework. "),(0,a.kt)("p",null,"SCI is an ISO-recognized standard for reporting the carbon costs of running software. This tutorial demonstrates how to organize a pipeline of Impact framework plugins to calculate SCI scores from some simple observations that are commonly available for software applications running in the cloud."),(0,a.kt)("h2",{id:"tags"},"Tags"),(0,a.kt)("p",null,"SCI, cloud, cpu, memory, power-curve"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This tutorial builds on top of the ",(0,a.kt)("a",{parentName:"p",href:"./teads.md"},"Teads curve")," pipeline tutorial. That tutorial demonstrates how to organize a pipeline that converts CPU utilization observations into CPU energy. This tutorial uses the same pipeline but goes several steps further, including converting the CPU energy estimates into carbon, adding the embodied carbon associated with the hardware being used and calculating the SCI score."),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"This SCI calculation takes into account the operational and embodied carbon of the server running our application. This includes the energy used to run the application, calculated from CPU and memory utilization, and the energy required to transfer data over the internet between server and client. It does not account for data center embodied carbon, embodied carbon of end user devices nor operational carbon in end user devices."),(0,a.kt)("h2",{id:"common-patterns"},"Common patterns"),(0,a.kt)("p",null,"We employ the well known power curve from ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac"},"Davy, 2021")," to estimate CPU power from CPU utilization. You can find a detailed explanation of our implementation of this power curve methodology ",(0,a.kt)("a",{parentName:"p",href:"./teads.md"},"here"),"."),(0,a.kt)("p",null,"We also use the networking energy and embodied carbon estimation methods from ",(0,a.kt)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/methodology"},"Cloud Carbon Footprint"),". This includes using the networking energy coefficient they suggest and implementing their method for calculating embodied emissions in an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/tree/main/src/if-run/builtins/sci-embodied"},"Impact Framework plugin"),"."),(0,a.kt)("h2",{id:"observations"},"Observations"),(0,a.kt)("p",null,"This manifest requires the following observations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU utilization"),(0,a.kt)("li",{parentName:"ul"},"thermal design power of the processors"),(0,a.kt)("li",{parentName:"ul"},"number of vCPUs allocated to the application under observation"),(0,a.kt)("li",{parentName:"ul"},"total number of vCPUs available on the cloud instance being used"),(0,a.kt)("li",{parentName:"ul"},"the name of the cloud instance type being used"),(0,a.kt)("li",{parentName:"ul"},"the grid carbon intensity for the grid powering the data center"),(0,a.kt)("li",{parentName:"ul"},"data transferred in/out of the application"),(0,a.kt)("li",{parentName:"ul"},"users per timestep")),(0,a.kt)("h2",{id:"constants-and-coefficients"},"Constants and coefficients:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"network-energy-coefficient")),(0,a.kt)("td",{parentName:"tr",align:null},"Coefficient relating data sent over network to energy"),(0,a.kt)("td",{parentName:"tr",align:null},"0.001")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"y")),(0,a.kt)("td",{parentName:"tr",align:null},"Points on power curve relating CPU utilization to a coefficient used to scale the processor's thermal design power"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"x: [0, 10, 50, 100], y: [0.12, 0.32, 0.75, 1.02]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"baseline-emissions")),(0,a.kt)("td",{parentName:"tr",align:null},'embodied emissions for a "baseline" server with 1 CPU, 16GB RAM'),(0,a.kt)("td",{parentName:"tr",align:null},"1000000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lifespan")),(0,a.kt)("td",{parentName:"tr",align:null},"lifespan for the server running our application"),(0,a.kt)("td",{parentName:"tr",align:null},"126144000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"usage-ratio")),(0,a.kt)("td",{parentName:"tr",align:null},"scaling factor for adjusting total embodied carbon down tot he portion our application is responsible for"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h2",{id:"assumptions-and-limitations"},"Assumptions and limitations"),(0,a.kt)("p",null,"The following are assumed to be true in this manifest:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the embodied carbon of the baseline server approximates the real embodied carbon of the server running our application"),(0,a.kt)("li",{parentName:"ul"},"the lifespan of the server running our application is really 4 years"),(0,a.kt)("li",{parentName:"ul"},"the coefficient relating data transferred over the network to energy is accurate"),(0,a.kt)("li",{parentName:"ul"},"the power curve relating CPU utilization to power is appropriate for the processor being used to run our application"),(0,a.kt)("li",{parentName:"ul"},"the coefficient relating memory utilization to energy is accurate"),(0,a.kt)("li",{parentName:"ul"},"it is appropriate to consider end user embodied carbon, end user operational carbon and the operationl and embodied emissions of the data center to be out of scope."),(0,a.kt)("li",{parentName:"ul"},"the temporal granularity of the observations are sufficient to accurately capture the behaviour of our application")),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"There is only one component in this example. It represents the entire application. The component pipeline looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipeline:\n  compute:\n    - interpolate\n    - cpu-factor-to-wattage\n    - wattage-times-duration\n    - wattage-to-energy-kwh\n    - calculate-vcpu-ratio\n    - correct-cpu-energy-for-vcpu-ratio\n    - sum-energy-components\n    - embodied-carbon\n    - operational-carbon\n    - sum-carbon\n    - sci\n")),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("h3",{id:"interpolate"},"Interpolate"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolate")," plugin is used once. The instance is named ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolate"),". It is used to interpolate the curve relating CPU utilization and thermal-design-power factor so that the right value can be retrieved for the observed CPU utilization at each timestep."),(0,a.kt)("h4",{id:"config"},"config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"method: linear\nx: [0, 10, 50, 100]\ny:[0.12, 0.32, 0.75, 1.02]\ninput-parameter: cpu/utilization\noutput-parameter: cpu-factor\n")),(0,a.kt)("h3",{id:"multiply"},"Multiply"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Multiply")," plugin is used several times. The instances are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cpu-factor-to-wattage"),": used to multiply the thermal design power of the processor by the factor returned from the power curve interpolation, yielding power in Watts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wattage-times-duration"),": used to multiply the power in Watts by the duration of each timestep, yielding energy in W/duration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operational-carbon"),": used to convert energy into operational carbon by multiplying energy in kWh by the grid carbon intensity in gCO2/kWh.")),(0,a.kt)("h4",{id:"config-1"},"config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cpu-factor-to-wattage:\ninput-parameters:\n  - cpu-factor\n  - cpu/thermal-design-power\noutput-parameter: \n  - cpu-wattage\n\nwattage-times-duration:\ninput-parameters:\n  - cpu-wattage\n  - duration\noutput-parameter: \n  - cpu-wattage-times-duration\n\noperational-carbon:\ninput-parameters:\n  - energy\n  - grid/carbon-intensity\noutput-parameter: \n  - carbon-operational\n\n")),(0,a.kt)("h3",{id:"divide"},"Divide"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Divide")," plugin is used once in this manifest. The instance is named ",(0,a.kt)("inlineCode",{parentName:"p"},"wattage-to-energy-kwh"),". It is used to convert energy in W/duration to kWh."),(0,a.kt)("h4",{id:"config-2"},"config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wattage-to-energy-kwh:\nnumerator: cpu-wattage-times-duration\ndenominator: 3600000\noutput: cpu-energy-raw\n")),(0,a.kt)("h3",{id:"sum"},"Sum"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Sum")," plugin is used several times in this manifest. The instances are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sum-energy-components"),": used to sum all the various components of energy into a single value, called ",(0,a.kt)("inlineCode",{parentName:"li"},"energy"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sum-carbon"),": used to sum the various components of carbon into a single value, named ",(0,a.kt)("inlineCode",{parentName:"li"},"carbon"),".")),(0,a.kt)("h4",{id:"config-3"},"config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sum-energy-components:\ninput-parameters:\n  - cpu/energy\n  - network/energy\noutput-parameter: \n  - energy\n\nsum-carbon:\ninput-parameters:\n  - carbon-operational\n  - carbon-embodied\noutput-parameter: \n  - carbon\n")),(0,a.kt)("h3",{id:"sciembodied"},"SciEmbodied"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SciEmbodied")," plugin is used once. Its purpose is to calculate the embodied emissions of the server running our application and apportion the total embodied carbon to the fraction that we are responsible (i.e. scale it based on the application only using a fraction of the available resources and a fraction of the server lifespan). We do not scale by resource allocation in this example, only time."),(0,a.kt)("h4",{id:"config-4"},"config"),(0,a.kt)("p",null,"We use the plugin defaults for all the ",(0,a.kt)("inlineCode",{parentName:"p"},"SciEmbodied")," config. This means we assume the total embodied emissions to be 1000000 gCO2e and the server to be a simple rack server with 1 CPU and 16GB RAM and no other components."),(0,a.kt)("h3",{id:"sci"},"SCI"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SCI")," plugin is used once. It is used to calculate the software carbon intensity by dividing ",(0,a.kt)("inlineCode",{parentName:"p"},"carbon")," by a functional unit, that has to be available in the manifest ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs")," array at the time the plugin is executed. The functional unit in this example is users in each timestep."),(0,a.kt)("h4",{id:"config-5"},"config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sci:\nfunctional-unit: users\n")),(0,a.kt)("h2",{id:"manifest"},"Manifest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: sci example\ndescription:\ntags:\naggregation:\n  metrics:\n    - carbon\n    - sci\n  type: both\n  \ninitialize:\n  plugins:\n    interpolate:\n      path: builtin\n      method: Interpolation\n      config:\n        method: linear\n        x:\n          - 0\n          - 10\n          - 50\n          - 100\n        'y':\n          - 0.12\n          - 0.32\n          - 0.75\n          - 1.02\n        input-parameter: cpu/utilization\n        output-parameter: cpu-factor\n    cpu-factor-to-wattage:\n      path: builtin\n      method: Multiply\n      config:\n        input-parameters:\n          - cpu-factor\n          - cpu/thermal-design-power\n        output-parameter: cpu-wattage\n    wattage-times-duration:\n      path: builtin\n      method: Multiply\n      config:\n        input-parameters:\n          - cpu-wattage\n          - duration\n        output-parameter: cpu-wattage-times-duration\n    wattage-to-energy-kwh:\n      path: builtin\n      method: Divide\n      config:\n        numerator: cpu-wattage-times-duration\n        denominator: 3600000\n        output: cpu-energy-raw\n    calculate-vcpu-ratio:\n      path: builtin\n      method: Divide\n      config:\n        numerator: vcpus-total\n        denominator: vcpus-allocated\n        output: vcpu-ratio\n    correct-cpu-energy-for-vcpu-ratio:\n      path: builtin\n      method: Divide\n      config:\n        numerator: cpu-energy-raw\n        denominator: vcpu-ratio\n        output: cpu/energy\n    sum-energy-components:\n      path: builtin\n      method: Sum\n      config:\n        input-parameters:\n          - cpu/energy\n          - network/energy\n        output-parameter: energy\n    embodied-carbon:\n      path: builtin\n      method: SciEmbodied\n      config:\n        output-parameter: carbon-embodied\n    operational-carbon:\n      path: builtin\n      method: Multiply\n      config:\n        input-parameters:\n          - energy\n          - grid/carbon-intensity\n        output-parameter: carbon-operational\n    sum-carbon:\n      path: builtin\n      method: Sum\n      config:\n        input-parameters:\n          - carbon-operational\n          - embodied-carbon\n        output-parameter: carbon\n    sci:\n      path: builtin\n      method: Sci\n      config:\n        functional-unit: users\n\ntree:\n  children:\n    github-storage-for-if-docs:\n      pipeline:\n        compute:\n          - interpolate\n          - cpu-factor-to-wattage\n          - wattage-times-duration\n          - wattage-to-energy-kwh\n          - calculate-vcpu-ratio\n          - correct-cpu-energy-for-vcpu-ratio\n          - sum-energy-components\n          - embodied-carbon\n          - operational-carbon\n          - sum-carbon\n          - sci\n      defaults:\n        cpu/thermal-design-power: 100\n        vcpus-total: 1\n        vcpus-allocated: 1\n        network/energy: 0.001\n        grid/carbon-intensity: 130\n      inputs:\n        - timestamp: '2024-07-22T00:00:00'\n          duration: 3600    \n          site-visits: 228\n          cpu/utilization: 45\n          component: 1\n          users: 1100\n        - timestamp: '2024-07-23T00:00:00'\n          duration: 3600    \n          site-visits: 216\n          cpu/utilization: 30\n          component: 1\n          users: 1050\n        - timestamp: '2024-07-24T00:00:00'\n          duration: 3600    \n          site-visits: 203\n          cpu/utilization: 50\n          component: 1\n          users: 1055\n        - timestamp: '2024-07-25T00:00:00'\n          duration: 3600    \n          site-visits: 203\n          cpu/utilization: 33\n          component: 1\n          users: 996\n        - timestamp: '2024-07-26T00:00:00'\n          duration: 3600    \n          site-visits: 172\n          cpu/utilization: 29\n          component: 1\n          users: 899\n        - timestamp: '2024-07-27T00:00:00'\n          duration: 3600    \n          site-visits: 38\n          cpu/utilization: 68\n          component: 1\n          users: 1080\n        - timestamp: '2024-07-28T00:00:00'\n          duration: 3600    \n          site-visits: 63\n          cpu/utilization: 49\n          component: 1\n          users: 1099\n        - timestamp: '2024-07-29T00:00:00'\n          duration: 3600    \n          site-visits: 621\n          cpu/utilization: 77\n          component: 1\n          users: 1120\n        - timestamp: '2024-07-30T00:00:00'\n          duration: 3600    \n          site-visits: 181\n          cpu/utilization: 31\n          component: 1\n          users: 1125\n        - timestamp: '2024-07-31T00:00:00'\n          duration: 3600    \n          site-visits: 213\n          cpu/utilization: 29\n          component: 1\n          users: 1113\n        - timestamp: '2024-08-01T00:00:00'\n          duration: 3600    \n          site-visits: 167\n          cpu/utilization: 29\n          component: 1\n          users: 1111\n        - timestamp: '2024-08-02T00:00:00'\n          duration: 3600    \n          site-visits: 428\n          cpu/utilization: 29\n          component: 1\n          users: 1230\n        - timestamp: '2024-08-03T00:00:00'\n          duration: 3600    \n          site-visits: 58\n          cpu/utilization: 64\n          component: 1\n          users: 1223\n        - timestamp: '2024-08-04T00:00:00'\n          duration: 3600    \n          site-visits: 66\n          cpu/utilization: 59\n          component: 1\n          users: 1210\n        - timestamp: '2024-08-05T00:00:00'\n          duration: 3600    \n          site-visits: 301\n          cpu/utilization: 60\n          component: 1\n          users: 1011\n        - timestamp: '2024-08-06T00:00:00'\n          duration: 3600    \n          site-visits: 193\n          cpu/utilization: 35\n          component: 1\n          users: 999\n        - timestamp: '2024-08-07T00:00:00'\n          duration: 3600    \n          site-visits: 220\n          cpu/utilization: 37\n          component: 1\n          users: 1010\n        - timestamp: '2024-08-08T00:00:00'\n          duration: 3600    \n          site-visits: 215\n          cpu/utilization: 43\n          component: 1\n          users: 1008\n        - timestamp: '2024-08-09T00:00:00'\n          duration: 3600    \n          site-visits: 516\n          cpu/utilization: 28\n          component: 1\n          users: 992\n        - timestamp: '2024-08-10T00:00:00'\n          duration: 3600    \n          site-visits: 42\n          cpu/utilization: 39\n          component: 1\n          users: 1101\n        - timestamp: '2024-08-11T00:00:00'\n          duration: 3600    \n          cpu/utilization: 40\n          site-visits: 76\n          component: 1\n          users: 1000\n        - timestamp: '2024-08-12T00:00:00'\n          duration: 3600    \n          site-visits: 226\n          cpu/utilization: 55\n          component: 1\n          users: 845\n        - timestamp: '2024-08-13T00:00:00'\n          duration: 3600    \n          site-visits: 180\n          cpu/utilization: 62\n          component: 1\n          users: 1006\n        - timestamp: '2024-08-14T00:00:00'\n          duration: 3600    \n          site-visits: 232\n          cpu/utilization: 71\n          component: 1\n          users: 1076\n        - timestamp: '2024-08-15T00:00:00'\n          duration: 3600    \n          site-visits: 175\n          cpu/utilization: 75\n          component: 1\n          users: 1050\n        - timestamp: '2024-08-16T00:00:00'\n          duration: 3600    \n          site-visits: 235\n          cpu/utilization: 77\n          component: 1\n          users: 1047\n        - timestamp: '2024-08-17T00:00:00'\n          duration: 3600    \n          site-visits: 44\n          cpu/utilization: 80\n          component: 1\n          users: 1020\n        - timestamp: '2024-08-18T00:00:00'\n          duration: 3600    \n          site-visits: 31\n          cpu/utilization: 84\n          component: 1\n          users: 1038\n\n")))}c.isMDXComponent=!0}}]);