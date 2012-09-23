if (Meteor.isClient) {
  Template.hello.greeting = function () {
    Meteor.call('foo',1,2);
    return "Welcome to authbug.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.methods({
      foo: function(a,b) {
	console.log("FOO\n");
	return 'test';
    }
  });
}