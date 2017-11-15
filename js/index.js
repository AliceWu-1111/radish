window.onload = function() {
	var s1 = document.getElementById('s1')
	var oUl = s1.getElementsByTagName('ul')[0]
	var show = document.getElementsByClassName("show1")
	var more1 = document.getElementsByClassName("more1")
	var span = document.getElementsByClassName('span')
	var oOl = s1.getElementsByTagName('ol')[0]
	var oLiimgs = oUl.getElementsByTagName('li')
	var oLis = oOl.getElementsByTagName('li')
	var hide = document.getElementsByClassName('hide1')
	var timer2 = null;
	var num = 0;
	moves()

	function moves() {
		timer2 = setInterval(function() {
			num++;
			if(num == oLis.length) {
				num = 0
			}
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].style.backgroundColor = ""
				oLiimgs[i].style.display = "none";
			}
			oLiimgs[num].style.display = "block";
			oLis[num].style.backgroundColor = "white"
		}, 3000)
	}
	s1.onmouseenter = function() {
		clearInterval(timer2)
	}
	s1.onmouseleave = function() {
		moves()
	}
	for(var i = 0; i < oLis.length; i++) {
		oLis[i].index = i;
		oLis[i].onmouseenter = function() {
			num++;
			if(num == oLis.length) {
				num = 0
			}
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].style.backgroundColor = ""
				oLiimgs[i].style.display = "none"
			}
			oLiimgs[this.index].style.display = "block"
			this.style.backgroundColor = "rgba(255,255,255,.8)"
			num = this.index;
		}
		oLis[i].onmouseleave = function() {
			this.style.backgroundColor = "rgba(255,255,255,.8)"
		}

	}
	for(var i = 0; i < more1.length; i++) {
		more1[i].index = i
		more1[i].onmouseenter = function() {
			hide[this.index].style.display = "block"
			span[this.index].style.opacity = "0"
		}

		more1[i].onmouseleave = function() {
			hide[this.index].style.display = "none"
			span[this.index].style.opacity = "1"
		}
		hide[i].onmouseenter = function() {
			this.style.display = "block"
		}
		hide[i].onmouseleave = function() {
			this.style.display = "none"
		}
	}

	var left = document.getElementsByClassName('lef')[0]
	var right = document.getElementsByClassName('rig')[0]
	var dow = document.getElementsByClassName('dow')[0]
	var up = document.getElementsByClassName('up')[0]
	var clientH = document.body.clientHeight || document.documentElement.clientHeight
	document.onscroll = function() {
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollT)
        
		var dowH = dow.offsetHeight
		var dowT = dow.offsetTop
		var upH = up.offsetHeight
		var upT = up.offsetTop
//		if(dowT <= clientH + scrollT - dowH / 2) {
//			dow.style.opacity = 1
//			dow.className = "animated fadeInDown dow"
//		}
//		if(upT <= clientH + scrollT - upH / 2) {
//			up.style.opacity = 1
//			up.className = "animated fadeInUp up"
//		}
        if(scrollT>200) {
			dow.style.opacity = 1
			dow.className = "animated fadeInDown dow"
			up.style.opacity = 1
			up.className = "animated fadeInUp up"
		}
		var leftH = left.offsetHeight
		var leftT = left.offsetTop
		var rightH = right.offsetHeight
		var rightT = right.offsetTop
		if(leftT <= clientH + scrollT - leftH) {
			left.style.opacity = 1
			left.className = "animated fadeInLeft col-md-6 col-xs-12 lef"
		}
		if(rightT <= clientH + scrollT - rightH) {
			right.style.opacity = 1
			right.className = "animated fadeInRight col-md-6 col-xs-12 rig"
		}
	}
}
$(function(){
	$(window).scroll(function(){
		console.log($(document).scrollTop())
		if($(document).scrollTop()>1900){
			$('.dow1').css('opacity',1)
			$('.dow1').addClass('animated fadeInDown')
			$('.up1').css('opacity',1)
			$('.up1').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>1650){
			$('.down1').css('opacity',1)
			$('.down1').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>2956){
			$('.down2').css('opacity',1)
			$('.down2').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>3756){
			$('.down3').css('opacity',1)
			$('.down3').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>2190){
			$('.aup').css('opacity',1)
			$('.aup').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>3286){
			setTimeout(function(){
				$('.adown').css('opacity',1)
			    $('.adown').addClass('animated fadeInUp')
			},500)
			setTimeout(function(){
				$('.bdown').css('opacity',1)
			    $('.bdown').addClass('animated fadeInUp')
			},800)
			setTimeout(function(){
				$('.cdown').css('opacity',1)
			    $('.cdown').addClass('animated fadeInUp')
			},1100)
		}
		
		if($(document).scrollTop()>4280){
			$('.downs1').css('opacity',1)
			$('.downs1').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>4380){
			$('.downs2').css('opacity',1)
			$('.downs2').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>4480){
			$('.downs3').css('opacity',1)
			$('.downs3').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>2590){
			$('.bup').css('opacity',1)
			$('.bup').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>3200){
			$('.dow2').css('opacity',1)
			$('.dow2').addClass('animated fadeInDown')
			$('.up2').css('opacity',1)
			$('.up2').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>4000){
			$('.dow3').css('opacity',1)
			$('.dow3').addClass('animated fadeInDown')
			$('.up3').css('opacity',1)
			$('.up3').addClass('animated fadeInUp')
		}
		if($(document).scrollTop()>1000){
			$('.lef1').css('opacity',1)
			$('.lef1').addClass('animated fadeInLeft')
			$('.rig1').css('opacity',1)
			$('.rig1').addClass('animated fadeInRight')
		}
		if($(document).scrollTop()>1300){
			$('.lef2').css('opacity',1)
			$('.lef2').addClass('animated fadeInLeft')
			$('.rig2').css('opacity',1)
			$('.rig2').addClass('animated fadeInRight')
		}
	})
	$('.c44>div>div').hover(function(){
		$(this).addClass('hvr-grow-shadow')
	},function(){
		$(this).removeClass('hvr-grow-shadow')
	})
	$('.displayWein').hover(function(){
		$(this).css('opacity',1)
		$(this).addClass('animated fadeInUp')
		$(this).addClass('hvr-shadow')
	},function(){
		$(this).removeClass('animated fadeInUp')
		$(this).css('opacity',0)	
		$(this).removeClass('hvr-shadow')
		
	})
})