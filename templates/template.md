
```
---
title: "How to publish Obsidian notes with Quartz on GitHub Pages"
date: [[<% tp.date.now("YYYY-MM-DD") %>]]
campground_name: "[[<% tp.system.prompt("Campground Name", "") %>]]"
location: "[[<% tp.system.prompt("Location (town)", "") %>]]"
nights: "[[<% tp.system.prompt("Nights", "") %>]]"
test: "[[<% tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>]]"
water: true
electricity: true
sewer: true
boon_docking: false
draft: false
site_number:
tags:
  - 
---
```