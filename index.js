BASE_URL="https://gogoanime.cm"

help_text = function(terminal) {
    terminal.echo(`Usage:
ani-cli [-v] [-q <quality>] [-a <episode>] [-d | -p <download_dir>] [<query>]
ani-cli [-v] [-q <quality>] -c
ani-cli -h | -D | -U | -V
Options:
-c continue watching anime from history
-a specify episode to watch
-h show helptext
-d download episode
-q set video quality (best|worst|360|480|720|1080)
-D delete history
Episode selection:
Add 'h' on beginning for episodes like '6.5' -> 'h6'
Multiple episodes can be chosen given a range
  Choose episode [1-13]: 1 6
  This would choose episodes 1 2 3 4 5 6
  To select the last episode use -1
When selecting non-interactively, the first result will be
selected, if anime is passed
    `)
}

seach_anime = function(terminal, searchTerm, ) {

}


$(function() {
    var term = $('#term').terminal({
        hello: function(name) {
            this.echo('Hello ' + name + '!');
        },
        "ani-cli": function(...args) {
          
          var options = $.terminal.parse_options(args, { boolean: ['h']})
          if (options.h) {
              help_text(this);
              return;
          }

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