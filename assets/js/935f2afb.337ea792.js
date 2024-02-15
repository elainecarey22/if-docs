"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/intro","docId":"intro"},{"type":"category","label":"Major Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design philosophy","href":"/major-concepts/design-philosophy","docId":"major-concepts/design-philosophy"},{"type":"link","label":"Glossary","href":"/major-concepts/glossary","docId":"major-concepts/glossary"},{"type":"link","label":"Impact engine","href":"/major-concepts/impact-engine","docId":"major-concepts/impact-engine"},{"type":"link","label":"Manifest File","href":"/major-concepts/manifest-file","docId":"major-concepts/manifest-file"},{"type":"link","label":"Plugins","href":"/major-concepts/plugins","docId":"major-concepts/plugins"},{"type":"link","label":"Time","href":"/major-concepts/time","docId":"major-concepts/time"}],"href":"/major-concepts/"},{"type":"category","label":"Users","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick start","href":"/users/quick-start","docId":"users/quick-start"},{"type":"link","label":"How to install Impact Framework","href":"/users/how-to-install-if","docId":"users/how-to-install-if"},{"type":"link","label":"How to load model plugins","href":"/users/how-to-import-plugins","docId":"users/how-to-import-plugins"},{"type":"link","label":"How to write a manifest file","href":"/users/how-to-write-impls","docId":"users/how-to-write-impls"}],"href":"/users/"},{"type":"category","label":"Developers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How to build model plugins","href":"/developers/how-to-build-plugins","docId":"developers/how-to-build-plugins"},{"type":"link","label":"How to make models production ready","href":"/developers/how-to-refine-plugins","docId":"developers/how-to-refine-plugins"},{"type":"link","label":"How to visualize results","href":"/developers/how-to-visualize-results","docId":"developers/how-to-visualize-results"},{"type":"link","label":"How to write unit tests","href":"/developers/how-to-write-unit-tests","docId":"developers/how-to-write-unit-tests"}],"href":"/developers/"},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Command line tool","href":"/reference/cli","docId":"reference/cli"},{"type":"link","label":"Plugins","href":"/reference/plugins","docId":"reference/plugins"}],"href":"/reference/"},{"type":"link","label":"Contributions","href":"/contributions","docId":"contributions"}]},"docs":{"contributions":{"id":"contributions","title":"Contributions","description":"First off, thanks for taking the time to contribute! \ud83c\udf89","sidebar":"tutorialSidebar"},"developers/how-to-build-plugins":{"id":"developers/how-to-build-plugins","title":"How to build model plugins","description":"The IF is designed to be as composable as possible. This means you can develop your own models and use them in a model pipeline.","sidebar":"tutorialSidebar"},"developers/how-to-refine-plugins":{"id":"developers/how-to-refine-plugins","title":"How to make models production ready","description":"Our How to build plugins guide covered the basics for how to construct an Impact Framework plugin. This guide will help you to refine your model to make it production-ready. These are best practice guidelines - if you intend to contribute your plugin to one of our repositories, following these guidelines will help your PR to get merged. Even if you are not aiming to have a model merged into one of our repositories, consistency with our norms is useful for debugging and maintaining and for making your model as useful as possible for other Impact Framework developers.","sidebar":"tutorialSidebar"},"developers/how-to-visualize-results":{"id":"developers/how-to-visualize-results","title":"How to visualize results","description":"(for any questions / help needed on IF visualization please raise an issue here: IF issues)","sidebar":"tutorialSidebar"},"developers/how-to-write-unit-tests":{"id":"developers/how-to-write-unit-tests","title":"How to write unit tests","description":"Impact Framework unit tests follow a standard format. We use the jest testing library. You can run all our existing tests by opening the project directory and running npm test. This page explains how you can add new unit tests for your plugins (or add some for our plugins if you notice a gap).","sidebar":"tutorialSidebar"},"developers/index":{"id":"developers/index","title":"Developers","description":"This section contains information for Impact Framework developers. You are a developer if you want to change or update the Impact Framework by adding new features, fixing bugs or building new plugins.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Hackathon!","sidebar":"tutorialSidebar"},"major-concepts/design-philosophy":{"id":"major-concepts/design-philosophy","title":"Design philosophy","description":"Transparency","sidebar":"tutorialSidebar"},"major-concepts/glossary":{"id":"major-concepts/glossary","title":"Glossary","description":"Impact","sidebar":"tutorialSidebar"},"major-concepts/impact-engine":{"id":"major-concepts/impact-engine","title":"Impact engine","description":"Introduction","sidebar":"tutorialSidebar"},"major-concepts/index":{"id":"major-concepts/index","title":"Major Concepts","description":"Here you will find explanations for the fundamnetal Impact Framework concepts. This includes:","sidebar":"tutorialSidebar"},"major-concepts/manifest-file":{"id":"major-concepts/manifest-file","title":"Manifest File","description":"Manifest files are absolutely fundamental to Impact Framework and they serve multiple important purposes, including:","sidebar":"tutorialSidebar"},"major-concepts/plugins":{"id":"major-concepts/plugins","title":"Plugins","description":"Calculating outputs for every component in a Graph (graph) requires the use of an Impact Model (model) called through an Impact Model Plugin (model plugin).","sidebar":"tutorialSidebar"},"major-concepts/time":{"id":"major-concepts/time","title":"Time","description":"Every observation in an array of inputs represents a snapshot with a known start time and a known duration. For example, the following observation shows that the CPU utilization for a resource was 20% for the 10 second period starting at 1500 on the 22nd January 2024:","sidebar":"tutorialSidebar"},"reference/cli":{"id":"reference/cli","title":"Command line tool","description":"A core feature of the Impact Framework is the impact-engine command line tool (CLI). This is how you trigger Impact Framework to execute a certain manifest file.","sidebar":"tutorialSidebar"},"reference/index":{"id":"reference/index","title":"Reference","description":"In this section you will find reference documentation for the core data structures and features used in the Impact Framework.","sidebar":"tutorialSidebar"},"reference/plugins":{"id":"reference/plugins","title":"Plugins","description":"The Impact Framework includes just one builtin model (time-sync). All other models are external plugins that have to be installed before they can be run in an IF pipeline. Anyone can create and install a new model plugin. As long as the model conforms to the expected interface, IF can run it.","sidebar":"tutorialSidebar"},"users/how-to-import-plugins":{"id":"users/how-to-import-plugins","title":"How to load model plugins","description":"Models are developed separately to the Impact Framework core. However, the IF core developers maintain a standard library of models that can be found in this Github repository. We also provide some implementations of popular community models, although we rely on other members of the community to maintain them.","sidebar":"tutorialSidebar"},"users/how-to-install-if":{"id":"users/how-to-install-if","title":"How to install Impact Framework","description":"You can install Impact Framework either globally or locally. For most users, we recommend installing our official releases globally using npm. You can do this using the following command:","sidebar":"tutorialSidebar"},"users/how-to-write-impls":{"id":"users/how-to-write-impls","title":"How to write a manifest file","description":"The Impact Framework receives all its configuration and input data in the form of a manifest file known as an impl (input-yaml). To use the framework, you will need to write an impl file and pass its path to the command line tool. This guide will help you to understand how to construct one of these files and use it to measure the energy and carbon usage of your app.","sidebar":"tutorialSidebar"},"users/index":{"id":"users/index","title":"Users","description":"This section contains information for Impact Framework users. You are a user if you want to apply the Impact Framework to your own use-case, such as using it to measure the environmental impact of your own apps running on some cloud platform.","sidebar":"tutorialSidebar"},"users/quick-start":{"id":"users/quick-start","title":"Quick start","description":"This page will provide the basic instructions for getting up and running with Impact Framework.","sidebar":"tutorialSidebar"}}}')}}]);