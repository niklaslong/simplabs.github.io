---
layout: article
section: Blog
title: Shunting Webhooks in Phoenix
author: "Niklas Long"
github-handle: niklaslong
---

I recently had to implement a controller which took care of receiving and processing Webhooks. The thing is, the API could send many different requests and there was only one tired and bloated controller action responsible for welcoming them. This didn't really seem to fit with the concept of using routes to identify controller actions. So I set out to find a more pleasing solution; now that I've found one, I'm here to share.

<!-- break -->

#### tl;dr

Use `forward` on `MyApp.router` to forward `conn` to a custom plug which transforms the `conn`; call `MyApp.WebhookRouter` from the plug. The `WebhookRouter` matches the modified `conn` to the controller actions.


#### lv;e (long version; enjoy!)

Let's restate the problem:
* one controller action
* many different possible Webhook payloads
* different computation required depending on payload

Which results in:
* bloated controller action to handle all the different cases
* routing isn't a good representation of what is actually going on

I actually came up with three different ways of solving this problem; only the last did so to my satsifaction. I will, however, go through all three approaches, as they proved themselves equally as learning opportunities.
