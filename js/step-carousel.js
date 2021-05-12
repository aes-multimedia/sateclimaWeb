(function( $ ){
	var carouselCount = 0;
	var DATA_KEY = 'stepCarousel';
	
	var nodeOptions = function( $node )
	{
		var k, aux, options = {};
		
		var keys = [ 'interval', 'items', 'controls', 'indicators' ];
		
		for( var x=0; x<keys.length; x++ )
		{
			if( (aux = $node.data( keys[x] ))!==undefined )
				options[ keys[x] ] = aux;
		}
				
		
		return options;
	};
	
	var normalizeOptions = function( options )
	{
		var k;
		
		if( options[k = "controls"]!==undefined )
		{
			if( 
				(typeof options[k])!=="function"
				&&
				!(options[k]===true || String(options[k]).toLowerCase()=="true" || parseInt(options[k])==1)
			)
			{
				options[k]=false;
			}
		}
		
		if( options[k = "indicators"]!==undefined )
		{
			if( !(typeof options[k])!=="function" )
			{
				if( options[k]===true || String(options[k]).toLowerCase()=="true" || parseInt(options[k])==1 )
				{
					delete options[k];
				}
				else
				{
					options[k]=false;
				}
			}
		}
		
		return options;
	};
	
	var DEFAULT_OPTIONS = {
		'interval': 4000,
		'items': 6,
		
		'indicators': function( id, totalItems )
		{
			var $indicators = $('<ol class="carousel-indicators">');
			
			for( var x=0; x<totalItems; x++ )
			{
				$indicators.append( $('<li></li>').attr("data-target", "#" + id).attr("data-slide-to", x) );
			}
			
			$indicators.children().first().addClass("active");
			
			return $indicators;
		},
		
		'controls': function( id )
		{
			return $('<div class="carousel-controls">')
			.append(
				$('<a class="left carousel-control" role="button" data-slide="prev">')
					.attr("href", "#" + id)
					.html('<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span>')
			)
			.append(
				$('<a class="right carousel-control" role="button" data-slide="next">')
					.attr("href", "#" + id)
					.html('<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span>')
			);
		},
	};
	
	var destroy = function( node )
	{
		var $this = $(node);
		var instance = $this.data(DATA_KEY);
		
		if( instance )
		{
			$this.removeClass("carousel step-carousel");
		}
		
	};
	
	var stepCarousel = function( node, options )
	{
		var $this = $(node);
		
		if( !$this.data(DATA_KEY) )
		{
			var instance = {
				'options': $.extend( {}, DEFAULT_OPTIONS, normalizeOptions(options) ),
			};

			$this.data( DATA_KEY, instance );
			
			var $carousel = $('<div class="carousel step-carousel slide" data-ride="carousel">')
				.attr("id", "StepCarousel"+ (carouselCount++) )
				.attr("data-items", instance.options.items)
				.addClass( $this.attr("class") )
				.data( "real-node", node )
			;
			var $content = $('<div class="carousel-inner">').appendTo( $carousel );
			
			
			$this.children().each(function(){
				$('<div class="item">').append( $(this).clone() ).appendTo( $content );
			});
			
			
			if( instance.options.controls )
			{
				$carousel.append( instance.options.controls( $carousel.attr("id") ) );
			}
			
			if( instance.options.indicators )
			{
				$carousel.append( instance.options.indicators( $carousel.attr("id"), $content.children().length ) );
			}
			
			$carousel.carousel({
				'interval': instance.options.interval,
				
			});
			
			$content.children().each(function(){
				
				var $this = $(this);
				var itemToClone = $this;
				
				for (var i=1;i<instance.options.items;i++)
				{
					itemToClone = itemToClone.next();
					
					if( !itemToClone.length )
					{
						itemToClone = $this.siblings(':first');
					}
					
					var auxItem = itemToClone.children(':first-child');
					
					auxItem.clone()
						.addClass("step-carousel-cloned cloneditem-"+(i))
						.data( "item", auxItem.first() )
						.appendTo( $this )
						
					;
				}
				
				
			});
					
	   
			$this.hide();
			$carousel.insertAfter( $this );
			$content.children().first().addClass("active");
			
			$(document).trigger( "stepCarouselReady", [ $carousel ] );
			
		}
		
	};
	
	var methods = {
		//'reload': reload
	};
	
	$.fn.stepCarousel = function( options )
	{
		this.each(function(){
			
			stepCarousel( this, options );
			
		});
	};

	$(document).ready(function(){

		$("[data-role='step-carousel']").each(function(){
			
			var $this = $(this);
			$this.stepCarousel( nodeOptions($this) )
			
		});

	});
	
})( this.jQuery );