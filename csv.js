function csvToJSON(csv, separator) {
    var i, quotas = false, json = [], row = {}, cell = '', field = 'A'.charCodeAt(0); 
    separator = separator || ';';

    for (i = 0; i <= csv.length; i++) {
        switch (csv[i]) {
            case '"':
                if (quotas && csv[i + 1] == '"') {
                    cell += '"'; i++;
                }
                else
                    quotas = !quotas;
                break;
            case separator:
                !quotas && separator == csv[i] ? (row[String.fromCharCode(field++)] = cell, cell = '') : (cell += csv[i]);
                break;
            case '\r':
                quotas && (cell += csv[i]) && this.break;
            case undefined:
                if (['\n', '\r'].indexOf(csv[i - 1]) >= 0) continue;
                row[String.fromCharCode(field++)] = cell; cell = '';
                json.push(row);
                row = {}; field = 'A'.charCodeAt(0);  
                break;
            case '\n':
                quotas && (cell += csv[i]);
                break;
            default:
                cell += csv[i];
        }
    }
    return json;
}
