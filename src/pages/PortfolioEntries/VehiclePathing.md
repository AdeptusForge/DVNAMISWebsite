---
layout: ../../pages/PortfolioEntryPage.astro
title: 'Vehicle Pathing'
time-of-creation: 'November 29th 2023 - December 1st 2023'
image: "/assets/images/Showing.png"
image_alt: "Vehicle Pathing."
---

This was a little experiment I undertook to try and understand how to make car pathing in complex spaces. There are 2 distinct problems when it comes to pathing with cars in floating point space. The first is that floating-point space is difficult to traverse, and that the physics constraints of cars must be observed.

I attempted the experiment in 2D space for simplicity, but it was my goal to make it easy to modify to work in 3D space. My first solution to the problem was Kinematic-Node Generation. Essentially, we can abstract a driver of the car as an AI agent that is capable of turning and acceleration/deceleration. By doing this, I was able to simplify a lot of the complexities of possible actions down to only 9 total options.

By performing this step multiple times every update, the car will naturally path towards its goal while also avoiding small obstacles. 

However, this was not the entire solution, as cars running solely of Kinematic Node Generation would inevitably get stuck in corners and be unable to continue. To fix this, I had to do a bit of research, and eventually stumbled upon RRT as a form of pathing.

At it's core, pathing in float-space through traditional methods is impossible unless you simplify things. Trying to generate a graph that would accurately model float space would be computationally impossible to path through-it would simply be too large. Based on my research though, cheating is a far better option. 

By generating nodes with random positions within the pathing area and connecting them to a try based on distance, it is possible to path through complex areas without needing to deal with the majority of float-space. 

These paths aren't guaranteed to be optimal, but a lot of methods can be used to increase the optimality of the paths generated, such as using a partition heuristic, restructuring the tree based on a euclidean heuristic, or through ping-ponging. 

Overall this was a great experiment, and I learned a lot from it. There a lot of room to expand both RRT and Kinematic Node Generation to suit a variety of situations.