---
layout: ../../pages/PortfolioLargePage.astro
title: 'Strike Back'
undertitle: 'A 2D traditional fighting game'
timeOfCreation: '9/8/2022 - 4/17/2023'
image: "/assets/images/StrikeBackSplashHT.png"
image_alt: "Strike Back."
---

Strike Back is a traditional 2D grounded fighting game that focused heavily on neutral. I was the Technical Lead on the project, but I also served as the Producer to a great degree. 

As Technical Lead I foresaw and organized a programming department of 4 people. Together, we constructed the engine from scratch using OpenGL. My main concerns were with architecture, simulating the games internal physics, and with rendering capabilities. Having already made a 3D rendering engine in the past, the vast majority of problems were simple to solve, having the benefits of hindsight.

During development, it came to my attention that because of the way that corners worked within the engine, we would need a more robust system than simple overlap prevention collision. The collision resolution was causing frantic problems when being sandwiched between one player and the corner.

Due to this, I realized that what we needed to refactor our collision to use a constraint-solver instead. Over the course of that thanksgiving, I retooled the engine's entire physics system in order to support the fixes, and in the end was left with a physics system that was as accurate, smooth, and most importantly easily modifiable. 

The system itself was not without flaws; a lot of problems cropped up in rendering from me not planning for things that we would likely need from the outset. Things like transparency of sprites and sprite anchoring weren't solved in advance, so in a lot of cases, stitched together amalgams needed to be implemented instead of reliable solutions.

Aside from the pure technical aspects of development, this was a unique experience leading so many people. Given that tech was setting the pace for most other tasks, planning tasks for various members of the team based on time constraints and suitability became crucial to make sure the team didn't fall behind in its pace. 

Given the tight time constraints of making an entire fighting game in 8 months while also attending school full time, I'd say this was a rousing success, though the project certainly would have benefitted from having more time to iron out bugs, and from better communication on my own part.