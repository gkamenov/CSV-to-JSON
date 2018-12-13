function csvToJSON(csv, separator) {
    var i, quotes = false, json = [], row = {}, cell = '', field = 'A'.charCodeAt(0); 
    separator = separator || ';';

    for (i = 0; i <= csv.length; i++) {
        switch (csv[i]) {
            case '"':
                if (quotes && csv[i + 1] == '"') {
                    cell += '"'; i++;
                }
                else
                    quotes = !quotes;
                break;
            case separator:
                !quotes ? (row[String.fromCharCode(field++)] = cell, cell = '') : (cell += csv[i]);
                break;
            case '\r':
                quotes && (cell += csv[i]) && this.break;
            case undefined:
                if (['\n', '\r'].indexOf(csv[i - 1]) >= 0) continue;
                row[String.fromCharCode(field++)] = cell; cell = '';
                json.push(row);
                row = {}; field = 'A'.charCodeAt(0);  
                break;
            case '\n':
                quotes && (cell += csv[i]);
                break;
            default:
                cell += csv[i];
        }
    }
    return json;
}
