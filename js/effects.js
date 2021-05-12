(function( $ ){
	
	$(document)
		.on('onscreen','.effect:not(.effect-delegated), .effect-delegator',function(){
			
			var $this = $(this);
			var target;
			
			if( $this.is(".effect-delegator") )
			{
				var aux = $this.data("effect-target");
				
				if( !aux || aux==="next" )
				{
					target = $this.next();
				}
				else if( aux )
				{
					target = $(aux);
				}
			}
			else
			{
				target = $this;
			}
			
			if( target )
			{
				target.addClass("effect-on");
			}
		})
		.ready( function(){
			
			if( !$.fn.nysm )
			{
				console.warn('NYSM is required for effects');
				return;
			}
			
			$('.effect:not(.effect-delegated), .effect-delegator').nysm();
			
		} )
	;
	
})( this.jQuery );