import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
           	Take Home Test				
1) From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each. 

Top 5 (no particular order):

Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel: Building relationships and directly impacting high-value customers is something I believe is quite important as it can directly impact the success of the company. It also allows me to see the results of my efforts firsthand.
Work with the product team to develop a new feature based on feedback from customers: Being the bridge between customers and the product team. Having my insights influence the product roadmap can be highly rewarding.
Work with 3rd party partners to track down a tricky situation for a joint customer: This requires collaboration, communication, and problem-solving skills, all of which I believe are valuable skills for a CSE. Finding a solution for a complex issue can always be very satisfying for me.
Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub: This can directly fix issues that impact not only customers but the company as a whole. It allows me to showcase my technical knowledge and contributes to the overall stability of a product.
Analyze hundreds of support tickets to spot trends the product team can use: Analyzing user behavior can allow the team  to identify areas for improvement and provides valuable insights for the product team. This can have a significant impact on the platform's usability as we may be able to simplify tasks that we see customers use often.

Bottom 5 (no particular order):

Respond to 50+ support requests via email every day: While important, this can get repetitive, especially if a large volume are basic inquiries which can take time away from more complex tasks.
Run ticket review sessions to make sure tone is consistent: Even though this is under my least favorite task, I still believe ticket review sessions are very important, as these sessions allow the team to align on how tickets/issues are dealt with and how they can be dealt with moving forward. In general I believe these sessions can be very insightful and allow the team to learn from each other.
Scheduling time-off coverage and collaborating as part of a growing cohesive support team: Tasks can be a bit more administrative and repetitive.
Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites: Can be valuable, but I don't have too much experience responding to queries on these platforms,but it might involve unpredictable situations and potentially negative interactions compared to working directly with known verified customers.
Help resolve billing issues for customers: Typically resolved through established billing processes, offering less opportunity for creative problem-solving specific to customer success or customer configuration issues.

				
						
2) What do you want to learn or do more of at work? 	

Technical Expertise: While from my previous experiences I have a strong foundation, expanding my knowledge and working with new technologies is something I always want to do more of at work.
For example in the context of Vercel's platform, particularly learning the intricacies of Next.js, which would allow me to tackle more complex customer issues and potentially identify bugs. 
Usually the methods I would use for improving my technical expertise would be attending workshops, taking courses, setting up test environments or diving deeper into documentation. Also, an important one is also leveraging all the talented individuals i work with who might have more knowledge on a subject.

		 	 	 							
 3) Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful? 

Working at Fastly as a support engineer, I encountered a case where one of our larger enterprise customers (in e-commerce) was experiencing unexpected performance degradation on their website. This resulted in slow page load times and a significant impact on their conversion rates.
To identify the issue I began by analyzing the customer's Fastly error logs and metrics. This revealed spikes in traffic during peak hours, exceeding their configured cache capacity. Additionally, there were errors related to slow database queries on the customer's origin server.
I then collaborated with the customer to understand their infrastructure. This confirmed the presence of unoptimized database queries causing bottlenecks.
To address the immediate performance issue, I recommended that they increase the Fastly cache size to accommodate peak traffic. Additionally, we implemented Fastly's dynamic content caching feature to cache database query results, reducing the load on the origin server during requests for the same data.
While the cache improvements provided a short term relief, I also advised the customer to optimize their database queries to address the root cause of the bottleneck. This involved them collaborating with their development team to identify and address the queries.
Following the implementation of cache tuning, I closely monitored the customers Fastly logs and metrics.  Traffic spikes were handled effectively with the increased cache capacity, and the error logs related to slow database queries significantly decreased.
In the end, the customer confirmed a noticeable improvement in website performance and a reduction in page load times. This led to a positive impact on their conversion rates.  They were happy with the immediate improvement and appreciated the recommendations for optimizing their configuration for the long term.
 I was able to help the customer achieve a significant improvement in their website performance and overall user experience.
		 	 	 								
4) When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel? 

Edge Functions: You need high performance and low latency. Edge Functions run on Vercel's global edge network, which processes requests closer to users for faster response times.
Serverless Functions: You need to perform complex logic or data access. Serverless Functions have access to all Node.js APIs and can interact with databases or external services.
Edge Middleware: You want to modify requests or responses before they reach your serverless functions or static content. This can be useful for tasks like authentication, authorization, request rewriting, or adding headers.
https://vercel.com/docs/functions

		 	 	 		
5) Imagine a customer writes in requesting help with a build issue on a framework or						
technology that you've not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better? 

Initial response:
Thank the customer for reaching out and acknowledge their frustration with the build issue.
Briefly explain that you might need some additional information to diagnose the problem effectively.

To gain some insight i would ask the customer some questions:
"Can you tell me the specific framework or technology you're using for this project?"
"What is the exact error message you're encountering during the build process?" (ask for  a screenshot if possible)
"Have you configured your project specifically for this framework? If so, can you share any relevant configuration details?"
"Can you briefly describe your project structure and how you've integrated it with our platform?"

While assisting the customer, I would simultaneously research the framework/technology to try and get some familiarity:
Search the internal documentation for any relevant build guides or troubleshooting tips for that specific framework.
Look for online resources, forums, or the framework's official documentation for troubleshooting steps.
If resources are limited I would update the customer by briefly explaining that i’m unfamiliar with the specific framework but are actively researching solutions. I would offer an estimated timeframe for when I might have a clearer path forward.

