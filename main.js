console.log('111')
$('.siteNav > ol > li > span').on('click', (e) => {
    $('.siteNav > ol > li > span').removeClass('active')
    $(e.target).addClass('active')
})

    $(function(){
        // console.log(location.search)
        $.get('./songs.json', (response) => {
            console.log(response)
            console.log(typeof response)
            let items = response
            items.forEach( (i) => {
                console.log(i)
                let $li = $('<li><a href="./song.html?id='+ i.id +'"><h3>'+ i.name +'</h3><span class="sq"></span><p>'+ i.artist +'</p><span class="icon"></span></a></li>'   )
                $('#lastestMusic').append($li)
                $('#latestMusicLoading').remove()
            })
        })
    })
    



            {/* <li><a href="./song.html?id=${i.id}"><h3>${i.name}</h3><span class="sq"></span><p>${i.artist}</p><span class="icon"></span></a></li> */}