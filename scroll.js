function makeMarquee() {
  const title = 'Open Now — 5 Madison Ave, NY — Come Visit!'

  // an array is a list of things
  // ['lawrence', 'rik', 'milan', 'ryan', 'adam', 'krista']
  // here we make a new empty array with 50 spaces in it
  // gere we fill it with text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' // ')

  // 1. we want to grab out .marquee span from the html
  // 2. we want to set our repeating title as the context

  // querySelector and querySelectorAll are same as $ in jquery
  const marquee = document.querySelector('.marquee span')
  // using innerHTML lets us set the content inside the element
  marquee.innerHTML = marqueeText
}

// here we actually run our makeMarquee function
makeMarquee()

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link =>{
	
//   addEventListener is just the same as jQuery's .on()
//   we can listen for events on elements and then run a fucntion
  link.addEventListener('click', (event) => {
//     using the event keyword we get access to a snapshot of what 
//     happened when we clicked on our link

    //     this is equivalent t return false in jQuery
//    it will block the default browser behavior of jumping to the href attribute
    event.preventDefault()
    
//     here we grab the href attribute from our link
   const href = link.getAttribute('href')
//     here we use the new scrollIntoView feature to scroll to our 
//     desired link in a smooth fashion
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
  
})

$(document).on('scroll', function(){
  
//    the scrollTop method gives us back a pixel value for how far it is from the top of the page (our current scroll position)
  var pixelsFromTop = $(document).scrollTop()
    
  if (pixelsFromTop > 600 ){
    $('.toTop').show(500)
  } else{
     $('.toTop').hide(500)
   }
})