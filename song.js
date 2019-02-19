
$(function(){
    $.get('lyric.json').then(function(object){
        let {lyric} = object
        let array=lyric.split('\n')
        let regex = /^\[(.+)\](.*$)/
        array = array.map(function(string,index){
            let matches = string.match(regex)
            // console.log(matches)
            if(matches){
                return {time:matches[1], words:matches[2]}
            }
        })
        // console.log(array)

        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){
                return
            }
            let $p =$('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = './media/song1.mp3'
    let playing = false;
    $('.disc').on('click', (e)=> {
        togglePlay()
    })
    $('.disc').on('ontouch', (e)=> {
        togglePlay()
    })
    function togglePlay(){
        if(playing === false){
            audio.play()
            $('.disc-container').addClass('playing')
            playing = !playing
        }else{
            audio.pause()
            $('.disc-container').removeClass('playing')
            playing = !playing
        }
    }


})