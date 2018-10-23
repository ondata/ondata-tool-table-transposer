$(function() {

    // Input and output textareas selection with jQuery
    var $input = $("#input"),
        $output = $("#output");

    /* Input parsing, from string (tab separated values) to an array of arrays
     * Function parameters:
     * - text to be parsed (as a string)
     * - field separator (ie. TAB for tab separated values)
     * - line separator (ie. new line char)
     * Returns an array of arrays
    */
   function parse(text,field_separator,line_separator) {

        // Parameters normalization and default values
        var text = text || "",
            field_separator = field_separator || "\t",
            line_separator = line_separator || "\n";

        // Computes and returns an array of arrays using underscore library
        return _.map(text.split(line_separator), function(line) {
            return line.split(field_separator);
        });

    }

    /* Input transposing function, from an arrays of arrays to another one
     * Function parameters:
     * - an array of arrays
     * Returns an array of arrays
    */
   function transpose(input) {

        // Parameters normalization and default values
        var input = input || [],
            output = [];

        // Output computation using underscore library
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

        // Returns an array of arrays
        return output;

    }

    /* Output formatting, from an array of arrays to a string (tab separated values)
     * Function parameters:
     * - data to be formatted (an array of arrays)
     * - field separator (ie. TAB for tab separated values)
     * - line separator (ie. new line char)
     * Returns a string
    */
   function format(data,field_separator,line_separator) {
        
        // Parameters normalization and default values
        var data = data || "",
            field_separator = field_separator || "\t",
            line_separator = line_separator || "\n";

        // Computes a string using underscore library
        return _.map(data, function(line) {
            return line.join(field_separator);
        }).join(line_separator);

    }

    // Trigger transformation pipeline on input textarea change
    $input.change(function() {
        $output.val(
            format(
                transpose(
                    parse($(this).val())
                )
            )
        );
    });

});
