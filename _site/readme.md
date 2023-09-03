Travis says: 
[![Build Status](https://travis-ci.com/mastilnicata/mastilnicata.github.io.svg?branch=work)](https://travis-ci.com/github/mastilnicata/mastilnicata.github.io)





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