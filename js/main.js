(function($, context, utils){
	
	var docReady = false;
	var gmapsReady = false;
	
	var prepareGoogleMaps = function()
	{
	    var parseStyleText = function( $node )
	    {
		if( $node.is("div.style") )
		{
		    try
		    {
			
			var aux = $.parseJSON( $node.text() );
			
			if( aux instanceof Array )
			{
			    return aux;
			}
			
		    } catch( e ){ console.log(e) }
		}
		
		return [];
	    };
	    
		var parseStyle = function( $node )
		{
			if( $node.is("span.style") )
			{
			    
				var aux, aux2, styler;
				var style = { 'stylers': [] };
				
				if( (aux = utils.toString( $node.data("feature") ))!=="" )
				{
					style['featureType'] = aux;
				}
				
				if( (aux = utils.toString( $node.data("element") ))!=="" )
				{
					style['elementType'] = aux;
				}
				
				aux = utils.toString( $node.data("style") ).split("|");
				
				for( var x=0; x<aux.length; x++ )
				{
					aux2 = aux[x].split(":");
					
					styler = {};
					styler[ aux2[0] ] = aux2[1];
					
					style.stylers.push( styler );
				}
				
				return style;
			}
		};
		
		var getOptions = function( $node )
		{
			var aux;
			
			var options = {
				'markers': [],
				'map': {
					'clickableIcons': utils.toBool( utils.ifUndefined( $node.data("clickeable-icons"), false) ),

					'disableDefaultUI': !utils.toBool( utils.ifUndefined( $node.data("default-ui"), true) ),

					'draggable': utils.toBool( utils.ifUndefined( $node.data("draggable"), true) ),

					'fullscreenControl': utils.toBool( utils.ifUndefined( $node.data("fullscreen"), true) ),
					//'fullscreenControlOptions': xxx,

					'mapTypeControl': utils.toBool( utils.ifUndefined( $node.data("type-control"), true) ),
					//'mapTypeControlOptions': xxx,

					'mapTypeId': google.maps.MapTypeId.ROADMAP,

					'maxZoom': utils.toInt( utils.ifUndefined($node.data("zoom-min"), 18) ),
					'minZoom': utils.toInt( $node.data("zoom-min") ),

					'panControl': utils.toBool( utils.ifUndefined( $node.data("pan"), true) ),
					//'panControlOptions': xxxx,

					'rotateControl': utils.toBool( utils.ifUndefined( $node.data("rotate"), true) ),
					//'rotateControlOptions': xxxx,

					'scaleControl': utils.toBool( utils.ifUndefined( $node.data("scale"), true) ),
					//'scaleControlOptions': xxxx,

					'streetViewControl': utils.toBool( utils.ifUndefined( $node.data("streetview"), true) ),
					//'streetViewControlOptions': xxxx,

					'tilt': utils.toInt( $node.data("zoom-control") ),

					'zoom': utils.toInt( $node.data("zoom") ),
					'zoomControl': utils.toBool( utils.ifUndefined( $node.data("zoom-control"), true) ),
					//'zoomControlOptions': xxxx,

					'styles': [],
				},
				
					
			};
			
			var onload = $node.data("onload");
			
			if( utils.isFunction(onload) || (onLoad = utils.toString(onload))!=="" )
			{
				options.onLoad = onload;
			}
			
			if( (aux = utils.toString( $node.data("center") ))!=="" && (aux = aux.split(",")).length>1 )
			{
				options.map.center = new google.maps.LatLng( aux[0], aux[1] );
			};
			
			if( google.maps.MapTypeId[aux = utils.ifEmptyString( $node.data("type"), "ROADMAP" ).toUpperCase()] )
			{
				options.map.mapTypeId = google.maps.MapTypeId[aux];
			}		
			
			$node.children().each(function(){
				
				var $this = $(this);
				
				if( $this.is(".marker") )
				{
					var marker = {
						'position': new google.maps.LatLng( $this.data("latitude"), $this.data("longitude") ),
						'draggable': $this.data("draggable") ? true : false, 
					}; 
					
					var $info = $this.children(".info-window").first();
					
					if( $info.length )
					{
						marker.info = {
							'global': utils.toBool( utils.ifUndefined($this.data("global"), true) ),
							'content': $info.html(),
						};
						
						//OnOpen
						if( (aux = utils.toString($info.data("open")))!=="" && utils.isFunction(context[aux]) )
						{
							marker.info.open = context[aux];
						}
						//OnClose
						/*if( (aux = utils.toString($info.data("close")))!=="" && utils.isFunction(context[aux]) )
						{
							marker.info.close = context[aux];
						}*/
					}
					
					if( (aux = utils.toString( $this.data("icon") ))!=="" )
					{
						marker.icon = aux;
					}
					
					var dragend = $this.data("dragend");
					if( utils.isFunction(dragend) || ((dragend = utils.toString(dragend)) && utils.isFunction(dragend = context[dragend])) )
					{
						marker.dragend = dragend;
					}
					
					options.markers.push( marker );
					
				}
				else if( $this.is("span.style") && (aux = parseStyle( $this )) )
				{
					options.map.styles.push( aux );
				}
				else if( $this.is("div.style") )
				{
				    options.map.styles = parseStyleText($this);
				}
			});
			
			return options;
		};
		
		$(".gmap").each(function(){

			var $this = $( this );
			var options = getOptions( $this );
			
			$this.empty();
			
			var map = new google.maps.Map( this, options.map );
			
			if( options.markers.length )
			{
				var infoWindow = new google.maps.InfoWindow();
				
				infoWindow.ownMap = map;
				
				for( var x=0; x<options.markers.length; x++ )
				{
					var k;
					var m = options.markers[x];
					
					var marker = new google.maps.Marker( {
						'map': map,
						'position': m.position,
						'icon': m.icon,
						[k = "draggable"]: m[k],
					} );
					
					
					marker.ownOptions = m;
					
					if( m.dragend )
					{
						google.maps.event.addListener( marker, 'dragend', m.dragend );
					}
					
					google.maps.event.addListener( marker, 'click', (function( marker ){
						
						return function(){
							var info = marker.ownOptions.info;

							if( info )
							{
								var w = info.global ? infoWindow : new google.maps.InfoWindow();
								w.setContent( info.content );
								w.open( infoWindow.ownMap, marker );
								(info.open ? info.open : function(){} ).call( w, marker, infoWindow.ownMap );
							}
						};
					})( marker ) );
				}
			}
			
			if( options.onLoad && utils.isFunction(context[options.onLoad]) )
			{
				context[options.onLoad].call(map);
			}
			
		});
	};
	
	//Inicializacion de google maps
	context.InitGoogleMaps = function() {
		
		$(document).trigger( "GoogleMapsLoaded" );
		gmapsReady = true;
		if( docReady ) prepareGoogleMaps();
	};

	$(document).ready(function(){

		docReady = true;
		if( gmapsReady ) prepareGoogleMaps();
		
	});
	//--------------------------------------------------------------------------
	
	//--------------------------------------------------------------------------
	// FANCYBOX
	//--------------------------------------------------------------------------
	$(document)
	.ready(function(){
		var fancyBoxOptions = {
			margin : [44,0,22,0],
				thumbs : {
				  autoStart : true,
				  axis      : 'x'
				}
		 };

		var $items = $('[data-fancybox]');
		var groups = {};

		$items.each(function(){
			var $this = $(this);

			var g = String( $this.data("fancybox") );

			groups[g] = (isNaN(groups[g]) ? 0 : groups[g])+1;

		});

		for( var k in groups )
		{
			$items.filter('[data-fancybox="' + k + '"]').fancybox( fancyBoxOptions );
		}
		
	})
	.on( 'click', '[data-role="fancybox"]', function( event ){
		event.preventDefault();
		
		var target = utils.toString( $(this).data("target") );
		
		if( target!=="" )
		{
			try
			{
				$('[data-fancybox="' + target + '"]').first().click();
			} catch( e ){}
		}
	} )
	.on( 'stepCarouselReady', function( event, $carousel ){
		
		$( $carousel.data("real-node") ).find("[data-fancybox]").removeAttr("data-fancybox");
		
		
		$carousel.find(".step-carousel-cloned [data-fancybox]").removeAttr("data-fancybox").click(function( event ){
			event.preventDefault();
			$( $(this).closest(".step-carousel-cloned").data("item") ).find("[data-fancybox]").click();
		});
	} )
	;
	
	
	//Datepicker
	$(document).ready(function(){
		
		if( $.fn.datepicker )
		{
			
			var create = context.createDatepicker = function( $node )
			{
				var target = utils.toString($node.data("target"));
				var format = utils.toString($node.data("target-format"));
				
				$node.datepicker();
				
				if( target!=="" && format!=="" )
				{
					var $target = $( "#" + target );
					
					var value = utils.toString( $target.val() );
					
					if( value!=="" )
					{
						$node.datepicker("setDate", moment( value, format )._d );
					}
					
					$node.on("change", function( event ){
						
						var value = $(this).datepicker("getDate");
						
						
						$target.val( value===null ? "" : moment( value ).format( format ) );
					} );
				}
				
				return $node;
			};
			
			$("[data-role='datepicker']").each(function(){
				create( $(this) );	
			});
		}
		
	});

})( this.jQuery, this, (function(){
	
	//UTILS
	
	var utils = {};
	
	
	utils.isNumber = function( value )
	{
		return (typeof value)==="number";
	};
	
	utils.isNumeric = function( value )
	{
		return !isNaN(value);
	}
	
	utils.isFunction = function( value )
	{
		return (typeof value)==="function";
	};
	
	utils.isString = function( value )
	{
		return (typeof value)==="string";
	};
	
	utils.toString = function( value )
	{
		return value===undefined ? '' : String(value);
	};
	
	utils.toBool = function( value )
	{
		if( value && utils.toString(value).toUpperCase()!=="FALSE" )
		{
			return true;
		}
		return false;
	};
		
	utils.ifUndefined = function( value, other )
	{
		return value===undefined ? other : value;
	};
	
	utils.toInt = utils.toInteger = function( value )
	{
		return parseInt( isNaN(value) ? 0 : value );
	}; 	
		
	utils.toFloat = utils.toNumber = utils.toDecimal = function( value )
	{
		return parseFloat( isNaN(value) ? 0 : value );
	};
	
	utils.ifEmptyString = function( value, other )
	{
		var aux = utils.toString( value );
		
		return aux==="" ? utils.toString( other ) : aux;
	};
	
	
	return utils;
	
})() );