"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[713],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const o={"sidebar-position":3},a="How to write unit tests",s={unversionedId:"developers/how-to-write-unit-tests",id:"developers/how-to-write-unit-tests",title:"How to write unit tests",description:"Impact Framework unit tests follow a standard format. We use the jest testing library. You can run all our existing tests by opening the project directory and running npm test. This page explains how you can add new unit tests for your plugins (or add some for our plugins if you notice a gap).",source:"@site/docs/developers/how-to-write-unit-tests.md",sourceDirName:"developers",slug:"/developers/how-to-write-unit-tests",permalink:"/developers/how-to-write-unit-tests",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/developers/how-to-write-unit-tests.md",tags:[],version:"current",frontMatter:{"sidebar-position":3},sidebar:"tutorialSidebar",previous:{title:"How to submit plugins",permalink:"/developers/how-to-submit-plugins"},next:{title:"Pipelines",permalink:"/pipelines/"}},l={},p=[{value:"Test files",id:"test-files",level:2},{value:"Setting up your test file",id:"setting-up-your-test-file",level:2},{value:"Describe",id:"describe",level:2},{value:"It",id:"it",level:2},{value:"Errors",id:"errors",level:2},{value:"Mocks",id:"mocks",level:2},{value:"Coverage",id:"coverage",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-write-unit-tests"},"How to write unit tests"),(0,i.kt)("p",null,"Impact Framework unit tests follow a standard format. We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"jest")," testing library. You can run all our existing tests by opening the project directory and running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test"),". This page explains how you can add new unit tests for your plugins (or add some for our plugins if you notice a gap)."),(0,i.kt)("h2",{id:"test-files"},"Test files"),(0,i.kt)("p",null,"Both the IF and the project repositories include a ",(0,i.kt)("inlineCode",{parentName:"p"},"__test__")," directory. Inside, you will find subdirectory ",(0,i.kt)("inlineCode",{parentName:"p"},"unit/lib")," containing directories for each plugin. Your plugin repository should also follow this structure. Inside the plugin directory you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"index.test.ts"),". This is where you write your unit tests. For example, here's the directory tree for our ",(0,i.kt)("inlineCode",{parentName:"p"},"teads-curve")," test file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\nif-unofficial-plugins\n |\n |- src\n    |\n    |-__tests__\n        |\n        |-unit\n          |\n          |-lib\n             |\n             teads-curve\n                 |\n                 |- index.test.ts\n")),(0,i.kt)("h2",{id:"setting-up-your-test-file"},"Setting up your test file"),(0,i.kt)("p",null,"You will need to import your plugin so that it can be instantiated and tested. You will also need some elements from ",(0,i.kt)("inlineCode",{parentName:"p"},"jest/globals"),":\nFor example, these are the imports for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {Sum} from '../../../../lib';\nimport {ERRORS} from '../../../../util/errors';\nconst {InputValidationError} = ERRORS;\n")),(0,i.kt)("p",null,"You may require other imports for your specific set of tests."),(0,i.kt)("h2",{id:"describe"},"Describe"),(0,i.kt)("p",null,"Each method should have its own dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," block. "),(0,i.kt)("p",null,"Your unit tests should have ",(0,i.kt)("em",{parentName:"p"},"at least")," two ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," blocks, one to test the plugin initialization and one for ",(0,i.kt)("inlineCode",{parentName:"p"},"execute"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'describe("init", ()=> {})\ndescribe("execute", ()=> {})\n')),(0,i.kt)("p",null,"For example, here is a describe block checking that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin initializes correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('lib/sum: ', () => {\n  describe('Sum: ', () => {\n    const globalConfig = {\n      'input-parameters': ['cpu/energy', 'network/energy', 'memory/energy'],\n      'output-parameter': 'energy',\n    };\n    const sum = Sum(globalConfig);\n\n    describe('init: ', () => {\n      it('successfully initalized.', () => {\n        expect(sum).toHaveProperty('metadata');\n        expect(sum).toHaveProperty('execute');\n      });\n    });\n  })\n})\n")),(0,i.kt)("h2",{id:"it"},"It"),(0,i.kt)("p",null,"Within each ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," block, each effect to be tested should have a dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," block."),(0,i.kt)("p",null,"Here's an example of a new ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," block for the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sum")," plugin. The ",(0,i.kt)("inlineCode",{parentName:"p"},"describe")," block indicates that we are testing effects of the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method. ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," is specific to a single outcome - in this case there are two ",(0,i.kt)("inlineCode",{parentName:"p"},"it")," blocks that test that the plugin returns a specific result in the happy path and throws an exception if the user has provided invalid config data, specifically that the user-provided ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/energy")," parameter is missing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"    describe('execute(): ', () => {\n      it('successfully applies Sum strategy to given input.', async () => {\n        expect.assertions(1);\n\n        const expectedResult = [\n          {\n            duration: 3600,\n            'cpu/energy': 1,\n            'network/energy': 1,\n            'memory/energy': 1,\n            energy: 3,\n            timestamp: '2021-01-01T00:00:00Z',\n          },\n        ];\n\n        const result = await sum.execute([\n          {\n            duration: 3600,\n            'cpu/energy': 1,\n            'network/energy': 1,\n            'memory/energy': 1,\n            timestamp: '2021-01-01T00:00:00Z',\n          },\n        ]);\n\n        expect(result).toStrictEqual(expectedResult);\n      });\n\n      it('throws an error on missing params in input.', async () => {\n        const expectedMessage =\n          'Sum: cpu/energy is missing from the input array.';\n\n        expect.assertions(1);\n\n        try {\n          await sum.execute([\n            {\n              duration: 3600,\n              timestamp: '2021-01-01T00:00:00Z',\n            },\n          ]);\n        } catch (error) {\n          expect(error).toStrictEqual(\n            new InputValidationError(expectedMessage)\n          );\n        }\n      });\n    })\n")),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("p",null,"We prefer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," to check the errors returned from a test. We do this by writing ",(0,i.kt)("inlineCode",{parentName:"p"},"expect")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"catch")," block. Here's an example from our ",(0,i.kt)("inlineCode",{parentName:"p"},"sci")," plugin tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('throws an exception on missing functional unit data.', async () => {\n  const inputs = [\n    {\n      timestamp: '2021-01-01T00:00:00Z',\n      'operational-carbon': 0.002,\n      'embodied-carbon': 0.0005,\n      'functional-unit': 'requests',\n      duration: 1,\n    },\n  ];\n  expect.assertions(1);\n\n  try {\n    await sciModel.execute(inputs);\n  } catch (error) {\n    expect(error).toBeInstanceOf(InputValidationError);\n  }\n});\n")),(0,i.kt)("p",null,"It is also necessary to include ",(0,i.kt)("inlineCode",{parentName:"p"},"expect.assertions(n)")," for testing asynchronous code, where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the number of assertiosn that should be tested before the test completes. "),(0,i.kt)("h2",{id:"mocks"},"Mocks"),(0,i.kt)("p",null,"Please try to avoid mocking data if possible. However, if it is necessary to mock (e.g. if your plugin relies on a third party credentialed API) then please make your mock data as realistic as possible (no ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"baz")," style mock data, please)."),(0,i.kt)("p",null,"We do have mock backends in several of our tests, and we also have a mock data generator plugin that can create realistic dummy data to your specific requirements."),(0,i.kt)("h2",{id:"coverage"},"Coverage"),(0,i.kt)("p",null,"Please use ",(0,i.kt)("inlineCode",{parentName:"p"},"jest --coverage")," to see a coverage report for your plugin - your unit tests should yield 100% coverage. The snippet below shows what to expect from the coverage report:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"-------------------------------|---------|----------|---------|---------|-------------------\n| File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |\n| --------------------------- | ------- | -------- | ------- | ------- | ----------------- |\n| All files                   | 100     | 100      | 100     | 100     |\n| lib                         | 100     | 100      | 100     | 100     |\n| index.ts                    | 100     | 100      | 100     | 100     |\n| lib/cloud-metadata          | 100     | 100      | 100     | 100     |\n| index.ts                    | 100     | 100      | 100     | 100     |\n| lib/e-mem                   | 100     | 100      | 100     | 100     |\n| index.ts                    | 100     | 100      | 100     | 100     |\n| lib/e-net                   | 100     | 100      | 100     | 100     |\n| index.ts                    | 100     | 100      | 100     | 100     |\n")))}c.isMDXComponent=!0}}]);