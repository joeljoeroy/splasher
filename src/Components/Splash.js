import React, { useState, useEffect } from 'react'
import './css/splash.css'
import {createApi} from 'unsplash-js'
import '@ecodev/natural-gallery-js/themes/natural.css'
import '@ecodev/natural-gallery-js/natural-gallery.css'
import { Natural } from '@ecodev/natural-gallery-js'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import 'photoswipe/dist/photoswipe.min.js'
import 'photoswipe/dist/photoswipe-ui-default.min.js'


export default function Splash(){


    
    const key = 'PnaJhxlUEivILY8YCBU1QHvBtq7SGirPJaOaHv8btNg'
    const unsplash = createApi({
        accessKey: key
    });
    
    const [ images, setImages ] = useState([]);
    const [ query, setQuery ] = useState('random');    
    // const [ page, setPage ] = useState(1);
    // const [ completed, setCompleted] = useState(true);
        var options = {rowHeight: 400,
                        lightbox: true,
                        showLabels: 'never',
                        rowsPerPage: 3,
                        backgroundSize: 'auto',
                        photoSwipeOptions: {
                                index: 0,
                                timeToIdle: 4000,
                                timeToIdleOutside: 1000,
                                loadingIndicatorDelay: 0,
                                closeEl: true,
                                fullscreenEl: true,
                                counterEl: true,
                                tapToClose: true,
                                tapToToggleControls: false,
                                preloaderEl: true,
                                preload: [3,3]

                        }
                    }

    const fetchImages = async () => {
            const data = await unsplash.search.getPhotos({
                query: query,
                page: 1 ,
                perPage: 40,
            });
            // console.log(data);
            var items = data.response.results.map( (image) => { return ({
                thumbnailSrc: image.urls.small, // link to thumbnail image
                enlargedSrc: image.urls.regular, // link to enlarged image
                enlargedWidth: image.height,
                enlargedHeight: image.width,
                title: image.alt_description,
                link: image.urls.full,
                linkTarget: '_self', // _blank | _top | _self | _parent
                color: '#FFF', // HEX color for background before image display
                backgroundPosition: 'center', // Any value compatible with css background-position. Default: center
                backgroundSize: 'cover' // Any value compatible with css background-size. Default : cover
            }) });

            setImages(items)


        }

    useEffect(() => {
        const elementRef = document.getElementById('gallery');
        const photoswipeRef = document.getElementsByClassName('pswp')[0];
        const gallery = new Natural(elementRef,options,photoswipeRef);
        gallery.init();
        gallery.setItems(images);

        gallery.addEventListener('pagination', function(ev) {
            console.log(ev.detail); // {offset: 0, limit: 23}
            // if(offset )
        });

    })

    useEffect(() => {
        fetchImages();

    },[query]);

    // const handleQuery = (value) => {
    //     setQuery(value);
    //     setImages([]); 
    //     setPage(1)
    // }


    return (
        <div id='body' style={{margin: '10px 40px 40px 10px',overflow: 'auto', minHeight: '100%', height: '100%'}}>
            <div id='gallery'>

                 <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="pswp__bg"></div>
                    <div class="pswp__scroll-wrap">
                        <div class="pswp__container">
                            <div class="pswp__item"></div>
                            <div class="pswp__item"></div>
                            <div class="pswp__item"></div>
                        </div>
                        <div class="pswp__ui pswp__ui--hidden">
                            <div class="pswp__top-bar">
                                <div class="pswp__counter"></div>
                                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                <div class="pswp__preloader">
                                    <div class="pswp__preloader__icn">
                                        <div class="pswp__preloader__cut">
                                            <div class="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div class="pswp__share-tooltip"></div>
                            </div>
                            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                            <div class="pswp__caption">
                                <div class="pswp__caption__center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
        
}

