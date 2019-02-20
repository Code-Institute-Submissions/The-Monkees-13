# MattTitmuss-UserCentricFrontendMilestoneProject

This will be a Band page for "The Monkees" with the aims of creating 4-5 pages for a target audience made up mainly by fans of the band. The main goals are to provide a platform to the user to see and hear content from the band as well as any new material, as it becomes available. As well as publicise their availibilty to perform at functions such as weddings and parties. Whilst also showcasing any images and creating a social media precense.

I aim to start with a landing page directing users to either information about the band or immediately to the musical content. From here there will be several other pages including images,video or contact. Hopefully designed to appeal its target audience of 60's rock fans.

## UX
 
#### strategy
- 4-5 pages for a 60's rock band.
- target audience = Fans and potential fans.
- goals: 
..* Provide a platform for fans to see and hear content from the band.
..* Publiscise their availibilty to perform at events.
..* show a social media presense

focus = create a platform for band content and publicity.
definition = A home site for a rock band.
value = music to the user and publicity to the band.

#### User stories
As a fan, I want to listen to music, to enjoy a band I like. 
As a fan, I want to follow my band, so I can keep up to date on what they're doing.
As a fan, I want to be notified on updates, so that I can keep up on any news.
..* As a fan, I want to opt in/out of this functionality, so I'm not annoyed.
As a fan, I want to know how far into a playback I am, to jummp to the good bit.
As a fan, I want to buy merch, so I can show my support to the band.
As a fan, I want to connect with other users, to discuss songs and shows etc.

#### scope
##### planned features priority 1-3
- Landing page, priority = 1
- About page, priority = 2
- Music page, priority = 1 (possibly merged with video for  media page)
- Video page, priority = 1
- Image page, priority = 1
- Contact page, priority = 1
- performance availibilty, priority = 2
- social links, priority = 1
- embedded audio/video, priority =1
- new content flag, priority = 2
###### future features?
- calender for future events, releases and bookings, priority = 3
- Band related articles, priority = 3
- Create registered accounts to subscribe to email updates, comment sections and save purchase info, priority = 3
- merch store, priority = 3
- disscussion page/ comments section, priority = 3

#### wireframe
(initial)I have kept the wirframes greyscale as I don't want any planned colour schemes to clash with any album art/provided imagery. 

wireframes made usining balsamiq and saved in .bmpr format

wireframes changed to pdf for ease.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
- navbar:
..* This navbar is similar to the one bootstrap demo's but with some diferences in breakpoints for burger button. 
- image carousel
..* The image carousel uses bootstrap css transitions to create a fluid gallery that doesn't take up too much real estate.
- Video
..* In the gallery the video is display using html5 video tag.
- music
..* The music is played using an audio tag with div tags for buttons. These are targeted with Javascript, (fixed bug where music plays over ech other with help from stackoverflow)
- alert
..* Bootstrap alert to direct people to the contact page. To promote avalibilty.
- contact form
..* Uses required tags to prevent empty fieldsets (frontend form only/ doesn't actually do anything)

### Features Left to Implement
- Calender
- Band related articles
- Create registered accounts
- merch store
- disscussion page/ comments section

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [node_modules/dependancy managent](https://yarnpkg.com/)
    - developing the project locally I was using yarn for depency management and referencing bootstrap files etc. using <link href="node_modues/bootstrap/dist/css/bootstrap.mi.css" rel="stylesheet"> and other files and scripts. However when deploying on gh pages it would throw errors and so CDN's have been used.

- [bootstrap 4.3.1](https://getbootstrap.com/)
    - bootstrap is uses heavily for grid layout and several features.

- [js] (https://www.javascript.com/)
    - Used to create buttons for the audio tag as the default player was salty.

- [html5/css3]
    -naturally

## Testing

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears

2. Navbar:
    1. Open pages
    2. hover over links to see hover classes
    3. collapse browser to see breakpoint for burger-button, test burger button
    4. test all links in both states

3. Music:
    1. Hover over buttons to check class changes
    2. play each song: 
    ..*test pause
    ..*test vol up
    ..*test vol down
    3.try and play other music at the same time
    4. repeat with other files

4. Images:
    1. check all images display on carousel
    2. check directional buttons function correctly

5. Video:
    1. check video functinality

6. General:
    1. check all break points function and displays on different devices on dev tools
    2. rerun previous tests on sizes mobile/tablet.
    3. rerun tests from deployed gh page.


mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

-Initially discovered that i could play all music at once. had to find a solution as my js knowledge is limited. 
https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript/19792168

- More advanced carousels would disply incorrectly or sometimes not at all. Decided to simplify.

-yarn files were not working with github pages and so I dumbed down to CDN's for deployment

## Deployment

I decided to use github pages to deploy this project as suggested and taught via the course. The only issue I had when deploying was my node_modules not displaying as described earlier in the technolgies section.

This being a front-end only project I had little trouble in deployment. The only issue was opening the site on my android it displayed differently than the dev tools sim.
I fixed via a hidden class on small screens to tidy it up.




## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

- The text for aboout.html was copied from the [Wikipedia article The Monkees](https://en.wikipedia.org/wiki/The_Monkees)

- Some formatting code for the footer sections was inspired by [How to keep your footer where it belongs](https://medium.freecodecamp.org/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c)

- The song facts were copied from [song facts.com] (https://www.songfacts.com/facts/the-monkees/songname)

### Media
The photos used in this site were obtained from:
     https://github.com/Code-Institute-Org/project-assets (Provided assets)
The fonts used were from google fonts: 
    https://fonts.google.com/?selection.family=Coiny

### Acknowledgements

I received inspiration for this project from:
- silversunpickups.com
- www.entershikari.com

### Notes

- all footer links are hypothetical and for design only, index page footer links to wikipedia entry as proof of concept.