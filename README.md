# rocktailsbar
Milestone 2 Project - Rocktails Bar in Ibiza


## Github Link: https://famouswelshman.github.io/thenewbypassers

# Purpose of the project


# User stories

![User story 1](https://famouswelshman.github.io/thenewbypassers/Wireframes/User-1.png "User story 1")


![User story 2](https://famouswelshman.github.io/thenewbypassers/Wireframes/User-3.png "User story 2")


![User story 3](https://famouswelshman.github.io/thenewbypassers/Wireframes/User-2.png "User story 3")


![User story 4](https://famouswelshman.github.io/thenewbypassers/Wireframes/User-4.png "User story 4")

# UX
The simplicity of the website means that from a user perspective, the site delivers exactly what it says. It's a website which provides additional iniformation about a covers rock band and the images reinforce the pages since this is indicative of what the purpose of the website is. It's a rock and roll band, the inclusion of a contact form means any new user looking to make a booking enquiry can immediately do this and bypass the additional we pages if they so needed to. This fulfills their user journey very quickly and with ease of use without too many clicks.

Anyone wanting to see or hear more from the band have the opportunity to visit the media page, again this is a matter of a click away giving the user a simple, quick experience and the media content is laid out in a structured way so the focus of use is firstly upon the embedded videos and then the picture gallery. My thought process for this was that the bulk of pictures can be found on social media sites externally where it is harder to push videos so hosting the videos first on this page would encourage them to view in the first instance.

Overall I believe that the process of navigating this website makes for a user friendly experience. The navbar is simple and clear across all pages and the layout of color and fonts are consistent. With the subtle use of imagery and some icons, this keeps a clean layout and allows the user eyes to focus on the main content rather than be disstracted with a mass of content all on one page.

I think the end result of visiting the website is that the user has gained some additional information about the band, they have viewed videos and pictures of the band that reinforce their profesionalism and they have had the opportunity to send an enquiry and be able to link to the bands social media site externally.

# Features

### - __Book the band Button__
The landing page features a prominent 'Book the band' button which gives the user the immediate facility to click on button to book if that is why the user has come directly to the website.
### - __About Page Cover Song List__
There is a breakdown of the type of music by artist which the band covers available on the About page which gives the viewer specific information about the type of music the band would cover giving the user further detail for suitbaility or personal taste.

### - __Contact Form__
This feature allows the user to send a basic enquiry via linked form which will be delivered to a designated mailbox. This facility is beneficial for users to send enquiries such as bookings or follow up enquiries to previous bookings.

### - __Picture Gallery & Videos__
The picture gallery and the embedded video links within the Media page showcase the bands look and sound which gives the viewer greater insight into the bands capability and look especially if the user is a first time visitor to the website.



# Exisiting Features

#### - __Navigation Bar__
The website features an interactive navbar to navigate the site with ease. This navbar which is a product of the Bootstrap code will be present on all pages and will adapt to each resolution by compressing the vav content to a dropdown icon when shown on smaller devices.

### - __Footer and Social Media Links__
The footer for the website is consistent across all pages and gives the user acces to click on a social media link external to the site and also clickable links within the wesbite.


# Future features
The future aim of the site is to encourage returning visitors of the page to purchase the band related merchandise such as T-shirts and Logo Stickers. Additional media material will be available for user to view such as videos and downloadable music tracks exclusive to the website.

# Typography and color scheme
I chose a very basic color scheme which is losely based on the kind of colours within the bands logo which is the color - #cc0033. I was able to specify this color by using photoshop to identify the pink color within the logo. The main theme throughout is very black and white with some greys. This conveys a sort of photographic feel to the site which is synonymous with the content being in relation to a rock band and performing and capturing that live feeling!

I used several fonts from google fonts, the most stand out of these being the 'Monoton' font type which has been used for h1 & h2 text/titles. It's bold and elegant, again using the same shade of pink as per the band logo. 

I believe this font type compliments the headings of sections where there is content, its a nice swirly font type which in turn compliments the other fonts included which are Montserrat and Satisfy which are used for more of the paragraph based text. I set the default font-family to sans serif in the event that the font types do not load.

# Wireframes
The aim was to style each page consistently and keep the layout simple and clean. The designs created were very similar to the end product and being able to create these wireframes with balsamic allowed me to quickly move text and images around in order to find a balanced layout for each page. In order to create some continuity with design, I needed to create a template which incorporated desktop, tablet and mobile phone as per the images below.

## 1. Index Page
![Index Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Index-Page.png "Index page Wireframe")
## 2. About Page
![About Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/About-Page.png "About page Wireframe")
## 3. Media Page
![Media Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Media-Page.png "Media page Wireframe")
## 4. Contact Page
![Contact Page Design](https://famouswelshman.github.io/thenewbypassers/Wireframes/Contact-Page.png "Contact page Wireframe")

# Testing
1. Code Validation (W3C Markup Validation Service)
Although there were errors including size references in image tags not being accepted and some div tags remaining open, these were remedied and each html page shows no error with the W3 Validator.

2. css validation (W3C CSS validator)
The master css file was validated through the W3C CSS Validator with no errors showing. (Image below)
![css validation page](https://famouswelshman.github.io/thenewbypassers/validation/css-jigsaw-result.png "css validation result")

2. Bugs when running the website on Github link - https://famouswelshman.github.io/thenewbypassers/

Button for ‘Book the Band’ was overlapping text on smaller screen devices which meant that I had to amend the position of the button and kept it relative so that it would move if the navbar dropdown was activated.

The contact form was linked to a external website which provided a PHP service so that the form would direct traffic to a designated email address, I used my perosnal email address for this. The development of the contact form text input fields needed to include the 'required' tag so that the form required completion of the fields before submition, something at first glance that I had overlooked.

When running the website on Github I had some issues with the social links font awesome icons being visible on smaller handsets. I tested this by viewing the website on mobile phones and tablets and it seems that there was an issue with the font awesome link which I managed to amend and update and the icons now appear across all media screens.

3. Supported screens 
The biggest task with this layout was ensuring that it was responsive and was viewable across all media platforms. My approach to the buidling of this site was focused on starting at desktop level and working down to the smaller screen sizes. In hindsight I would have started by focusing on the smaller screen resolutions as I believe this is where the most amount of attention is required to ensure that it works on smaller screens. Since the majority of websites are now viewed on mobile phones and/or tablets etc, in future my focus would be on the development and testing on smaller screens before completion of the larger screens such as desktop and laptops.

The contact form was a challenge on smaller screens and although the back end code for this process was borrowed from an external source, the text input fields were built by myself and I had to ensure that the form sat correctly on each screen size without causing horizontal scroll or problems with being able to type in text into the fields. 


# Deployment
1. Via Github / Vs Code
Firstly I setup an account with GitHub and created a new Repository for this project. Using the installed desktop version of VS Code, I created several skeleton html pages and a master css file along with the neccessary folders to host the content. Whilst writing my code, I would use the live browser function within VS Code which shows my content and displays any changes upon refresh.
On completion of the basic files, I proceeded to upload this content via the Upload function on Github. 

Following the installation of the github repo extension for my desktop VS Code, I cloned the main branch of the repository to my local computer file and proceeded to work on my code.

Any changes made over the course of building this project would be reflected in my commits which show up on the github history. These commits were done via my desktop which were done by saving any changes, pushing and creating the commits.

2. Via Github pages
With these commit changes taking place, any content on the Github repository would be updated and therefore ammendments would be evident when going to the repository link to where the website is being hosted - https://famouswelshman.github.io/thenewbypassers/


# Credits
1. Bootstrap 5 (https://getbootstrap.com/)

Bootstrap 5 code used for Navbar which is a set piece of responsive code that is one of many supplied by Bootstrap for the purpose of making your website more intuitive and responsive and consistent across all pages. This navbar code which is linked by adding the Bootstrap link into the Head tag displays a basic, clickable navbar which reverts to an icon dropdown button upon the web page being made smaller or the content appearing on a smaller device such as a mobile handset. Bootstrap is also connected to Javascript which I have also linked into the content of each page.


2. Font Awesome - (www.fontawesome.com)

Font Awesome - The use of Font Awesome Logos for social links and visual badges for some of the website information were used therefore credit to ‘Font Awesome’ for allowing links to their free library of icons.

3. W3Schools (www.w3schools.com)

W3Schools – I searched online for a basic picture gallery source of code and therefore adopted and then adjusted some coding which was available via their website. This is a basic picture gallery which allowes the user to click on the smaller pictures that then show below and are viewed bigger in size. I limited the amount of photos available to under 10 so that there was enough room on the web page, in addittion to this, the decision to only include a small amount of pictures was made so that the focus was on the better photos which represented the band in it’s most profesional light.

4. Google Fonts - (https://fonts.google.com/)

I included links to four specific font types via Google Fonts. The process of including these font types are quick and easy and there is a superb library of fonts to choose from.

5. Formspree - (www.formspree.io/)

In order for me to include a contact form witht the website I used a server link via Formspree. The process of setting up a PHP form and hosting this would have been a bit complex at this point therefore I have opted for a pre-made system that serves the purpose of directing enquiries to a designated email address via the website. I did however create my own form using a mix of CSS styling and specific fields so that I could capture the basic data to fulfill the contact form request.

6. Youtube - (www.youtube.com)

I simply copied the embedded video code for each of the videos hosted on the site which are by default uploaded to youtube therefore the display of the video and the user controls are provided by Youtube.
