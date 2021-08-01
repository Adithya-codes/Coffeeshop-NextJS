
What React does?

 In react when a req for a page is sent we just get back a HTML skeleton as response , the js is loaded in the browser by react which increases the load time and also in poor SEO


what is nextJS

The requested page is already pre rendered in the sever during the build time (not run time) and we get the req page as a fully finished
page itsel which enhaces inital load and SEO 

Features

1. file structrue based routing similar to HTML , the hard part of react-router code based routing is eliminated.

2. FUll stack capabilites - Nextjs helps you build backend with node where u can store and retive data

3. dynamic routing - dynamic routing helps in creating different content with same UI using [slug].js




Dyanmic fn 


1. getStaticProps
2. getStaticPaths
3. getServerSideProps



api routing/storing data in DB through API

1. an api folder is created , each file in api runs on BE not on FE .  ex. getHomePgeData is a file and a fn is written which

takes res and req 
connects to the db ( ex mongoDB)
feeds data into the db

Now, 