window.onload=function(){
	var all=document.getElementsByClassName('all')[0];
	var opone=all.getElementsByTagName('p')[0];
	var optwo=all.getElementsByTagName('p')[1]
	var bgsection=document.getElementsByClassName('bgsection')[0];
	var oRow=bgsection.getElementsByTagName('img')[0];
	var listImg=document.getElementsByClassName('listimg')[0];
	var oImgone=listImg.getElementsByTagName('img')[0];
	var oImgtwo=listImg.getElementsByTagName('img')[1];
	var oImgthree=listImg.getElementsByTagName('img')[2];
	var clientH = document.documentElement.clientHeight || document.body.clientHeight;
	var allmy=all.offsetHeight;
	var allheight=all.offsetTop;
	
	
	
	var demoimg=document.getElementsByClassName('demoimg')[0]
	var demo=document.getElementsByClassName('demo')[0];
	var op=demo.getElementsByTagName('p')[0];
	var demoH=op.offsetHeight;
	var demoT=op.offsetTop;
	
	
	
	document.onscroll=function(){
		var scrollT=document.documentElement.scrollTop ||document.body.scrollTop;
		if(allheight<=clientH+scrollT-allmy){
			setTimeout(function(){
				oImgone.style.opacity=1
				oImgone.className='animated slideInDown fadeIn center-block'
			},500)
			
			setTimeout(function(){
				oImgtwo.style.opacity=1
				oImgtwo.className='animated slideInDown fadeIn center-block'
			},800)
			setTimeout(function(){
				oImgthree.style.opacity=1
				oImgthree.className='animated slideInDown fadeIn center-block'
			},900)
			setTimeout(function(){
				all.style.opacity=1
				oRow.style.opacity=1
				opone.style.opacity=1
				optwo.style.opacity=1
				all.className='animated slideInDown fadeIn all'
				oRow.className='img-responsive center-block animated slideInDown fadeIn'
			},1200)
		}
		if(demoT<=clientH+scrollT-demoH/10){
		setTimeout(function(){
				demoimg.style.opacity=1
				demoimg.className='row demoimg animated fadeInUp'
			},1000)
		}
		
		
		if(demoT<=clientH+scrollT-demoH/2){
		setTimeout(function(){
				demoimg.style.opacity=1
				demoimg.className='row demoimg animated fadeInUp'
			},1000)
		}
		
		
		var three=document.getElementsByClassName('three')[0]
		var threetext=three.getElementsByClassName('text')[0]
		var imgfixone=three.getElementsByTagName('img')[0]
		var threetextH=threetext.offsetHeight;
		var threetextT=threetext.offsetTop;
		if(threetextT<=clientH+scrollT-threetextH){
			imgfixone.style.opacity=1
			imgfixone.className='animated fadeInUp img-responsive center-block'
		}
		
		
		var viewnow=document.getElementsByClassName('viewnow')[0];
		var nowp=viewnow.getElementsByTagName('p')[0];
		var nowh=viewnow.getElementsByTagName('h2')[0];
		var rows=viewnow.getElementsByTagName('img')[0];
		var vlive=viewnow.getElementsByTagName('img')[1];
		var vliveH=vlive.offsetHeight;
		var vliveT=vlive.offsetTop;
		if(vliveT<=clientH+scrollT-vliveH/2){
			vlive.style.opacity=1
			vlive.className='animated fadeInUp center-block'
			rows.style.opacity=1
			rows.className='animated fadeInDown'
			nowp.style.opacity=1;
			nowp.className='animated fadeInDown'
			nowh.style.opacity=1
			nowh.className='animated fadeInDown'
		}
		
		
		
		
		var cooper=document.getElementsByClassName('cooper')[0];
		var colist=cooper.getElementsByClassName('list')[0];
		var oGays=colist.getElementsByTagName('li');
		var oGaysH=colist.offsetHeight;
		var oGaysT=colist.offsetTop;
		if(oGaysT<=clientH+scrollT-oGaysH/4){
			
			setTimeout(function(){
				for(var i=0;i<oGays.length;i++){
					oGays[i].style.opacity=1;
					oGays[i].className='col-md-3 col-xs-6 animated fadeInDown'
				}
			},0)
			
		}
		
		var work=document.getElementsByClassName('work')[0];
		var workimg=work.getElementsByTagName('img')[0];
		var workH=work.offsetHeight;
		var workT=work.offsetTop;
		if(workT<=clientH+scrollT-workH/2){
			workimg.style.opacity=1
			workimg.className='animated fadeInUp img-responsive center-block'
		}
	}	
	
	
}
$(function(){
	$(window).scroll(function(){
		console.log($(document).scrollTop())
		if($(document).scrollTop()>50){
			$('.textlogo').css('opcity',1).addClass('animated fadeInDown')
		}
	})
})
