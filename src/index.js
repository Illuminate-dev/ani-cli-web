var term = $('#term').terminal({
    hello: function(name) {
        this.echo('Hello ' + name + '!');
    }
},{
    prompt: '> ',
    completion: true,
});