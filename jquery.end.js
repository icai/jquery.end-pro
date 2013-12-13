(function($) {
	var oldEnd = $.fn.end;
	$.fn.end = function() {
		var args = [].slice.call(arguments);
		if(!args.length){
			return oldEnd.call(this);
		}else if(typeof args[0] == 'boolean'){
			if(args[0])
				return oldEnd.call(this);
			 else return this.constructor(null);
		}
	};
})(jQuery);
