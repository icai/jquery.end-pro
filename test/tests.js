QUnit.begin = function() {
  console.log("Running Test Suite");
};
 
QUnit.done = function(all) {
  console.info("Suite: %d failures / %d tests", all.failed, all.total);
};
 

QUnit.log = function(test) {
  console[ test.result ? "log" : "error" ](test.message);
};
 

QUnit.testStart = function(test) {
  console.group("Test: " + test.name);
};
 

QUnit.testDone = function(test) {
  console.info("Test: %d failures / %d tests", test.failed, test.total);
  console.groupEnd();
};
 
QUnit.moduleStart = function(module) {
  console.group("Module: " + module.name);
};
 

QUnit.moduleDone = function(module) {
  console.info("Module: %d failures / %d tests", module.failed, module.total);
  console.groupEnd();
};

QUnit.reset = function() {
  console.log("Test done!");
};




var _fixture = $( "#qunit-fixture" );

module( "end()", {
  setup: function() {
    equal(_fixture.find('#main').end().attr('id'),'qunit-fixture', " #qunit-fixture find something end() return element id == 'qunit-fixture' ");
  }, teardown: function() {
    _fixture.find('#main').find('.menu-top-container').end().addClass('endtest');

    ok(_fixture.find('#main').hasClass('endtest')," find two times and then end one times , addClass 'endtest', '#qunit-fixture #main' hasClass 'endtest'");
  }
});

test( "test end() module", function() {
  expect( 2 );
});





module("end(true)");
test("test end(true) module", function() {
  expect(2);
  _fixture.find('#main').find('.menu-top-container').end(true).find('select').end(true).addClass('endtest2');

  ok(_fixture.find('#main').hasClass('endtest2')," after find end(true) several times , addClass 'endtest2', then '#qunit-fixture #main' hasClass 'endtest2'");
  
  _fixture.find('#main').find('.menu-top-container').end().find('select').end().removeClass('endtest2');

  ok(!_fixture.find('#main').hasClass('endtest2')," end(true) is equal to end() ");

});

module("end(false)");
test("test end(true) module", function() {
  expect(1);
  _fixture.find('#main').find('.menu-top-container').end().find('select').end(false).addClass('endtest3');

  ok(!_fixture.find('#main').hasClass('endtest3')," after find end() several times ,end(false).addClass('endtest3'), then '#qunit-fixture #main' not hasClass 'endtest3'");
  
});
