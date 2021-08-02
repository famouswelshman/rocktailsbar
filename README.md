# ROCKTAILS BAR - Ibiza live music venue

Milestone 2 Project - Rocktails Bar in Ibiza


## Github Link: https://github.com/famouswelshman/rocktailsbar.git

# PURPOSE OF THE PROJECT

I was interested in creating a made up live music venue based in Ibiza. This was almost me paying homage to a wonderful and colourful place where I spent a lot of time during my youth not only on holidays but in a working capacity. So, I do have a strong affiliation with the live music and bar scene and wanted to create something that captured the fun and happy-go-lucky feel of a music and bar venue that would predominantly cater for the seasonal tourists on their holidays.

The website had to be bold and vibrant with some mellow colours giving it a glow that is very familiar to the music scene and complimented the stylish theme of it being a cocktail bar which also served classy food and wasnt just your run of the mill touristy, UK audience driven venue for holiday punters and their families!!!

I wanted to create a website that could would almost spoon feed its users what exactly the venue offers and where to see it.

*Please note* - This bar and its contents are purely fictitious and not actively trading or operating as a business. The name and it's contents are purely for the purpose of showcasing a website idea. The currency and the costs of anything in this website are merely for display purpose and are not factually accurate. The name 'Rocktails' is also a made up name and is not licenced or owned by anyone causing any copyright issues. This website was constructed purely as a project for my 2nd Milestone and does not operate as anything else.


# USER STORIES

