console.log('loaded cdiff.js');
(function(){
    var h = '<div id="helpLoad">If the Tableau dashboard fails to load below then a) <a href="https://sbmcin.analytics.healtheintent.com" target="_blank">make sure you\'re loogged in</a>, and then b) <button id="reload" class="btn-primary">reload this app</button>.</div>'
    h += "<div class='tableauPlaceholder' id='tableauDiv' style='width: 1384px; height: 1156px;'><object class='tableauViz' width='1384' height='1156' style='display:none;'><param name='host_url' value='https%3A%2F%2Fdiscovery.analytics.healtheintent.com%2F' /> <param name='site_root' value='&#47;t&#47;SBMCIN' /><param name='name' value='CDiff_0&#47;CDiffDiscovery' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showVizHome' value='n' /><param name='showShareOptions' value='true' /></object></div>"
    sbmApps.render(h)
    reload.onclick=function(){
        $.getScript('https://sbu-bmi.github.io/microbes/cdiff.js')
    }
    $.getScript('https://sbu-bmi.github.io/microbes/viz_v1.js',function(){
         var ifr = $('iframe')[0]
         ifr.onload=function(){
             console.log('iframe loaded')
             //helpLoad.hidden=true
         }
     })
})()

//$.getScript('https://discovery.analytics.healtheintent.com/javascripts/api/viz_v1.js')

