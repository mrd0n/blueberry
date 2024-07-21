---
date: <% tp.date.now("YYYY-MM-DD") %>
created: `=dateformat(this.file.ctime, "DDDD, HH:mm")`
updated: `=dateformat(this.file.mtime, "DDDD, HH:mm")`
parent: "[[index]]"
campground_name: [[<% await tp.system.prompt("Campground Name", "") %>]]
nights: [[<% await tp.system.prompt("Nights stayed", "") %>]]
rating: [[<% await tp.system.suggester(["Great", "Okay", "Poor"], ["Great", "Okay", "Poor"]) %>]]
tags: [[<% await tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>]]
water: true
electricity: true
sewer: true
boon_docking: false
draft: false
site_number: site number
---

# [[<% tp.file.title %>]]

## Activities around <% tp.frontmatter["campground_name"] %>:

## Photo:


## Phoebe's thoughts


###### Info
Created: `=dateformat(this.file.ctime, "DDDD, HH:mm")` 
Updates: `=dateformat(this.file.mtime, "DDDD, HH:mm")`
Location: `=this.file.path`