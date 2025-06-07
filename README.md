# personal portofolio

even though i said i wouldnt do a documentation for this, a voice came across telling me to just do it in minimal time, given i do have a configuration(-ish) for building. also config is already done so the tutorial for this is just a copy-paste repeat for this project's copy.

# how to build

package-lock already has `gh-pages` (ran ```npm install gh-pages --save-dev```) so just do:
``` 
npm install 
``` 
(like you had any choiceಥ_ಥ)
\
\
\
you could run with
```
npm run dev
```
or you could build with
```
npm run build
```
\
\
\
but if you want to deploy, you've got to build it for gh-pages. its really simple let me tell you. first it would be
```
npm run predeploy
```

and guess what, you also have to do this
```
npm run deploy
```
\
\
\
thats all

