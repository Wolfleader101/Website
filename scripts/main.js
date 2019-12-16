new fullpage('#fullpage', {
  licenseKey: '9B56D9A6-015E49C1-99039BAD-CA082B96',
  autoScrolling: true,
  navigation: true,
  scrollHorizontally: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['page1', 'page2', 'page3', 'page4'],
  navigationTooltips: ['Wolf Studios', 'About Us', 'Projects', 'Blogs', 'Contact Us'],
  afterRender: () => {
    setInterval(function () {
      fullpage_api.moveSlideRight();
    }, 5000);
  },
});

//Read more button click
$(document).on('click', '#ReadMore', () => {
  fullpage_api.moveTo('page2');
});