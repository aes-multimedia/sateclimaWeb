(function( $ ){
	
	"use strict";
	
	$.fn.reset = function()
	{
		return this.each( function(){
			
			var $this = $(this);
			
			if( $this.is("select") )
			{
				var $options = $this.find("option");
				
				if( $options.length )
				{
					$this.val( $options.first().attr("value") );
				}
				
				$this.change();
			}
			else if( $this.is(":radio") || $this.is(":checkbox") )
			{
				$this.prop("checked", false).change();
			}
			else if( $this.is("input") || $this.is("textarea") )
			{
				$this.val("").change();
			}
			else
			{
				$this.find("input, textarea, select").reset();
			}
			
		} );
	};
	
})( this.jQuery );