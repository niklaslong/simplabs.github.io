---
layout: article
section: Blog
title: From Rails to Phoenix
author: "Niklas Long"
github-handle: niklaslong
---

I never thought I'd be able to learn how to code. I wasn't good at maths. I tried ruby when I was young and found it hard. A couple years later I stopped my medical studies and decided to try to learn how to code. Today I am working as a software engineering intern at Simplabs. Here are my takeaways from the last couple of months of learning and working with Elixir and Phoenix.

<!--break-->

#### My story in ± 30 seconds, depending on your current reading velocity and ocular stamina.

I finished codeschool in the summer of 2017. It was a five and a half month long course I took in Portland, OR, and it's focus was Ruby and Rails. By the end of it, I was comfortable in both Ruby and Javascript, and knew enough about Rails, Angular and Ember to build basic full stack apps. After finishing codeschool, I returned to Europe to find an internship. One company which had been of interest was Simplabs - a Munich based Ember, Phoenix and Rails house. This seemed like a good fit: the company was still quite young, had a great team of experienced devs and the technologies they used were aligned with my own interests. Simplabs seemed like a place I could learn a lot, and quickly. A couple remote interviews later, I was hired as a Software Engineering intern.


#### Elixir and Phoenix

The app I have been working on for the last couple of months is written in Elixir and leverages the PhoenixFramework. The goal of the app is to aggregate data from a couple APIs, and serve JSON to the client written in Ember.

The codebase I stepped into already contained a lot of code. The controllers had been fleshed out, some tests had been written, the database had been set up. It really seemed like I could learn a lot from what was already there and that I would be working, at least initially, within the confines of an already working, albeit rudementary, app. Then I tried to run the tests...

![db conn error](/images/posts/2017-11-09-from-rails-to-phoenix/db-fail.png)


After asking the internet for a certain amount of time, which I don't yet feel comfortable disclosing, I figured out that I was missing some setup for SQL. I promptly added what was missing and ran the tests again.

*insert image of failing tests*

The code was now running, or at least it was *really* trying it's best to run; an effort I loudly applauded at time. I had learned from codeschool that the color red was conventionally used to communicate breakage; in my case, it was thorough. I then spent the next week working on fixing the tests. As I did this, I started to gain a rough uderstanding of what was going on in the various controllers and other parts of the app. Knowing Ruby, the Elixir syntaxe was pretty self-explanatory and it was easy to read the code, even if I hadn't yet written much Elixir. Phoenix, was initially inspired by Rails, and even if the two framewroks are totally different in their execution of the same architectural pattern of the MVC, the similarities were enough for me to start deciphering what this app was meant to be doing.

The application was poorly documented. There were no helpful comments, no documentation had been written and the code itself was messy and used names that weren't self-sufficient to explain what was going on. I don't want to sound boring, but I do truly believe that good and comprehensive documentation is an essential part of any project, no matter what size it is, or the number of engineers currently working on it. It saves you and your company a childs number, a bijillion or even a gazillion, of seconds if you write documentation. I use `ex_doc` for this project. It's super cool and easy. Start by writting documentation as decribed in the Elixir docs:

```elixir
@doc"""
Returns some lyrics from the critically acclaimed song titled: Play That Funky Music.
"""
def play_that_funky_music() do
  "Play that funky music white boy - play that funky music right, ya..."
end
```

You can then use `ex_doc` to generate a static site which documents your app by running `mix docs`. The official docs for Elixir and Phoenix use this.

This brings me to my next point: the resources available to learn Elixir and Phoenix are awesome! The official docs are amazing. The Elixir slack channel is home to one of the nicest and most helpful communities I've ever encountered, on par wih the EmberJS community, at the very least. There are some fantastic talks you can find on YT which cover some fascinating topics, from entry-level to advanced. These definitely helped me to get started with Elixir, and more often than not still insight me to fall more deeply in love with a language that I already thought I couldn't appreciate more.
