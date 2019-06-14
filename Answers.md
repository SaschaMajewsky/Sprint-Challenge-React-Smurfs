Q:
Explain the differences between `client-side routing` and `server-side routing`.

A:
Server-side Routing(SSR):
-At every navigation of the website the server compiles the whole HTML for the site
and distributes it to the browser of the client to render.
-This happens at every new page load, so the server is constantly under load
and the client needs to download new webpages often.
-If the user navigates between 2 specific pages often it has to load it everytime fresh.
-On the on hand the user only loads the data for the specific page he wants to see on the 
other hand redundant data like a static header is loaded many times.
-Is good for SEO but not really good for users with a worse internet connection.

Client-side Routing(CSR):
-A JavaScript  Client App manages the routing for the data of the website in memory.
-The browser has the whole website with each route in his memory and can load different
route/views quickly without reloading the page/needing data from a server.
-The downside is that at the first pageload the whole website with all routes needs to be loaded
which can be slow and also some routes might be loaded that the user has no interest in ever seeeing.
-SEO is not optimized for CSR so you will rank worse on google in comparism to SSR.

Q:
What does HTTP stand for?

A:
-Hypertext Transfer Protocol
-Is a network protocol to handle trasmission of data usually in the WWW
-Has no states

Q:
What does CRUD stand for?

A:
Create(POST)
Read(GET)
Update(PUT)
Delete(DELETE)

Q:
Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

A:
-Create => POST, used to send data to a server.
-READ => GET, used to retrieve data of a server.
-UPDATE => PUT, used to replace data.
-DELETE => DELETE, used to delete data by a URL.

Q:
Mention three tools we can use to make AJAX requests

A:
Ajax is a technique to exchange date with a server to reload only parts of a website seemingless.

Axios:
-Is a third party library to make requests in JavaScript really easy to manage
-Uses methods like .get() to grab requests, .then() to evaluate responses, .catch() to handle errors

Fetch:
-Is integrated into JavaScript so no third party library like axios has to be involved anymore.

XMLHttpRequest:
-Is a bit older and the usage is not as elegant as with newer ways like fetch.