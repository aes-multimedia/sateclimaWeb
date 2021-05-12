(function( $ ){
	
	"use strict";
	
	var porcentaje = 0;
	var adjust = function( $a, to )
	{
		return to;
	};
	
	$(document)
	.on("click", ".anchorLink", function( event ){
		
		event.preventDefault();
		
		try
		{
			var $this = $(this);
			var target = $this.attr("href").replace(/^[^#]*#/, '');
			var $target = $("#" + target);
			
			if( $target.length )
			{
				var $e = $.Event("anchorLinkClick");
				
				$target = $target.first();
				
				$(this).trigger( $e, [ $target ] );
				
				if( !$e.isDefaultPrevented() )
				{
					var to = $target.offset().top - ($(window).height()*(porcentaje/100));
					
					$("html:not(:animated),body:not(:animated)").animate({ 
						scrollTop: adjust( $this, to )
					}, 1100 );
				}
			}
			
		} catch( e )
		{
			console.error( e );
		}

		return false;
		
	} )
	;
	
})( this.jQuery );


$(document).ready(function(){
	
	var $all = $("#navbar .nav > li");
	
	var buttons = [];	
	
	$("#navbar .section-button").each(function(){
		var $this = $(this);
		var id = $this.find("> a").attr("href").replace(/^[^#]*#/, '');

		if( id!='' )
		{
			var $div = $("#" + id);
			if( $div.length )
			{
				buttons.push( [ this, $div[0] ] );
			}
		}
	});
		
	$(window).scroll(function(){
		
		var start = $(document).scrollTop();
		var end = start+$(window).height()/2;
		
		for( var x=0; x<buttons.length; x++ )
		{
			var $this = $(buttons[x][0]);
			var top = $(buttons[x][1]).offset().top;
			var bottom = top + $(buttons[x][1]).outerHeight();
			
			if( top>=start && top<=end )
			{
				$all.removeClass("active");
				$this.addClass("active");
				return false;
			}
			else if( $this.is(".active") )
			{
				$this.removeClass("active");
			}

		}
		
	});
	
});