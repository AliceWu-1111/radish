window.onload=function(){
	var one=document.getElementsByClassName('one')[0];
	var txt=one.getElementsByClassName('txt')[0]
	var clientH = document.documentElement.clientHeight || document.body.clientHeight;
	var oneH=one.offsetHeight;
	var oneT=one.offsetTop;
	
	
	var two=document.getElementsByClassName('two')[0]
	var top=document.getElementsByClassName('top')[0];
	var op=document.getElementsByClassName('op')[0]
	var oh=two.getElementsByTagName('h3')[0];
	var list=document.getElementsByClassName('list')[0]
	var oLio=list.getElementsByTagName('li')[0]
	var oLit=list.getElementsByTagName('li')[1]
	var oLith=list.getElementsByTagName('li')[2]
	var con=document.getElementsByClassName('con')[0]
	var topH=top.offsetHeight;
	var topT=top.offsetTop;
	var listH=oLio.offsetHeight;
	var listT=oLio.offsetTop;
	
		
		
		
	document.onscroll=function(){
	var scrollT=document.documentElement.scrollTop ||document.body.scrollTop;
		if(oneT<=clientH+scrollT-oneH){
			txt.style.opacity=1
			txt.className='animated fadeInUp txt img-responsive center-block'
		}
		if(topT<=clientH+scrollT-oneH){
			top.style.opacity=1
			top.className='animated fadeInDown'
			op.style.opacity=1
			op.className='animated fadeInUp'
		}
		if(listT<=clientH+scrollT-listH){
			oh.style.opacity=1;
			oh.className='animated fadeInDown text-center';
			
			oLio.style.opacity=1;
			oLio.className='animated fadeInUp col-md-4 col-xs-4'
			setTimeout(function(){
				oLit.style.opacity=1;
				oLit.className='animated fadeInUp col-md-4 col-xs-4'
			},1000)
			
			setTimeout(function(){
				oLith.style.opacity=1;
				oLith.className='animated fadeInUp col-md-4 col-xs-4'
			},1500)
			
			setTimeout(function(){
				con.style.opacity=1;
				con.className='animated fadeInDown con'
			},2000)
			
		}
		var fixone=document.getElementsByClassName('fixone')[0];
		var fixoneimg=fixone.getElementsByTagName('img')[0];
		var fixoneH=fixoneimg.offsetHeight;
		var fixoneT=fixoneimg.offsetTop;
		if(fixoneT<=clientH+scrollT-fixoneH){
			fixoneimg.className='animated fadeInUp img-responsive center-block'
			
		}
		
		
		
		var three=document.getElementsByClassName('three')[0]
		var threetop=document.getElementsByClassName('threetop')[0];
		var hone=three.getElementsByTagName('h3')[0];
		var threetopH=threetop.offsetHeight;
		var threetopT=threetop.offsetTop;
		
		if(threetopT<=clientH+scrollT-threetopH){
			threetop.style.opacity=1
			threetop.className='animated fadeInDown threetop';
			hone.style.opacity=1
			hone.className='animated fadeInUp text-center'
		}
		
	 
	}
}


$(function(){
	$(window).scroll(function(){
		console.log($(document).scrollTop())
		if($(document).scrollTop()>1500){
			$('.aimg').css('opacity',1)
			$('.aimg').css('transform','scale(1)')
			$('.a').css('opcity',1).addClass('animated fadeInLeft')
		}
		
		
		if($(document).scrollTop()>1700){
			$('.bimg').css('opacity',1)
			$('.bimg').css('transform','scale(1)')
			$('.b').css('opcity',1).addClass('animated fadeInRight')
		}
		
		
		if($(document).scrollTop()>1900){
			$('.cimg').css('opacity',1)
			$('.cimg').css('transform','scale(1)')
			$('.c').css('opcity',1).addClass('animated fadeInLeft')
		}
		
		
		if($(document).scrollTop()>2200){
			$('.dimg').css('opacity',1)
			$('.dimg').css('transform','scale(1)')
			$('.d').css('opcity',1).addClass('animated fadeInRight')
		}
		
		if($(document).scrollTop()>2400){
			$('.eimg').css('opacity',1)
			$('.eimg').css('transform','scale(1)')
			$('.e').css('opcity',1).addClass('animated fadeInLeft')
		}
		
		if($(document).scrollTop()>2700){
			$('.fimg').css('opacity',1)
			$('.fimg').css('transform','scale(1)')
			$('.f').css('opcity',1).addClass('animated fadeInRight')
		}
		
		
		if($(document).scrollTop()>2900){
			$('.work img').css('opacity',1)
			$('.work img').css('opcity',1).addClass('animated fadeInUp')
		}
		
		
		if($(document).scrollTop()>3500){
			$('.cooper>img:nth-of-type(1)').css('opacity',1).addClass('animated fadeInDown')
			$('.cooper h2').css('opcity',1).addClass('animated fadeInDown')
			$('.list img').addClass('hvr-float-shadow')
			$('.list img:even').css('opacity',1).addClass('animated fadeInUp')
			$('.list img:odd').css('opacity',1).addClass('animated fadeInDown')
		}
	})
})
