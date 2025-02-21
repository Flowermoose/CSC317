# CSC 317 Assignment 2 Submission

**Name:** Sophia Zoller
**Student ID:** 924437030  
**GitHub Username:** flowermoose  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
Personal website protfolio. Includes about me, skills, projects, and showcases forms and an iframe embed.



## Approach / What I Did:
I worked on the website after lectures, so I started on the basic layout and added more from there. I used sections to seperate the sections and articles for the different projects. I used an ordered list of unordered lists for skills to make it more organized, it doesnt look great but I wasnt sure where else to use an ordered list for the assignment.



## Code Explanation:
I copied the form from the assignment example and changed the buttons to radio and the name to password just to see how forms work.

```html
    <section>
       <h3 id="Subscribe">Subscribe</h3>
           <form action="/submit" method="post">

               <label for="email">Email:</label>
               <input type="email" id="email" name="email">

               <label for="password">Password:</label>
               <input type="password" id="password" name="password">


               <input type="radio" id="newsletter" name="newsletter" value="">
               <label for="newsletter">Subscribe to newsletter</label>
               <input type="radio" id="UpdatesOnly" name="newsletter">
               <label for="UpdatesOnly">Updates Only</label>
               <input type="radio" id="optOut" name="newsletter">
               <label for="optOut">Opt out</label>

               <button type="submit">Create Account</button>
           </form>
    </section>