![User story 1](https://github.com/famouswelshman/rocktailsbar/blob/main/wireframes/index%20page.png "User story 1")



# WEBSITE UX

Idea for a 3 page website that gave user quick navigation of it's content and focused on showcasing it's main functions - Food & drinks and live music.

Index Page – Bar picture for hero pic with scroll down to menu, live music and cocktails.
The index page includes map API at the bottom to show location of the venue.

Live Music Page – Music background picture with a paragraph on what goes on at the venue regarding music and events.

Tapas & burgers Page – Menu style breakdown of the Tapas and Burgers foods available at the venue. PDF pop out of the menu if possible.

Contact via contact link in the navbar would scroll to the bottom of the page to show the contact details and social media links.



# WEBSITE FEATURES 
1. Responsive Navbar (Bootstrap)
2. Google Maps API 
3. Opening Times button written via Javascript 'onClick'.
4. Popup Food menu.
5. Social Media Links



# WEBSITE STANDARD/ EXISITING FEATURES

#### - __Navigation Bar__
The website features a basic interactive navbar to navigate the site with ease. This navbar which is a product of the Bootstrap code will be present on all pages and will adapt to each resolution by compressing the navbar options content to a dropdown icon when shown on smaller devices. I kept the navbar style as 'light' so it would not clutter the page.

### - __Footer and Social Media Links__
The footer for the website is consistent across all pages and gives the user acces to click on a social media links that open externally.

# FUTURE FEATURES
The future aim of the site is to attract new customers to a trendy, live music venue whilst they are on holiday and near the venue. Similar to brands such as Pacha and SPACE, the aim of the website was to also sell merchandise and offer access to events. Build upon the brand of 'Cocktails' and market it as 'the top live music venue in Ibiza'!

# TYPOGRAPHY AND COLOUR SCHEME
Since the theme of this website is that of a trendy, live music and drinks venue, I opted for some styles that would reflect and enhance the kind of things offered at the bar venue. Cocktails and tapas traditionally have some association with italic style writing which I used primarily for the links to other pages offering drinks, live music and food pages.
The use of the 'Black Ops One' font for the main title (Rocktails) was inspired by the idea of rock music and it's bold and brash to give the page some edge.

# Google Font 1 (Black Ops One)
Black Ops One for the big titles. The pattern of the cracked letters was attributed to the genre of music being rock hosted at the venue and a little nod to the mish mash of paving out in the garden area.

# Google Font 2 ()
Festive - Gives a theme to the font that connects people to the theme of the bar which is cocktails.


# Google Font 3 ()
Amatic SC - I picked this as a nice subtle font for the use in displaying the location details (bottom left) of the webpage. This font is free flowing and quite subtle and pleasing which is perfect for illustrating the location of the venue and showing opening times etc.


# WIREFRAMES (Balsamic)
I created a mock-up of the website using three visual layouts to cover the responsive nature of the website. 
Balsamic was a real help in enabling me to visualize my web content across each display platform. I did start with the desktop layout rather than start with a handheld layout and this was down to my personal choice! It seems easier to me to create the whole layout and then consolidate this to smaller resolution peripherals so that I could see the whole website idea in front of me first.

I researched websites online so that I could narrow down my use of colours for the design and since my focus was to create an ambient, chilled and artistic vibe I opeted for the subtle use of tungsten which is similar to the lighting at the venue. My vision for this website although fictitious was to give the user an idea and feel for a place just from viewing the website. Returning users would have some affiliation to this colour scheme since the venue would reflect the same colour scheme.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1. Index Page
![Index Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Index-Page.png "Index page Wireframe")
## 2. About Page
![About Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/About-Page.png "About page Wireframe")
## 3. Media Page
![Media Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Media-Page.png "Media page Wireframe")
## 4. Contact Page
![Contact Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Contact-Page.png "Contact page Wireframe")

# VALIDATION OF CODE
1. Code Validation (W3C Markup Validation Service)


2. css validation (W3C CSS validator)


3. Javascript validation (Jshint)


4. Supported screens 


# DEPLOYMENT
1. Via Github using Vs Code (Desktop files linked to GitHub and commits actioned locally)

2. Google Map API - The placement of an API in the web content required a key by registering with Google API's. This key is specific to myself as a registered customer allowing me to host the API on the website.
Each application would require a dedicated key in order for the API to work correctly within the website.

2. Via Github pages

# TESTING

1. Bugs
When the website was loaded in GitHub I realised that the Javascript written was not functioning within the website. The reason for this was that the path file for the external JS file was entered into the index page as absolute and not relative causing the Javascript not to load. This was a clear error on my part and was quickly realised. It seemed that the link to the CSS file was correct (relative) and therefore worked correctly.


2. Responsive Challenges
Making this website responsive was a challenge. I ran the website using VS Code live server to reflect any changes and my biggest challenge was making the whole thing responsive for multiple screens. The google map API was coded inside of a section div and the purpose of this was to collapse the div when it reached a smaller resolution allowing the opening times section to be stacked above the Google Map display. I adjusted the size for both divs since they sat side by side but without success. 

3. Javascript Code execution


4. Loading speeds
I had to ensure that the website would load fairly quickly which was a challenge given the inclusion of Javascript which was added according to the DOM to run following the HTML. Since the Google Map API is hosted via a API server supplier the function loaded reasonably quick upon opening the index page. 

My greatest challenge was to ensure that the images and background images would be reasonably quick at loading. Through testing with various picture formats it seemed that the lower the resolution the file, the quicker it would load therefore not to compromise on quality I saved the final images to the JPEG format which was around 80% less in file size compared to PNG which is what I had originally used.

5. 




# MEDIA CREDITS
1. Unsplash.com - Royalty free use of photography from various contributors.
For the photography examples used in this project I would like to thank and credit the following people:
Photo by Mae Mu on Unsplash
Photo by Irina Sergeeva on Unsplash
Photo by Dan Gold on Unsplash
Photo by Steve Harvey on Unsplash
Photo by Danny Howe on Unsplash
Photo by israel palacio on Unsplash
Photo by Q.U.I on Unsplash
Photo by Louis Hansel on Unsplash
Photo by Dan Gold on Unsplash
Photo by Davey Gravy on Unsplash
Photo by Davey Gravy on Unsplash
Photo by Sophia Sideri on Unsplash
Photo by Aleisha Kalina on Unsplash
Photo by Aleisha Kalina on Unsplash
Photo by Nick Moore on Unsplash
Photo by Munro Studio on Unsplash
Photo by Ewa Fournier le Ray on Unsplash
Photo by Eaters Collective on Unsplash
Photo by Miha Rekar on Unsplash
Photo by Lidye on Unsplash
Photo by Edgar Castrejon on Unsplash
Photo by Carissa Gan on Unsplash
  
The Tapas Menu template is credited to - https://www.angelosristorante.co.uk for use of it's layout.
The Cocktails Menu template is credited to - https://theitalianglossop.co.uk for use of it's layout.

*Please note that the menu for both the cocktails and the Tapas are for illustration purposed only and are not entirely correct according to currency or pricing. They are only for the puropose of the website which is fictitious and not a registered, actively operating business*.

# TESTING CREDITS 



# CODE CREDITS
1. Bootstrap 5 (https://getbootstrap.com/)
Navbar and dropdown toggle button for smaller devices was obtained via Bootstrap 5 website. Bootstrap have a variety of ready made navbar codes which are very user friendly and responsive. I opted for the light toggle navbar which shows links on the top right of page and when consolidated to a smaller resolution or handset will display a toggle button. Very useful and practical, this suited my needs. I also used some Bootstrap column making codes to use within div's on the web pages allowing for responsive result.


2. W3Schools (www.w3schools.com)
This website offered me ideas for using Javascript within my website and therefore I created my own JS script for the functionality of the 'Opening Times' button situated on the index page which upon 'onClick' will reveal the neccessary information. A simple, quick function but effective as a form of interactivity. I wanted to credit this website for it's ideas and learning content.

3. Dev.to (https://dev.to) - This website is where I obtained some simple JavaScript code to enable a Dark Mode functional button within the content of my website. The code was a simple snippet of Javascript which argumented the change in background color via CSS when interacting via a button.


# FONT CREDITS
1. Font Awesome - (www.fontawesome.com)
N/a


2. Google Fonts - (https://fonts.google.com/)
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Pacifico&display=swap');


