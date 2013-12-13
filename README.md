jquery.end-pro
==============

jquery.end(boolean),So that you can pass `boolean` argument to control the following operation.Just write less do more.

##usage


**end(false)**
    
    var _fixture = $( "#qunit-fixture" );
    _fixture.find('#main').find('.menu-top-container').end().find('select').end(false).addClass('endtest3');
    
    // after end(false) , prototype chain  not execute



 **end() == end(true)**

see [jQuery.fn.end](http://api.jquery.com/end/ "end api") api

	


---

The MIT License (MIT)

Copyright (c) 2013 icai