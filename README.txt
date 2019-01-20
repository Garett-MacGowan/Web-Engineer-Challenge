Hey there!

I hope you are enjoying my implementation of the Shopify Web Engineer challenge so far.

===== General Info =====

Just in-case you look at my index.js and wonder why there are pages/timely and pages/index files under the app.get() function calls, I have intentionally left them out. My implementation is hosted on my personal website and I have therefore left them out of this repository. The remainder of my website is on a private repository.

You can navigate to my in-progress personal website through http://35.182.165.35. Here, you can find one of my personal projects (Timely) via the ‘Projects’ link in the header.

===== Searching logic =====

In the design, a result would be shown with the query "takeout" that would not be re-produceable without
further processing. I have therefore removed all white-spaces when comparing query strings to keywords.
This resulted in one extra result when compared to the design, however, my implementation now produces all results shown in the design.

===== Project Stack =====

Javascript
Jquery
Bootstrap
Node.js
 -  "ejs": "^2.6.1", (templating engine)
 -  "express": "^4.16.4", (server)
 -  "express-validator": "^5.3.1",
 -  "request": "^2.88.0", (network calls)
 -  "unescape": "^1.0.1" (unescaping html retrieved from JSON)
AWS Lightsail
 - Bitnami Node.js instance