---
layout: ../../pages/PortfolioSmallPage.astro
title: 'Burger Flippant'
undertitle: ''
timeOfCreation: '3/17/2018 - 3/31/2018'
image: "/assets/images/Showing.png"
image_alt: "Burger Flippant."
---

Burger Flippant was a game I developed as part of a 2 week gamejam with a friend of mine. Our goal was to finish the entire game in those 2 weeks, with my friend working as programming, and myself working as designer inside Unity. The concept for the game was a physics-based cooking game with a similar style to Enviro-Bear 2000. 

The main system I designed for the game was the cooking mechanics. Ingredients needed to gradually cook while in contact with the grill, needed to be physically manipulatable, and needed to visually show how cooked they were. To this end, my thinking was that simplest way to handle this was to subdivide ingredients.

Every ingredient would be composed of 'Physics Nodes', which were essentially box colliders connected with physics joints to hold them together. This allowed objects to react somewhat realistically while still being overexaggerated. To solve the cooking problem, I subdivided them again, and made 'transfer nodes'. These Transfer Nodes would recieve heat from the grill and store it as a number. These Transfer nodes, similar to Physics Nodes, were connected game objects, albeit not physically. Every node would transfer heat to its designated neighbors at different, modifiable rates. 

Each transfer node would also change depending on the level of heat that was currently present within them. For burgers nodes would start pink, gradually brown, blacken, and then eventually light on fire. This solved both the cooking problem and gave players signifiers for what was occurring. Throw a pixelated shader over the top of it, and the result speaks for itself.