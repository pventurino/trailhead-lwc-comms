# About

This repository contains the code belonging to the [Communicate Between Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components?trail_id=build-lightning-web-components) Trailhead module.

# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

# Notes from Trailhead

## [Communicate from Child to Parent](https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-child-to-parent?trail_id=build-lightning-web-components)

Let’s start with a simple scenario. A child component dispatches a custom event that triggers an update in the parent component.

_Image: A child component named controls is contained by and communicates up to its parent, the numerator component._

When you send an event, you can choose to send some data and you can allow the event to bubble up through the DOM. Let’s start with a simple scenario. A child component dispatches a custom event that triggers an update in the parent component.

## [Communicate from Parent to Child](https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-parent-to-child?trail_id=build-lightning-web-components)

To enable communication from a parent component to a child component, the child exposes a property or function to make it public. Then the parent can update the child's public property or call the child's public function.

_Image: Parent-to-child communication diagram showing augmentor-to-numerator._

Additionally, if you want to add some functionality, update the public property to a getter and setter on the child component.

## [Communicate Between Unrelated Components](https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-between-unrelated-components?trail_id=build-lightning-web-components)

To communicate across the subtrees in the DOM (and under some circumstances between different browser windows logged into the same org), use Lightning message service (LMS). LMS is a publish and subscribe service that facilitates communication between Lightning web components, Aura components, and Visualforce pages.

Use LMS for communication between unrelated components unless you control both components and a common parent. LMS is powerful, effective, and easy to use, but don’t let that tempt you to use it when it’s not necessary. Firing DOM events is much more efficient. When you need to communicate between components with a parent that you can’t control, such as two App Builder slots, Lightning message service is the perfect choice.

_Image: LMS communication diagram showing a document object that contains several elements, including one element within a parent element. LMS channels are represented by unidirectional and bidirectional arrows between elements._
