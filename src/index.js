$(function() {
    var term = $('#term').terminal({
        hello: function(name) {
            this.echo('Hello ' + name + '!');
        },
        "ani-cli": function(...args) {
          
        }
    },
    {
        prompt: '[[;red;]>>> ]',
        completion: true,
        greetings: greetings.innerHTML,
        login: function(user, password) {
            if (user === 'admin' && password === 'password') {
                return Promise.resolve('TOKEN');
            }
            return Promise.reject();
        },
        checkArity: false,
    
    });
});