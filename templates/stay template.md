---
title: [[<% tp.system.prompt("Stay Number", "") %>]]"
date: [[<% tp.date.now("YYYY-MM-DD") %>]]
campground_name: "[[<% tp.system.prompt("Campground Name", "") %>]]"
location: "[[<% tp.system.prompt("Location (town)", "") %>]]"
nights: "[[<% tp.system.prompt("Nights", "") %>]]"
test: "[[<% tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>]]"
rating: <% await tp.system.suggester(["Great", "Okay", "Poor"], ["Great", "Okay", "Poor"]) %>
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
[[<% tp.frontmatter["location"] %>]]
```


