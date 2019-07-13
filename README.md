# Badaboum 
<img src="https://kenrickhatton.github.io/KH-Milestone4_Migration/assets/images/concert_photo_3.jpeg" style="widt:100%;">

> This is a First Milestone Project for [Code Institute](https://codeinstitute.net/) Full Stack Developer Course.</br>
> Website is about the rock band from 1960's. Badaboum is playing around 50 years on the rock stage giving theirs fans the best emotions and memories.
> Static website with responsive clear and simply design (front-end only).

## Technologies Used

> Languages

* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

> Frameworks / Libraries
* [jQuery](https://en.wikipedia.org/wiki/JQuery)
* [Bootstrap 3.7](https://getbootstrap.com/docs/3.3/)

## Features

* I have used script to create a 'goToTheTop' button. In my project square with '^' sign represents this button.
```javascript

    //When the user scrolls down 20px from the top of the document, show the button

    window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            }
            else {
                document.getElementById("myBtn").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
```

* I have also used script to to scroll down to the subscribe section for fast UI
```javascript

    // Scroll down script from  - 
    //https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
    
    ('a[href^="#"]').on('click', function(event) {

    var target = (this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            ('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
```
* Carousel at the top of website was created based on code from - [w3schools](https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp)
* Menu toggle collapse script from [Codeply](https://www.codeply.com/go/XtiWqN3lGn) used to make the navigation bar simple and easy to use while displayed on small devices.
* Audio and Video files allows users to listen music and watch videos by pressing play button.
* Contact form is making easy way to contact the band by the fans and make all enquiries.

## UX / Design

### Styling
>   Simple one page style, separated sections, colored headers,
contrasting text on backgrounds.
Smooth website scroll and "goToTheTop" or subscribe button created to be more user friendly.


### Pages/Sections

> Home
>   - Button/Link to go back to the top of the page. No content in this section.

> News
>   - All the latest news about the Badaboum, such as new album/s or song/s,
concert tours and special events.

> About
>   - Short story about Badaboum in top part of section.
Team members presented in separated cards with photos, names and roles.

> Offer
>   - The best saving offers and deals for upcoming events and concerts, specially prepared for fans.

> Media
>   - Section splited for two parts. In left side user can find the audio files to listen, specialy picked songs. Right side of the section was prepared to place the newest video clips to be watched by fans.

> Contact
>   - All necessary information about Badaboum office, contact form and newsletter subscribe field.

### User stories
The purpose of website is to let old, new fans to hear songs and see videos of Badaboum.
Badaboum also want to give the fans best offers and make their dreams come true by allow them to contact and make special events for them as Weddings or Christmas parties.

> As a fan of Badaboum I would like to know all the latest news about them.

> I'm a new fan of Badaboum and I want to know more about my lovely band and team members.

> As a friend of Badaboum I would like to listen to their songs and found out what kind of music they're playing.

> Our band have a big dream to play as a Badaboum support. I would like to Contact them or there Manager and ask if it's possible.


## Testing

This website has been tested using Google Chrome with an extension tool - Viewport Resizer.
After website was fully loaded into the Viewport Resizer. I used the Animation button to see how website will react on the viewport changes.
While the width of the website was changing, It was scrolled up and down to see how the images, text and contact form input fields are going to behave and change. 
I've used the standard sizes in the Viewport Resizer to see how the website will look on a different device, E.g. tablet or phones as well as PC monitors.
On each viewport widths I checked all buttons and links to see how they going to react.

I have also tested using safari browser and tested the responsive sizing as well as the functions for this site.

By clicking on the links in the navigation bar, the smooth scroll function will work correctly on all viewport sizes. No clicking order needed.
Toggle button collapse correctly by clicking on "hamburger button" or by clicking on menu links on all viewport sizes.

Contact form required fields are: Name and Surname, E-mail Address and Message. The 'required' attribute is added to them and to Email Address field on the bottom of the page (newsletter subscription). This will not allowed you to submit the form before completing them.
When you try to submit the contact form without filling any of input boxes. You will see the message on the top of empty input box says, "! Please fill in this field.".
Mouse cursor will be automatically focus in empty input box.

To see if all audio files works correctly, I've clicked on each play button, while playing I checked all available functions to the user during play back.

* When the viewport width is less than 768px aside button 'goToTheTop' is not visible otherwise on larger screen is visible
* Website was tested on Note 8. Works and look good in portrait and landscape layout.

Website looks and works good on different browsers and all most common screen sizes.


## Deployment
> This website is hosted and deployed from master branch to GitHub Pages.

* How to deployed website on Github Pages.
>

    - Click on name of repository that you want to deployed.

    - On the top bar click on "Settings".

    - Scroll down to GitHub Pages and from source drop down list choose "Master branch".

    - Create the name for your deployed website and click on "Save" button.


## Credits / Acknowledgement

> Whole website text was created and written by myself (Kenrick Hatton).
>
>
> Photos used in this project are from certain pages searched via [GoogleImageSearch](https://www.google.com/advanced_image_search)

* List of all images and url addresses to download/use images
 
> Images

1. Carousel

    - Australia - [image 1](https://s1.best-wallpaper.net/wallpaper/m/1901/Music-band-audience_m.webp)</br>
    - Fance - [image 2](data:image/jpeg;base64,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)</br>
    - Sweden - [image 3](http://www.uitgaanin078.nl/wp-content/uploads/2014/11/3840x1200-1024x320.jpg)

2. News

    - Limited vinyl release - [image 1](https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-77017-vinyl_wallpaper_by_agentplay_on_deviantart_--2x1--940.jpg)</br>
    - Music ally concert - [image 2](www.mansfieldtexas.gov/sites/default/files/styles/half/public/media/2018_ma_logo_1.jpg?itok=1t2L46m8)</br>
    - The garden 2020 - [image 3](https://www.partir-a-new-york.com/wp-content/uploads/2016/04/match-de-hockey-a-new-york-rangers-1024x680.jpg)</br>
    - Hospitality in the park - [image 4](https://www.timeout.com/london/music/hospitality-in-the-park)

3. AboutUs

    - Vocal - [image 1](https://cdn.baeblemusic.com/images/bblog/1-29-2018/2ef848f8blog_cropped-580.jpg)</br>
    - Guitar - [image 2](https://img3.stockfresh.com/files/s/sumners/m/29/3699137_stock-photo-female-guitarist-and-drummer.jpg)</br>
    - Drums - [image 4](https://www.google.com/imgres?imgurl=https%3A%2F%2F66.media.tumblr.com%2Fe812ed46f2538692750da7ee211add8a%2Ftumblr_o1t5oeaBCK1un3zhzo2_250.gif&imgrefurl=https%3A%2F%2Fwww.tumblr.com%2Ftagged%2Fsara%2Blund&docid=iriqnIKzuH0b6M&tbnid=PthwTdEX1JRKFM%3A&vet=10ahUKEwj4sJvD9O3iAhUhzYUKHZs3D2QQMwhpKAcwBw..i&w=250&h=250&bih=830&biw=992&q=female%20drummer&ved=0ahUKEwj4sJvD9O3iAhUhzYUKHZs3D2QQMwhpKAcwBw&iact=mrc&uact=8)
 
> Audio </br>
* Audio files used in this project are from [http://freemusicarchive.org]

    - [Group is badaboum](http://freemusicarchive.org/music/badaboum/) </br>

> Video</br>
* YouTube video ( iframe ) - video used/shared from upsettherhythm channel.
    - [upsettherhythm YouTube Channel](https://www.youtube.com/channel/UCpykqZ6FYso5gRVopjxPKJg)
    - [BADABOUM - Live at Upset The Rhythm ](https://www.youtube.com/embed/XNDjLESzOn0")
 
> With reference to the previous Testing section 
    
* Link to GoogleChrome webstore to install ViewportResizer.
    - [ViewportResizer](https://chrome.google.com/webstore/detail/viewport-resizer/kapnjjcfcncngkadhpmijlkblpibdcgm) 

##### *All assets have been used for educational purposes

* Kenrick.hatton.dev@gmail.com for info


##### *DISCLAMER - The Band is A Real band but theormation on this website is 
##### Fitional and is for the purpous of an educational full stack webdevelopers course only.