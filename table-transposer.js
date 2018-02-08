$(function() {

    var $input = $("#input"),
        $output = $("#output");

    function parse(text,field_separator,line_separator) {

        var text = text || "",
            field_separator = field_separator || "\t",
            line_separator = line_separator || "\n";

        return _.map(text.split(line_separator), function(line) {
            return line.split(field_separator);
        });

    }

    function reverse(input) {

        var input = input || [],
            output = [];

        _.each(input, function(line,ln) {
            _.each(line, function(field,fn) {
                if (fn && field) {
                    output.push([
                        line[0],
                        field
                    ]);
                }
            });
        });

        return output;

    }

    function format(data,field_separator,line_separator) {
        
        var text = text || "",
            field_separator = field_separator || "\t",
            line_separator = line_separator || "\n";

        return _.map(data, function(line) {
            return line.join(field_separator);
        }).join(line_separator);

    }

    $input.change(function() {
        $output.val(format(reverse(parse($(this).val()))));
    });

});
