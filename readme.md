Travis says: 
[![Build Status](https://travis-ci.com/mastilnicata/mastilnicata.github.io.svg?branch=work)](https://travis-ci.com/github/mastilnicata/mastilnicata.github.io)


## TODO
* Layout fixes
  * Person page: adjust background in mobile mode
  * Service page: text over picture is hard to read
* Fix texts in chart tooltips
* 404 page
* Loading progress
* Add SEO + Facebook debugger to pages
* stilnitsa.com -> stilnica.com
* Content administration
* Menu bug - not always reproducing


To run locally:

Run in one terminal
```
npx netlify-cms-proxy-server
```

admin/config.yml should contain
```
backend:
  name: git-gateway

local_backend: true
```

npx netlify-cms-proxy-server & bundle exec jekyll serve --incremental



echo "------ IP ADDRESS -----" && ip -4 -o addr show wlo1 | awk '{print $4}' && echo "------ IP ADDRESS -----" && echo && echo &&  bundle exec jekyll serve --host=0.0.0.0