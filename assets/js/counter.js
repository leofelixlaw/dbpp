var _statcounter=function(_1){var _2=parseInt(sc_project,10);var _3=_2==12225189||_2==11548023||_2==11878871||_2==12214659||_2==981359||_2==9560334||_2==6709687||_2==9879613||_2==4124138||_2==204609||_2==10776808||_2==11601825;try{var _4;var _5=1;if(typeof _1!=="undefined"&&_1.record_pageview){_4=_1;_5=_4._get_script_num()+1}else{if(typeof _1==="undefined"){_4=function(){};_4._pending_tags={}}else{if(_1.start_recording){_4=_1;if(_1._pageview_tags_in){_1=_1._pageview_tags_in}}else{_4=function(){}}if(Object.prototype.toString.call(_1)==="[object Array]"){_4._pending_tags=_1}else{_4._pending_tags={}}}_4._session_increment_calculated={};_4._returning_values={}}_4.push=function(_6){_4._pending_tags=[_6]};var _7=true;var _8=false;if(typeof performance!=="undefined"){try{_8=Math.round(performance.now())}catch(ex){_8=false}}var _9=false;if(document.currentScript&&document.currentScript.src&&document.currentScript.src.indexOf("statcounter.com")!==-1){_9=document.currentScript.src}var _a=0;var _b=0;var _c=-1;var _d=0;var _e="";var _f="";var _10="";var _11="";var _12="";var _13="https";var _14="statcounter.com";var _15="c";var _16="StatCounter - Free Web Tracker and Counter";var _17="";var _18=0;var _19="";var _1a="&u1=za";var _1b="cookie";if(window.sc_client_storage){_1b=window.sc_client_storage}if(typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"){_1b="disabled"}if(window.sc_invisible){if(window.sc_invisible==1){_d=1}}if(window.sc_click_stat){_c=window.sc_click_stat}var _1c=""+document.location;var _1d=new RegExp("^https","i");if(_1c.match(_1d)){_13="https"}if(window.sc_local){_e=sc_local}else{if(_c==-1){_c=1}_e=_13+"://"+_15+"."+_14+"/"}_f=_e;if(window.sc_text){_e+="text.php?"}else{_e+="t.php?"}if(window.sc_project){if(sc_project=="4135125"||sc_project=="6169619"||sc_project=="6222332"||sc_project=="5106510"||sc_project=="6311399"||sc_project=="6320092"||sc_project=="5291656"||sc_project=="7324465"||sc_project=="6640020"||sc_project=="4629288"||sc_project=="1480088"||sc_project=="2447031"){if(Math.floor(Math.random()*6)!=1){_b=1}}_e+="sc_project="+sc_project}else{if(window.usr){_e+="usr="+usr}else{_a=1}}var _1e="sc_counter_content";if(window.sc_remove_link){_10="";_11=""}else{_10="<a id=\""+_1e+"\" class=\"statcounter\" href=\"http://www."+_14+"\" target=\"_blank\">";_11="</a>"}if(window.sc_security){_12=sc_security}var _1f=new Date();var _20=Math.floor(_1f/86400000);var _21=_20-17869;var _22=11200000-(_21*12223);var _23=9000000;if(_22<_23){_22=_23}var _24=_2==4344864||_2==4124138||_2==204609||_2>_22;var _25=_2==204609||_2==4124138;var _26=true;try{if(!(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage" in window&&"withCredentials" in new XMLHttpRequest())){_26=false}if(_sessionStorageGetConfig("sc_project_config_"+sc_project)!==null&&_sessionStorageGetConfig("sc_project_time_difference_"+sc_project)!==null){_26=false}if(_sessionStorageGetConfig("sc_block_project_config_"+sc_project)!==null){_26=false}}catch(ignore){_26=false}var _27=[30,60,120,180,360,720,1440,2880,10080];function get_referrer(){var _28=""+document.referrer;try{_28=""+parent.document.referrer}catch(ex){_28=""+document.referrer}if(typeof sc_referer_scr08!=="undefined"){_28=sc_referer_scr08}return _28}_4.get_referrer=get_referrer;var _29=0;var _2a="";_4.inject_script=function(url,_2c){if(url===undefined||!url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)){return}var scr=document.createElement("script");scr.type="text/javascript";scr.async=true;if(_2c){scr.onload=_2c}scr.src=url;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(scr,s)};function get_jg_rr_url_params(){if(_2a==""){return "&jg=&rr="}return _2a}function get_page_title(){var _2f=""+document.title;_2f=_2f.substring(0,300);if(encodeURIComponent){_2f=encodeURIComponent(_2f)}else{_2f=escape(_2f)}return _2f}function get_page_url(){var _30=""+document.location;if(_30=="about:srcdoc"){_30=""+document.baseURI}_30=_30.substring(0,300);_30=escape(_30);return _30}function get_screen_width(){return screen.width}function get_screen_height(){return screen.height}function get_performance_url_params(){if(_29==0){var _31="";var _32="";try{if(typeof performance!=="undefined"){var _33=Math.round(performance.now());_31="&sc_rum_e_s="+_8+"&sc_rum_e_e="+_33;var _34=_33-_8;_32=get_performance_tags(_34)}}catch(ex){_31="";_32=""}return _31+_32}return ""}function get_performance_tags(_35){var _36="";if(_25&&typeof performance!=="undefined"){var _37=document.getElementById("sc-ttfb-bd");var _38="-1";if(_37){_38=_37.textContent}var _39=performance.timing.responseStart-performance.timing.connectStart;var _3a=document.getElementById("sc-perf-wh");var _3b=0;if(_3a){_3b=_3a.textContent}var _3c=document.getElementById("sc-perf-pn");var _3d=0;if(_3c){_3d=_3c.textContent}var _3e=document.getElementById("sc-perf-db");var _3f=0;if(_3e){_3f=_3e.textContent}_36="&sc_ev_scperf_js_exec="+_35+"&sc_ev_scperf_ttfb_frontend="+_39+"&sc_ev_scperf_ttfb_backend="+_38+"&sc_ev_scperf_ws="+_3b+"&sc_ev_scperf_pn="+_3d+"&sc_ev_scperf_db="+_3f}return _36}function strip_tags(_40,_41){_41=(((_41||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var _42=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,_43=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return _40.replace(_43,"").replace(_42,function($0,$1){return _41.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})}function sanitise_tags(_46){for(var i=0;i<_46.length;i++){_46[i]=(""+_46[i]).trim()}return _46}function validate_tags(_48){var _49=10;var _4a=1;var _4b=300;var _4c=[];if(!(_48.length%2==0)){_4c.push("Every tag must have a name and value.")}else{if(_48.length/2>_49){_4c.push("No more than "+_49+" tags can be passed - "+_48.length/2+" passed.")}for(var i=0;i<_48.length;i++){var _4e=(""+_48[i]).length;if(_4e<_4a||_4e>_4b){_4c.push("Tag names and values must be between "+_4a+" and "+_4b+" characters in length ('"+_48[i]+"' is "+_48[i].length+" characters long).")}}for(var i=0;i<_48.length;i++){if(strip_tags(""+_48[i])!=""+_48[i]){_4c.push("Tag names and values may not contain HTML tags.")}}}if(_4c.length!=0){for(var i=0;i<_4c.length;i++){}return false}return true}function get_tag_string(_4f){function _50(obj,_52){var _53=obj.__proto__||obj.constructor.prototype;return (_52 in obj)&&(!(_52 in _53)||_53[_52]!==obj[_52])}if(Object.prototype.hasOwnProperty){var _50=function(obj,_55){return obj.hasOwnProperty(_55)}}var _56="";if(_50(_4f,"tags")&&typeof _4f.tags==="object"){var _57=[];for(var tag in _4f.tags){_57[_57.length]=tag;_57[_57.length]=_4f.tags[tag]}if(validate_tags(_57)){_57=sanitise_tags(_57);for(var i=0;i<_57.length;i=i+2){_56+="&sc_ev_"+encodeURIComponent(_57[i])+"="+encodeURIComponent(_57[i+1])}}}return _56}var _5a=[];var _5b=256;var _5c=6;var _5d=52;var _5e=Math.pow(_5b,_5c),_5f=Math.pow(2,_5d),_60=_5f*2,_61=_5b-1;var _62;var _63=function(_64,_65){var key=[];var _67=mixkey(flatten(_65?[_64,tostring(_5a)]:0 in arguments?_64:autoseed(),3),key);var _68=new ARC4(key);mixkey(tostring(_68.S),_5a);_62=function(){var n=_68.g(_5c),d=_5e,x=0;while(n<_5f){n=(n+x)*_5b;d*=_5b;x=_68.g(1)}while(n>=_60){n/=2;d/=2;x>>>=1}return (n+x)/d};return _67};function ARC4(key){var t,_6e=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];if(!_6e){key=[_6e++]}while(i<_5b){s[i]=i++}for(i=0;i<_5b;i++){s[i]=s[j=_61&(j+key[i%_6e]+(t=s[i]))];s[j]=t}(me.g=function(_73){var t,r=0,i=me.i,j=me.j,s=me.S;while(_73--){t=s[i=_61&(i+1)];r=r*_5b+s[_61&((s[i]=s[j=_61&(j+t)])+(s[j]=t))]}me.i=i;me.j=j;return r})(_5b)}function flatten(obj,_77){var _78=[],typ=(typeof obj)[0],_7a;if(_77&&typ=="o"){for(_7a in obj){try{_78.push(flatten(obj[_7a],_77-1))}catch(e){}}}return (_78.length?_78:typ=="s"?obj:obj+"\x00")}function mixkey(_7b,key){var _7d=_7b+"",_7e,j=0;while(j<_7d.length){key[_61&j]=_61&((_7e^=key[_61&j]*19)+_7d.charCodeAt(j++))}return tostring(key)}function autoseed(_80){try{window.crypto.getRandomValues(_80=new Uint8Array(_5b));return tostring(_80)}catch(e){return [+new Date,window,window.navigator.plugins,window.screen,tostring(_5a)]}}function tostring(a){return String.fromCharCode.apply(0,a)}mixkey(Math.random(),_5a);function detectBrowserFeatures(){var _82=[];var i;var _84;var _85={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};var _86=(new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent)?window.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(navigator.userAgent))){if(navigator.mimeTypes&&navigator.mimeTypes.length){for(var i in _85){if(Object.prototype.hasOwnProperty.call(_85,i)){_84=navigator.mimeTypes[_85[i]];_82.push((_84&&_84.enabledPlugin)?"1":"0")}}}if(typeof navigator.javaEnabled!=="unknown"&&typeof navigator.javaEnabled!=="undefined"&&navigator.javaEnabled()){_82.push("java")}if(typeof window.GearsFactory==="function"){_82.push("gears")}}_82.push(screen.width*_86+"x"+screen.height*_86);return _82.join("")}function generate_uuid(_87){var now=new Date();var _89=false;if(_87===undefined){_87=32;if(_89){_87=36}}var _8a=Math.round(now.getTime()/1000)+now.getMilliseconds();var _8b=(navigator.userAgent||"")+(navigator.platform||"")+detectBrowserFeatures()+now.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+_8a;_63(_8b);var _8c="0123456789ABCDEF".split(""),_8d=new Array(_87),rnd=0,r;for(var i=0;i<_87;i++){if(_89&&(i==8||i==13||i==18||i==23)){_8d[i]="-"}else{if((i==12&&!_89)||(i==14&&_89)){_8d[i]="4"}else{if((i==13&&!_89)||(i==15&&_89)){_8d[i]="F"}else{if(rnd<=2){rnd=33554432+(_62()*16777216)|0}r=rnd&15;rnd=rnd>>4;_8d[i]=_8c[(i==19)?(r&3)|8:r]}}}}return _8d.join("")}var _91;if(typeof window.sc_cookie_domain=="undefined"){_91=document.location.host.replace(/^www\./,"")}else{_91=window.sc_cookie_domain}if(_91.substring(0,1)!="."){_91="."+_91}function _localStorageAvailable(){var _92=false;if("localStorage" in window){try{_92=window["localStorage"]!==null}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}}}return _92}function _setLocalStorage(_93,_94,_95){if(_localStorageAvailable()){try{if(_93==="is_visitor_unique"){localStorage.setItem("statcounter.com/localstorage/",_94)}else{localStorage.setItem("statcounter_"+_93,_94)}}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}return false}return true}return false}function setLocal(_96,_97,_98,_99,_9a,_9b){if(typeof _97==="string"){_97=[_97]}if(_99===undefined){_99=""}if(_9a===undefined){_9a=30}var _9c=false;if(_1b=="localStorage"){_9c=_setLocalStorage(_96,_99+_97.join("-"),_98);if(!_9c){_9c=_writeCookie(_96,_99+_97.join("-"),_98,undefined,_9b)}else{if(_readCookie(_96)!==null){_removeCookie(_96,_98)}}}else{var _9d=_97.slice(0,_9a).join("-");_9c=_writeCookie(_96,_99+_9d,_98,undefined,_9b);if(!_9c){_9c=_setLocalStorage(_96,_99+_97.join("-"),_98)}else{if(_97.length>_9a){_setLocalStorage(_96,"mx"+_97.slice(_9a).join("-"),_98)}else{_removeLocalStorage(_96)}}}return _9c}function getLocal(_9e,_9f){var val=null;if(_localStorageAvailable()){if(_9e==="is_visitor_unique"){val=localStorage.getItem("statcounter.com/localstorage/")}else{val=localStorage.getItem("statcounter_"+_9e)}}if(_1b=="localStorage"&&val!==null&&val.substring(0,2)=="rx"){return val}var _a1=_readCookie(_9e,_9f);if(val!==null){if(_a1===null&&val.substring(0,2)=="rx"){return val}else{if(_a1!==null&&val.substring(0,2)=="mx"){_a1+="-"+val.substring(2)}}}return _a1}function _removeLocalStorage(_a2){if(_localStorageAvailable()){if(_a2==="is_visitor_unique"){localStorage.removeItem("statcounter.com/localstorage/")}localStorage.removeItem("statcounter_"+_a2)}}function removeLocal(_a3,_a4){_removeLocalStorage(_a3);if(_readCookie(_a3)){_removeCookie(_a3,_a4)}}function _readCookie(_a5,_a6){var _a7="sc_"+_a5+"=";var ret=null;if(document.cookie){var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1,c.length)}if(c.indexOf(_a7)==0){var _ac=c.substring(_a7.length,c.length);if(ret&&_a6!==undefined&&ret.indexOf(""+_a6+".")!==-1&&_ac.indexOf(""+_a6+".")===-1){}else{ret=_ac}}}}return ret}function _writeCookie(_ad,_ae,_af,_b0,_b1){var _b2=false;if(_b0===undefined){_b2=1000*60*60*24*365*2}else{if(_b0!=="session"){_b2=1000*_b0}}var _b3="";if(_b2!==false){var _b4=new Date();_b4.setTime(_b4.getTime()+_b2);_b3="; expires="+_b4.toGMTString()}var _b5=3050;if(_ae.length>_b5-50&&_ae.substring(0,_b5).indexOf("-")!==-1){_ae=_ae.substring(0,_ae.substring(0,_b5).lastIndexOf("-"))}var _b6="; SameSite=Lax";document.cookie="sc_"+_ad+"="+_ae+_b3+"; domain="+_af+"; path=/"+_b6;var rc=_readCookie(_ad,_b1);if(rc!==null&&rc===_ae){return true}else{return false}}function _removeCookie(_b8,_b9){if(document.location.host=="www"+_b9){document.cookie="sc_"+_b8+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+_b9+"; path=/; SameSite=Lax"}document.cookie="sc_"+_b8+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+_b9+"; path=/; SameSite=Lax"}function _getConfigDataStructureFromSession(){var _ba={};try{if(sessionStorage.getItem("statcounter_config")!==null){_ba=JSON.parse(sessionStorage.getItem("statcounter_config"))}}catch(ignore){_ba={}}return _ba}function _sessionStorageGetConfig(key){if(!("sessionStorage" in window)){return null}var _bc=_getConfigDataStructureFromSession();if(_bc[key]!==undefined){return _bc[key]}var _bd=null;try{_bd=sessionStorage.getItem(key)}catch(ignore){return null}if(_bd!==null){_sessionStorageSetConfig(key,_bd);sessionStorage.removeItem(key);return _bd}return null}function _sessionStorageSetConfig(key,_bf){if(!("sessionStorage" in window)){console.log("returning false");return false}var _c0=_getConfigDataStructureFromSession();try{_c0[key]=_bf;return sessionStorage.setItem("statcounter_config",JSON.stringify(_c0))}catch(ignore){return false}}var _c1=(function(){var _c2=false;return function(_c3){if(_c2){return}var _c4=_sessionStorageGetConfig("record_"+_c3);if(!_c4||!_c4.match(/(^on$|test$|wsdev$|^dev[0-9]*)/)){return}if(!_4._session_increment_calculated[_c3]){return}if(!_sessionStorageGetConfig("sc_project_time_difference_"+_c3)){return}if(_4.start_recording){_4.start_recording(_c3,_c4)}else{var _c5="https://www.statcounter.com/counter/recorder.js";if(_9){_c5=_9.replace(/\/counter([^\/])/,"/recorder$1").replace("_xhtml","");_c5=_c5.replace(/^http:\/\//,"https://")}if(_c4.indexOf("test")!=-1){_c5=_c5.replace(/\/recorder(.[^t])/,"/recorder_test$1")}if(_c4.indexOf("_")!=-1){_c5=_c5.replace(/\.js/,"_"+_c4.split("_")[1]+".js")}if(_c4.substring(0,3)=="dev"&&_c4!=="dev"){_c5=_c5.replace(/\/\/(www\.|secure\.)?/,"//"+_c4.split("_")[0].replace(/\//g,"").replace("test","").replace("wsdev","")+".")}else{_c5=_c5.replace(/\/\/(secure\.)?statcounter\./,"//www.statcounter.")}_4.inject_script(_c5,function(){_statcounter.start_recording(_c3,_c4)})}_c2=true}}());_4.get_config=function(_c6,_c7){if(_c6.substring(0,1)=="?"){var url=_e+_c6.substring(1)}else{var url=_c6}url=url+"&get_config=true";var _c9=new XMLHttpRequest();_c9.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var _ca=JSON.parse(this.responseText);_c7(_ca)}};function XHRErrorHandler(_cb){_sessionStorageSetConfig("sc_block_project_config_"+_2,1)}_c9.withCredentials=true;_c9.addEventListener("error",XHRErrorHandler);_c9.open("GET",url,true);_c9.send()};function config_ping(_cc,_cd){_4.get_config(_cc,function(_ce){_sessionStorageSetConfig("sc_project_config_"+_2,1);_sessionStorageSetConfig("sc_project_time_difference_"+_2,parseInt(_ce["time_difference"]));if(_ce["visitor_recording"]===1){_4.record(_2)}else{if(_ce["visitor_recording"]===2){_4.record(_2,"test")}}if(typeof _cd!=="undefined"){_cd(_ce)}})}var _cf={"google":null,"bing":["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,"baidu":["wd","word"],"yandex":["text"],"ya.ru":["text"],"haosou":["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],"aol":["query","q"],"duckduckgo":null,"ask.com":["q","QUERYT"],"mail.ru":["words"],"sogou":["q","query"]};var _d0={"fb":["facebook.com","fb.me"],"pi":["pinterest.com"],"tw":["twitter.com","t.co"],"ln":["linkedin.com"],"in":["instagram.com"],"rd":["reddit.com"],"tb":["tumblr.com"],"st":["stumbleupon.com"],"yt":["youtube.com"],"gp":["plus.google.com","plus.url.google.com"]};function check_root_domains_match(a,b){var _d3=a.split(".");var _d4=b.split(".");var _d5=Math.min(_d3.length,_d4.length);var _d6=2;if(_d3.length>1&&((_d3[_d3.length-2].length<=3&&_d3[_d3.length-1] in {"at":1,"au":1,"br":1,"es":1,"hu":1,"il":1,"nz":1,"tr":1,"uk":1,"us":1,"za":1})||_d3[_d3.length-1]=="kr"||_d3[_d3.length-1]=="ru"||(_d3[_d3.length-1]=="au"&&_d3[_d3.length-2] in {"csiro":1})||(_d3[_d3.length-1]=="at"&&_d3[_d3.length-2] in {"priv":1})||(_d3[_d3.length-1]=="fr"&&_d3[_d3.length-2] in {"avocat":1,"aeroport":1,"veterinaire":1})||(_d3[_d3.length-1]=="hu"&&_d3[_d3.length-2] in {"film":1,"lakas":1,"ingatlan":1,"sport":1,"hotel":1})||(_d3[_d3.length-1]=="nz"&&_d3[_d3.length-2] in {"geek":1,"kiwi":1,"maori":1,"school":1,"govt":1,"health":1,"parliament":1})||(_d3[_d3.length-1]=="il"&&_d3[_d3.length-2] in {"muni":1})||(_d3[_d3.length-1]=="za"&&_d3[_d3.length-2] in {"school":1})||(_d3[_d3.length-1]=="tr"&&_d3[_d3.length-2] in {"name":1})||(_d3[_d3.length-1]=="uk"&&_d3[_d3.length-2] in {"police":1}))){_d6=3}for(var i=1;i<=_d5;i++){if(_d3[_d3.length-i]!=_d4[_d4.length-i]){return false}if(i>=_d6){return true}}return _d3.length==_d4.length}function classify_referrer(r){if(r==""){return "d"}var _d9=r.split("/")[2].replace(/^www\./,"");var _da=document.location.host.replace(/^www\./,"");if(_24){if(_da==_d9){return "internal"}if(check_root_domains_match(_d9,_da)){return "internal"}}if(r.search(/\bgoogle\..*\?.*adurl=http/)!==-1){return "p"}var _db=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"];for(var i=0;i<_db.length;i++){if(document.location.search.indexOf(_db[i])!==-1){return "p"}}var _dd=["utm_medium=email"];for(var i=0;i<_dd.length;i++){if(document.location.search.indexOf(_dd[i])!==-1){return "e"}}if(!_24){if(_da==_d9){return "internal"}}for(var _de in _cf){if(_d9.replace(_de,"#").split(".").indexOf("#")!==-1){if(_cf[_de]===null){return _de}for(var i=0;i<_cf[_de].length;i++){var _df=_cf[_de][i];if(r.indexOf("?"+_df+"=")!==-1||r.indexOf("&"+_df+"=")!==-1){return _de}}}}for(var _e0 in _d0){for(var i=0;i<_d0[_e0].length;i++){var _de=_d0[_e0][i];if(_d9.replace(_de,"#").split(".").indexOf("#")!==-1){return _e0}}}return _d9}function categorize_class(cls){if(cls=="d"||cls=="p"||cls=="e"||cls=="internal"){return cls}if(cls in _cf){return "o"}if(cls in _d0){return "s"}return "r"}var _e2=escape(get_referrer());_4.record_pageview=function(_e3){if(typeof _e3==="undefined"){_e3=_4._pending_tags}_4._pending_tags={};_2a="";var _e4="";if(_b!=1){if(document.webkitVisibilityState!="prerender"){_18=0}else{_18=1;document.addEventListener("webkitvisibilitychange",function(evt){if(_18==1){_18=2;sc_send_data()}else{return}},false)}}if(!_24){var _e6=classify_referrer(_e2);var _e7=categorize_class(_e6);if(_e6!="internal"){_e4="&rcat="+_e7+"&rdom="+_e6}}var _e8=Math.round((new Date()).getTime()/1000);if(_1b!="disabled"){if(_24){var _e6=classify_referrer(_e2);var _e7=categorize_class(_e6);if(_e6!="internal"){_e4="&rcat="+_e7+"&rdom="+_e6}}try{var _e9=JSON.parse(localStorage.getItem("sc_medium_source"));if(_e9==null){_e9={}}var _ea=null;var _eb=null;var _ec=null;var msl=0;for(var k in _e9){if(_ea===null||_e9[k]>_e9[_ea]){_ea=k}var _ef=categorize_class(k);if(_e7==_ef&&(_eb===null||_e9[k]>_e9[_eb])){_eb=k}if(_ef=="r"&&(_ec===null||_e9[k]<_e9[_ec])){_ec=k}msl+=1}if(msl>30&&_ec!==null){delete _e9[_ec]}var _f0="";if(sessionStorage.getItem("statcounter_bounce")){sessionStorage.removeItem("statcounter_bounce");_f0="&bb=0"}var _f1=30;if(!_24){_f1=15}if(_e6=="d"&&_ea!==null&&_ea!="d"&&(_e8-_e9[_ea])<60*_f1){_e6="internal"}if(_24){if(sessionStorage.getItem("statcounter_session")&&(_e8-parseInt(sessionStorage.getItem("statcounter_session"),10))<60*30){_e6="internal"}sessionStorage.setItem("statcounter_session",_e8)}if(!_24){if(_e7=="r"&&sessionStorage.getItem("statcounter_exit_domain")==_e6){_e6="internal"}}if(_e6=="internal"){if(_ea!==null){_e4="&rcat="+categorize_class(_ea)+"&rdomo="+_ea;_e4+="&rdomg="+(_e8-_e9[_ea]);_e9[_ea]=_e8}}else{var _f2=false;if(_e6 in _e9){if(_e6==_ea){_e4=_e4.replace("rdom=","rdomo=")}_e4+="&rdomg="+(_e8-_e9[_e6]);if(_e8-_e9[_e6]<60*30){_f2=true}}else{_e4+="&rdomg=new"}if(_f0==""&&!_f2){sessionStorage.setItem("statcounter_bounce","1");_f0="&bb=1"}if(_eb!==null&&(!(_e6 in _e9)||_e6!=_eb)){_e4+="&rcatg="+(_e8-_e9[_eb])}_e9[_e6]=_e8}_e4+=_f0;try{localStorage.setItem("sc_medium_source",JSON.stringify(_e9))}catch(maybe_not_enough_space){if(_24){_e4=""}}}catch(e){if(_24){_e4=""}}if(_2==10227105){try{var _f3=new Image();_f3.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/")+":::"+_readCookie("is_visitor_unique",_2))}catch(ignore){}}if(_e4.indexOf("rdom=")!==-1){var _f4=true}else{var _f4=false}var _f5=_4.update_cookie(_2,_e8,_f4);if(_f5["session_incremented"]){var _f6=_sessionStorageGetConfig("record_"+_2);if(!_f6.match(/(^test$|wsdev$|^dev[0-9]*)/)){_26=true;_sessionStorageSetConfig("sc_project_time_difference_"+_2,false)}}_4._session_increment_calculated[_2]=true;_2a+="&jg="+_f5["jg"];_2a+="&rr="+_f5["rr"];if(_f5["uuid_q"]){_1a=_f5["uuid_q"]}}else{}var _f7="";if(Object.prototype.toString.call(_e3)==="[object Array]"){var _f8=_e3.length;if(_f8>=1){_f7=get_tag_string(_e3[0])}}var _f9=_e;_f9+="&java=1&security="+_12+_1a;if(typeof performance!=="undefined"){try{var _fa=performance.getEntriesByType("resource");for(var i=0;i<_fa.length;i++){var _fc=_fa[i];if(_fc.name.includes("statcounter.com/counter/counter.js")||_fc.name.includes("statcounter.com/counter/counter_test.js")){var _fd=_fc.responseEnd-_fc.fetchStart;_f9+="&sc_rum_f_s="+Math.round(_fc.requestStart)+"&sc_rum_f_e="+Math.round(_fc.responseEnd);break}}}catch(e){}}var _fe=_2a+"&resolution="+get_screen_width()+"&h="+get_screen_height()+"&camefrom="+_e2.substring(0,600)+"&u="+get_page_url()+"&t="+get_page_title()+_e4+"&sc_snum="+_5+_f7+"&sess="+_4.version();if(window.sc_counter_width&&window.sc_counter_height){_17=" width=\""+sc_counter_width+"\" height=\""+sc_counter_height+"\""}if(window.sc_remove_alt){_16=""}if(_a==1){document.writeln("Code corrupted. Insert fresh copy.")}else{if(_b==1){}else{sc_send_data()}}function sc_send_data(){if(_d==1||_18==2){_fe+="&p="+_18+"&invisible=1";var _ff=false;if(_19!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage" in window){_ff=true}var _100=false;if(_ff){try{var _101=sessionStorage.getItem("statcounter_pending");if(!_101){var _102={}}else{try{var _102=JSON.parse(_101)}catch(ignore){var _102={}}}if(_102[sc_project]===undefined){_102[sc_project]={}}var now=new Date().getTime();_102[sc_project][now]=_fe;while(true){_101=JSON.stringify(_102);if(_101=="{}"){sessionStorage.removeItem("statcounter_pending");break}var _104=_101.split(/:.{20}/).length-1;if(_104<20){var _105=true;try{sessionStorage.setItem("statcounter_pending",_101)}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){throw e}_105=false}if(_105){break}}var _106=false;var _107=false;var _108=false;for(var _109 in _102){for(var _10a in _102[_109]){var _10b=/jg=(\d+)/.exec(_102[_109][_10a]);if(_10b!==null){var _10c=parseInt(_10b[1])}else{var _10c=false}if(_106===false||(_10c!==false&&_10c<_106)){if(_10c!==false){_106=_10c}_107=_109;_108=_10a}}}if(_108===false){break}delete _102[_107][_108];if(JSON.stringify(_102[_107])=="{}"){delete _102[_107]}}for(var ts in _102[sc_project]){(function(_10e,_10f){var _110=_102[_10f][_10e];function post_hit_pending_cleanup(){if(_102[_10f]!==undefined){delete _102[_10f][_10e];if(JSON.stringify(_102[_10f])=="{}"){delete _102[_10f]}}var _111=JSON.stringify(_102);if(_111=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_111)}}if(_10e!=now){_110+="&pg="+Math.round((now-_10e)/1000)}else{_100=true}var _112=_f9+get_performance_url_params()+"&sc_random="+Math.random()+_110;if(_26){config_ping(_112,function(_113){post_hit_pending_cleanup()})}else{if(!navigator.sendBeacon){var _114=new Image();_114.onload=function(){post_hit_pending_cleanup()};_114.src=_112}else{navigator.sendBeacon(_112,"");post_hit_pending_cleanup()}}})(parseInt(ts,10),sc_project)}}catch(e){if(_3){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _116="";for(var prop in e){_116+="e["+prop+"]: "+e[prop]+"\n"}_116+="unique_returning: "+_2a+"\n";_116+="uuid: "+_19+"\n";_116+="toString(): "+" value: ["+e.toString()+"]\n";var _118=new Image();_118.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=pending%20exception:%20"+encodeURIComponent(_116)}}}if(!_ff||!_100){if(_26){config_ping(_f9+get_performance_url_params()+"&sc_random="+Math.random()+_fe)}else{if(!navigator.sendBeacon){var _119=new Image();_119.src=_f9+get_performance_url_params()+"&sc_random="+Math.random()+_fe}else{var _11a=_f9+get_performance_url_params()+"&sc_random="+Math.random()+_fe;navigator.sendBeacon(_11a,"")}}}}else{var _11b=_f9+get_performance_url_params()+"&sc_random="+Math.random()+_fe+"&p="+_18;if(!config_ping){_11b=_11b.replace(/&/g,"&amp;")}if(window.sc_text){if(_26){document.writeln("<span class=\"statcounter\" id=\""+_1e+"\"></span>");config_ping(_11b+"&text="+sc_text,function(_11c){document.getElementById(_1e).innerHTML=_11c["text"]})}else{document.writeln("<scr"+"ipt"+" src="+_11b+"&amp;text="+sc_text+"></scr"+"ipt>")}}else{if(_26){document.writeln("<span class=\"statcounter\">"+_10+"Statcounter"+_11+"</span>");config_ping(_11b,function(_11d){var _11e="<img src=\""+_11d["counter_image"]+"\" alt=\""+_16+"\" border=\"0\""+_17+">";document.getElementById(_1e).innerHTML=_11e})}else{document.writeln("<span class=\"statcounter\">"+_10+"<img src=\""+_11b+"\" alt=\""+_16+"\" border=\"0\""+_17+">"+_11+"</span>")}}}}_e2=get_page_url();_c1(_2);_29++};function sc_process_anchor(_11f){var _120=function(){sc_clickstat_call(this,_f);return true};if(_11f.addEventListener){_11f.addEventListener("mousedown",_120)}else{if(_11f.attachEvent){_11f.attachEvent("onmousedown",_120)}}}function sc_none(){return}function sc_delay(){if(window.sc_click_stat){var d=window.sc_click_stat}else{var d=0}var n=new Date();var t=n.getTime()+d;while(n.getTime()<t){var n=new Date()}}function sc_clickstat_call(_124,_125){var _126=window.sc_project;var _127=_12;var _128="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";if(typeof (window.sc_download_type)=="string"){_128=window.sc_download_type}var _129="https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";var _12a="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";var dl=new RegExp("\\.("+_128+")$","i");var lnk=new RegExp("^("+_129+"):","i");var _12d=new RegExp("^("+_12a+")$","i");var _12e=location.host.replace(/^www\./i,"");var _12f=_12e.split(".");var _130=_12f.pop();var _131=_12f.pop();if(_12d.test(_131)){_130=_131+"."+_130;_131=_12f.pop()}_130=_131+"."+_130;var _132="^https?://(.*)("+_130+"|webcache.googleusercontent.com)";var _133=new RegExp(_132,"i");if(_124){var _134=0;if(lnk.test(_124)){if((_133.test(_124))){if(dl.test(_124)){_134=1}else{if(window.sc_exit_link_detect&&new RegExp(sc_exit_link_detect,"i").test(_124)){_134=2}else{if(_c==2){_134=2}}}}else{_134=2}}if(_134!=0){var _135=escape(_124);if(_135.length>0){if(!_24){if(_134==2&&_1b!="disabled"){try{sessionStorage.setItem("statcounter_exit_domain",_135.split("/")[2].replace(/^www\./,""))}catch(ignore){}}}var _136=_125+"click.gif?sc_project="+_126+"&security="+_127+"&c="+_135+"&m="+_134+"&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random()+_1a;_136+=get_jg_rr_url_params();var _137=new Image();_137.onload=sc_none;_137.src=_136;if(_4._add_recording_event){_4._add_recording_event(_134==1?"download":_134==2?"exit":"unknown",{"link":unescape(_135)})}sc_delay()}}}}var _138="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";var _139="^aswift_[0-9]+$";var _13a;var _13b;var _13c;var _13d;function sc_adsense_click(_13e){var _13f=window.sc_project;var _140=_12;if(_13e.src.match(_138)){var _141=escape(_13e.src)}else{var _141=escape("Google Adsense "+_13e.width+"x"+_13e.height)}var _142=_f+"click.gif?sc_project="+_13f+"&security="+_140+"&c="+_141+"&m=2&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random()+_1a;_142+=get_jg_rr_url_params();if(!navigator.sendBeacon){var i=new Image();i.src=_142;sc_delay()}else{navigator.sendBeacon(_142,"")}if(_4._add_recording_event){_4._add_recording_event("adsense",{"link":unescape(_141)})}}function sc_adsense_init(){var _144=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var _145=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(_7&&(_144||_145)){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].id.substring(0,6)=="aswift"){el[i].addEventListener("mouseenter",function(e){sc_adsense_click(this)})}}}else{if(document.all&&typeof window.opera=="undefined"){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].src.match(_138)||el[i].id.match(_139)){el[i].onfocus=function(){sc_adsense_click(this)}}}}else{if(typeof window.addEventListener!="undefined"){var _149="unload";if(_7){_149="beforeunload";focus();window.addEventListener("blur",function(){var _14a=document.activeElement;_13c=_14a;_13d=new Date().getTime()})}window.addEventListener(_149,sc_exitpage,false);window.addEventListener("mousemove",sc_getmouse,true)}}}}function sc_getmouse(e){if(typeof e.pageX=="number"){_13a=e.pageX;_13b=e.pageY}else{if(typeof e.clientX=="number"){_13a=e.clientX;_13b=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){_13a+=document.body.scrollLeft;_13b+=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){_13a+=document.documentElement.scrollLeft;_13b+=document.documentElement.scrollTop}}}}}function sc_findy(obj){var y=0;while(obj){y+=obj.offsetTop;obj=obj.offsetParent}return (y)}function sc_findx(obj){var x=0;while(obj){x+=obj.offsetLeft;obj=obj.offsetParent}return (x)}function sc_exitpage(e){var ad=document.getElementsByTagName("iframe");if(typeof _13a!="undefined"){for(var i=0;i<ad.length;i++){var _153=sc_findx(ad[i]);var _154=sc_findy(ad[i]);var adW=parseInt(_153,10)+parseInt(ad[i].width,10)+15;var adH=parseInt(_154,10)+parseInt(ad[i].height,10)+10;var _157=(_13a>(_153-10)&&_13a<adW);var _158=(_13b>(_154-10)&&_13b<adH);if(_158&&_157){if(ad[i].src.match(_138)||ad[i].id.match(_139)){sc_adsense_click(ad[i])}}}}if(_7){if(typeof _13c!="undefined"&&_13c.id.substring(0,6)=="aswift"){var _159=new Date().getTime()-_13d;if(_159<300){sc_adsense_click(_13c)}}}}var _15a=0;function initiate_click_detection(){if(_c>0){if(_15a!=1){_15a=1;if(document.getElementsByTagName){var _15b=document.getElementsByTagName("a");var _15c=document.getElementsByTagName("area");for(var i=0;i<_15b.length;i++){var _15e=_15b[i];sc_process_anchor(_15e)}for(var i=0;i<_15c.length;i++){var _15e=_15c[i];if(typeof _15e.hasAttribute==="function"&&_15e.hasAttribute("href")){sc_process_anchor(_15e)}}}if(typeof window.addEventListener!="undefined"){window.addEventListener("load",sc_adsense_init,false)}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",sc_adsense_init,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",sc_adsense_init)}else{if(typeof window.onload=="function"){var _15f=onload;window.onload=function(){_15f();sc_adsense_init()}}else{window.onload=sc_adsense_init}}}}}}}initiate_click_detection();_4.update_cookie=function(_160,_161,_162){if(_161===undefined){_161=Math.round((new Date()).getTime()/1000)}var _163=_sessionStorageGetConfig("sc_project_time_difference_"+_160);var ret={};var _165="1.1.1.1.1.1.1.1.1";var _166="is_visitor_unique";try{var _167=getLocal(_166,_160)}catch(e){var _167=false;_19=".ex"}var _168=[];var _169=[];if(_167&&_167.substring(0,2)=="rx"){removeLocal(_166,_91);var _16a=_167.substring(2);_168=_16a.split("-");var _16b=false;var _16c=false;for(var i=0;i<_168.length;i++){var _16e=_168[i].split(".");if(parseInt(_16e[0],10)==_160){_16b=true;var _16f=parseInt(_16e[1],10);_4._returning_values[_160]=[];var _170=2;if(_16e[2].length==32){_19="."+_16e[2];_170=3}else{_19=_16c}for(var ir=0;ir<_27.length;ir++){var rval=parseInt(_16e[ir+_170],10);if(isNaN(rval)){rval=1}_4._returning_values[_160].push(rval)}ret["jg"]=_161-_16f;for(var ir=0;ir<_27.length;ir++){if(_162){_4._returning_values[_160][ir]++}else{if(_161>(_16f+60*_27[ir])){if(_27[ir]===_163){ret["session_incremented"]=true}_4._returning_values[_160][ir]++}}}ret["rr"]=_4._returning_values[_160].join(".");_169.push(""+_160+"."+_161+_19+"."+_4._returning_values[_160].join("."))}else{_169.push(_168[i]);if(i==0&&_16e[2].length==32&&_19==""){_19="."+_16e[2]}}if(i==0){_16c=_19}}if(!_16b){if(_169.length==0&&_19==""){_19="."+generate_uuid()}_169.push(""+_160+"."+_161+_19+"."+_165);_4._returning_values[_160]=_165.split(".");ret["jg"]="new";ret["rr"]=_165}_169.sort(function(a,b){return parseInt(b.split(".")[1],10)-parseInt(a.split(".")[1],10)});for(var iv=1;iv<_169.length;iv++){_169[iv]=_169[iv].replace("."+_169[0].split(".")[2]+".",".")}var _176=setLocal(_166,_169,_91,"rx",3,_160);if(!_176){}}else{if(_19!=".ex"){_19="."+generate_uuid();_169=[""+_160+"."+_161+_19+"."+_165];var _177=setLocal(_166,_169,_91,"rx",3,_160);if(_177){_4._returning_values[_160]=_165.split(".");ret["jg"]="new";ret["rr"]=_165}else{_19=".na"}}}if(_19!=""){ret["uuid_q"]="&u1="+_19.substring(1)}return ret};_4.get_visitor_id=function(){if(_19.length>1){return _19.substring(1)}return "x-no-visitor"};_4.get_session_num=function(_178){var _179=_sessionStorageGetConfig("sc_project_time_difference_"+_178);if(_179!=false&&_4._session_increment_calculated[_178]&&_4._returning_values[_178].length==_27.length){for(var i=0;i<_27.length;i++){if(_27[i]*60==parseInt(_179)){return _4._returning_values[_178][i]}}}return "x-no-session-num-"+Math.round(100000*Math.random())};_4.version=function(){return "d66238"};_4.get_tab_session=function(){var _17b=false;try{_17b=sessionStorage.getItem("statcounter_tab_session");if(!_17b){_17b=generate_uuid(8);try{sessionStorage.setItem("statcounter_tab_session",_17b)}catch(e){_17b=false}}}catch(e){_17b=false}if(_17b===false){session_tab_id="x-no-session-storage-"+Math.round(100000*Math.random())}else{return _17b}};_4.record=function(_17c,_17d){if(_17d===undefined){_17d="on"}else{}if(_17c===undefined||_17c==="on"||_17c==="dev"){console.log("Turning on session recording for p"+_2);_17c=_2}else{if(parseInt(_17c,10)+""==_17c){_17c=parseInt(_17c,10)}else{return}}_sessionStorageSetConfig("record_"+_17c,_17d);_c1(_17c)};_4.clickstat_call=sc_clickstat_call;_4._get_script_num=function(){return _5};return _4}catch(e){if(_3){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _17f="";for(var prop in e){_17f+="property: "+prop+" value: ["+e[prop]+"]\n"}_17f+="toString(): "+" value: ["+e.toString()+"]\n";var _181=new Image();_181.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(_17f)}_2a="";_1a="&u1=f2"}}(_statcounter);_statcounter.record_pageview();