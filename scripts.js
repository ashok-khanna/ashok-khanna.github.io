var ws

function connect() {
  ws = new WebSocket("ws://localhost:12345/bongo");

  ws.onopen = function(e) {
    $('#terminal').terminal().echo("[[;green;;]Hunchensocket: You are online.]");
  }

  ws.onclose = function(e) {
    $('#terminal').terminal().echo("[[;red;;]Hunchensocket: You are offline.]");
  }

  ws.onmessage = function(e) {

    if(e.data.length > 4) {

      switch (e.data.substring(0,4)) {
        case "[ai]":
          document.getElementById("screen-a").innerHTML = e.data.substring(4) + "<br />";
          break;
        case "[bi]":
          document.getElementById("screen-b").innerHTML = e.data.substring(4) + "<br />";
          break;
        case "[ci]":
          document.getElementById("screen-c").innerHTML = e.data.substring(4) + "<br />";
          break;
        case "[di]":
          document.getElementById("screen-d").innerHTML = e.data.substring(4) + "<br />";
          break;
        case "[aa]":
          document.getElementById("screen-a").innerHTML += e.data.substring(4) + "<br />";
          break;
        case "[ba]":
          document.getElementById("screen-b").innerHTML += e.data.substring(4) + "<br />";
          break;
        case "[ca]":
          document.getElementById("screen-c").innerHTML += e.data.substring(4) + "<br />";
          break;
        case "[da]":
          document.getElementById("screen-d").innerHTML += e.data.substring(4) + "<br />";
          // console.log(e.data.substring(4));
          break;
        default:
          $('#terminal').terminal().echo(e.data);          
      }

    } else {
      if (e.data.length = 4) {
        switch (e.data.substring(0,4)) {
          case "[ai]":
            document.getElementById("screen-a").innerHTML = "";
            break;
          case "[bi]":
            document.getElementById("screen-b").innerHTML = "";
            break;
          case "[ci]":
            document.getElementById("screen-c").innerHTML = "";
            break;
          case "[di]":
            document.getElementById("screen-d").innerHTML = "";
            break;
        }

      } else {
        $('#terminal').terminal().echo(e.data);  
      }
    }
  }
}

connect();

/* Overall keycommands */
// Keycodes from: https://keycode.info/

/* Terminal Commands */

function test(){
  document.getElementById("output").innerHtml = "Hello, World! This is a test."
}

