---
date: <% tp.date.now("YYYY-MM-DD") %>
parent: "[[index]]"
campground_name: <% await tp.system.prompt("Campground Name", "") %>
nights: "<% await tp.system.prompt("Nights stayed", "") %>"
rating: <% await tp.system.suggester(["Great", "Okay", "Poor"], ["Great", "Okay", "Poor"]) %>
water: true
electricity: true
sewer: true
boon_docking: false
harvest_host: false
draft: false
tags:
- RVLife
- Camping
---
# [[<% tp.file.title %>]]

## Activities:

## Photo:

## Phoebe's thoughts:
