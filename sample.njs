exports.exec = function(IO){
	IO.writeHeader("Content-Type: text/plain; charset=UTF-8");
	IO.echo("Hello world!\n");
	IO.echo(require("util").format(IO.request));
	IO.echo("\n");
	IO.end();
};