$('#terminal').terminal({
  echo: function(arg1) {
    this.echo(arg1);
    this.echo(arg1);
  },
  reconnect: function(){
    connect();
  },

  /* function_table API */

  "create-fn": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::create-fn \"" + arg1 + "\" \"" + arg2 + "\" \"" + arg3 + "\")");
  },
  "get-fn": function(arg1, arg2 = "-e") {
    ws.send("(psql::get-fn " + arg1 + " \"" + arg2 + "\")");
  },
  "update-fn": function(arg1, arg2, arg3, arg4 = "-e") {
    ws.send("(psql::update-fn-text " + arg1 + " \"" + arg2 + "\" \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "update-fn-name": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::update-fn-name " + arg1 + " \"" + arg2 + "\" \"" + arg3 + "\")");
  },
  "update-fn-desc": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::update-fn-desc " + arg1 + " \"" + arg2 + "\" \"" + arg3 + "\")");
  },


  /* input_table API */

  "create-input": function(arg1, arg2, arg3, arg4 = "-e") {
    ws.send("(psql::create-input " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "get-input": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::get-input " + arg1 + " " + arg2 + " \"" + arg3 + "\")");
  },
  "get-inputs": function(arg1, arg2 = "-a") {
    ws.send("(psql::get-inputs " + arg1 + " \"" + arg2 + "\")");
  },
  "update-input": function(arg1, arg2, arg3, arg4 = "-e") {
    ws.send("(psql::update-input " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "delete-input": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::delete-input " + arg1 + " " + arg2 + " \"" + arg3 + "\")");
  },
  "delete-inputs": function(arg1, arg2 = "-e") {
    ws.send("(psql::delete-inputs " + arg1 + " \"" + arg2 + "\")");
  },


  /* output_table API */

  "create-output": function(arg1, arg2, arg3, arg4 = "-e") {
    ws.send("(psql::create-output " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "get-output": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::get-output " + arg1 + " " + arg2 + " \"" + arg3 + "\")");
  },
  "get-outputs": function(arg1, arg2 = "-a") {
    ws.send("(psql::get-outputs " + arg1 + " \"" + arg2 + "\" \"" + arg3 + "\")");
  },
  "update-output": function(arg1, arg2, arg3, arg4 = "-e") {
    ws.send("(psql::update-output " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "delete-output": function(arg1, arg2, arg3 = "-e") {
    ws.send("(psql::delete-output " + arg1 + " " + arg2 + " \"" + arg3 + "\")");
  },
  "delete-outputs": function(arg1, arg2 = "-e") {
    ws.send("(psql::delete-outputs " + arg1 + " \"" + arg2 + "\")");
  },


  /* step_table API */

  "create-step": function(arg1, arg2, arg3, arg4, arg5, arg6 = "-e") {
    ws.send("(psql::create-step " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\" \"" + arg5 + "\" \"" + arg6 + "\")");
  },
  "get-steps": function(arg1, arg2 = "-c") {
    ws.send("psql::get-steps " + arg1 + " \"" + arg2 + "\")");
  },
  "update-step": function(arg1, arg2, arg3, arg4, arg5, arg6 = "-e") {
    ws.send("(psql::update-step " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\" \"" + arg5 + "\" \"" + arg6 + "\")");
  },
  "update-step-step": function(arg1, arg2, arg3, arg4 = "-e"){
    ws.send("(psql::update-step-step " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "update-step-expected-output": function(arg1, arg2, arg3, arg4 = "-e"){
    ws.send("(psql::update-step-expected-output " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "update-step-condition": function(arg1, arg2, arg3, arg4 = "-e"){
    ws.send("(psql::update-step-condition " + arg1 + " " + arg2 + " \"" + arg3 + "\" \"" + arg4 + "\")");
  },
  "delete-step": function(arg1, arg2, arg3 = "-e"){
    ws.send("psql::delete-step " + arg1 + " " + arg2 + " \"" + arg3 + "\")");
  },
  "delete-steps": function(arg1, arg2 = "-e") {
    ws.send("psql::delete-steps " + arg1 + " \"" + arg2 + "\")");
  },


  /* name_table API */

  "create-name": function(arg1, arg2, arg3 = "-e"){
    ws.send("(psql::create-name \"" + arg1 + "\" " + arg2 + " \"" + arg3 + "\")");
  },
  "get-name": function(arg1, arg2 = "-e"){
    ws.send("(psql::get-name \"" + arg1 + "\" \"" + arg2 + "\")");
  },
  "get-fid": function(arg1, arg2 = "-e"){
    ws.send("(psql::get-fid " + arg1 + " \"" + arg2 + "\")");
  },
  "get-assoc-names": function(arg1, arg2 = "-d"){
    ws.send("(psql::get-assoc-names \"" + arg1 + "\" \"" + arg2 + "\")");
  },
  "update-name": function(arg1, arg2, arg3, arg4 = "-e"){
    ws.send("(psql::update-name \"" + arg1 + "\" \"" + arg2 + "\" " + arg3 + " \"" + arg4 + "\")");
  },
  "update-name-name": function(arg1, arg2, arg3 = "-e"){
    ws.send("(psql::update-name-name \"" + arg1 + "\" \"" + arg2 + "\" \"" + arg3 + "\")");
  },
  "update-name-fn": function(arg1, arg2, arg3 = "-e"){
    ws.send("(psql::update-name-fn \"" + arg1 + "\" " + arg2 + " \"" + arg3 + "\")");
  },
  "delete-name": function(arg1, arg2 = "-e") {
    ws.send("psql::delete-name \"" + arg1 + "\" \"" + arg2 + "\")");
  },
  "delete-name-fn": function(arg1, arg2 = "-e") {
    ws.send("psql::delete-name-fn " + arg1 + " \"" + arg2 + "\")");
  },


  /* Extra functions Part 1 */

  "psql": function(arg1, arg2 = "-e") {
    ws.send("(html::psql-text \"" + arg1 + "\" \"" + arg2 + "\")");
  },
  "get-names": function(arg1, arg2 ="-d"){
    ws.send("(html::get-names-psql " + arg1 + " \"" + arg2 + "\")");
  }

}, {
  prompt: 'math-dev$ ',
  greetings: false,
  height: 200,
  keymap: {
    'CTRL+E': function(e, original) {
     this.insert('∈');
   },
   'CTRL+F': function(){
    connect();
  },
  'CTRL+C': function(){
    this.clear();
  }
}
});