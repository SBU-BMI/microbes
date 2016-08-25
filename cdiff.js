console.log('loaded cdiff.js');

(function(){
    //var h = '<div id="helpLoad">If the Tableau dashboard fails to load below then a) <a href="https://sbmcin.analytics.healtheintent.com/discovery" target="_blank">Make sure you\'re logged in</a>, and then b) <button id="reload" class="btn-primary">reload this app</button>.</div>'
    var h = "<a href='https://sbmcin.analytics.healtheintent.com/discovery' target='_blank'>direct login</a> (and then reload)"
    h += "<div id='tableauDiv' class='tableauPlaceholder' style='width: 1204px; height: 962px;'><object class='tableauViz' width='1204' height='962' style='display:none;'><param name='host_url' value='https%3A%2F%2Fdiscovery.analytics.healtheintent.com%2F' /> <param name='site_root' value='&#47;t&#47;SBMCIN' /><param name='name' value='CDiffCOandHO&#47;CDiffCOHOSummary' /><param name='tabs' value='yes' /><param name='toolbar' value='no' /><param name='customViews' value='no' /><param name='filter' value=':refresh' /><param name='revert' value='all' /></object></div>"
    sbmApps.render(h)

    var urlJS= 'https://sbu-bmi.github.io/microbes/cdiff.js'
    //var urlJS = 'http://localhost:8000/microbes/cdiff.js'
    $.getScript('https://sbu-bmi.github.io/microbes/viz_v1.js')
    // reload
    var reloadFun=function(){
        setTimeout(function(){
            console.log('checking at '+Date())
            $.getScript(urlJS)
        },5000)
    }
    //check connection
    var im = document.createElement('img')
    im.onload=function(){
        console.log('image check succeeded')
        localStorage.removeItem('loginSBMtableau')
    }
    im.onerror=function(){
        console.log('image check failed')
        if(!localStorage.loginSBMtableau){
            window.open('https://sbmcin.analytics.healtheintent.com/discovery')
            localStorage.setItem('loginSBMtableau',new Date())
        }
        tableauDiv.innerHTML='<div id="helpLoad"><h3>Dashboard failled to load:</h3> <li style="font-size:x-large"> a) <a href="https://sbmcin.analytics.healtheintent.com/discovery" target="_blank">Make sure you\'re logged in</a>,</li><li style="font-size:x-large"> and then b) <button id="reload" class="btn-primary">reload this app</button>.</li></div>'
        reload.onclick=function(){
            $.getScript(urlJS)
        }
        reloadFun()
    }
    im.src='https://discovery.analytics.healtheintent.com/images/30x30REV.gif'

})()
