(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8560],{24540:function(e){function n(e){return function(...e){return e.map((e=>function(e){return e?"string"===typeof e?e:e.source:null}(e))).join("")}("(?=",e,")")}function a(e,n={}){return n.variants=e,n}e.exports=function(e){const t="[A-Za-z0-9_$]+",s=a([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),i={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},r=a([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),l=a([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),s,l,i,r,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:t+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[s,l,i,r,"self"]},{className:"symbol",begin:"^[ \t]*"+n(t+":"),excludeBegin:!0,end:t+":",relevance:0}],illegal:/#|<\//}}}}]);