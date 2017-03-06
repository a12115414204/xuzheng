$(function(){
	//给背景图片赋值屏幕高度
	var 	heights	= $("body").height();
	$(".backgrounds").height(heights);
	//图片预加载
	var n = 0;
	var imgs =["img/jiazai/page-home-loddingbackground.png",
			"img/jiazai/page-home-loddingfont.png",
			"img/background/word_bg.jpeg",
			"img/planet/planet1.png",
			"img/planet/planet2.png",
			"img/planet/planet3.png",
			"img/superan/super_glasses.png",
			"img/superan/super_head.png",
			"img/superan/superman1.png",
			"img/phoneBroken/phone.png",
			"img/music/music-on.png",
			"img/music/music-off.png",
			"img/planet/planet1.png",
			"img/planet/planet2.png",
			"img/planet/planet3.png",
			"img/planet/planet4.png",
			"img/superan/super_glasses.png",
			"img/superan/super_head.png",
			"img/superan/superman1.png",
			"img/phoneBroken/phone.png",
			"img/phoneBroken/chip1.png",
			"img/phoneBroken/chip2.png",
			"img/phoneBroken/chip3.png",
			"img/phoneBroken/chip4.png",
			"img/phoneBroken/chip5.png",
			"img/phoneBroken/chip6.png",
			"img/phoneBroken/chip7.png",
			"img/phoneBroken/chip8.png",
			"img/phoneBroken/xuzheng2.png",
			"img/phoneBroken/xuzheng4.png",
			"img/phoneBroken/xuzheng7.png",
			"img/phoneBroken/xuzheng1.png",
			"img/phoneBroken/xuzheng8.png",
			"img/phoneBroken/xuzheng3.png",
			"img/phoneBroken/xuzheng5.png",
			"img/phoneBroken/xuzheng6.png",
			"img/planet/planet2/planet5.png",
			"img/planet/planet2/planet6.png",
			"img/planet/planet2/planet7.png",
			"img/planet/planet2/planet8.png",
			"img/planet/planet2/planet9.png",
			"img/planet/planet2/planet10.png",
			"img/planet/planet2/planet11.png",
			"img/planet/planet2/planet12.png"
		];
	for (var i = 0 ; i < imgs.length;i++) {
		var img = new Image();
		img.onload = function(){
			n++;
			if(n == imgs.length){
				loadingremove();
				divfonts();
				musics();
			}
		};
		img.src = imgs[i];
	}
	//加载元素隐藏.
	var loadingremove =	function (){
		$(".loadIng").css("display","none");
	};
	//音乐播放函数 音乐静音按钮
	var musics = function(){
		//打字音乐
		var dazi = document.getElementById("dazi");
		var backgroundmusic = document.getElementById("backgroundmusic");
        //音乐自动播放
        if (dazi.paused) {
			dazi.play();
		};
		if (backgroundmusic.paused) {
			backgroundmusic.play();
		};
		//获取音乐按钮图片
		var musicbtns = $("#music_on").get(0);
		var bgmusic = $("#backgroundmusic").get(0);
		var countdowns = $("#countdown").get(0);
		var falg = true;
		//jQ版 点击事件  兼容火狐 谷歌
		$("#music_on").click(function(){
			if (falg) {
				$("#music_on").attr("src","img/music/music-off.png");
				falg = false;
//              dazi.pause();
                backgroundmusic.pause();
               
			}else{
				$("#music_on").attr("src","img/music/music-on.png");
				falg = true;
//              dazi.play();
                backgroundmusic.play();
			}
		});
		// 移动版点击事件模块  兼容谷歌
//		musicbtns.addEventListener('touchstart',function(){
//			if (falg) {
//				console.log("aaa");
//				$("#music_on").attr("src","img/music/music-off.png");
//				falg = false;
//              dazi.pause();
//              backgroundmusic.pause();
//             
//			}else{
//				console.log("bbb");
//				$("#music_on").attr("src","img/music/music-on.png");
//				falg = true;
//              dazi.play();
//              backgroundmusic.play();
//			}
//		},false);
	};
	//主页面函数-文字控制
	var divfonts = function(){
		var divfont = $(".background_font");
		var 	dazi = document.getElementById("dazi");
		var num = 0;
		var workarr = ["公元9025年", "外星人为了争夺", "封印在vivo手机中的神秘能量",
        "发起宇宙战乱", "超人徐峥为了保卫神秘能量", "带着手机来到浩瀚宇宙中",
        "分身成为8个自己", "分别保卫8块手机碎片", "消失在太阳系的八大行星中",
        "据说找齐徐峥的8个分身", "就能启动神秘能量保护地球", "...", ""];
        //创建动画 自动打字说明
        var times = null;
        var planet3s = null;
        var fontremove = null;
        var xuzhengstart = null;
        var xuzhengremoves = null;
        var videoplane =null;
        var planetremove = null;
        var videohidden = null;
        var suipianfens = null;
        var xuzhengheadxs = null;
        var debrisremoves = null;
        var xuzhengparientstart = null;
        var xuzhengplanetremoves =null;
        if(times){
        		clearInterval(times);
        		times = null;
        }
        times = setInterval(function(){
        		divfont.append($("<p>"+workarr[num]+"</p>"));
        		divfont.append($("</br>"));
        		if (num >= 12) {
        			//打字声音关闭
        			dazi.pause();
        			clearInterval(times);
        			divfont.attr("id","background_fonts");
        			//文字消失删除
        			if (fontremove) {
        				clearInterval(fontremove);
        				fontremove = null;
        			}
        			fontremove = setInterval(function(){
        				clearInterval(fontremove);
        				fontremove = null;
        				
        				divfont.remove();
        				planet3();
        				planet4();
        				//徐峥整体移动
        				xuzhengdong();
        				//徐峥开始前的行星移动
        				if (planet3s) {
        					clearInterval(planet3s);
        					planet3s = null;
        				}
        				planet3s = setInterval(function(){
        					clearInterval(planet3s);
        					planet3s = null;
        					planets3();
        					planets4();
        					//徐峥停止
        					xuzhengstop();						
 						//徐峥停止2秒钟后再次移动
 						if (xuzhengstart) {
 							clearInterval(xuzhengstart);
 							xuzhengstart =null;
 						}
 						xuzhengstart = setInterval(function(){
 							clearInterval(xuzhengstart);
 							xuzhengstart = null;
 							//再次移动函数
 							xuzhengstartss();
 							//徐峥移动完成后将删除
 							if (xuzhengremoves) {
 								clearInterval(xuzhengremoves);
 								xuzhengremoves = null;
 							}
	 						xuzhengremoves = setInterval(function(){
	 							clearInterval(xuzhengremoves);
	 							xuzhengremoves = null;
	 							
	 							xuzhengremove();
	 							//徐峥走后 video手机出现
	 							videohanshu();
	 							//手机出现完毕之后,四个所有的星球将全部渐变隐藏
	 							if (videoplane) {
	 								clearInterval(videoplane);
	 								videoplane = null;
	 							}
	 							videoplane = setInterval(function(){
	 								clearInterval(videoplane);
	 								videoplane = null;
	 								//四个星球消失
	 								planetfour();
	 								//消失后将删除掉这四个星球 然后碎片展示出来
	 								if (planetremove) {
	 									clearInterval(planetremove);
	 									planetremove = null;
	 								}
	 								planetremove = setInterval(function(){
	 									clearInterval(planetremove);
	 									planetremove = null;
	 									//四个星球删除
	 									planetremoves();
	 									//碎片展示
	 									suipian();
	 									//碎片显示出后 video手机消失
	 									if (videohidden) {
	 										clearInterval(videohidden);
	 										videohidden = null;
	 									}
	 									videohidden = setInterval(function(){
	 										clearInterval(videohidden);
	 										videohidden = null;
	 										//video手机消失
	 										videohiddens();
	 										//手机消失后碎片分裂
	 										if (suipianfens) {
	 											clearInterval(suipianfens);
	 											suipianfens = null;
	 										}
	 										suipianfens = setInterval(function(){
	 											clearInterval(suipianfens);
	 											suipianfens = null;
	 											//碎片开始分裂
	 											suipianfen();
	 											//碎片分裂后徐峥头像出现在碎片中
	 											if (xuzhengheadxs) {
	 												clearInterval(xuzhengheadxs);
	 												xuzhengheadxs = null;
	 											}
	 											xuzhengheadxs = setInterval(function(){
	 												clearInterval(xuzhengheadxs);
	 												xuzhengheadxs = null;
	 												//徐峥头像在碎片中开始显示
	 												xuzhengheadxianshi();
	 												//徐峥头像出现时其他星球也出现
	 												planetdebris();
	 												if (debrisremoves) {
	 													clearInterval(debrisremoves);
	 													debrisremoves = null;
	 												}
	 												debrisremoves = setInterval(function(){
	 													clearInterval(debrisremoves);
	 													debrisremoves = null;
	 													//其他星球出现后背景碎片删除
	 													debrisremove();
	 													//星球背后碎片移除后 徐峥头像碎片进入星球
	 													if (xuzhengparientstart) {
	 														clearInterval(xuzhengparientstart);
	 														xuzhengparientstart = null;
	 													}
	 													xuzhengparientstart = setInterval(function(){
	 														clearInterval(xuzhengparientstart);
	 														xuzhengparientstart = null;
	 														//徐峥头像开始移动到星球
	 														xuzhengplanetstart();
	 														//徐峥头像进入星球后进行删除掉徐峥碎片
	 														if (xuzhengplanetremoves) {
	 															clearInterval(xuzhengplanetremoves);
	 															xuzhengplanetremoves = null;
	 														}
	 														xuzhengplanetremoves = setInterval(function(){
	 															clearInterval(xuzhengplanetremoves);
	 															xuzhengplanetremoves = null;
	 															//徐峥删除
	 															xuzhengplanetremove();
	 															//启动能量找徐峥
	 															xuzhengwenzi();
	 														},2000);
	 													},300);
	 												},300);
	 											},300);
	 										},1000);
	 									},1500);
	 								},2000);
	 							},1000);
	 						},1000);
 						},2000);
        				},1000);
        			},3000);
        		}
        		num++;
        },700);
	}
	//徐峥移动前的星球移动 
	var planet3 = function(){
		$("#planet3").attr("id","planet3s");
	};
	var planets3 = function(){
		$("#planet3s").attr("id","planet3ss");
	};
	var planet4 = function(){
		$("#planet4").attr("id","planet4s");
	}
	var planets4 = function(){
		$("#planet4s").attr("id","planet4ss");
	}
	//徐峥背景图片变动
	var xuzheng = function(){
		var xzbeidong = null;
		var n = 1;
		if (xzbeidong) {
			clearInterval(xzbeidong);
			xzbeidong = null;
		}
		xzbeidong = setInterval(function(){
			$("#superman").attr("src","img/superan/superman"+n+".png");
			n++;
			if (n >= 3) {
				n = 1;
			}
		},500);	
	};
	xuzheng();
	//徐峥整体移动
	var xuzhengdong = function(){
		$(".xuzheng").attr("class","xuzhengdong");
	}
	//徐峥整体暂停一会
	var xuzhengstop = function(){
		$(".xuzhengdong").attr("class","xuzhengting");
	}
	//徐峥整体暂停一会后再次移动
	var xuzhengstartss = function(){
		$(".xuzhengting").attr("class","xuzhengstarts");
	}
	//徐峥移动完成后删除
	var xuzhengremove = function(){
		$(".xuzhengstarts").remove();
	}
	//徐峥走后video手机出现
	var videohanshu = function(){
		$(".video").attr("class","videoss");
	}
	//手机出现完毕后四个星球将渐变消失
	var planetfour = function(){
		$(".planet").attr("id","jianbianxiaoshi");
	}
	//四星球消失后将删除
	var planetremoves = function(){
		$(".planet").css("display","none");
	}
	//星球消失手机碎片出现
	var suipian = function(){
		$(".debris").attr("id","zhanshi");
	}
	//碎片出现后video手机消失
	var videohiddens = function(){
		$(".videoss").attr("class","videohidden");
	}
	//手机消失后碎片分裂
	var suipianfen = function(){
		$("#chip1").attr("id","chip1s");	
		$("#chip2").attr("id","chip2s");	
		$("#chip3").attr("id","chip3s");	
		$("#chip4").attr("id","chip4s");	
		$("#chip5").attr("id","chip5s");	
		$("#chip6").attr("id","chip6s");	
		$("#chip7").attr("id","chip7s");	
		$("#chip8").attr("id","chip8s");	
	};
	//碎片分裂后徐峥头像全部在碎片中出现
	var xuzhengheadxianshi = function(){
		$(".xuzhenghead").attr("class","xuzhengheads");
	};
	//碎片中徐峥出现时,其他星球也出现
	var planetdebris = function(){
		$(".planets").attr("id","planetdebris");
	}
	//其他星球出现后徐峥头部后面的碎片叠合的碎片删除
	var debrisremove = function(){
		$(".debris").attr("id","zhanshis");
	};
	//碎片删除后徐峥所有碎片图像开始移动进入星球
	var xuzhengplanetstart = function(){
		$("#xuzheng1").attr("class","xuzheng1s");
		$("#xuzheng2").attr("class","xuzheng2s");
		$("#xuzheng3").attr("class","xuzheng3s");
		$("#xuzheng4").attr("class","xuzheng4s");
		$("#xuzheng5").attr("class","xuzheng5s");
		$("#xuzheng6").attr("class","xuzheng6s");
		$("#xuzheng7").attr("class","xuzheng7s");
		$("#xuzheng8").attr("class","xuzheng8s");
	}
	//徐峥头像进入星球后删除
	var xuzhengplanetremove = function(){
		$(".xuzhengheads").remove();	
	};
	//徐峥进入星球后 启动找徐峥文字
	var xuzhengwenzi = function(){
		$(".tubiao").attr("id","tubiaos");
		$(".tubiao").click(function(){
			$(".gamexulaoshi").css("opacity","1");
			$(".gamexulaoshi").css("z-index","1");
			//游戏正式开始
	 		gameOver();
		});
		
	}
//===============================进入游戏模式=============================	
	var gameOver = function(){
		//图片再次预加载
	var xuzhengarray = [
		"img/chuangguan/diyiguan/diyiguan.png",
		"img/chuangguan/diyiguan/baobei.png",
		"img/chuangguan/diyiguan/xuzheng.png",
		"img/chuangguan/diyiguan/diyiguantan.png",
		"img/chuangguan/dierguan/dierguan.png",
		"img/chuangguan/dierguan/dierguantan.png",
		"img/chuangguan/disanguan/disanguantan.png",
		"img/chuangguan/disanguan/disiguan.png",
		"img/chuangguan/diyiguan/diyiguansuipian.png",
		"img/chuangguan/fourguan/four.png",
		"img/chuangguan/fourguan/fourtan.png",
		"img/chuangguan/fiveguan/five.png",
		"img/chuangguan/fiveguan/fivelian.png",
		"img/chuangguan/fiveguan/fivetan.png",
		"img/chuangguan/sixguan/six.png",
		"img/chuangguan/sixguan/sixtan.png",
		"img/chuangguan/seven/seven.png",
		"img/chuangguan/seven/seventan.png",
		"img/chuangguan/eight/eight.png",
		"img/chuangguan/eight/eighttan.png"
	];
	//创建图片预加载延时
	var ns = 0;
	var xuyanshi = null;
	for (var i = 0;i < xuzhengarray.length;i++) {
		var img = new Image();
		img.onload = function(){
			ns++;
			if (ns == xuzhengarray.length) {	
				if (xuyanshi) {
					clearInterval(xuyanshi);
					xuyanshi = null;
				}
				xuyanshi = setTimeout(function(){
					clearInterval(xuyanshi);
					xuyanshi = null;
					//第一关开始
					lessnfirst();
					//徐老师删除掉
					xulaoshiremove();
					//按钮倒计时音乐开启
					musicOVER();
				},2000);
			}
		};
		img.src = xuzhengarray[i];
	};
		var musicOVER = function(){
			//打字音乐
			var 	dazi = $("#dazi").get(0);
			var backgroundmusic = $("#backgroundmusic").get(0);
	        //获取音乐按钮图片
			var musicbtns = $("#music_on").get(0);
			var bgmusic = $("#backgroundmusic").get(0);
			var countdowns = $("#countdown").get(0);
	        //打字声音永久暂停
			dazi.pause();
			//音乐自动播放
			if (backgroundmusic.paused) {
				backgroundmusic.play();
			};
			//倒计时音效打开
			if (countdowns.paused) {
				countdowns.play();
			}
			var falg = true;
			musicbtns.addEventListener('touchstart',function(){
				if (falg) {
					$("#music_on").attr("src","img/music/music-off.png");
					falg = false;
					dazi.pause();
	         		countdowns.pause();
	                backgroundmusic.pause();
	               
				}else{
					$("#music_on").attr("src","img/music/music-on.png");
					falg = true;
					dazi.pause();
	                countdowns.play();
	                backgroundmusic.play();
				}
			},false);
		};	
		//徐老师删除,后台徐峥游戏开始
		var xulaoshiremove = function(){
			$(".gamexulaoshi").css("display","none");	
		};
		//时间倒计时
		var timem = null;
		var times = null;
		var gameovers = null;
		var timescountdown = function(a,b,c){
			var m = a||29;
			var s = b||99;
			if (timem) {
				clearInterval(timem);
				timem = null;
			}
			if (times) {
				clearInterval(times);
				times = null;
			}
			timem = setInterval(function(){
				if (m <= 0) {
					m = 0;
				}
				if (c) {
					$("#m"+c).text(m);
				}else{
					$("#m").text(m);
				}
				m = m -1;
			},1000);
			times = setInterval(function(){
				s = s -1;
				if (s <= 0) {
					s = 99;
				}
				if (c) {
					$("#s"+c).text(s);
				} else{
					$("#s").text(s);
				}
			},8);
			if (gameovers) {
				clearInterval(gameovers);
				gameovers = null;
			}
			gameovers = setInterval(function(){
				if (m <= 0&& s <=1) {
					m =0;
					s =0;
					clearInterval(gameovers);
					clearInterval(timem);
					clearInterval(times);
					timem = null;
					times = null;
					gameovers = null;
					$(".gameover").css("z-index","2");
					$(".oneMoreTime").click(function(){
						$(".gameover").css("z-index","-1");
						lessnfirst();
					});
					$(".gameShows").click(function(){
						$(".gameshowss").css("z-index","2");
						//滚动条
						var initscroll = function(){
							myScroll = new IScroll('#wrapper',{
									scrollbars:true,
									mouseWheel:true,
									interactiveScrollbars:true,
									shrinkScrollbars:'scale',
									fadeScrollbars:true,
									tap:true,
							});
						}
						initscroll();
						$(".gameshowssstop").click(function(){
							$(".gameshowss").css("z-index","-1");
						});
					});
				}
			},8);
		};
		//第一关开始
		var lessnfirst = function(){
			//层次更改
			$(".first").css("z-index","1");
			$(".two").css("z-index","-1");
			$(".three").css("z-index","-1");
			$(".four").css("z-index","-1");
			$(".five").css("z-index","-1");
			$(".six").css("z-index","-1");
			$(".seven").css("z-index","-1");
			$(".eight").css("z-index","-1");
			$(".first_tan").css("z-index","-1");
			$(".two_tan").css("z-index","-1");
			$(".three_tan").css("z-index","-1");
			$(".four_tan").css("z-index","-1");
			$(".five_tan").css("z-index","-1");
			$(".six_tan").css("z-index","-1");
			$(".seven_tan").css("z-index","-1");
			$(".eight_tan").css("z-index","-1");
			//时间内容更新
			$("#m").text("30");
			$("#s").text("99");
			//随机数后添加图片.
			for (var k = 1; k < 5;k++) {
				$(".first_"+k+" img").remove();
			}
			var index = parseInt(Math.random()*4+1);
			for (var i = 1; i < 5;i++) {
				
				if (index == i) {
					$(".first_"+index).append($("<img />"));
					$(".first_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
					$(".first_"+index).click(function(){
						$(".first_tan").css("z-index","1");
						lessntwo();
					});
				} else{
					$(".first_"+i).append($("<img />"));
					$(".first_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
				}
			};	
			//时间开启
			timescountdown();
		};
		//第二关开始
		var lessntwo = function(){
			var c = 2;
			var m = $("#m").text();
			var s = $("#s").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time2 = null;
			time2 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","2");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 10;k++) {
					$(".two_"+k+" img").remove();
				}
				$("#m2").text(m);
				$("#s2").text(s);
				timescountdown(m,s,c);
				//随机数后添加图片.
				var index = parseInt(Math.random()*9+1);
				for (var i = 1; i < 10;i++) {
					if (index == i) {
						$(".two_"+index).append($("<img />"));
						$(".two_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
						$(".two_"+index).click(function(){
							$(".two_tan").css("z-index","2");
								lessonthree();
						});
					} else{
						$(".two_"+i).append($("<img />"));
						$(".two_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
					}
				};
			},3000);
		};
		
		//第三关游戏
		var lessonthree = function(){
			var c = 3;
			var m = $("#m2").text();
			var s = $("#s2").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time3 = null;
			time3 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","2");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 17;k++) {
					$(".three_"+k).remove();
				}
				$("#m3").text(m);
				$("#s3").text(s);
				timescountdown(m,s,c);
				fangcheng(4,4,4);
			},3000);
		};
		//第四关游戏
		var lessonfour = function(){
			var c =4;	
			var m = $("#m3").text();
			var s = $("#s3").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time4 = null;
			time4 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","2");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 26;k++) {
					$(".four_"+k).remove();
				}
				$("#m4").text(m);
				$("#s4").text(s);
				timescountdown(m,s,c);
				fangcheng(5,5,5);
			},3000);
		};
		//第五关游戏
		var lessonfive = function(){
			var c = 5;
			var m = $("#m4").text();
			var s = $("#s4").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time5 = null;
			time5 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","2");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 26;k++) {
					$(".five_"+k).remove();
				}
				$("#m5").text(m);
				$("#s5").text(s);
				timescountdown(m,s,c);
				fangcheng(5,5,6);
			},3000);
		};
		//第六关
		var lessonsix = function(){
			var c = 6;
			var m = $("#m5").text();
			var s = $("#s5").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time6 = null;
			time6 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","2");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 37;k++) {
					$(".six_"+k).remove();
				}
				$("#m6").text(m);
				$("#s6").text(s);
				timescountdown(m,s,c);
				fangcheng(6,6,7);
			},3000);
		};
		//第七关
		var lessonseven = function(){
			var c = 7;
			var m = $("#m6").text();
			var s = $("#s6").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time7 = null;
			time7 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","2");
				$(".eight").css("z-index","-1");
				for (var k = 1; k < 37;k++) {
					$(".seven_"+k).remove();
				}
				$("#m7").text(m);
				$("#s7").text(s);
				timescountdown(m,s,c);
				fangcheng(6,6,8);
			},3000);
		};
		//第八关
			var lessoneight = function(){
			var c = 8;
			var m = $("#m7").text();
			var s = $("#s7").text();
			clearInterval(timem);
			clearInterval(times);
			timem = null;
			times = null;
			var time8 = null;
			time8 = setTimeout(function(){
				$(".first").css("z-index","1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","2");
				for (var k = 1; k < 50;k++) {
					$(".eight_"+k).remove();
				}
				$("#m8").text(m);
				$("#s8").text(s);
				timescountdown(m,s,c);
				fangcheng(7,7,9);
			},3000);
		};
		//游戏div对象创建
		var fangcheng = function(x,y,z){
			var h = x;
			var k = y;
			var n = 0;
			for (var i = 1; i < h+1;i++) {
				for (var j = 1; j < k+1;j++) {
					n++;
					switch (z){
						case 4:
						var divs=$("<div class='three_"+n+"'></div>");
						$(".three_kuang").append(divs);
						divs.css({
							"width":"22%",
							"height":"23%",
							"float":"left",
						});
						if (n != 1 && n!= 5 && n != 9 && n!= 13) {
							$(".three_"+n).css("margin-left","4%");
						}
						if (n > 4) {
							$(".three_"+n).css("margin-top","2.8%");
						}
						
							break;
						case 5:
							var divs=$("<div class='four_"+n+"'></div>");
							$(".four_kuang").append(divs);
							divs.css({
								"width":"17%",
								"height":"18%",
								"float":"left",
							});
							if (n != 1 && n!= 6 && n != 11 && n!= 16 && n!= 21) {
								$(".four_"+n).css("margin-left","3.5%");
							}
							if (n > 5) {
								$(".four_"+n).css("margin-top","2.8%");
							}
							break;
						case 6:
							var divs=$("<div class='five_"+n+"'></div>");
							$(".five_kuang").append(divs);
							divs.css({
								"width":"17%",
								"height":"18%",
								"float":"left",
							});
							if (n != 1 && n!= 6 && n != 11 && n!= 16 && n!= 21) {
								$(".five_"+n).css("margin-left","3.5%");
							}
							if (n > 5) {
								$(".five_"+n).css("margin-top","2.8%");
							}
							break;
						case 7:
							var divs=$("<div class='six_"+n+"'></div>");
							$(".six_kuang").append(divs);
							divs.css({
								"width":"14%",
								"height":"14%",
								"float":"left",
							});
							if (n != 1 && n!= 7 && n != 13 && n!= 19 && n!= 25 && n!= 31) {
								$(".six_"+n).css("margin-left","2.9%");
							}
							if (n > 6) {
								$(".six_"+n).css("margin-top","3.5%");
							}
							break;
						case 8:
							var divs=$("<div class='seven_"+n+"'></div>");
							$(".seven_kuang").append(divs);
							divs.css({
								"width":"14%",
								"height":"14%",
								"float":"left",
							});
							if (n != 1 && n!= 7 && n != 13 && n!= 19 && n!= 25 && n!= 31) {
								$(".seven_"+n).css("margin-left","2.9%");
							}
							if (n > 6) {
								$(".seven_"+n).css("margin-top","3.5%");
							}
							break;
						case 9:
							var divs=$("<div class='eight_"+n+"'></div>");
							$(".eight_kuang").append(divs);
							divs.css({
								"width":"12%",
								"height":"13%",
								"float":"left",
							});
							if (n != 1 && n!= 8 && n != 15 && n!= 22 && n!= 29 && n!= 36 && n!= 43) {
								$(".eight_"+n).css("margin-left","2.65%");
							}
							if (n > 7) {
								$(".eight_"+n).css("margin-top","2.1%");
							}
							break;
					}
				}
			}
			switch (z){
				case 4:
					//随机数后添加图片.
						var index = parseInt(Math.random()*16+1);
						for (var i = 1; i < 17;i++) {
							if (index == i) {
								$(".three_"+index).append($("<img />"));
								$(".three_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".three_"+index).click(function(){
									$(".three_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									lessonfour();
								});
							} else{
								$(".three_"+i).append($("<img />"));
								$(".three_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
					break;
				case 5:
					//随机数后添加图片.
						var index = parseInt(Math.random()*25+1);
						for (var i = 1; i < 26;i++) {
							if (index == i) {
								$(".four_"+index).append($("<img />"));
								$(".four_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".four_"+index).click(function(){
									$(".four_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									lessonfive();
								});
							} else{
								$(".four_"+i).append($("<img />"));
								$(".four_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
					break;
				case 6:
						//随机数后添加图片.
						var index = parseInt(Math.random()*25+1);
						var sixarray = [];
						var falg = true;
						while (sixarray.length < 6){
							var indexs = parseInt(Math.random()*25+1);
							for (var k = 0; k < sixarray.length;k++) {
								if (indexs == sixarray[k] || indexs == index) {
									falg = false;
								}else{
									falg = true;
								}
							}
							if (falg) {
								sixarray.push(indexs);
							}
						};
						for (var i = 1; i < 26;i++) {
							if (index == i) {
								$(".five_"+index).append($("<img />"));
								$(".five_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".five_"+index).click(function(){
									$(".five_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									lessonsix();
								});
							}else{
								$(".five_"+i).append($("<img />"));
								$(".five_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
						console.log(sixarray);
						for (var l =0; l < sixarray.length; l++) {
							$(".five_"+sixarray[l]+" img").attr("src","img/chuangguan/fiveguan/fivelian.png");
						}
					break;
				case 7:
					//随机数后添加图片.
						var index = parseInt(Math.random()*36+1);
						var sixarray = [];
						var falg = true;
						while (sixarray.length < 6){
							var indexs = parseInt(Math.random()*36+1);
							for (var k = 0; k < sixarray.length;k++) {
								if (indexs == sixarray[k] || indexs == index) {
									falg = false;
								}else{
									falg = true;
								}
							}
							if (falg) {
								sixarray.push(indexs);
							}
						};
						for (var i = 1; i < 37;i++) {
							if (index == i) {
								$(".six_"+index).append($("<img />"));
								$(".six_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".six_"+index).click(function(){
									$(".six_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									lessonseven();
								});
							}else{
								$(".six_"+i).append($("<img />"));
								$(".six_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
						console.log(sixarray);
						for (var l =0; l < sixarray.length; l++) {
							$(".six_"+sixarray[l]+" img").attr("src","img/chuangguan/fiveguan/fivelian.png");
						}
					break;
				case 8:
					//随机数后添加图片.
						var index = parseInt(Math.random()*36+1);
						var sevenarray = [];
						var falg = true;
						while (sevenarray.length < 6){
							var indexs = parseInt(Math.random()*36+1);
							for (var k = 0; k < sevenarray.length;k++) {
								if (indexs == sevenarray[k] || indexs == index) {
									falg = false;
								}else{
									falg = true;
								}
							}
							if (falg) {
								sevenarray.push(indexs);
							}
						};
						for (var i = 1; i < 37;i++) {
							if (index == i) {
								$(".seven_"+index).append($("<img />"));
								$(".seven_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".seven_"+index).click(function(){
									$(".seven_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									lessoneight();
								});
							}else{
								$(".seven_"+i).append($("<img />"));
								$(".seven_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
						for (var l =0; l < sevenarray.length; l++) {
							$(".seven_"+sevenarray[l]+" img").attr("src","img/chuangguan/fiveguan/fivelian.png");
						}
					break;
				case 9:
					//随机数后添加图片.
						var index = parseInt(Math.random()*49+1);
						var eightarray = [];
						var falg = true;
						while (eightarray.length < 9){
							var indexs = parseInt(Math.random()*49+1);
							for (var k = 0; k < eightarray.length;k++) {
								if (indexs == eightarray[k] || indexs == index) {
									falg = false;
								}else{
									falg = true;
								}
							}
							if (falg) {
								eightarray.push(indexs);
							}
						};
						for (var i = 1; i < 50;i++) {
							if (index == i) {
								$(".eight_"+index).append($("<img />"));
								$(".eight_"+index+" img").attr("src","img/chuangguan/diyiguan/xuzheng.png");
								$(".eight_"+index).click(function(){
									$(".eight_tan").css("z-index","2");
									clearInterval(timem);
									clearInterval(times);
									timem = null;
									times = null;
									gamesuccessful();
								});
							}else{
								$(".eight_"+i).append($("<img />"));
								$(".eight_"+i+" img").attr("src","img/chuangguan/diyiguan/baobei.png");
							}
						};
						for (var l =0; l < eightarray.length; l++) {
							$(".eight_"+eightarray[l]+" img").attr("src","img/chuangguan/fiveguan/fivelian.png");
						}
					break;
			}	
		};
	};
//==========================================================================
	//闯关成功后新div出现
		var gamesuccessful = function(){
			var gamestop = null;
			gamestop = setTimeout(function(){
				$(".eight_tan").css("z-index","-2");
				$(".first").css("z-index","-1");
				$(".two").css("z-index","-1");
				$(".three").css("z-index","-1");
				$(".four").css("z-index","-1");
				$(".five").css("z-index","-1");
				$(".six").css("z-index","-1");
				$(".seven").css("z-index","-1");
				$(".eight").css("z-index","-2");
				$(".gamesuccessful").css("z-index","5");
				var arrays = ["旺德福", "你已集齐徐峥分身", "vivo X5Pro碎片开始合体", "合体中", "..."];
				//动画说明
				var u =0;
				var gametime = null;
				if (gametime) {
					clearInterval(gametime);
				}
				gametime = null;
				gametime = setInterval(function(){
					u++;
					var p =$("<p>"+arrays[u]+"</p><br/>");
					$(".gamefinecontent").append(p);
					if (u >= 4) {
						u = 4;
						clearInterval(gametime);
						gametime=null;
						gamexiaoshi();
					}
				},1000);
			},3000);
		};
		//文字消失
		var gamexiaoshi = function(){
			setTimeout(function(){
				$(".gamefinecontent").attr("id","gamecontentxiaoshi");
				gamesuipian();
			},2000);
		};
		//文字消失后,碎片集合
		var gamesuipian = function(){
			setTimeout(function(){
				$(".gamefinecontent").remove();
				$(".gamesuipian").css("display","block");
				gamephone();
			},2000);
		}
		//碎片集合后,手机阴影出现
		var gamephone = function(){
			setTimeout(function(){
				$(".gamephones").attr("id","gamephone");
				gamesuipianover();
			},2000);
		}
		//手机出现,碎片消失
		var gamesuipianover = function(){
			setTimeout(function(){
				$(".gamesuipian").attr("id","gamesuipians");
				gameshows();
				gamePrize();
			},2000);
		}
		//游戏说明
		var gameshows = function(){
			setTimeout(function(){
				$(".gamesuipian").remove();
				$(".gamephone_gameshow").click(function(){
				console.log("aaa");
				$(".gameshowss").css("z-index","10");
				$(".gameshowssstop").click(function(){
					$(".gameshowss").css("z-index","-5");
				});
			});
			},2000);
		}
		//点击抽奖  由于没交互  故不抽奖。
		var gamePrize = function(){
			$(".gamephone_start").click(function(){
				console.log("点击到了");
				var gameprizearray = [
					"img/gamefine/shouji/weizhong.png",
					"img/gamefine/shouji/zhongyi.png",
					"img/gamefine/shouji/zhongtwo.png",
					"img/gamefine/shouji/zhongthree.png",
					"img/gamefine/shouji/zhongfour.png",
					"img/gamefine/shouji/zhongfive.png"
				]
				var parizesuiji = parseInt(Math.random()*6);
				$(".gamephone_prize").css("display","block");
//				$(".gamephone_prize").css("background-image","url("+gameprizearray[parizesuiji]+")");
				$(".gamephone_prize").css("background-image","url(img/gamefine/shouji/weizhong.png)");
			});
			$(".gamephone_retrungame").click(function(){
				$(".gamexulaoshi").css("display","block");
				gameOver();
				$(".gamesuccessful").css("display","none");
			});
		}
});

