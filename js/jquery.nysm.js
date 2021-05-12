;( function( $, VERSION ){
	
	var refreshDelay = 0;
	var items = [];
	var intervalId = false;
	
	var refresh = function()
	{
		if( items.length )
		{
			if( !intervalId )
			{
				intervalId = setInterval( function(){
					for( var x=0; x<items.length; x++ )
					{
						var $element = $(items[x]);

						if( $element.is(":on-screen") )
						{
							if( !$element.data("nysm-on") )
							{
								$element.trigger( "onscreen" );
							}
							$element.data("nysm-on", true);
						}
						else
						{
							if( $element.data("nysm-on") )
							{
								$element.trigger( "outscreen" );
							}
							$element.removeData("nysm-on");
						}
					}				
				}, refreshDelay );
			}
		}
		else
		{
			clearInterval( intervalId );
			intervalId = false;
		}
	};
	
	var onScreen = function( $node )
	{
		if( $node.is(":visible") )
		{
			var offset = $node.offset();
			var $w = $(window);
			
			var scrollTop = $w.scrollTop();
			var scrollLeft = $w.scrollLeft();
			
			return (
				offset.top>=scrollTop
				&&
				offset.top<=(scrollTop+$w.height())
				&&
				offset.left>=scrollLeft
				&&
				offset.left<=(scrollLeft+$w.width())
			);
		}
		return false;
	};

	$.fn.onScreen = function()
	{
		var result = true;
		
		this.each(function(){ result &= onScreen( $(this) ); });
		
		return result;		
	};
	
	$.expr[':']['on-screen'] = function( elem )
	{
		return onScreen( $(elem) );
	};
	
	var indexOf = function( node )
	{
		for( var x=0; x<items.length; x++ )
		{
			if( node===items[x] )
			{
				return x;
			}
		}
		return -1;
	};
	
	$.fn.nysm = function()
	{
		this.each(function(){
			
			if( indexOf(this)==-1 )
			{
				items.push( this );
			}
			
		});
		
		refresh();
		
		return this;
	};
	
	$.fn.nysmOff = function()
	{
		var index;
		
		this.each(function(){
			if( (index = indexOf( this ))>=0 )
			{
				items.splice( index, 1 );
			}
		});
		
		refresh();
		
		return this;
	};
	
	$(document).ready(function(){
		
		$("[data-role='nysm']").each(function(){
			items.push( this );
		});
		//Retrasamos el inicio del refresco
		setTimeout( refresh, 500 );
	});	
} )( this.jQuery, '1.0' );