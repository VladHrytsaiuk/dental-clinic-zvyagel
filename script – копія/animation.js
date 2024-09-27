const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
   let widthWindow = document.documentElement.clientWidth
		if (entry.isIntersecting && widthWindow > 768) {
      // Add the animation class
			
			if(entry.target.classList.contains("fadeInLeft"))
			{
      	entry.target.classList.add('animate__fadeInLeft');
			}
			else if(entry.target.classList.contains("fadeInDown"))
			{
				entry.target.classList.add('animate__fadeInDown');
			}
			else if(entry.target.classList.contains("fadeInUp"))
			{
				entry.target.classList.add('animate__fadeInUp');
			}
			else if(entry.target.classList.contains("fadeInRight"))
			{
				entry.target.classList.add('animate__fadeInRight');
			}
			else if(entry.target.classList.contains("fadeInBottomRight"))
			{
				entry.target.classList.add('animate__fadeInBottomRight');
			}
			else if(entry.target.classList.contains("fadeIn"))
			{
				entry.target.classList.add('animate__fadeIn');
			}
			else if(entry.target.classList.contains("zoomIn"))
			{
				entry.target.classList.add('animate__zoomIn');
			}
			else if(entry.target.classList.contains("bounce"))
			{
				entry.target.classList.add('animate__bounce');
			}
    }
  });
});

let allElem = document.querySelectorAll('.animate__animated')
allElem.forEach( e => {
	observer.observe(e);
})