(function (window) {
    let svgSprite = `<svg>
            <defs>
                <symbol id="icon-clock" viewBox="0 0 50 50">
                    <path d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M25,45.2
                    c-11.1,0-20.2-9-20.2-20.2S13.9,4.8,25,4.8s20.2,9,20.2,20.2S36.1,45.2,25,45.2z M31.2,34.6l-8.6-6.2c-0.3-0.2-0.5-0.6-0.5-1V10.9
                    c0-0.7,0.5-1.2,1.2-1.2h3.2c0.7,0,1.2,0.5,1.2,1.2v14.3l6.7,4.9c0.5,0.4,0.7,1.1,0.3,1.7l-1.9,2.6C32.5,34.9,31.8,35,31.2,34.6
                    L31.2,34.6z"/>
                </symbol>
                <symbol id="icon-map-marker" viewBox="0 0 50 50">
                    <path d="M23.1,49C8.9,28.4,6.3,26.3,6.3,18.7C6.3,8.4,14.6,0,25,0s18.7,8.4,18.7,18.7
                    c0,7.6-2.6,9.7-16.8,30.2C26,50.3,24,50.3,23.1,49L23.1,49z M25,26.6c4.3,0,7.8-3.5,7.8-7.8s-3.5-7.8-7.8-7.8s-7.8,3.5-7.8,7.8
                    S20.7,26.6,25,26.6z"/>
                </symbol>
                <symbol id="icon-calendar" viewBox="0 0 50 50">
                    <path d="M17.6,28.1h-3.9c-0.6,0-1.2-0.5-1.2-1.2V23c0-0.6,0.5-1.2,1.2-1.2h3.9c0.6,0,1.2,0.5,1.2,1.2V27
                    C18.8,27.6,18.2,28.1,17.6,28.1z M28.1,27V23c0-0.6-0.5-1.2-1.2-1.2H23c-0.6,0-1.2,0.5-1.2,1.2V27c0,0.6,0.5,1.2,1.2,1.2H27
                    C27.6,28.1,28.1,27.6,28.1,27z M37.5,27V23c0-0.6-0.5-1.2-1.2-1.2h-3.9c-0.6,0-1.2,0.5-1.2,1.2V27c0,0.6,0.5,1.2,1.2,1.2h3.9
                    C37,28.1,37.5,27.6,37.5,27z M28.1,36.3v-3.9c0-0.6-0.5-1.2-1.2-1.2H23c-0.6,0-1.2,0.5-1.2,1.2v3.9c0,0.6,0.5,1.2,1.2,1.2H27
                    C27.6,37.5,28.1,37,28.1,36.3z M18.8,36.3v-3.9c0-0.6-0.5-1.2-1.2-1.2h-3.9c-0.6,0-1.2,0.5-1.2,1.2v3.9c0,0.6,0.5,1.2,1.2,1.2h3.9
                    C18.2,37.5,18.8,37,18.8,36.3z M37.5,36.3v-3.9c0-0.6-0.5-1.2-1.2-1.2h-3.9c-0.6,0-1.2,0.5-1.2,1.2v3.9c0,0.6,0.5,1.2,1.2,1.2h3.9
                    C37,37.5,37.5,37,37.5,36.3z M46.9,10.9v34.4c0,2.6-2.1,4.7-4.7,4.7H7.8c-2.6,0-4.7-2.1-4.7-4.7V10.9c0-2.6,2.1-4.7,4.7-4.7h4.7V1.2
                    C12.5,0.5,13,0,13.7,0h3.9c0.6,0,1.2,0.5,1.2,1.2v5.1h12.5V1.2c0-0.6,0.5-1.2,1.2-1.2h3.9c0.6,0,1.2,0.5,1.2,1.2v5.1h4.7
                    C44.8,6.3,46.9,8.3,46.9,10.9z M42.2,44.7V15.6H7.8v29.1c0,0.3,0.3,0.6,0.6,0.6h33.2C41.9,45.3,42.2,45,42.2,44.7z"/>
                </symbol>
                <symbol id="icon-map-marked" viewBox="0 0 50 50">
                    <path d="M25,2.8c-6,0-10.9,4.9-10.9,10.9c0,4.9,7.1,13.8,9.9,17c0.6,0.7,1.5,0.7,2.1,0c2.7-3.2,9.9-12.1,9.9-17
                    C35.9,7.7,31,2.8,25,2.8z M25,17.4c-2,0-3.6-1.6-3.6-3.6s1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6S27,17.4,25,17.4z M1.7,21.5
                    C0.7,21.9,0,23,0,24.1v21.7c0,1,1,1.7,1.9,1.3l12-5.5V21.4c-0.8-1.4-1.4-2.7-1.8-4L1.7,21.5z M25,34c-1.2,0-2.4-0.5-3.2-1.5
                    c-1.7-2-3.5-4.3-5.2-6.7v15.8l16.7,5.6V25.9c-1.6,2.4-3.5,4.6-5.2,6.7C27.4,33.5,26.2,34,25,34z M48.1,16.8l-12,5.5v25l12.1-4.9
                    c1.1-0.4,1.7-1.4,1.7-2.6V18.1C50,17.1,49,16.4,48.1,16.8L48.1,16.8z"/>
            </symbol>
            </defs>
      </svg>`
    const script = (function () {
        const scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }())
    const shouldInjectCss = script.getAttribute('data-injectcss')
    const ready = function (fn) {
        if (document.addEventListener) {
            if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                const loadFn = function () {
                    document.removeEventListener('DOMContentLoaded', loadFn, false)
                    fn()
                }
                document.addEventListener('DOMContentLoaded', loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }
        function IEContentLoaded (w, fn) {
            const d = w.document
            let done = false
            const init = function () {
                if (!done) {
                  done = true
                  fn()
                  }
            }
            const polling = function () {
                try {
                    d.documentElement.doScroll('left')
                } catch (e) {
                    setTimeout(polling, 50)
                    return
                }
                init()
            }
            polling()
            d.onreadystatechange = function () {
                if (d.readyState === 'complete') {
                    d.onreadystatechange = null
                    init()
                }
            }
        }
    }
    const before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    }
    const prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }
    function appendSvg () {
        const div = document.createElement('div')
        div.innerHTML = svgSprite
        svgSprite = null
        const svg = div.getElementsByTagName('svg')[0]
        if (svg) {
            svg.setAttribute('aria-hidden', 'true')
            svg.style.position = 'absolute'
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = 'hidden'
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true
        try {
            document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)