Based on my research and the information gathered from the customer, I would suggest some potential solutions I have found online.
I would be transparent about the level of confidence I have in these solutions, as they might not be directly applicable to the platform I support.
If the issue persists after exploring these initial steps, I would consider escalating the issue internally to someone with more experience with a wider range of frameworks, but even when escalated I would usually follow the ticket to the end as this can be used as a learning experience.
Overall, I believe keeping the customer informed throughout the process and managing expectations helps maintain a positive support experience.

6) The customer from question 5 replies to your response with the below: “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”

				Hi Customer,
Thanks for reaching out.
I understand your frustration completely. Spending hours on a build issue can be incredibly demotivating. While I can't directly modify the platform itself, I can assure you we'll work together to find the right solution for you.
A lot of the time, build issues with unfamiliar frameworks can have specific causes related to project configuration or intricate frameworks. The information you can provide will help us narrow down the problem and find a resolution much quicker.
Would you be willing to answer a few questions about your project setup and the specific error message you're encountering? Even if the solution isn't readily available in our documentation, the details you provide can be crucial in finding the root of the issue.
In the meantime, I can also continue researching the framework you're using and see if I can find any relevant resources or troubleshooting guides that might be helpful.
In the meantime, let me know if you have any further questions.

7) A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.

Hi Customer,
Thanks for reaching out.
If you are doing just a simple redirect, the easiest way to achieve this would be using the Vercel Dashboard:
You can achieve this by doing the following:
Log in to your Vercel dashboard and navigate to your project settings.
Look for a section titled “Domain Management” or “Redirects” Click on “Add Redirect” or a similar option.
In the source field, enter /blog.
In the destination field, paste your website URL (https://example.com).
Ensure the “Permanent Redirect” option is selected.
Save your changes.
You can also read more on this here: https://vercel.com/docs/projects/domains/deploying-and-redirecting#redirecting-domains
Let me know if there's anything else I can support with or if you have any follow up questions.

Notes: I did find out this can also be achieved Using Vercel.json:
But this method seems to be more ideal if you’re comfortable with editing a configuration file, as Vercel.json allows you to define redirects directly within your project. I chose to show the customer the dashboard way as it's a simpler way of doing redirects from what I read.
https://vercel.com/docs/edge-network/redirects

8) A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about						
your decision making process after the reply. 

Hi Customer,
Thanks for reaching out!
Yes, you can use a robots.txt file to prevent search engines from indexing your Vercel project. A robots.txt file tells search engine crawlers which pages or files the crawler can or can't request from your site. The robots.txt file is a web standard file that most good bots consume before requesting anything from a specific domain.
 Here's how to implement it:
Create a text file named robots.txt in your project's root directory  
Add the following line to the file:
 
```
User-agent: *
Disallow: /
```
Just to provide some context around the above line:
User-agent: *: This instructs the rule to apply to all search engine crawlers.
Disallow: /: This disallows crawling of all paths within your website (the / represents the entire domain).
https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/robots-txt

Notes: 
I chose this method as I assumed the customer wants to prevent indexing of the entire site. And this method is a single configuration point that applies to all pages. So seems the simpler of the 2 methods i read about.
The other being the x-robots tag header https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines#x-robots-tag-header

9) What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term					
and long-term? 

Problems:
Build Issues: Customers might encounter errors during the build process due to various reasons like framework-specific problems, configuration mistakes, or incorrect environment variables.
Caching Issues: Customers might experience unexpected behavior related to caching, such as outdated content being served etc.
Custom Domain Setup: Setting up custom domains and SSL certificates can be confusing for some users, leading to errors or some unexpected behaviors.
Integration Issues: Integrating Vercel with third-party services or frameworks can sometimes configuration challenges.

Short-Term Solutions:
Clear Documentation and Resources: can maintain comprehensive and up-to-date documentation that addresses common build, deployment, caching, and integration issues. Providing code examples and troubleshooting guides can empower users to solve problems independently but also can save the customer time when searching for solutions
Knowledge Base and Community Forums: A well-maintained knowledge base with searchable articles on frequently encountered issues can be a great resource for customers. 
Efficient Support Ticketing System: A user-friendly ticketing system allows customers to submit detailed reports of their issues. Which helps us to resolve the issue quicker and more accurately.

Long-Term Solutions:
Improved Build Pipeline Visibility:  can improve the visibility into the build process, offering detailed logs and error messages that pinpoint the exact cause of build failures. This allows for faster troubleshooting and debugging.
Pre-built Integrations and Templates:  can offer pre-built integration templates or one-click integrations with the most popular third-party services. This simplifies the setup process and reduces the likelihood of configuration errors.
		 	 	 		
					
10. How could we improve or alter this familiarisation exercise? 

I think it was a good familiarization exercise as it allowed me to actually see the platform and get more familiar with it by answering the questions as some required some research. I think maybe being more clear as to how you would like the project set up would be good, as I was confused as to wether you wanted me to just create an account on Vercel and put my answers in that project or if you actually want me to set up the vercel project from start to finish including running dev servers etc.
Only downside is the time it takes to do, as 3 hours can be quite a long time to take out of my day, but aside from that I actually enjoyed learning about Vercel through the exercise..
          </p>
        </a>
      </div>
    </main>
  );
}
