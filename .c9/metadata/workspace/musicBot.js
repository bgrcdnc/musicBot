{"filter":false,"title":"musicBot.js","tooltip":"/musicBot.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":508,"column":100},"end":{"row":508,"column":101},"action":"insert","lines":["s"],"id":3526}],[{"start":{"row":508,"column":101},"end":{"row":508,"column":102},"action":"insert","lines":["o"],"id":3527}],[{"start":{"row":508,"column":102},"end":{"row":508,"column":103},"action":"insert","lines":["n"],"id":3528}],[{"start":{"row":508,"column":103},"end":{"row":508,"column":104},"action":"insert","lines":["g"],"id":3529}],[{"start":{"row":508,"column":104},"end":{"row":508,"column":105},"action":"insert","lines":["L"],"id":3530}],[{"start":{"row":508,"column":100},"end":{"row":508,"column":105},"action":"remove","lines":["songL"],"id":3531},{"start":{"row":508,"column":100},"end":{"row":508,"column":110},"action":"insert","lines":["songLength"]}],[{"start":{"row":508,"column":110},"end":{"row":508,"column":111},"action":"insert","lines":[" "],"id":3532}],[{"start":{"row":508,"column":111},"end":{"row":508,"column":112},"action":"insert","lines":["+"],"id":3533}],[{"start":{"row":508,"column":112},"end":{"row":508,"column":113},"action":"insert","lines":[" "],"id":3534}],[{"start":{"row":508,"column":113},"end":{"row":508,"column":114},"action":"insert","lines":["\""],"id":3535}],[{"start":{"row":508,"column":114},"end":{"row":508,"column":115},"action":"insert","lines":["]"],"id":3536}],[{"start":{"row":510,"column":85},"end":{"row":510,"column":114},"action":"insert","lines":["[\" + songs[i].songLength + \"]"],"id":3537}],[{"start":{"row":510,"column":85},"end":{"row":510,"column":86},"action":"insert","lines":[" "],"id":3538}],[{"start":{"row":593,"column":22},"end":{"row":594,"column":0},"action":"insert","lines":["",""],"id":3539},{"start":{"row":594,"column":0},"end":{"row":594,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":594,"column":4},"end":{"row":634,"column":6},"action":"insert","lines":["\"çl\":{","        hidden:\"1\",","        process: function(bot,msg,suffix) {","            try {","                if(checkPermission(msg.sender.id, \"dev\")) {","                    var args = suffix.split(' ');","                    var cmd = args.shift();","                    var pl = args.shift();","                    var s =  args.join(' ');","                    if(cmd == \"ekle\") {","                        playLists[pl].push(s);","                        updatePlayLists();","                        ytdl.getInfo(\"https://www.youtube.com/watch?v=\" + s, function(err, videoInfo) {","                            if(err) { ","                                bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesine eklendi.**\");","                            }","                            bot.sendMessage(msg.channel, \"**\\\"\" + videoInfo.title + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesine eklendi.**\");","                        });","                    } else if(cmd == \"sil\") {","                        if(playLists.hasOwnProperty(pl)) {","                            if(playLists[pl].indexOf(s) > -1) {","                                playLists[pl].splice(playLists[pl].indexOf(s), 1);","                                ytdl.getInfo(\"https://www.youtube.com/watch?v=\" + s, function(err, videoInfo) {","                                    if(err) { ","                                        bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesinden silindi.**\");","                                    }","                                    bot.sendMessage(msg.channel, \"**\\\"\" + videoInfo.title + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesinden silindi.**\");","                                });","                                updatePlayLists();","                            } else {","                            bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" id'si \\\"\" + pl + \"\\\" çalma listesinde bulunamadı.**\");","                            }","                        }","                    }","                }","            }","            catch (e){","                console.log(\"Error çl at \" + msg.channel.name + \" : \" + e);","            }","        }","    },"],"id":3540}],[{"start":{"row":634,"column":6},"end":{"row":635,"column":0},"action":"insert","lines":["",""],"id":3541},{"start":{"row":635,"column":0},"end":{"row":635,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":634,"column":6},"end":{"row":635,"column":4},"action":"remove","lines":["","    "],"id":3542}],[{"start":{"row":594,"column":5},"end":{"row":594,"column":7},"action":"remove","lines":["çl"],"id":3543},{"start":{"row":594,"column":5},"end":{"row":594,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":216,"column":41},"end":{"row":217,"column":0},"action":"insert","lines":["",""],"id":3544},{"start":{"row":217,"column":0},"end":{"row":217,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":217,"column":4},"end":{"row":217,"column":5},"action":"insert","lines":["i"],"id":3545}],[{"start":{"row":217,"column":5},"end":{"row":217,"column":6},"action":"insert","lines":["f"],"id":3546}],[{"start":{"row":217,"column":6},"end":{"row":217,"column":8},"action":"insert","lines":["()"],"id":3547}],[{"start":{"row":217,"column":7},"end":{"row":217,"column":8},"action":"insert","lines":["b"],"id":3548}],[{"start":{"row":217,"column":8},"end":{"row":217,"column":9},"action":"insert","lines":["o"],"id":3549}],[{"start":{"row":217,"column":9},"end":{"row":217,"column":10},"action":"insert","lines":["t"],"id":3550}],[{"start":{"row":217,"column":10},"end":{"row":217,"column":11},"action":"insert","lines":["."],"id":3551}],[{"start":{"row":217,"column":11},"end":{"row":217,"column":12},"action":"insert","lines":["c"],"id":3552}],[{"start":{"row":217,"column":11},"end":{"row":217,"column":12},"action":"remove","lines":["c"],"id":3553}],[{"start":{"row":217,"column":11},"end":{"row":217,"column":12},"action":"insert","lines":["v"],"id":3554}],[{"start":{"row":217,"column":12},"end":{"row":217,"column":13},"action":"insert","lines":["o"],"id":3555}],[{"start":{"row":217,"column":13},"end":{"row":217,"column":14},"action":"insert","lines":["i"],"id":3556}],[{"start":{"row":217,"column":14},"end":{"row":217,"column":15},"action":"insert","lines":["c"],"id":3557}],[{"start":{"row":217,"column":11},"end":{"row":217,"column":15},"action":"remove","lines":["voic"],"id":3558},{"start":{"row":217,"column":11},"end":{"row":217,"column":26},"action":"insert","lines":["voiceConnection"]}],[{"start":{"row":217,"column":27},"end":{"row":217,"column":28},"action":"insert","lines":[" "],"id":3559}],[{"start":{"row":217,"column":28},"end":{"row":217,"column":29},"action":"insert","lines":["{"],"id":3560}],[{"start":{"row":217,"column":29},"end":{"row":219,"column":5},"action":"insert","lines":["","        ","    }"],"id":3561}],[{"start":{"row":217,"column":4},"end":{"row":219,"column":5},"action":"remove","lines":["if(bot.voiceConnection) {","        ","    }"],"id":3562}],[{"start":{"row":218,"column":9},"end":{"row":219,"column":0},"action":"insert","lines":["",""],"id":3563},{"start":{"row":219,"column":0},"end":{"row":219,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":219,"column":8},"end":{"row":221,"column":5},"action":"insert","lines":["if(bot.voiceConnection) {","        ","    }"],"id":3564}],[{"start":{"row":216,"column":41},"end":{"row":217,"column":4},"action":"remove","lines":["","    "],"id":3565}],[{"start":{"row":218,"column":4},"end":{"row":218,"column":8},"action":"remove","lines":["    "],"id":3566}],[{"start":{"row":218,"column":0},"end":{"row":218,"column":4},"action":"remove","lines":["    "],"id":3567}],[{"start":{"row":218,"column":0},"end":{"row":218,"column":4},"action":"insert","lines":["    "],"id":3568}],[{"start":{"row":218,"column":29},"end":{"row":220,"column":5},"action":"remove","lines":["","        ","    }"],"id":3569}],[{"start":{"row":267,"column":11},"end":{"row":268,"column":0},"action":"insert","lines":["",""],"id":3570},{"start":{"row":268,"column":0},"end":{"row":268,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":268,"column":8},"end":{"row":268,"column":9},"action":"insert","lines":["}"],"id":3571},{"start":{"row":268,"column":0},"end":{"row":268,"column":8},"action":"remove","lines":["        "]},{"start":{"row":268,"column":0},"end":{"row":268,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":268,"column":4},"end":{"row":268,"column":8},"action":"insert","lines":["    "],"id":3572},{"start":{"row":267,"column":4},"end":{"row":267,"column":8},"action":"insert","lines":["    "]},{"start":{"row":266,"column":4},"end":{"row":266,"column":8},"action":"insert","lines":["    "]},{"start":{"row":265,"column":4},"end":{"row":265,"column":8},"action":"insert","lines":["    "]},{"start":{"row":264,"column":4},"end":{"row":264,"column":8},"action":"insert","lines":["    "]},{"start":{"row":263,"column":4},"end":{"row":263,"column":8},"action":"insert","lines":["    "]},{"start":{"row":262,"column":4},"end":{"row":262,"column":8},"action":"insert","lines":["    "]},{"start":{"row":261,"column":4},"end":{"row":261,"column":8},"action":"insert","lines":["    "]},{"start":{"row":260,"column":4},"end":{"row":260,"column":8},"action":"insert","lines":["    "]},{"start":{"row":259,"column":4},"end":{"row":259,"column":8},"action":"insert","lines":["    "]},{"start":{"row":258,"column":4},"end":{"row":258,"column":8},"action":"insert","lines":["    "]},{"start":{"row":257,"column":4},"end":{"row":257,"column":8},"action":"insert","lines":["    "]},{"start":{"row":256,"column":4},"end":{"row":256,"column":8},"action":"insert","lines":["    "]},{"start":{"row":255,"column":4},"end":{"row":255,"column":8},"action":"insert","lines":["    "]},{"start":{"row":254,"column":4},"end":{"row":254,"column":8},"action":"insert","lines":["    "]},{"start":{"row":253,"column":4},"end":{"row":253,"column":8},"action":"insert","lines":["    "]},{"start":{"row":252,"column":4},"end":{"row":252,"column":8},"action":"insert","lines":["    "]},{"start":{"row":251,"column":4},"end":{"row":251,"column":8},"action":"insert","lines":["    "]},{"start":{"row":250,"column":4},"end":{"row":250,"column":8},"action":"insert","lines":["    "]},{"start":{"row":249,"column":4},"end":{"row":249,"column":8},"action":"insert","lines":["    "]},{"start":{"row":248,"column":4},"end":{"row":248,"column":8},"action":"insert","lines":["    "]},{"start":{"row":247,"column":4},"end":{"row":247,"column":8},"action":"insert","lines":["    "]},{"start":{"row":246,"column":4},"end":{"row":246,"column":8},"action":"insert","lines":["    "]},{"start":{"row":245,"column":4},"end":{"row":245,"column":8},"action":"insert","lines":["    "]},{"start":{"row":244,"column":4},"end":{"row":244,"column":8},"action":"insert","lines":["    "]},{"start":{"row":243,"column":4},"end":{"row":243,"column":8},"action":"insert","lines":["    "]},{"start":{"row":242,"column":4},"end":{"row":242,"column":8},"action":"insert","lines":["    "]},{"start":{"row":241,"column":4},"end":{"row":241,"column":8},"action":"insert","lines":["    "]},{"start":{"row":240,"column":4},"end":{"row":240,"column":8},"action":"insert","lines":["    "]},{"start":{"row":239,"column":4},"end":{"row":239,"column":8},"action":"insert","lines":["    "]},{"start":{"row":238,"column":4},"end":{"row":238,"column":8},"action":"insert","lines":["    "]},{"start":{"row":237,"column":4},"end":{"row":237,"column":8},"action":"insert","lines":["    "]},{"start":{"row":236,"column":4},"end":{"row":236,"column":8},"action":"insert","lines":["    "]},{"start":{"row":235,"column":4},"end":{"row":235,"column":8},"action":"insert","lines":["    "]},{"start":{"row":234,"column":4},"end":{"row":234,"column":8},"action":"insert","lines":["    "]},{"start":{"row":233,"column":4},"end":{"row":233,"column":8},"action":"insert","lines":["    "]},{"start":{"row":232,"column":4},"end":{"row":232,"column":8},"action":"insert","lines":["    "]},{"start":{"row":231,"column":4},"end":{"row":231,"column":8},"action":"insert","lines":["    "]},{"start":{"row":230,"column":4},"end":{"row":230,"column":8},"action":"insert","lines":["    "]},{"start":{"row":229,"column":4},"end":{"row":229,"column":8},"action":"insert","lines":["    "]},{"start":{"row":228,"column":4},"end":{"row":228,"column":8},"action":"insert","lines":["    "]},{"start":{"row":227,"column":4},"end":{"row":227,"column":8},"action":"insert","lines":["    "]},{"start":{"row":226,"column":4},"end":{"row":226,"column":8},"action":"insert","lines":["    "]},{"start":{"row":225,"column":4},"end":{"row":225,"column":8},"action":"insert","lines":["    "]},{"start":{"row":224,"column":4},"end":{"row":224,"column":8},"action":"insert","lines":["    "]},{"start":{"row":223,"column":4},"end":{"row":223,"column":8},"action":"insert","lines":["    "]},{"start":{"row":222,"column":4},"end":{"row":222,"column":8},"action":"insert","lines":["    "]},{"start":{"row":221,"column":4},"end":{"row":221,"column":8},"action":"insert","lines":["    "]},{"start":{"row":220,"column":4},"end":{"row":220,"column":8},"action":"insert","lines":["    "]},{"start":{"row":219,"column":4},"end":{"row":219,"column":8},"action":"insert","lines":["    "]}],[{"start":{"row":222,"column":25},"end":{"row":222,"column":26},"action":"insert","lines":[" "],"id":3573}],[{"start":{"row":222,"column":26},"end":{"row":222,"column":27},"action":"insert","lines":["{"],"id":3574}],[{"start":{"row":268,"column":9},"end":{"row":268,"column":10},"action":"insert","lines":[" "],"id":3575}],[{"start":{"row":268,"column":10},"end":{"row":268,"column":11},"action":"insert","lines":["e"],"id":3576}],[{"start":{"row":268,"column":11},"end":{"row":268,"column":12},"action":"insert","lines":["l"],"id":3577}],[{"start":{"row":268,"column":12},"end":{"row":268,"column":13},"action":"insert","lines":["s"],"id":3578}],[{"start":{"row":268,"column":13},"end":{"row":268,"column":14},"action":"insert","lines":["e"],"id":3579}],[{"start":{"row":268,"column":14},"end":{"row":268,"column":15},"action":"insert","lines":[" "],"id":3580}],[{"start":{"row":268,"column":15},"end":{"row":268,"column":16},"action":"insert","lines":["{"],"id":3581}],[{"start":{"row":268,"column":16},"end":{"row":270,"column":9},"action":"insert","lines":["","            ","        }"],"id":3582}],[{"start":{"row":222,"column":26},"end":{"row":222,"column":27},"action":"remove","lines":["{"],"id":3583}],[{"start":{"row":222,"column":25},"end":{"row":222,"column":26},"action":"remove","lines":[" "],"id":3584}],[{"start":{"row":267,"column":0},"end":{"row":267,"column":4},"action":"remove","lines":["    "],"id":3585},{"start":{"row":266,"column":0},"end":{"row":266,"column":4},"action":"remove","lines":["    "]},{"start":{"row":265,"column":0},"end":{"row":265,"column":4},"action":"remove","lines":["    "]},{"start":{"row":264,"column":0},"end":{"row":264,"column":4},"action":"remove","lines":["    "]},{"start":{"row":263,"column":0},"end":{"row":263,"column":4},"action":"remove","lines":["    "]},{"start":{"row":262,"column":0},"end":{"row":262,"column":4},"action":"remove","lines":["    "]},{"start":{"row":261,"column":0},"end":{"row":261,"column":4},"action":"remove","lines":["    "]},{"start":{"row":260,"column":0},"end":{"row":260,"column":4},"action":"remove","lines":["    "]},{"start":{"row":259,"column":0},"end":{"row":259,"column":4},"action":"remove","lines":["    "]},{"start":{"row":258,"column":0},"end":{"row":258,"column":4},"action":"remove","lines":["    "]},{"start":{"row":257,"column":0},"end":{"row":257,"column":4},"action":"remove","lines":["    "]},{"start":{"row":256,"column":0},"end":{"row":256,"column":4},"action":"remove","lines":["    "]},{"start":{"row":255,"column":0},"end":{"row":255,"column":4},"action":"remove","lines":["    "]},{"start":{"row":254,"column":0},"end":{"row":254,"column":4},"action":"remove","lines":["    "]},{"start":{"row":253,"column":0},"end":{"row":253,"column":4},"action":"remove","lines":["    "]},{"start":{"row":252,"column":0},"end":{"row":252,"column":4},"action":"remove","lines":["    "]},{"start":{"row":251,"column":0},"end":{"row":251,"column":4},"action":"remove","lines":["    "]},{"start":{"row":250,"column":0},"end":{"row":250,"column":4},"action":"remove","lines":["    "]},{"start":{"row":249,"column":0},"end":{"row":249,"column":4},"action":"remove","lines":["    "]},{"start":{"row":248,"column":0},"end":{"row":248,"column":4},"action":"remove","lines":["    "]},{"start":{"row":247,"column":0},"end":{"row":247,"column":4},"action":"remove","lines":["    "]},{"start":{"row":246,"column":0},"end":{"row":246,"column":4},"action":"remove","lines":["    "]},{"start":{"row":245,"column":0},"end":{"row":245,"column":4},"action":"remove","lines":["    "]},{"start":{"row":244,"column":0},"end":{"row":244,"column":4},"action":"remove","lines":["    "]},{"start":{"row":243,"column":0},"end":{"row":243,"column":4},"action":"remove","lines":["    "]},{"start":{"row":242,"column":0},"end":{"row":242,"column":4},"action":"remove","lines":["    "]},{"start":{"row":241,"column":0},"end":{"row":241,"column":4},"action":"remove","lines":["    "]},{"start":{"row":240,"column":0},"end":{"row":240,"column":4},"action":"remove","lines":["    "]},{"start":{"row":239,"column":0},"end":{"row":239,"column":4},"action":"remove","lines":["    "]},{"start":{"row":238,"column":0},"end":{"row":238,"column":4},"action":"remove","lines":["    "]},{"start":{"row":237,"column":0},"end":{"row":237,"column":4},"action":"remove","lines":["    "]},{"start":{"row":236,"column":0},"end":{"row":236,"column":4},"action":"remove","lines":["    "]},{"start":{"row":235,"column":0},"end":{"row":235,"column":4},"action":"remove","lines":["    "]},{"start":{"row":234,"column":0},"end":{"row":234,"column":4},"action":"remove","lines":["    "]},{"start":{"row":233,"column":0},"end":{"row":233,"column":4},"action":"remove","lines":["    "]},{"start":{"row":232,"column":0},"end":{"row":232,"column":4},"action":"remove","lines":["    "]},{"start":{"row":231,"column":0},"end":{"row":231,"column":4},"action":"remove","lines":["    "]},{"start":{"row":230,"column":0},"end":{"row":230,"column":4},"action":"remove","lines":["    "]},{"start":{"row":229,"column":0},"end":{"row":229,"column":4},"action":"remove","lines":["    "]},{"start":{"row":228,"column":0},"end":{"row":228,"column":4},"action":"remove","lines":["    "]},{"start":{"row":227,"column":0},"end":{"row":227,"column":4},"action":"remove","lines":["    "]},{"start":{"row":226,"column":0},"end":{"row":226,"column":4},"action":"remove","lines":["    "]},{"start":{"row":225,"column":0},"end":{"row":225,"column":4},"action":"remove","lines":["    "]},{"start":{"row":224,"column":0},"end":{"row":224,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":270,"column":4},"end":{"row":270,"column":8},"action":"remove","lines":["    "],"id":3586}],[{"start":{"row":270,"column":4},"end":{"row":270,"column":8},"action":"insert","lines":["    "],"id":3587},{"start":{"row":269,"column":4},"end":{"row":269,"column":8},"action":"insert","lines":["    "]},{"start":{"row":268,"column":4},"end":{"row":268,"column":8},"action":"insert","lines":["    "]},{"start":{"row":267,"column":4},"end":{"row":267,"column":8},"action":"insert","lines":["    "]},{"start":{"row":266,"column":4},"end":{"row":266,"column":8},"action":"insert","lines":["    "]},{"start":{"row":265,"column":4},"end":{"row":265,"column":8},"action":"insert","lines":["    "]},{"start":{"row":264,"column":4},"end":{"row":264,"column":8},"action":"insert","lines":["    "]},{"start":{"row":263,"column":4},"end":{"row":263,"column":8},"action":"insert","lines":["    "]},{"start":{"row":262,"column":4},"end":{"row":262,"column":8},"action":"insert","lines":["    "]},{"start":{"row":261,"column":4},"end":{"row":261,"column":8},"action":"insert","lines":["    "]},{"start":{"row":260,"column":4},"end":{"row":260,"column":8},"action":"insert","lines":["    "]},{"start":{"row":259,"column":4},"end":{"row":259,"column":8},"action":"insert","lines":["    "]},{"start":{"row":258,"column":4},"end":{"row":258,"column":8},"action":"insert","lines":["    "]},{"start":{"row":257,"column":4},"end":{"row":257,"column":8},"action":"insert","lines":["    "]},{"start":{"row":256,"column":4},"end":{"row":256,"column":8},"action":"insert","lines":["    "]},{"start":{"row":255,"column":4},"end":{"row":255,"column":8},"action":"insert","lines":["    "]},{"start":{"row":254,"column":4},"end":{"row":254,"column":8},"action":"insert","lines":["    "]},{"start":{"row":253,"column":4},"end":{"row":253,"column":8},"action":"insert","lines":["    "]},{"start":{"row":252,"column":4},"end":{"row":252,"column":8},"action":"insert","lines":["    "]},{"start":{"row":251,"column":4},"end":{"row":251,"column":8},"action":"insert","lines":["    "]},{"start":{"row":250,"column":4},"end":{"row":250,"column":8},"action":"insert","lines":["    "]},{"start":{"row":249,"column":4},"end":{"row":249,"column":8},"action":"insert","lines":["    "]},{"start":{"row":248,"column":4},"end":{"row":248,"column":8},"action":"insert","lines":["    "]},{"start":{"row":247,"column":4},"end":{"row":247,"column":8},"action":"insert","lines":["    "]},{"start":{"row":246,"column":4},"end":{"row":246,"column":8},"action":"insert","lines":["    "]},{"start":{"row":245,"column":4},"end":{"row":245,"column":8},"action":"insert","lines":["    "]},{"start":{"row":244,"column":4},"end":{"row":244,"column":8},"action":"insert","lines":["    "]},{"start":{"row":243,"column":4},"end":{"row":243,"column":8},"action":"insert","lines":["    "]},{"start":{"row":242,"column":4},"end":{"row":242,"column":8},"action":"insert","lines":["    "]},{"start":{"row":241,"column":4},"end":{"row":241,"column":8},"action":"insert","lines":["    "]},{"start":{"row":240,"column":4},"end":{"row":240,"column":8},"action":"insert","lines":["    "]},{"start":{"row":239,"column":4},"end":{"row":239,"column":8},"action":"insert","lines":["    "]},{"start":{"row":238,"column":4},"end":{"row":238,"column":8},"action":"insert","lines":["    "]},{"start":{"row":237,"column":4},"end":{"row":237,"column":8},"action":"insert","lines":["    "]},{"start":{"row":236,"column":4},"end":{"row":236,"column":8},"action":"insert","lines":["    "]},{"start":{"row":235,"column":4},"end":{"row":235,"column":8},"action":"insert","lines":["    "]},{"start":{"row":234,"column":4},"end":{"row":234,"column":8},"action":"insert","lines":["    "]},{"start":{"row":233,"column":4},"end":{"row":233,"column":8},"action":"insert","lines":["    "]},{"start":{"row":232,"column":4},"end":{"row":232,"column":8},"action":"insert","lines":["    "]},{"start":{"row":231,"column":4},"end":{"row":231,"column":8},"action":"insert","lines":["    "]},{"start":{"row":230,"column":4},"end":{"row":230,"column":8},"action":"insert","lines":["    "]},{"start":{"row":229,"column":4},"end":{"row":229,"column":8},"action":"insert","lines":["    "]},{"start":{"row":228,"column":4},"end":{"row":228,"column":8},"action":"insert","lines":["    "]},{"start":{"row":227,"column":4},"end":{"row":227,"column":8},"action":"insert","lines":["    "]},{"start":{"row":226,"column":4},"end":{"row":226,"column":8},"action":"insert","lines":["    "]},{"start":{"row":225,"column":4},"end":{"row":225,"column":8},"action":"insert","lines":["    "]},{"start":{"row":224,"column":4},"end":{"row":224,"column":8},"action":"insert","lines":["    "]},{"start":{"row":223,"column":4},"end":{"row":223,"column":8},"action":"insert","lines":["    "]},{"start":{"row":222,"column":4},"end":{"row":222,"column":8},"action":"insert","lines":["    "]},{"start":{"row":221,"column":4},"end":{"row":221,"column":8},"action":"insert","lines":["    "]},{"start":{"row":220,"column":4},"end":{"row":220,"column":8},"action":"insert","lines":["    "]},{"start":{"row":219,"column":4},"end":{"row":219,"column":8},"action":"insert","lines":["    "]},{"start":{"row":218,"column":4},"end":{"row":218,"column":8},"action":"insert","lines":["    "]}],[{"start":{"row":270,"column":8},"end":{"row":270,"column":12},"action":"insert","lines":["    "],"id":3588}],[{"start":{"row":270,"column":8},"end":{"row":270,"column":12},"action":"remove","lines":["    "],"id":3589}],[{"start":{"row":270,"column":8},"end":{"row":270,"column":12},"action":"insert","lines":["    "],"id":3590}],[{"start":{"row":218,"column":4},"end":{"row":218,"column":8},"action":"remove","lines":["    "],"id":3591}],[{"start":{"row":218,"column":4},"end":{"row":218,"column":8},"action":"insert","lines":["    "],"id":3592}],[{"start":{"row":268,"column":11},"end":{"row":268,"column":12},"action":"remove","lines":[" "],"id":3593}],[{"start":{"row":268,"column":10},"end":{"row":268,"column":11},"action":"remove","lines":[" "],"id":3594}],[{"start":{"row":268,"column":9},"end":{"row":268,"column":10},"action":"remove","lines":[" "],"id":3595}],[{"start":{"row":268,"column":8},"end":{"row":268,"column":9},"action":"remove","lines":[" "],"id":3596}],[{"start":{"row":270,"column":8},"end":{"row":270,"column":12},"action":"remove","lines":["    "],"id":3597}],[{"start":{"row":270,"column":4},"end":{"row":270,"column":8},"action":"remove","lines":["    "],"id":3598}],[{"start":{"row":270,"column":4},"end":{"row":270,"column":8},"action":"insert","lines":["    "],"id":3599}],[{"start":{"row":269,"column":12},"end":{"row":269,"column":16},"action":"remove","lines":["    "],"id":3600}],[{"start":{"row":269,"column":8},"end":{"row":269,"column":12},"action":"remove","lines":["    "],"id":3601}],[{"start":{"row":269,"column":4},"end":{"row":269,"column":8},"action":"remove","lines":["    "],"id":3602}],[{"start":{"row":269,"column":0},"end":{"row":269,"column":4},"action":"remove","lines":["    "],"id":3603}],[{"start":{"row":268,"column":16},"end":{"row":269,"column":0},"action":"remove","lines":["",""],"id":3604}],[{"start":{"row":268,"column":16},"end":{"row":269,"column":0},"action":"insert","lines":["",""],"id":3605},{"start":{"row":269,"column":0},"end":{"row":269,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":269,"column":12},"end":{"row":272,"column":5},"action":"insert","lines":["if(!discoChannel) {","        discoChannel = bot.channels.get(\"id\", \"150668333010649088\");","        bot.joinVoiceChannel(discoChannel);","    }"],"id":3606}],[{"start":{"row":272,"column":4},"end":{"row":272,"column":8},"action":"insert","lines":["    "],"id":3607},{"start":{"row":271,"column":4},"end":{"row":271,"column":8},"action":"insert","lines":["    "]},{"start":{"row":270,"column":4},"end":{"row":270,"column":8},"action":"insert","lines":["    "]}],[{"start":{"row":272,"column":8},"end":{"row":272,"column":12},"action":"insert","lines":["    "],"id":3608},{"start":{"row":271,"column":8},"end":{"row":271,"column":12},"action":"insert","lines":["    "]},{"start":{"row":270,"column":8},"end":{"row":270,"column":12},"action":"insert","lines":["    "]}],[{"start":{"row":272,"column":13},"end":{"row":272,"column":14},"action":"insert","lines":[" "],"id":3609}],[{"start":{"row":272,"column":14},"end":{"row":272,"column":15},"action":"insert","lines":["e"],"id":3610}],[{"start":{"row":272,"column":15},"end":{"row":272,"column":16},"action":"insert","lines":["l"],"id":3611}],[{"start":{"row":272,"column":16},"end":{"row":272,"column":17},"action":"insert","lines":["s"],"id":3612}],[{"start":{"row":272,"column":17},"end":{"row":272,"column":18},"action":"insert","lines":["e"],"id":3613}],[{"start":{"row":272,"column":18},"end":{"row":272,"column":19},"action":"insert","lines":[" "],"id":3614}],[{"start":{"row":272,"column":19},"end":{"row":272,"column":20},"action":"insert","lines":["i"],"id":3615}],[{"start":{"row":272,"column":20},"end":{"row":272,"column":21},"action":"insert","lines":["f"],"id":3616}],[{"start":{"row":272,"column":21},"end":{"row":272,"column":23},"action":"insert","lines":["()"],"id":3617}],[{"start":{"row":272,"column":19},"end":{"row":272,"column":23},"action":"remove","lines":["if()"],"id":3618}],[{"start":{"row":272,"column":18},"end":{"row":272,"column":19},"action":"remove","lines":[" "],"id":3619}],[{"start":{"row":272,"column":18},"end":{"row":272,"column":19},"action":"insert","lines":[" "],"id":3620}],[{"start":{"row":272,"column":19},"end":{"row":272,"column":20},"action":"insert","lines":["{"],"id":3621}],[{"start":{"row":272,"column":20},"end":{"row":274,"column":13},"action":"insert","lines":["","                ","            }"],"id":3622}],[{"start":{"row":273,"column":16},"end":{"row":273,"column":51},"action":"insert","lines":["bot.joinVoiceChannel(discoChannel);"],"id":3623}],[{"start":{"row":607,"column":16},"end":{"row":637,"column":17},"action":"remove","lines":["if(checkPermission(msg.sender.id, \"dev\")) {","                    var args = suffix.split(' ');","                    var cmd = args.shift();","                    var pl = args.shift();","                    var s =  args.join(' ');","                    if(cmd == \"ekle\") {","                        playLists[pl].push(s);","                        updatePlayLists();","                        ytdl.getInfo(\"https://www.youtube.com/watch?v=\" + s, function(err, videoInfo) {","                            if(err) { ","                                bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesine eklendi.**\");","                            }","                            bot.sendMessage(msg.channel, \"**\\\"\" + videoInfo.title + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesine eklendi.**\");","                        });","                    } else if(cmd == \"sil\") {","                        if(playLists.hasOwnProperty(pl)) {","                            if(playLists[pl].indexOf(s) > -1) {","                                playLists[pl].splice(playLists[pl].indexOf(s), 1);","                                ytdl.getInfo(\"https://www.youtube.com/watch?v=\" + s, function(err, videoInfo) {","                                    if(err) { ","                                        bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesinden silindi.**\");","                                    }","                                    bot.sendMessage(msg.channel, \"**\\\"\" + videoInfo.title + \"\\\" şarkısı \\\"\" + pl + \"\\\" çalma listesinden silindi.**\");","                                });","                                updatePlayLists();","                            } else {","                            bot.sendMessage(msg.channel, \"**\\\"\" + s + \"\\\" id'si \\\"\" + pl + \"\\\" çalma listesinde bulunamadı.**\");","                            }","                        }","                    }","                }"],"id":3624}],[{"start":{"row":607,"column":16},"end":{"row":612,"column":13},"action":"insert","lines":["if(!discoChannel) {","                discoChannel = bot.channels.get(\"id\", \"150668333010649088\");","                bot.joinVoiceChannel(discoChannel);","            } else {","                bot.joinVoiceChannel(discoChannel);","            }"],"id":3625}],[{"start":{"row":612,"column":12},"end":{"row":612,"column":16},"action":"insert","lines":["    "],"id":3626},{"start":{"row":611,"column":12},"end":{"row":611,"column":16},"action":"insert","lines":["    "]},{"start":{"row":610,"column":12},"end":{"row":610,"column":16},"action":"insert","lines":["    "]},{"start":{"row":609,"column":12},"end":{"row":609,"column":16},"action":"insert","lines":["    "]},{"start":{"row":608,"column":12},"end":{"row":608,"column":16},"action":"insert","lines":["    "]}]]},"ace":{"folds":[{"start":{"row":0,"column":9},"end":{"row":2,"column":2},"placeholder":"..."},{"start":{"row":4,"column":16},"end":{"row":22,"column":2},"placeholder":"..."},{"start":{"row":23,"column":15},"end":{"row":42,"column":2},"placeholder":"..."},{"start":{"row":43,"column":11},"end":{"row":62,"column":2},"placeholder":"..."},{"start":{"row":63,"column":25},"end":{"row":65,"column":2},"placeholder":"..."},{"start":{"row":66,"column":17},"end":{"row":77,"column":2},"placeholder":"..."},{"start":{"row":180,"column":28},"end":{"row":214,"column":0},"placeholder":"..."},{"start":{"row":304,"column":13},"end":{"row":313,"column":4},"placeholder":"..."},{"start":{"row":314,"column":14},"end":{"row":336,"column":1},"placeholder":"..."},{"start":{"row":337,"column":9},"end":{"row":431,"column":4},"placeholder":"..."},{"start":{"row":432,"column":11},"end":{"row":445,"column":1},"placeholder":"..."},{"start":{"row":446,"column":15},"end":{"row":459,"column":1},"placeholder":"..."},{"start":{"row":460,"column":13},"end":{"row":473,"column":1},"placeholder":"..."},{"start":{"row":474,"column":10},"end":{"row":504,"column":1},"placeholder":"..."},{"start":{"row":505,"column":11},"end":{"row":529,"column":4},"placeholder":"..."},{"start":{"row":530,"column":9},"end":{"row":544,"column":1},"placeholder":"..."},{"start":{"row":545,"column":14},"end":{"row":585,"column":1},"placeholder":"..."},{"start":{"row":586,"column":13},"end":{"row":601,"column":1},"placeholder":"..."},{"start":{"row":619,"column":10},"end":{"row":659,"column":4},"placeholder":"..."},{"start":{"row":660,"column":13},"end":{"row":686,"column":4},"placeholder":"..."},{"start":{"row":687,"column":19},"end":{"row":703,"column":4},"placeholder":"..."},{"start":{"row":704,"column":16},"end":{"row":742,"column":4},"placeholder":"..."},{"start":{"row":743,"column":18},"end":{"row":766,"column":4},"placeholder":"..."},{"start":{"row":767,"column":7},"end":{"row":784,"column":1},"placeholder":"..."},{"start":{"row":785,"column":12},"end":{"row":792,"column":1},"placeholder":"..."},{"start":{"row":795,"column":13},"end":{"row":919,"column":2},"placeholder":"..."}],"scrolltop":2830,"scrollleft":0,"selection":{"start":{"row":604,"column":19},"end":{"row":604,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":431,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1456159566793,"hash":"4dd9810b763ba46e76110c51a2524962d207d84c"}