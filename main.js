console.log('111')
$('.siteNav > ol > li > span').on('click', (e) => {
    $('.siteNav > ol > li > span').removeClass('active')
    $(e.target).addClass('active')
})
